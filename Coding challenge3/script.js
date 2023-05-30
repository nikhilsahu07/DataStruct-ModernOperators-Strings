// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

const button = document.getElementById('submitbtn');
const text = document.getElementById('mytextarea');

let enteredText = '';
let countClick = 0;
button.addEventListener('click', function () {
    countClick++;
    enteredText = text.value;
    const arrText = enteredText.trim().toLowerCase().split('_');

    if (arrText.length > 1) {
        const [firstWord, secondWord] = arrText;
        const capitalizeSecondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
        const variableName = firstWord + capitalizeSecondWord;
        console.log('Here is your best variable alternative: ', variableName.padEnd(25, ' ') + '✅'.repeat(countClick));
    } else {
        console.log('Here is your best variable alternative: ', arrText[0]);
    }
});
