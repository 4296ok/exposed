var i = 0;
var j = 0;
var k = 0;
var txt = 'Exposed is the online platform where students from the Bachelor Textile & Fashion  at the Royal Academy of Art The Hague get to present their work. Each year a new generation is added to this digital family tree that together grows its very own legacy by reflecting a kaleidoscope of distinctive and personal signs of our times.';
var footer = '© 2022 Privacy Policy';
let album = document.querySelector(".album");
let captions = [
    '<a href="lois.html">Loïs Brandsen</a>',
    '<a href="celine.html">Céline Bregman</a>',
    '<a href="adriane.html">Adriane Duarte Costa</a>',
    '<a href="signe.html">Signe Munch Grønlund</a>',
    '<a href="hyewon.html">Hyewon Jeong</a>',
    '<a href="inez.html">Inez Carmen van Kessel</a>',
    '<a href="stijn.html">Stijn Koks</a>',
    '<a href="marcos.html">Marcos Kueh</a>',
    '<a href="johanna.html">Johanna Madritsch</a>',
    '<a href="phlox.html">Phlox van Oppen</a>',
    '<a href="sohyun.html">Sohyun Park</a>',
    '<a href="soyoung.html">Soyoung Park</a>',
    '<a href="stella.html">Stella Stylianou</a>',
    ]

years = [2023, 2022, 2021, 2020, 2019, 2018];

function typeWriter() {
    setInterval(showBodyText(txt), 5);
  }


function addYears(years) {
    return function() {
        if (j < years.length) {
            var displayYear = document.createElement('a');
            displayYear.setAttribute('href', years[j] + '.html');
            displayYear.textContent = years[j]; 
            document.getElementById("demo").appendChild(displayYear);
            displayYear.classList.add("yearLink");
            j++;
        } else {
            setInterval(showFooter(footer), 50);
        } 
    }
   
}


function showBodyText(txt) {
    return function() {
        if (i < txt.length) {
            document.getElementById("body_text").innerHTML += txt[i];
            i++;
        }
        else {
            setInterval(addYears(years), 250);
        }
    }
}

function showFooter(footer) {
    return function() {
        if (k < footer.length) {
            document.getElementById("the_rest").innerHTML += footer[k];
            k++;
        }

    }
}



for(let i = 1; i < 14; i++) {
    let fn = "gifs/" + i + ".gif";

    let container = document.createElement("div");
    container.classList.add("container");


    let photo = document.createElement("img");
    let caption = document.createElement("p");

    caption.classList.add("caption");

    photo.src = fn;

    let caption_text = captions[i-1];
    if(caption_text) {
        caption.innerHTML = caption_text;
    }

    container.appendChild(photo);
    container.appendChild(caption);
    album.appendChild(container);
    container.classList.add("grid-item");
}

window.onload = function(){

    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
    
    // element argument can be a selector string
    //   for an individual element
    var msnry = new Masonry( '.grid', {
      // options
    });
}
