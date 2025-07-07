console.log("Script loaded!");

function generatePoem(event) {
  event.preventDefault();
  console.log("Form submitted");

  let thePoemContent = document.querySelector("#thePoem");
  let promptInput = document.querySelector("#poemPrompt").value;

  thePoemContent.innerHTML = "";

  let apiKey = "0bc42td8e0fe17b0ed58c2f95745oca3";
  let context =
    "You are a poet. Always generate a different poem every time you are prompted.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${promptInput}&context=${context}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      new Typewriter(thePoemContent, {
        strings: data.answer,
        autoStart: true,
        delay: 15,
      });
    })
    .catch((error) => {
      thePoemContent.innerHTML = "Sorry, something went wrong.";
      console.error(error);
    });
}

let poemFormElement = document.querySelector("#poemForm");
console.log(poemFormElement);
poemFormElement.addEventListener("submit", generatePoem);
