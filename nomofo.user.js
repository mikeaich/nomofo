// ==UserScript==
// @name    No More Ford
// @include http://www.thestar.com/*
// @include http://www.theglobeandmail.com/*
// @include http://www.nationalpost.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

var url = document.location + '';
var getridof;
if (url.match(/http:\/\/www\.thestar\.com\/.*/)) {
    getridof = function star_getridof(ford) {
        var rofobox = $("div.star-box > div.star-box-heading > h2:contains('" + ford + "')");
        rofobox.parent().parent().remove();
        var headlines = $("p.headline a:contains('" + ford + "')");
        headlines.remove();
        var topics = $("div#featured-topics ul li:contains('" + ford + "')");
        topics.remove();
    };
} else if(url.match(/http:\/\/www\.theglobeandmail\.com\/.*/)) {
    getridof = function gnm_getridof(ford) {
        fordlet = ford.toLowerCase();
        var topic = $("li:contains('" + fordlet + "')");
        topic.remove();
        var articles = $("article:contains('" + ford + "')");
        articles.remove();
    };
} else if(url.match(/http:\/\/www\.nationalpost\.com\/.*/)) {
    getridof = function np_getridof(ford) {
        var trending = $("p.npTrending a:contains('" + ford + "')");
        trending.remove();
        var medium = $("ul.npHeadlines li:contains('" + ford + "')");
        medium.remove();
        var therest = $("div > h2 > a:contains('" + ford + "')");
        therest.parent().parent().remove();
    };
}

if (getridof) {
    getridof("Rob Ford");
    getridof("Doug Ford");
    getridof("Ford Nation");
}
