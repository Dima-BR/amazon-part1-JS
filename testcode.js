function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}

// Example usage:
// const strs1 = ["flower","flow","flight"];
// console.log(longestCommonPrefix(strs1)); 

const strs2 = ["cardog","carrace","car"];
console.log(longestCommonPrefix(strs2));