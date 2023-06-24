const textarea = document.getElementById('textarea');
const text = document.getElementById('text');
const word = document.getElementById('word');
const end = document.getElementById('end');
const output = document.getElementById('output');
let newText = "";
let newWord = [];
textarea.oninput = function () {
    if (end.textContent === '文字です') {
        searchLetter();
    } else if (end.textContent === '語です') {
        searchWord();
    } else {
        searchText();
    }
}

text.onchange = function () {
    if (word.checked) {
        word.checked = false;
    }
    if (text.checked) {
        end.textContent = '文です';
        searchText();
    } else {
        end.textContent = '文字です';
        searchLetter();
    }
}

word.onchange = function () {
    if (text.checked) {
        text.checked = false;
    }
    if (word.checked) {
        end.textContent = '語です';
        searchWord();
    } else {
        end.textContent = '文字です';
        searchLetter();
    }
}

function searchLetter() {
    newText = textarea.value.replace(/\s/g, '');
    output.textContent = newText.length;
}

function searchWord() {
    if (textarea.value === '') {
        output.textContent = 0;
    } else {
        newWord = textarea.value.split(' ');
        if (textarea.value[textarea.value.length - 1] === ' ') {
            output.textContent = newWord.length - 1;
        } else {
            output.textContent = newWord.length;
        }
    }
}

function searchText() {
    if (textarea.value === '') {
        output.textContent = 0;
    } else {
        newWord = textarea.value.split(/[.|。|!|?|…|！|？]/);
        var a = textarea.value[textarea.value.length - 1];
        if (a === '.' || a === '。' || a === '!' || a === '?' || a === '…' || a === '！' || a === '？') {
            output.textContent = newWord.length - 1;
        } else {
            output.textContent = newWord.length;
        }
    }
}
