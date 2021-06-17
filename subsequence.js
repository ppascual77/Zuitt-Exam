/*
aefcnbtdi, ajblqcpdz -> abd, acd
Algorithm
1. Common subsequence -> iterate through string 1 (per character) compare against str2.
2. If matching, get index of matched in str2 and splice str2 -> yields common substring
3. Do 1 and 2 bi-directional. 
4. Filter result: remove duplicates and return the longest string length in the results array.
*/

// Get common subsequence
function commonSubs(str1, str2) {
  arr1 = [...str1];
  arr2 = [...str2];
  const res = [];

  arr1.map((c) => {
    for (i = 0; i < arr2.length; i++) {
      if (c === arr2[i]) {
        res.push(c);
        m = arr2.indexOf(c) + 1;
        arr2.splice(0, m) && arr2
        break;
      }
    }
  });
  return res.join("");
}

// Get common subsequence bi-directional
function longestSubs(str1, str2) {
  const candidate = [];
  var longestSubsequence = [];

  // Case sensitivity handling and ignore spaces
  str1 = str1.toUpperCase().replace(/\s/g, '');
  str2 = str2.toUpperCase().replace(/\s/g, '');

  commonSub1 = commonSubs(str1, str2);
  commonSub2 = commonSubs(str2, str1);

  candidate.push(commonSub1, commonSub2);

  // if lengths are equal, remove possible duplicate
  if(commonSub1.length === commonSub2.length) {
    return longestSubsequence = [...new Set(candidate)]
  }

  // if lengths are not equal, get the longest array
  // Typecast to Array for result consistency
  longestSubsequence = Array(candidate.sort((a, b) =>
     b.length - a.length
  )[0]);

  // Typecast to Array for result consistency
  return longestSubsequence;
}

// Test cases
console.log("LCS:", longestSubs("aefcnbtdi", "ajblqcpdz"));
console.log("LCS:", longestSubs("aa", "aaaa"));
console.log("LCS:", longestSubs("str", "strrRRR"));
console.log("LCS:", longestSubs("ABAZDC", "BACBAD"));
console.log("LCS:", longestSubs("abcaba", "ABBA"));
console.log("LCS:", longestSubs("AGGTAB", "GXT XAYB"));


