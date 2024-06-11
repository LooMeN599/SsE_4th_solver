var selectedNumberA = null;
var selectedNumberB = null;
var selectedNumberC = null;
var selectedShapeD = null;
var selectedNumbersE = [];
var selectedNumbersF = [];

function toggleSelection(type, value) {
    switch (type) {
        case 'A':
            selectedNumberA = value;
            break;
        case 'B':
            selectedNumberB = value;
            break;
        case 'C':
            selectedNumberC = value;
            break;
        case 'D':
            selectedShapeD = value;
            break;
    }
    updateSelection();
}

function updateSelection() {
    var allButtonsA = document.querySelectorAll('.num-set-button-A');
    allButtonsA.forEach(function(button) {
        var number = parseInt(button.innerText);
        button.classList.toggle('selected', number === selectedNumberA);
    });
    
    var allButtonsB = document.querySelectorAll('.num-set-button-B');
    allButtonsB.forEach(function(button) {
        var number = parseInt(button.innerText);
        button.classList.toggle('selected', number === selectedNumberB);
    });
    
    var allButtonsC = document.querySelectorAll('.num-set-button-C');
    allButtonsC.forEach(function(button) {
        var number = parseInt(button.innerText);
        button.classList.toggle('selected', number === selectedNumberC);
    });
    
    var allButtonsD = document.querySelectorAll('.num-set-button-D');
    allButtonsD.forEach(function(button) {
        var shape = button.innerText;
        button.classList.toggle('selected', shape === selectedShapeD);
    });

    if (selectedShapeD !== null) {
        let resultDText = '';
        switch (selectedShapeD) {
            case '球体':
                resultDText = "球体：0+0";
                break;
            case '立方体':
                resultDText = "立方体：4+4";
                break;
            case '三角錐':
                resultDText = "三角錐：3+3";
                break;
            case '円柱':
                resultDText = "円柱：0+4";
                break;
            case '円錐':
                resultDText = "円錐：0+3";
                break;
            case '三角柱':
                resultDText = "三角柱：3+4";
                break;
        }
        document.getElementById("resultD").innerText = resultDText;
    }
    
    var hasAtLeastOneSelection = selectedNumberA !== null || selectedNumberB !== null || selectedNumberC !== null;
    
    if (hasAtLeastOneSelection) {
        checkDuplicates();
    }
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
    
    var hasAtLeastOneSelection = selectedNumberA !== null || selectedNumberB !== null || selectedNumberC !== null;

    if (hasAtLeastOneSelection) {
        var uniqueNumbers = [...new Set(allSelectedNumbers)];
        resultElement.innerHTML = uniqueNumbers.length < allSelectedNumbers.length ?
            "<span class='duplicate'>重複あり</span>" :
            "<span class='noduplicate'>重複なし</span>";
    } else {
        resultElement.innerHTML = "";
    }
}

function toggleSelectionE(number) {
    var index = selectedNumbersE.indexOf(number);
    if (index === -1) {
        selectedNumbersE.push(number);
    } else {
        selectedNumbersE.splice(index, 1);
    }
    updateSelectionE();
    checkDuplicatesE();
}

function toggleSelectionF(number) {
    var index = selectedNumbersF.indexOf(number);
    if (index === -1) {
        selectedNumbersF.push(number);
    } else {
        selectedNumbersF.splice(index, 1);
    }
    updateSelectionF();
    checkDuplicatesF();
}

function updateSelectionE() {
    updateSelectionHelper('.num-set-button-E', selectedNumbersE);
}

function updateSelectionF() {
    updateSelectionHelper('.num-set-button-F', selectedNumbersF);
}

function updateSelectionHelper(selector, selectedNumbers) {
    var allButtons = document.querySelectorAll(selector);
    allButtons.forEach(function(button) {
        var number = parseInt(button.innerText);
        button.classList.toggle('selected', selectedNumbers.includes(number));
    });
}

function checkDuplicatesE() {
    checkDuplicatesHelper(selectedNumbersE, 'resultE');
}

function checkDuplicatesF() {
    checkDuplicatesHelper(selectedNumbersF, 'resultF');
}

function checkDuplicatesHelper(selectedNumbers, resultElementId) {
    var resultElement = document.getElementById(resultElementId);
    var uniqueNumbers = [...new Set(selectedNumbers)];
    resultElement.innerHTML = uniqueNumbers.length < selectedNumbers.length ?
        "<span class='duplicate'>重複あり</span>" :
        "<span class='noduplicate'>重複なし</span>";
}

function calculateEquation() {
    var resultElementE = document.getElementById('resultE');
    var resultElementF = document.getElementById('resultF');

    var e = selectedNumbersE[0] + "+" + selectedNumbersE[1];
    var f = selectedNumbersF[0] + "+" + selectedNumbersF[1];

    resultElementE.innerText = "表E1: " + e;
    resultElementF.innerText = "表F1: " + f;
}

function clearSelection() {
    selectedNumberA = null;
    selectedNumberB = null;
    selectedNumberC = null;
    selectedShapeD = null;
    selectedNumbersE = [];
    selectedNumbersF = [];
    updateSelection();
    updateSelectionE();
    updateSelectionF();
    document.getElementById('result').innerText = "";
    document.getElementById('resultD').innerText = "";
    document.getElementById('resultE').innerText = "";
    document.getElementById('resultF').innerText = "";
}
