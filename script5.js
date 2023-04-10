const video = document.createElement('video');

// Use remote file
video.src = 'Students/inez/video.mp4';

video.controls = false;
video.autoplay = true;
video.loop = true;
video.muted = true;
video.classList.add("vid");


const header = document.querySelector("#header");

// Include in HTML as child of #box
header.appendChild(video).innerHTML;

const h1 = document.createElement("h1");
const textNode = document.createTextNode("The Objectification of the Physique by Inez Carmen van Kessel, fashion graduate");
h1.appendChild(textNode);

const text = document.querySelector("#text");
text.appendChild(h1).innerHTML;

// const p = document.createElement("p");
// const textBio = document.createTextNode("In a world where we are confronted with lots of stimuli, identities, revelations and unrealistic dreamworlds, it is easy to lose track of ourselves, our roots and our identity.");
// p.appendChild(textBio);
// text.appendChild(p).innerHTML;


// Load Studio Images

for(let i = 1; i < 7; i++) {
  let fn = "Students/inez/studio_" + i + ".jpg";

  let photo = document.createElement("img");

  photo.src = fn;

  const sketches = document.querySelector("#studio");
  sketches.appendChild(photo).innerHTML;
  photo.classList.add("studio-image" + i);


  
}

// Load Runway Images

for(let i = 1; i < 20; i++) {
let fn = "Students/inez/runway_" + i + ".jpg";

let photo = document.createElement("img");

photo.src = fn;

const runway = document.querySelector("#sketches");
runway.appendChild(photo).innerHTML;

photo.classList.add("runway-image" + i);

}

for( let i = 1; i < 17; i++) {
// Get the modal
let modal_1 = document.getElementById("myModal_1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img_1 = document.querySelector(".runway-image" + i);
img_1.addEventListener("mouseover", function() {
img_1.style.opacity = 0.5;
});

img_1.addEventListener("mouseout", function() {
img_1.style.opacity = 1;
});

// console.log(img);
var modalImg_1 = document.getElementById("img02");
img_1.onclick = function(){
modal_1.style.display = "block";
modalImg_1.src = this.src;


}


modalImg_1.onclick = function() {
modal_1.style.display = "none";
} }


for( let i = 1; i < 7; i++) {
// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelector(".studio-image" + i);
img.addEventListener("mouseover", function() {
  img.style.opacity = 0.5;
});

img.addEventListener("mouseout", function() {
  img.style.opacity = 1;
});

// console.log(img);
  var modalImg = document.getElementById("img01");
  img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  

}


// When the user clicks on <span> (x), close the modal
modalImg.onclick = function() {
  modal.style.display = "none";
} }

