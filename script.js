"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const a = prompt('Один из последних просмотернных фильмов?', ''),
   c = prompt('На сколько оцените его?', ''),
   b = prompt('Один из последних просмотернных фильмов?', ''),
   d = prompt('На сколько оцените его?', '');



const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {},
   genres: [],
   privat: false
};

personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;

console.log(personalMovieDB);