document.addEventListener("DOMContentLoaded", function() {
    // ボタンのクリック時の処理を追加
    document.querySelectorAll('.num-set-button').forEach(function(button) {
        button.addEventListener('click', function() {
            toggleSelection(button);
        });
    });
});

// ボタンの選択状態を切り替える関数
function toggleSelection(button) {
    button.classList.toggle('selected');
}

// 入力クリアボタンのクリック時の処理
function clearSelection() {
    document.querySelectorAll('.num-set-button').forEach(function(button) {
        button.classList.remove('selected');
    });
}
