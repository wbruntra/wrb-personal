import os
import re
import json

import webapp2
import jinja2

from google.appengine.api import mail

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir),autoescape=False)


def quoted(s):
    l = re.findall('\'([^\']*)\'', str(s))
    if l:
        return l[0]
    return None

jinja_env.filters['quoted'] = quoted

def render_str(template, **params):
    t = jinja_env.get_template(template)
    return t.render(params)

class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a,**kw)

    def render(self, template, **kw):
        self.response.out.write(render_str(template,**kw))


class MainHandler(Handler):
    def get(self):
        self.render('main.html',title="Main")

class AboutHandler(Handler):
    def get(self):
        self.render('about.html',title="About")

class ContactHandler(Handler):
    def get(self):
        self.render('contact.html',title="Contact")
    def post(self):

        content = "Message: "+self.request.get('content').encode('utf-8')

        message = mail.EmailMessage(sender="William <bill.bruntrager@gmail.com>",
                            subject="Contact from my page")
        message.to = "Bill <bill.bruntrager@gmail.com>"
        message.body = """
        Hey there! You got a message from your website.
        Sender name: {name}
        Sender e-mail: {email}
        Sender telephone: {telephone}
        """.format(name=self.request.get('name'),
                  email=self.request.get('email'),
                  telephone=self.request.get('phone'))
        message.body = message.body + content
        message.send()
        self.render('thanks.html')

class AjaxHandler(Handler):
    def post(self):
        titles = { '/':'Main',
                  '/about':'About',
                  '/contact':'Contact'
        }
        desired_page = self.request.get('page')
        page_title = titles[desired_page]
        if desired_page == '/':
            template = 'main-ajax.html'
        else:
            template = desired_page[1:]+'-ajax.html'
        page_content = render_str(template)
        msg = {}
        msg['title'] = page_title
        msg['content'] = page_content
        msg = json.dumps(msg)
        self.response.headers['Content-Type'] = 'application/json; charset=UTF-8'
        self.response.out.write(msg)

app = webapp2.WSGIApplication([
    ('/form', ContactHandler)
], debug=True)
