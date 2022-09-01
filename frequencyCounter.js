const validAnagram = (first, second) => {
  if (first.length !== second.length) return false;

  const map = {};

  for (let char of first) {
    map[char] ? ++map[char] : (map[char] = 1);
  }

  console.log(map);

  for (let char of second) {
    if (!map[char]) return false;
    else --map[char];
  }

  return true;
};

console.log(validAnagram("abba", "bbaa")); // true
console.log(validAnagram("abstgja", "absjgja")); // false
console.log(validAnagram("abstgja", "absjgjak")); // false, not same length

// frequency works by keeping tally of items (big o n), and then decrementing through the tally (big o n)
const va = (f, s) => {
  if (f.length !== s.length) return false;

  const m = {};

  for (let c of f) m[c] ? ++m[c] : (m[c] = 1);

  for (let c of s) {
    if (!m[c]) {
      return false;
    } else --m[c];
  }

  return true;
};

console.log(va("aabb", "bbaa"));
console.log(va("aabb", "bbak"));
console.log(va("aabb", "bbaaf"));
