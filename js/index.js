var arr = [
  ["Imagination is more important than knowledge.", "Albert Einstein", "Albert_pink.jpg"],
  ["If music be the food of love, play on.", "Shakespeare", "Shakespeare.jpg"],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney", "walt-disney.jpg"],
  ["Obstacles are those frightful things you see when you take your eyes off the goal.", "Henry Ford", "HenryFord.jpg"],
  ["I skate where the puck is going to be, not where it has been.", "Wayne Gretzky", "wayne-gretzky.jpg"],
  ["When you come to a fork in the road, take it.", "Yogi Berra", "yogi_berra2.jpg"],
  ["We may affirm absolutely that nothing great in the world has been accomplished without passion.", "Hegel", "friedrich-hegel-2.jpg"],
  ["The life which is unexamined is not worth living.", "Socrates", "socrates.jpg"],
  ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "M.K. Gandhi", "gandhi.jpg"],
  ["What you get by achieving your goals is not as important as what you become by achieving your goals.", "Zig Ziglar", "ziggler.jpg"]
];

var lastNum = 0;
var words = "";
var author = "";
var backGround = ""; // i.e url(http://www.steamcity.leegannon.com/images/257j.jpg)center  center no-repeat fixed;

function myFunction() {
  var content = "";
  var quote = "quote";
  var person = "person";

  var ranNum = Math.floor(Math.random() * 10);
  if (ranNum === lastNum) { // trying to make it not repeat numbers
    if (ranNum === arr.length) {
      ranNum = 5;
    } else {
      ranNum += 1;
    }

  }

  /* document.getElementById("quote").innerHTML = "<q>" + (arr[ranNum][0])+ "</q>";  //moved these to content so I could fadeIn and fadeOut and send to twitter more neatly
   document.getElementById("person").innerHTML = "-" + (arr[ranNum][1]);*/
  content = "<div id='quote'><q>" + (arr[ranNum][0]) + "</q></div><br><address id ='person'>-" + (arr[ranNum][1]) + "</address>";
  backGround = "url(https://httpsimage.com/img/" + (arr[ranNum][2]) + ")";
  document.getElementById('RQM').style.backgroundImage = backGround; // specify the image path here
  lastNum = ranNum;
  words = arr[ranNum][0];
  author = arr[ranNum][1];
  return content;
}
$('#quoteNew').click(function() {
  $('#RQM').fadeOut('slow', function() {
    $('#RQM').html(myFunction())
    $('#RQM').fadeIn('slow');
  });
});

function tweetIt() {
  var tweetQuote = "https://twitter.com/intent/tweet?text=" + words + "  -" + author + "&hashtags=freecodecamp";
  window.open(tweetQuote, "_blank");

};