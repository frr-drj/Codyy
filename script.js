document.getElementById("convertBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const outputText = convertText(inputText);
  document.getElementById("outputText").textContent = outputText;
});

function convertText(text) {
  let convertedText = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const randomCharCode = Math.floor(Math.random() * 26) + 97; // Random lowercase letter
    convertedText += String.fromCharCode(randomCharCode);
  }

  return convertedText;
}
