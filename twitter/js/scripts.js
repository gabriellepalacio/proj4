// my custom scripts

var html = ""
var apiurl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=uncbasketball&tagmode=any&format=json&jsoncallback=?"
// my doc ready starts here
$( document ).ready(function($){
  $.fn.tweetLinkify = function(options) {
    $(this).each(function() {
      var tweet = TweetLinkify($(this).text(), options)
      $(this).html(tweet);
    })
  }
// for flickr
  $.getJSON(apiurl,function(json){
         // console.log(json);

         $.each(json.items,function(i,data){
             // html += '<p>From:"'+ data.author_id+'"</p>';
             html += '<div class="flickr-img"><a href="' + data.link + '" target="_newtab"><img src ="'
             + data.media.m + '" class="flickr-img"></a></div>'
             });
         $("#flikpics").append(html);
     });
