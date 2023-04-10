var i = 0;
var j = 0;
var txt = 'Exposed is the online platform where students from the Bachelor Textile & Fashion  at the Royal Academy of Art The Hague get to present their work. Each year a new generation is added to this digital family tree that together grows its very own legacy by reflecting a kaleidoscope of distinctive and personal signs of our times.';
var rest = 'kabk.nl'
var speed = 15;

years = [2023, 2022, 2021, 2020, 2019, 2018];

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("body_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } if (i >= txt.length && j < years.length){
    addYear(years[j]);
    j++;
    setTimeout(typeWriter, speed + 250);

  } if( j >= years.length) {
    document.getElementById("the_rest").innerHTML += rest.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function addYear(year) {
    var displayYear = document.createElement('a');
    displayYear.setAttribute('href', year + '.html');
    displayYear.textContent = year; 
    document.getElementById("demo").appendChild(displayYear);
}




