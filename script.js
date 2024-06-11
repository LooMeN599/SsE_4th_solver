// 選択されたボタンの状態を保持する変数
var selectedButtons = {
    'A': null,
    'B': null,
    'C': null,
    'D': null,
    'E': null,
    'F': null
};

// ボタンのクリック時の処理
document.querySelectorAll('.num-set-button-A').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection('A', button);
    });
});

document.querySelectorAll('.num-set-button-B').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection('B', button);
    });
});

document.querySelectorAll('.num-set-button-C').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection('C', button);
    });
});

document.querySelectorAll('.num-set-button-D').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection('D', button);
    });
});

document.querySelectorAll('.num-set-button-E').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection('E', button);
    });
});

document.querySelectorAll('.num-set-button-F').forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection('F', button);
    });
});

// 選択されたボタンをハイライトする処理
function highlightSelectedButtons() {
    Object.keys(selectedButtons).forEach(function(slot) {
        var selectedButton = selectedButtons[slot];
        if (selectedButton !== null) {
            var allButtons = document.querySelectorAll('.num-set-button-' + slot);
            allButtons.forEach(function(button) {
                button.classList.remove('selected');
            });
            selectedButton.classList.add('selected');
        }
    });
}

// 入力クリアボタンのクリック時の処理
function clearSelection() {
    Object.keys(selectedButtons).forEach(function(slot) {
        clearSelectedButton(slot);
    });
    // 選択状況をクリアしたので、ハイライトもクリア
    highlightSelectedButtons();
}
