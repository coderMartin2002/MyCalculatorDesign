let startBtn = document.getElementById("start-btn");
let addOperator = document.getElementById("add");
let subtractOperator = document.getElementById("subtract");
let multiplyOperator = document.getElementById("multiply");
let divideOperator = document.getElementById("divide");
let xtraButton = document.getElementById("xtra");
let mainScreen = document.getElementById("main-screen");
let panelWrapper = document.getElementById("panel-wrapper");
let inputsSection = document.getElementById("inputs-wrapper");
let operatorsWrapper = document.getElementById("operators-wrapper");
let operationOutcome;
let clearButton = document.getElementById("clear-btn");
let visitorInfo = prompt("What's your name?... :)");
let welcomeMsg = alert("# Welcome " + visitorInfo + ". Click an operator in order to display fields :)\n# Fixed main bugs/issues!\n# Simpler interface\n# Added more detail!\n# Even further improvements in aesthetics!\n# Version 1.4");
let topHeader = document.getElementById("top-header");
let calcSettingsBtn = document.getElementById("calc-settings-btn");

if (visitorInfo.value == "") {
  visitorInfo = "Visitor"; 
} else {
  console.log("something went wrong");
}

startBtn.onclick = function() {
  startBtn.style.display = "none";
  panelWrapper.style.display = "block";

  const backBtn = document.createElement("button");
  backBtn.innerHTML = "Home";
  backBtn.setAttribute("class", "back-btn");
  panelWrapper.appendChild(backBtn);

  backBtn.onclick = function() {
    backBtn.style.display = "none"
    panelWrapper.style.display = "none";
    startBtn.style.display = "block";
  }
}
addOperator.addEventListener("click", function() {
  topHeader.innerText = "Your Inputs";
  addOperator.style.display = "none";
  subtractOperator.style.display = "none";
  multiplyOperator.style.display = "none";
  divideOperator.style.display = "none";

  const addInput1 = document.createElement("input");
  addInput1.setAttribute("class", "value-input");
  addInput1.setAttribute("placeholder", "+");
  inputsSection.appendChild(addInput1);
  const addInput2 = document.createElement("input");
  addInput2.setAttribute("class", "value-input");
  addInput2.setAttribute("placeholder", "+");
  inputsSection.appendChild(addInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator");
  operationOutcome.innerHTML = "=";
  operationOutcome.onclick = function() {
    topHeader.innerText = "[Basic Calculator]"
    clearButton.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    multiplyOperator.style.display = "block";
    divideOperator.style.display = "block";

    const resultPanel = document.createElement("div");
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(addInput1.value) + parseInt(addInput2.value);
    resultPanel.innerHTML = "[ " + addInput1.value + " + " + addInput2.value + " = " + result + " ]";
    addInput1.remove();
    addInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

subtractOperator.addEventListener("click", function() {
  topHeader.innerText = "Your Inputs";
  subtractOperator.style.display = "none";
  addOperator.style.display = "none";
  multiplyOperator.style.display = "none";
  divideOperator.style.display = "none";

  const subtractInput1 = document.createElement("input");
  subtractInput1.setAttribute("class", "value-input");
  subtractInput1.setAttribute("placeholder", "-");
  inputsSection.appendChild(subtractInput1);
  const subtractInput2 = document.createElement("input");
  subtractInput2.setAttribute("class", "value-input");
  subtractInput2.setAttribute("placeholder", "-");
  inputsSection.appendChild(subtractInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator")
  operationOutcome.innerHTML = "=";
  operationOutcome.onclick = function() {
    topHeader.innerText = "[Basic Calculator]"
    clearButton.style.display = "block";
    subtractOperator.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    multiplyOperator.style.display = "block";
    divideOperator.style.display = "block";

    const resultPanel = document.createElement("div");
    resultPanel.innerHTML = "Your Result:";
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(subtractInput1.value) - parseInt(subtractInput2.value);
    resultPanel.innerHTML = "[ " + subtractInput1.value + " - " + subtractInput2.value + " = " + result + " ]";
    subtractInput1.remove();
    subtractInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

multiplyOperator.addEventListener("click", function() {
  topHeader.innerText = "Your Inputs";
  multiplyOperator.style.display = "none";
  addOperator.style.display = "none";
  subtractOperator.style.display = "none";
  divideOperator.style.display = "none";

  const multiplyInput1 = document.createElement("input");
  multiplyInput1.setAttribute("class", "value-input");
  multiplyInput1.setAttribute("placeholder", "x");
  inputsSection.appendChild(multiplyInput1);
  const multiplyInput2 = document.createElement("input");
  multiplyInput2.setAttribute("class", "value-input");
  multiplyInput2.setAttribute("placeholder", "x");
  inputsSection.appendChild(multiplyInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator")
  operationOutcome.innerHTML = "=";
  operationOutcome.onclick = function() {
    topHeader.innerText = "[Basic Calculator]"
    clearButton.style.display = "block";
    multiplyOperator.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    divideOperator.style.display = "block";

    const resultPanel = document.createElement("div");
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(multiplyInput1.value) * parseInt(multiplyInput2.value);
    resultPanel.innerHTML = "[ " + multiplyInput1.value + " x " + multiplyInput2.value + " = " + result + " ]";
    multiplyInput1.remove();
    multiplyInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

divideOperator.addEventListener("click", function() {
  topHeader.innerText = "Your Inputs";
  divideOperator.style.display = "none";
  addOperator.style.display = "none";
  subtractOperator.style.display = "none";
  multiplyOperator.style.display = "none";
  
  const divideInput1 = document.createElement("input");
  divideInput1.setAttribute("class", "value-input");
  divideInput1.setAttribute("placeholder", "/")
  inputsSection.appendChild(divideInput1);
  const divideInput2 = document.createElement("input");
  divideInput2.setAttribute("class", "value-input");
  divideInput2.setAttribute("placeholder", "/")
  inputsSection.appendChild(divideInput2);
  operationOutcome = document.createElement("button");
  operationOutcome.setAttribute("class", "operator")
  operationOutcome.innerHTML = "=";
  operationOutcome.onclick = function() {
    topHeader.innerText = "[Basic Calculator]";
    clearButton.style.display = "block";
    divideOperator.style.display = "block";
    addOperator.style.display = "block";
    subtractOperator.style.display = "block";
    multiplyOperator.style.display = "block";

    const resultPanel = document.createElement("div");
    resultPanel.setAttribute("class", "result-panel");
    resultPanel.setAttribute("id", "result-element");
    panelWrapper.appendChild(resultPanel);
    const result = parseInt(divideInput1.value) / parseInt(divideInput2.value);
    resultPanel.innerHTML = "[ " + divideInput1.value + " / " + divideInput2.value + " = " + result + " ]";
    divideInput1.remove();
    divideInput2.remove();
    operationOutcome.remove();
  }
  inputsSection.appendChild(operationOutcome);
});

xtraButton.addEventListener("click", function() {
  panelWrapper.style.display = "none";

  const extraContent = document.createElement("div");
  extraContent.setAttribute("class", "extra-content");
  mainScreen.appendChild(extraContent);

  const notePanel = document.createElement("div");
  notePanel.setAttribute("class", "note-panel");
  extraContent.appendChild(notePanel);

  const noteField = document.createElement("textarea");
  noteField.setAttribute("class", "note-field");
  noteField.setAttribute("id", "note-field");
  notePanel.appendChild(noteField);

  const addNote = document.createElement("button");
  addNote.innerHTML = "[POST]";
  addNote.setAttribute("class", "note-btn");
  addNote.setAttribute("title", "add a note");
  notePanel.appendChild(addNote);
  
  addNote.onclick = function() {
    const note = document.createElement("p");
    note.setAttribute("class", "note");
    note.setAttribute("id", "note");
    noteOutput.appendChild(note);

    if (note.length > 50) {
      note.value = "<br>";
    }

    if (noteField.value == "") {
      note.innerHTML = "// You didn't write anything!, " + visitorInfo + "...";
    } else {
      note.innerHTML = "// " + noteField.value;
    }
  }

  const deleteNote = document.createElement("button");
  deleteNote.innerHTML = "[DELETE]";
  deleteNote.setAttribute("class", "note-btn");
  deleteNote.setAttribute("title", "delete a note");
  notePanel.appendChild(deleteNote);

  deleteNote.onclick = function() {
      const result = document.getElementById("note");
      result.remove();
  }

  

  const noteOutput = document.createElement("div");
  noteOutput.setAttribute("class", "note-output");
  noteOutput.setAttribute("id", "note-output");
  extraContent.appendChild(noteOutput);

  const returnBtn = document.createElement("button");
  returnBtn.innerHTML = "[Return]";
  returnBtn.setAttribute("class", "note-btn");
  returnBtn.setAttribute("title", "return to calculator");
  extraContent.appendChild(returnBtn);

  returnBtn.onclick = function() {
    extraContent.style.display = "none";
    panelWrapper.style.display = "block";
  }

  const infoBtn = document.createElement("button");
  infoBtn.innerHTML = "[INFO]";
  infoBtn.setAttribute("class", "note-btn");
  notePanel.appendChild(infoBtn);

  infoBtn.onclick = function() {
    alert("# This program serves to make simple notes, to do's or reminders\n# Further updates will take place in due course.\n# Notes won't be saved upon returning!");
  }
})

clearButton.addEventListener("click", function() { // clear function
  const element = document.getElementById("result-element");
  element.remove();
})

// version 1.2:
// Added delete function
// Improved looks and interactivity

// Version 1.3:
// More suitable style modifications were made with further look improvement.
// Note section added!
// Further functions added


// Version 1.4:
// More detail added!
// Interface is simpler
// Even better improvements in aesthetics!