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
    // すでに選択されている場合は選択を解除する
    if (button.classList.contains('selected')) {
        button.classList.remove('selected');
    } else {
        // それ以外の場合は新しい選択を追加し、古い選択を解除する
        document.querySelectorAll('.num-set-button').forEach(function(btn) {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    }
}

// 入力クリアボタンのクリック時の処理
function clearSelection() {
    document.querySelectorAll('.num-set-button').forEach(function(button) {
        button.classList.remove('selected');
    });
}
