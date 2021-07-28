"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function detectPersonalLewel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   }
}
detectPersonalLewel();





function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотернных фильмов?', ''),
         c = prompt('На сколько оцените его?', '');
      if (a != null && c != null && a != '' && c != '' && a.length < 50) {
         personalMovieDB.movies[a] = c;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

rememberMyFilms();



function showMyDB() {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}
showMyDB();


function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      const d = +prompt(`Ваш любимый жанр под номером ${i}`);
      if (d != 0 && d != '' && d != null) {
         personalMovieDB.genres[i - 1] = d;
      }
   }
}
writeYourGenres();

console.log(personalMovieDB);


