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
    updateSelectionE(); // 追加
}

function toggleSelectionF(shape) {
    selectedShapeF = shape;
    updateSelection();
    updateSelectionF(); // 追加
}

function updateSelection() {
    // 裏Aの更新
    var allButtonsA = document.querySelectorAll('.num-set-button-A');
    allButtonsA.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (number === selectedNumberA) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    // 裏Bの更新
    var allButtonsB = document.querySelectorAll('.num-set-button-B');
    allButtonsB.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (number === selectedNumberB) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    // 裏Cの更新
    var allButtonsC = document.querySelectorAll('.num-set-button-C');
    allButtonsC.forEach(function(button) {
        var number = parseInt(button.innerText);
        if (number === selectedNumberC) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    // 表Dの更新
    var allButtonsD = document.querySelectorAll('.num-set-button-D');
    allButtonsD.forEach(function(button) {
        var shape = button.innerText;
        if (shape === selectedShapeD) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    // 表Eの更新
    var allButtonsE = document.querySelectorAll('.num-set-button-E');
    allButtonsE.forEach(function(button) {
        var shape = button.innerText;
        if (shape === selectedShapeE) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    // 表Fの更新
    var allButtonsF = document.querySelectorAll('.num-set-button-F');
    allButtonsF.forEach(function(button) {
        var shape = button.innerText;
        if (shape === selectedShapeF) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function updateSelectionE() {
    // 表Eの更新ロジックを追加
}

function updateSelectionF() {
    // 表Fの更新ロジックを追加
}

function checkDuplicates() {
    // 重複チェックロジックを追加
}

function clearSelection() {
    // クリアロジックを追加
}
