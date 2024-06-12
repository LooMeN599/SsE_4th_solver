document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.num-set-button').forEach(function(button) {
        button.addEventListener('click', function() {
            toggleSelection(button);
            updateCorrespondingSlot(button);
            updateFilteredResults();
        });
    });
});

// ボタンの選択状態を切り替える関数
function toggleSelection(button) {
    const slot = button.closest('.slot');
    // ボタンが属するスロットの全てのボタンからselectedクラスを削除
    slot.querySelectorAll('.num-set-button').forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('selected');
        }
    });

    // 選択されたボタンにselectedクラスを追加
    button.classList.toggle('selected');
}

// 対応するスロットの表記を更新する関数
function updateCorrespondingSlot(button) {
    const slotClass = button.classList[1];
    let resultText = '';
    switch (button.innerText) {
        case '球体':
            resultText = '(0a, 0b)';
            break;
        case '立方体':
            resultText = '(4a, 4b)';
            break;
        case '三角錐':
            resultText = '(3a, 3b)';
            break;
        case '円柱':
            resultText = '(0a, 4a)';
            break;
        case '円錐':
            resultText = '(0a, 3a)';
            break;
        case '三角柱':
            resultText = '(3a, 4a)';
            break;
    }

    if (slotClass.includes('num-set-button-D')) {
        document.getElementById('result-D2').innerText = resultText;
    } else if (slotClass.includes('num-set-button-E')) {
        document.getElementById('result-E2').innerText = resultText;
    } else if (slotClass.includes('num-set-button-F')) {
        document.getElementById('result-F2').innerText = resultText;
    }
}

// 裏スロットの値を取得する関数
function getSelectedValue(slotClass) {
    const selectedButton = document.querySelector(`.num-set-button-${slotClass}.selected`);
    return selectedButton ? selectedButton.innerText : null;
}

// 表スロットの対応を取得する関数
function getCorrespondingText(buttonText) {
    switch (buttonText) {
        case '球体': return '(0a, 0b)';
        case '立方体': return '(4a, 4b)';
        case '三角錐': return '(3a, 3b)';
        case '円柱': return '(0a, 4a)';
        case '円錐': return '(0a, 3a)';
        case '三角柱': return '(3a, 4a)';
        default: return '';
    }
}

// フィルタリングされた結果を更新する関数
function updateFilteredResults() {
    updateResultForSlot('A', 'result-D2', 'num-set-button-D');
    updateResultForSlot('B', 'result-E2', 'num-set-button-E');
    updateResultForSlot('C', 'result-F2', 'num-set-button-F');

    updateNeededAndUnneededNumbers('result-D2', 'result-D3');
    updateNeededAndUnneededNumbers('result-E2', 'result-E3');
    updateNeededAndUnneededNumbers('result-F2', 'result-F3');
}

// 指定されたスロットの結果を更新する関数
function updateResultForSlot(slotClass, resultId, buttonClass) {
    const resultElement = document.getElementById(resultId);
    const values = {
        '▲': '3a',
        '■': '4a',
        '●': '0a'
    };

    const selectedValue = getSelectedValue(slotClass);
    const filteredValues = Object.values(values).filter(value => value !== values[selectedValue]);

    const correspondingButton = document.querySelector(`.${buttonClass}.selected`);
    const correspondingText = correspondingButton ? getCorrespondingText(correspondingButton.innerText) : '';

    const resultText = selectedValue ? `(${filteredValues[0]}, ${filteredValues[1]})` : '';
    resultElement.innerText = correspondingText ? `${correspondingText}\n${resultText}` : resultText;
}

// 表示されている2組の数字を比較して必要な数字と不要な数字を表示する関数
function updateNeededAndUnneededNumbers(resultId, targetId) {
    const resultElement = document.getElementById(resultId).innerText;
    const targetElement = document.getElementById(targetId);

    const lines = resultElement.split('\n');
    if (lines.length < 2) {
        targetElement.innerText = '';
        return;
    }

    const [firstLine, secondLine] = lines;
    const firstNumbers = firstLine.match(/\d[a-z]/g);
    const secondNumbers = secondLine.match(/\d[a-z]/g);

    const neededNumbers = secondNumbers.filter(num => !firstNumbers.includes(num));
    const unneededNumbers = firstNumbers.filter(num => !secondNumbers.includes(num));

    let resultText = '';
    if (neededNumbers.length > 0 || unneededNumbers.length > 0) {
        resultText += `${unneededNumbers.join('と')}が不要、${neededNumbers.join('と')}が必要`;
    }

    // 数字を記号に変換
    resultText = convertText(resultText);

    targetElement.innerText = resultText;
}

// 数字を記号に変換する関数
function convertText(text) {
    if (!text) return ''; // 空の場合は空文字を返す
    return text.replace(/0a|0b/g, '●')
               .replace(/3a|3b/g, '▲')
               .replace(/4a|4b/g, '■');
}

// 入力をクリアする関数
function clearSelection() {
    document.querySelectorAll('.selected').forEach(function(button) {
        button.classList.remove('selected');
    });
    document.getElementById('result-D2').innerText = '';
    document.getElementById('result-E2').innerText = '';
    document.getElementById('result-F2').innerText = '';
    document.getElementById('result-D3').innerText = '';
    document.getElementById('result-E3').innerText = '';
    document.getElementById('result-F3').innerText = '';
    document.getElementById('result-PostAnatomy').innerText = ''; //
}
