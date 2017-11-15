$(document).ready(function() {
  getQuote();
  
  $('.new-quote').on('click', function() {        
    getQuote();

  });      

});


function getQuote() {
  var ts = new Date().getTime();
  var data = {_: ts};
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", data, function(a) {
    $(".quote").text('');
    $(".quote").append(a[0].content.replace('<p>','<p> &quot; &nbsp;').replace('</p>', '&nbsp; &quot; </p>').trim() + "<p>&mdash; " + a[0].title.trim() +  "</p>")
    // $('.quote-text').text(a[0].content.substring(3, a[0].content.length-5));
  });
}

