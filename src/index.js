console.log("Script loaded!");

function generatePoem(event) {
  event.preventDefault();

  let thePoemContent = document.querySelector("#thePoem");

  console.log("Form submitted");

  thePoemContent.innerHTML = "";

  new Typewriter(thePoemContent, {
    strings: ["Title", "a very short poem"],
    autoStart: true,
    delay: 15,
  });
}

let poemFormElement = document.querySelector("#poemForm");
console.log(poemFormElement); // make sure it's not null
poemFormElement.addEventListener("submit", generatePoem);
