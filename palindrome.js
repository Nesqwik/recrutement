/**
 * Created by louis on 18/01/18.
 */


function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        let y = word.length - i - 1;
        if (i >= y) {
            return true;
        }

        if (word[i] !== word[y]) {
            return false;
        }
    }
    return true;
}

function isPalindromeFast(word) {
    return word.split("").reverse().join("") === word;
}

function getPalindromes(words) {
    return words.filter(isPalindrome);
}

module.exports = getPalindromes;