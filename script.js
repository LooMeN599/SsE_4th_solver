document.addEventListener("DOMContentLoaded", function() {
    // ボタンのクリック時の処理を追加
    document.querySelectorAll('.num-set-button').forEach(function(button) {
        button.addEventListener('click', function() {
            toggleSelection(button);
        });
    });
});

// 選択されたボタンの参照を保持する変数
var selectedButton = null;

// ボタンの選択状態を切り替える関数
function toggleSelection(button) {
    // すでに選択されている場合は選択を解除する
    if (selectedButton === button) {
        selectedButton.classList.remove('selected');
        selectedButton = null;
    } else {
        // それ以外の場合は新しい選択を追加し、古い選択を解除する
        if (selectedButton !== null) {
            selectedButton.classList.remove('selected');
        }
        selectedButton = button;
        button.classList.add('selected');
    }
}

// 入力クリアボタンのクリック時の処理
function clearSelection() {
    document.querySelectorAll('.num-set-button').forEach(function(button) {
        button.classList.remove('selected');
    });
}
