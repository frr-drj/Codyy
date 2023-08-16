document.getElementById("convertBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const readableOption = document.getElementById("readableOption").checked;
  const outputText = convertText(inputText, readableOption);
  document.getElementById("outputText").textContent = outputText;
});

function convertText(text, readable) {
  let convertedText = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const randomCharCode = Math.floor(Math.random() * 26) + 97; // Random lowercase letter
    convertedText += String.fromCharCode(randomCharCode);
  }

  if (readable) {
    return convertedText.split("").join(" "); // Add spaces between characters
  }

  return convertedText;
}
document.getElementById("convertBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const readableOption = document.getElementById("readableOption").checked;
  const outputText = convertText(inputText, readableOption);
  document.getElementById("outputText").textContent = outputText;
});

function convertText(text, readable) {
  let convertedText = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const randomCharCode = Math.floor(Math.random() * 26) + 97; // Random lowercase letter
    convertedText += String.fromCharCode(randomCharCode);
  }

  if (readable) {
    return convertedText.split("").join(" "); // Add spaces between characters
  }

  return convertedText;
}
