$(document).ready(function(){
  $(".searchbtn").on("click", searchWiki)
  $(".random").on("click", randomWikiPage)
})

function searchWiki(){
  var searchedFor = document.getElementById("wikiSearch").value
  $.getJSON(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchedFor}&origin=*`, displayResults)
}

function displayResults(json){

  for (var i = 0; i < json.query.search.length; i++){
    var title = json.query.search[i].title
    var preview = json.query.search[i].snippet
  $("#display").append(`<p> <a href=https://en.wikipedia.org/wiki/${title}>${title}</a> <p>${preview}... </p></p>`)

  }
  
}
function randomWikiPage(){
  window.open("https://en.wikipedia.org/wiki/Special:Random")
}
