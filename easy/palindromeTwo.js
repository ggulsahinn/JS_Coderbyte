export const palindromeTwo = (str) => {
    var re = /[a-zA-Z]/;
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).match(re)) {
            arr.push(str.charAt(i).toLowerCase());
        }
    }
    var hold = arr.join("");
    arr = arr.reverse().join("");
    if (arr == hold) {
        return true;
    }
    else {
        return false;
    }
}