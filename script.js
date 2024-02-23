const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date(); // constructor

const day = date.getDate();

/* the first month of the year starts with zero). */
const month = date.getMonth() + 1; 

const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

