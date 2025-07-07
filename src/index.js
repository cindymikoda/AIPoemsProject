console.log("Script loaded!");

function generatePoem(event) {
  event.preventDefault();
  console.log("Form submitted");

  let poemOutput = document.querySelector("#poem-output");
  let promptInput = document.querySelector("#poem-prompt").value;
  let submitButton = document.querySelector("#poem-submit-btn");

  poemOutput.innerHTML = "";
  submitButton.disabled = true;

  let apiKey = "0bc42td8e0fe17b0ed58c2f95745oca3";
  let context =
    "You are a poet. Always generate a different poem every time you are prompted. Maximum 100 words. Do not use any special characters or emojis. Do not use any numbers. Do not use any words that are not in the dictionary.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${promptInput}&context=${context}&key=${apiKey}`;

  poemOutput.classList.remove("hidden");
  poemOutput.innerHTML = `<div class="blink">Generating poem about ${promptInput}...</div>`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      new Typewriter(poemOutput, {
        strings: data.answer,
        autoStart: true,
        delay: 15,
      });
      submitButton.disabled = false;
    })
    .catch((error) => {
      poemOutput.innerHTML = "Sorry, something went wrong.";
      console.error(error);
      submitButton.disabled = false;
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
console.log(poemFormElement);
poemFormElement.addEventListener("submit", generatePoem);
