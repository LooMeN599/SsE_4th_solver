var selectedNumberA = null;
var selectedNumberB = null;
var selectedNumberC = null;

function toggleSelectionA(number) {
    if (selectedNumberA === number) {
        selectedNumberA = null;
    } else {
        selectedNumberA = number;
    }
    updateSelection();
}

function toggleSelectionB(number) {
    if (selectedNumberB === number) {
        selectedNumberB = null;
    } else {
        selectedNumberB = number;
    }
    updateSelection();
}

function toggleSelectionC(number) {
    if (selectedNumberC === number) {
        selectedNumberC = null;
    } else {
        selectedNumberC = number;
    }
    updateSelection();
}

function updateSelection() {
    var allButtonsA = document.querySelectorAll('.num-set-button-A');
    allButtonsA.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (number === selectedNumberA) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    var allButtonsB = document.querySelectorAll('.num-set-button-B');
    allButtonsB.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (number === selectedNumberB) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    var allButtonsC = document.querySelectorAll('.num-set-button-C');
    allButtonsC.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (number === selectedNumberC) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    checkDuplicates();
}

function checkDuplicates() {
    var resultElement = document.getElementById('result');
    var allSelectedNumbers = [];
    if (selectedNumberA !== null) {
        allSelectedNumbers.push(selectedNumberA);
    }
    if (selectedNumberB !== null) {
        allSelectedNumbers.push(selectedNumberB);
    }
    if (selectedNumberC !== null) {
        allSelectedNumbers.push(selectedNumberC);
    }
    var uniqueNumbers = [...new Set(allSelectedNumbers)];
    if (uniqueNumbers.length < allSelectedNumbers.length) {
        resultElement.innerHTML = "<span class='duplicate'>重複あり</span>";
    } else {
        resultElement.innerHTML = "<span class='noduplicate'>重複なし</span>";
    }
}

var selectedNumbersD = [];
var selectedNumbersE = [];
var selectedNumbersF = [];

function toggleSelectionD(number) {
    var index = selectedNumbersD.indexOf(number);
    if (index === -1) {
        selectedNumbersD.push(number);
    } else {
        selectedNumbersD.splice(index, 1);
    }
    updateSelectionD();
}

function toggleSelectionE(number) {
    var index = selectedNumbersE.indexOf(number);
    if (index === -1) {
        selectedNumbersE.push(number);
    } else {
        selectedNumbersE.splice(index, 1);
    }
    updateSelectionE();
}

function toggleSelectionF(number) {
    var index = selectedNumbersF.indexOf(number);
    if (index === -1) {
        selectedNumbersF.push(number);
    } else {
        selectedNumbersF.splice(index, 1);
    }
    updateSelectionF();
}

function updateSelectionD() {
    var allButtonsD = document.querySelectorAll('.num-set-button-D');
    allButtonsD.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (selectedNumbersD.includes(number)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function updateSelectionE() {
    var allButtonsE = document.querySelectorAll('.num-set-button-E');
    allButtonsE.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (selectedNumbersE.includes(number)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function updateSelectionF() {
    var allButtonsF = document.querySelectorAll('.num-set-button-F');
    allButtonsF.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (selectedNumbersF.includes(number)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function checkDuplicatesD() {
    var resultElement = document.getElementById('resultD');
    var allSelectedNumbers = selectedNumbersD.concat(selectedNumbersE, selectedNumbersF);
    var uniqueNumbers = [...new Set(allSelectedNumbers)];
    if (uniqueNumbers.length < allSelectedNumbers.length) {
        resultElement.innerHTML = "<span class='duplicate'>重複あり</span>";
    } else {
        resultElement.innerHTML = "<span class='noduplicate'>重複なし</span>";
    }
}

function calculateEquation() {
    var resultElementD = document.getElementById('resultD');
    var resultElementE = document.getElementById('resultE');
    var resultElementF = document.getElementById('resultF');

    var d = selectedNumbersD[0] + "+" + selectedNumbersD[1];
    var e = selectedNumbersE[0] + "+" + selectedNumbersE[1];
    var f = selectedNumbersF[0] + "+" + selectedNumbersF[1];

    resultElementD.innerText = "表D1: " + d;
    resultElementE.innerText = "表E1: " + e;
    resultElementF.innerText = "表F1: " + f;
}

function clearSelection() {
    selectedNumbersD = [];
    selectedNumbersE = [];
    selectedNumbersF = [];
    updateSelectionD();
    updateSelectionE();
    updateSelectionF();
    document.getElementById('resultD').innerText = "";
    document.getElementById('resultE').innerText = "";
    document.getElementById('resultF').innerText = "";
}