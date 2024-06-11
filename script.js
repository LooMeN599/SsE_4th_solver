var selectedNumberA = null;
var selectedNumberB = null;
var selectedNumberC = null;
var selectedShapeD = null;

function toggleSelectionA(number) {
    selectedNumberA = number;
    updateSelection();
}

function toggleSelectionB(number) {
    selectedNumberB = number;
    updateSelection();
}

function toggleSelectionC(number) {
    selectedNumberC = number;
    updateSelection();
}

function toggleSelectionD(shape) {
    selectedShapeD = shape;
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
    var allButtonsD = document.querySelectorAll('.num-set-button-D');
    allButtonsD.forEach(function(button) {
        var shape = button.innerText;
        if (shape === selectedShapeD) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
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
    
    // 裏A、裏B、裏Cのいずれかのボタンが選択されているかどうかをチェック
    var hasAtLeastOneSelection = selectedNumberA !== null || selectedNumberB !== null || selectedNumberC !== null;

    // 裏A、裏B、裏Cのいずれかのボタンが選択されている場合のみ、重複チェックを実行
    if (hasAtLeastOneSelection) {
        checkDuplicates(); // 裏A、裏B、裏Cのいずれかのボタンが選択されている場合にのみ重複チェックを実行
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

    // 裏A、裏B、裏Cのいずれかのボタンが選択されているかどうかをチェック
    var hasAtLeastOneSelection = selectedNumberA !== null || selectedNumberB !== null || selectedNumberC !== null;

    // 裏A、裏B、裏Cのいずれかのボタンが選択されている場合のみ、重複チェックを実行
    if (hasAtLeastOneSelection) {
        var uniqueNumbers = [...new Set(allSelectedNumbers)];
        if (uniqueNumbers.length < allSelectedNumbers.length) {
            resultElement.innerHTML = "<span class='duplicate'>重複あり</span>";
        } else {
            resultElement.innerHTML = "<span class='noduplicate'>重複なし</span>";
        }
    } else {
        resultElement.innerHTML = ""; // 裏A、裏B、裏Cのいずれかのボタンが選択されていない場合、結果を空にする
    }
}

var selectedNumbersE = [];
var selectedNumbersF = [];

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


function calculateEquation() {
    var resultElementD = document.getElementById('resultD');
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
