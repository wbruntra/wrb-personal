function stringStartsWith(s,m) {
  return (s.slice(0,m.length) == m);
}

internalRecognizer = 'a[href^="/"]';
$internalLinks = $(internalRecognizer);

$internalLinks.click(function(e){
  e.preventDefault();
  var requestedPage = $(this).attr('href');
  window.history.pushState("object or string", "Title", requestedPage);
  sendMessage(requestedPage);
  $(this).blur();
});

function sendMessage(requestedPage) {
    $.ajax({
        url: '/ajax',
        type: 'POST',
        data: {
            page:requestedPage
        },
        success: replacePage,
        complete: function(){
        }
    });
}

function replacePage(msg) {
  var content = msg['content'];
  var page_title = msg['title'];
  $('a').removeClass('selected');
  $('#'+page_title+' a').addClass('selected');
  var delay = 600;
  $newElement = $(content);
  $newElement.hide();
  $('#wrapper').blindLeftToggle(delay);
  // $('#wrapper').blindRightToggle(delay);
  // $('#wrapper').toggle("blind", { direction: "left"}, delay);
  setTimeout(function() {
  $('#wrapper').replaceWith($newElement);
  // $('#wrapper').toggle();
  $('#wrapper').fadeIn(delay);
  },delay);
}

$(function() {
  var title = $('title').html().split('|')[1].slice(1);
  $('#'+title+' a').addClass('selected');
});

// $("li").click(function (e) {
//   e.preventDefault();
//       $(this).hide("slide", { direction: "left" }, 1000);
// });
