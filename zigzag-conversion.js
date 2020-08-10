/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 1st dimentional: row
    // 2nd dimentional: column
    const a = [[]];
    let result = '';
    let currentColumnIndex = 0;
    let currentColumn = a[currentColumnIndex];

    // loop through string s
    // put each letter into a;
    for(const letter of s) {
         // current column should have (<=numRows) number of letters
         // if current column is full, then create a new column
         if (currentColumn.length >= numRows) {
            currentColumnIndex++;
            a.push([]);
            currentColumn = a[currentColumnIndex];
        }

        if (currentColumnIndex % (numRows - 1) === 0) {
            // push letter to the new column
            currentColumn.push(letter);
        } else {
            // this column should have one letter
            const far = currentColumnIndex % (numRows - 1);
            for (let i = 1; i <= (numRows - far - 1); i++) {
                currentColumn.push(null);
            }
            currentColumn.push(letter);
            for (let i = 1; i <= far; i++) {
                currentColumn.push(null);
            }
        }
    }

    for (let i = 0; i < numRows; i++) {
        for (const row of a) {
            if (row[i]) result = result + row[i];
        }
    }

    return result;
};

// console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));