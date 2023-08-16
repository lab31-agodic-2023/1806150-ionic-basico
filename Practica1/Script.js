document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const printButton = document.getElementById("printButton");
  const clearButton = document.getElementById("clearButton");

  printButton.addEventListener("click", () => {
    const inputValue = textInput.value;
    alert("Valor del campo de texto: " + inputValue);
  });

  clearButton.addEventListener("click", () => {
    textInput.value = "";
  });
});

  