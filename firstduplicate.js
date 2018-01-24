/*Example
 For a = [2, 3, 3, 1, 5, 2]; the output should be firstDuplicate(a) = 3. */
function firstDuplicate(a) {
    let newArr = [];
    for (let i in a) {
        if (newArr[a[i]] === 0) {
            return a[i];
        }
        newArr[a[i]] = 0;
    }
    return -1;
}
