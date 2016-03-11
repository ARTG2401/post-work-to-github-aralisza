var input = document.getElementById('input').value;

function countWords(str) {
    return str.split(" ").length;
}

document.getElementById('words').value = countWords(input);
