var config = require('./config');
var T = new Twit(config);

/*
//  this is the command
//  to post to twitter
//  and calls functions
//  ☆~~(>w0✿)b
*/

T.post('statuses/update', { status: msg }, function(err, data, response) {
  console.log(data)})


/* 
//  these variables
//  are for twitter
//  to tweet!
//  ☆~~(>w0✿)b
*/

function msg() {
var cntDwn = cntDwn();
  
var msg = 'We have ' + cntDwn() + ' day' + sss + ' left to fix climate change!' + tag;

var tag = ' 12 years goes by faster than you think! #NowNot2030'

var fin = 'Well, dang... '

}

/* 
//  js function which
//  counts down how
//  many days are left!
//  ☆~~(>w0✿)b
*/

function cntDwn() {

    // Get today's
    // date and time!
    // (0u0✿)
    var now = new Date().getTime();
    
    // Get the other
    // date and time!
    // (0u0✿)
    var oct = new Date('October, 8 2030').getTime();
    
    // The distance
    // between the dates!
    // (0u0✿)
    var dif = oct - now;
    
    // converts seconds
    // into days!
    // (0u0✿)
    var dayDif = Math.floor(dif / (1000 * 60 * 60 * 24));
    
    // Outputs the results! (0u0✿)
    return dayDif;}
