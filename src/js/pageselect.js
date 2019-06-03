// const $ = require('jquery');
import axios from 'axios';
import qs from 'qs';

const createElementFromHTML = htmlString => {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
};

const stringStartsWith = (s, m) => {
  return s.slice(0, m.length) == m;
};

const replacePage = msg => {
  const content = msg['content'];
  const page_title = msg['title'];
  document.querySelectorAll('a').forEach(el => {
    el.classList.remove('selected');
  });

  document.querySelector(`#${page_title} a`).classList.add('selected');

  const delay = 600;
  const $newElement = $(content);
  $newElement.hide();
  $('#wrapper').blindLeftToggle(delay);
  setTimeout(function() {
    $('#wrapper').replaceWith($newElement);
    $('#wrapper').fadeIn(delay);
  }, delay);
};

const getNewPage = page => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      page,
    }),
    url: '/ajax',
  };

  axios(options).then(res => {
    replacePage(res.data);
  });
};

const sendMessage = requestedPage => {
  $.ajax({
    url: '/ajax',
    type: 'POST',
    data: {
      page: requestedPage,
    },
    success: replacePage,
    complete: function() {},
  });
};

document.addEventListener('DOMContentLoaded', function() {
  const title = $('title')
    .html()
    .split('|')[1]
    .slice(1);
    
  document.querySelector(`#${title} a`).classList.add('selected');    
  const $internalLinks = $('a[href^="/"]');

  $internalLinks.click(function(e) {
    e.preventDefault();
    const requestedPage = $(this).attr('href');
    window.history.pushState('object or string', 'Title', requestedPage);
    getNewPage(requestedPage);
    $(this).blur();
  });
});
