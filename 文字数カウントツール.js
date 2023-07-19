const textarea = document.getElementById('textarea');
const text = document.getElementById('text');
const word = document.getElementById('word');
const end = document.getElementById('end');
const output = document.getElementById('output');
let newText = "";
let newWord = [];
const lang = window.navigator.language;
window.onload = () => {
    if (lang !== 'ja') {
        document.getElementById('title').textContent = 'WORD COUNT TOOL';
        textarea.placeholder = 'enter here';
        document.getElementById('start').textContent = 'This article is';
        end.textContent = 'character';
        document.getElementById('textLabel').textContent = 'sentence';
        document.getElementById('wordLabel').textContent = 'word';
        document.getElementById('select').style.top = '80px';
        document.getElementById('site_title').textContent = 'Word count tool';
    }
}
textarea.oninput = function () {
    if (end.textContent === '文字です' || end.textContent === 'character') {
        searchLetter();
    } else if (end.textContent === '語です' || end.textContent === 'word') {
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
        if (lang == 'ja') {
            end.textContent = '文です';
        } else {
            end.textContent = 'sentence';
        }
        searchText();
    } else {
        if (lang == 'ja') {
            end.textContent = '文字です';
        } else {
            end.textContent = 'character';
        }
        searchLetter();
    }
}

word.onchange = function () {
    if (text.checked) {
        text.checked = false;
    }
    if (word.checked) {
        if (lang == 'ja') {
            end.textContent = '語です';
        } else {
            end.textContent = 'word';
        }
        searchWord();
    } else {
        if (lang == 'ja') {
            end.textContent = '文字です';
        } else {
            end.textContent = 'character';
        }
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
