/**
 * Created by louis on 18/01/18.
 */


function isPalindrome(mot) {
    for(let i = 0 ; i < mot.length ; i++) {
        let y = mot.length - i - 1;
        if(i >= y) {
            return true;
        }

        if(mot[i] !== mot[y]) {
            return false;
        }
    }
    return true;
}

function getPalindromes(mots) {
    return mots.filter(isPalindrome);
}

module.exports = getPalindromes;