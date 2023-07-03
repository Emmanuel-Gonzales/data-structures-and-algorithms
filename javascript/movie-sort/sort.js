'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort(compareYear);
  return arr;
}


function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}


function compareTitle(a, b) {
  let movie1 = a.title.split(' ');
  let movie2 = b.title.split(' ');

  const articles = ["A ", "An ", "The "];

  if (articles.includes(movie1[0])) {
    movie1 = movie1.slice(1).join(' ');
  }

  if (articles.includes(movie1[0])) {
    movie2 = movie2.slice(1).join(' ');
  }

  return movie1.localeCompare(movie2);
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
