var selectedNumberA = null;
var selectedNumberB = null;
var selectedNumberC = null;
var selectedShapeD = null;
var selectedShapeE = null;
var selectedShapeF = null;

function toggleSelectionA(number) {
    selectedNumberA = number;
    checkDuplicates(); // 重複チェックを追加
    updateSelection();
    }

function toggleSelectionB(number) {
    selectedNumberB = number;
    checkDuplicates(); // 重複チェックを追加
    updateSelection();
    }

function toggleSelectionC(number) {
    selectedNumberC = number;
    checkDuplicates(); // 重複チェックを追加
    updateSelection();
    }

function toggleSelectionD(shape) {
    selectedShapeD = shape;
    updateSelection();
}

function toggleSelectionE(shape) {
    selectedShapeE = shape;
    updateSelection();
}

function toggleSelectionF(shape) {
    selectedShapeF = shape;
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
    };
    var allButtonsE = document.querySelectorAll('.num-set-button-E');
    allButtonsE.forEach(function(button) {
        var shape = button.innerText;
        if (shape === selectedShapeE) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    if (selectedShapeE !== null) {
        let resultDText = '';
        switch (selectedShapeE) {
            case '球体':
                resultEText = "球体：0+0";
                break;
            case '立方体':
                resultEText = "立方体：4+4";
                break;
            case '三角錐':
                resultEText = "三角錐：3+3";
                break;
            case '円柱':
                resultEText = "円柱：0+4";
                break;
            case '円錐':
                resultEText = "円錐：0+3";
                break;
            case '三角柱':
                resultEText = "三角柱：3+4";
                break;
        }
        document.getElementById("resultE").innerText = resultEText;
    };
    var allButtonsF = document.querySelectorAll('.num-set-button-F');
    allButtonsF.forEach(function(button) {
        var shape = button.innerText;
        if (shape === selectedShapeF) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    if (selectedShapeF !== null) {
        let resultFText = '';
        switch (selectedShapeF) {
            case '球体':
                resultFText = "球体：0+0";
                break;
            case '立方体':
                resultFText = "立方体：4+4";
                break;
            case '三角錐':
                resultFText = "三角錐：3+3";
                break;
            case '円柱':
                resultFText = "円柱：0+4";
                break;
            case '円錐':
                resultFText = "円錐：0+3";
                break;
            case '三角柱':
                resultFText = "三角柱：3+4";
                break;
        }
        document.getElementById("resultF").innerText = resultFText;

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
