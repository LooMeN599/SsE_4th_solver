var selectedNumberA = null;
var selectedNumberB = null;
var selectedNumberC = null;
var selectedShapeD = null;
var selectedShapeE = null;
var selectedShapeF = null;

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

function toggleSelectionE(shape) {
    selectedShapeE = shape;
    updateSelectionE(); // 追加
}

function toggleSelectionF(shape) {
    selectedShapeF = shape;
    updateSelectionF(); // 追加
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
}

function updateSelectionE() {
    // 表Eの更新ロジックを追加
}

function updateSelectionF() {
    // 表Fの更新ロジックを追加
}

function clearSelection() {
    // クリアロジックを追加
}

// ボタンのクリックイベントに対して選択されたボタンをハイライトする処理を追加する
document.querySelectorAll('.num-set-button-A').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelectionA(parseInt(button.innerText));
    });
});

document.querySelectorAll('.num-set-button-B').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelectionB(parseInt(button.innerText));
    });
});

document.querySelectorAll('.num-set-button-C').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelectionC(parseInt(button.innerText));
    });
});

document.querySelectorAll('.num-set-button-D').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelectionD(button.innerText);
    });
});

document.querySelectorAll('.num-set-button-E').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelectionE(button.innerText);
    });
});

document.querySelectorAll('.num-set-button-F').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelectionF(button.innerText);
    });
});
