function longestCommonPrefix(strs) {
  let ans = "";
  const firstWord = strs[0];
  let isCommon = true;

  for (let j = 0; j < firstWord.length; j++) {
    //ไล่ทีละ index เพื่อใช้เปรียบเทียบกับทุก Word
    for (let i = 1; i < strs.length; i++) {
      //ไล่ไปแต่ละ Word
      const otherWord = strs[i];
      if (firstWord[j] !== otherWord[j]) {
        isCommon = false;
      }
    }

    if (isCommon) {
      ans += firstWord[j];
    }
  }
  return ans;
}

const strs1 = ["flower", "flow", "flight"];
console.log(`Input1:${strs1}`);
console.log("Output1:", longestCommonPrefix(strs1));

const strs2 = ["dog", "racecar", "car"];
console.log(`Input2:${strs2}`);
console.log("Output2:", longestCommonPrefix(strs2));
