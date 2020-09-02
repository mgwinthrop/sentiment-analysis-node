//Sentiment analysis engine
// npm install sentiment
var Sentiment = require("sentiment")
var sentiment = new Sentiment();
var result = sentiment.analyze("Sentiment analysis is awesome, very excellent.  Is it positive or negative?")
console.log('Sentiment ==========================')
console.log(result)


//Vader analysis engine
//npm install npm install --save vader-sentiment
const vader = require('vader-sentiment');
const input = 'VADER is very smart, handsome, and funny';
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
console.log('Vader ==========================')
console.log(intensity);