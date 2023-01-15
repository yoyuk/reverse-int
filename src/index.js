module.exports = function reverse (n) {
    if (n >= 0) {
        const newArray = String(n).split('');
        const reverseArray = newArray.reverse();
        const reverseString = reverseArray.toString();
        const result = reverseString.replace(/,/g, '');
        const reverseNumber = Number(result);
        return reverseNumber;
       } else {
        const newArray = String(n).split('');
        newArray.splice(0, 1);
        const reverseArray = newArray.reverse();
        const reverseString = reverseArray.toString();
        const result = reverseString.replace(/,/g, '');
        const reverseNumber = Number(result);
        return reverseNumber;
       }
}
