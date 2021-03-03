/* escreva um script que crie uma matriz com 10.000 palavras aleatórias entre 3 e 5 
caracteres e retorne o número de palavras que são palindromes   */

function checkPalindrome(str) {
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}

const word = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

function checkPalindrome(str) {
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}

let array = [];
let amount_palindrome = 0;
for(let i=0; i <= 10000; i++){
    const word = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    array.push(word);
    const isPalindrome = checkPalindrome(word);
    if(isPalindrome){
        amount_palindrome++
    }
    i++;
}


console.log(amount_palindrome)

