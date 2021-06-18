/*
aefcnbtdi, ajblqcpdz -> abd, acd
Algorithm
1. Common subsequence -> iterate through string 1 (per character) compare against str2.
2. If matching, get index of matched in str2 and splice str2 -> yields common substring
3. Splice str1 too to get all common subsequence
3. Do 1 and 2 bi-directional. 
4. Filter result: remove duplicates and return the longest string length in the results array.
*/

// Get common subsequence
function commonSubs(str1, str2) {
  arr1 = [...str1];
  arr2 = [...str2];
  const res = [];
  var candidates = [];

  while (arr1.length !== 0) {
    var subsequence = [];
    const res = []; // Reset result
    arr2 = [...str2]; // Reset arr2

    arr1.map((c) => {
      for (i = 0; i < arr2.length; i++) {
        if (c === arr2[i]) {
          res.push(c);
          m = arr2.indexOf(c) + 1;
          arr2.splice(0, m) && arr2;
          break;
        }
      }
      [subsequence.push(res.join(""))];
    });

    arr1.splice(0, 1) && arr1;
    // Remove Duplicates and results less than 1 in length ( will not be considered as subsequence)
    subsequence = [...new Set(subsequence)].filter((sub) => sub.length !== 1);

    candidates.push(subsequence);
  }

  // Merge all results
  const merged = [];

  candidates.forEach((candidate) => merged.push(...candidate));

  return [...new Set(merged)];
}

// HELPER FUNCTION: GET ALL LONGEST STR
function allLongestStrings(inputArray) {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });
  return [...new Set(longestWords)];
}

// Get common subsequence bi-directional
function longestSubs(str1, str2) {
  const candidate = [];
  var longestSubsequence = [];

  // Case sensitivity handling and ignore spaces
  str1 = str1.toUpperCase().replace(/\s/g, "");
  str2 = str2.toUpperCase().replace(/\s/g, "");

  commonSub1 = allLongestStrings(commonSubs(str1, str2));
  commonSub2 = allLongestStrings(commonSubs(str2, str1));

  candidate.push(...commonSub1, ...commonSub2);

  //Remove duplicates
  longestSubsequence = [...new Set(candidate)];

  //Get the longest
  return allLongestStrings(longestSubsequence);
}

// Test cases
console.log("LCS:", longestSubs("aefcnbtdi", "ajblqcpdz"));
console.log("LCS:", longestSubs("aa", "aaaa"));
console.log("LCS:", longestSubs("str", "strrRRR"));
console.log("LCS:", longestSubs("ABAZDC", "BACBAD"));
console.log("LCS:", longestSubs("abcaba", "ABBA"));
console.log("LCS:", longestSubs("AGGTAB", "GXT XAYB"));
console.log("LCS:", longestSubs("FISH", "FOSH"));
console.log("LCS:", longestSubs("BCDAACD", "ACDBAC"));
console.log("LCS:", longestSubs("ABCDGH", "AEDFHR"));
