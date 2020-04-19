const text = 'oooiii';
const text2 = 'ooaoiiuoaiuda';

function checkVokal(text) {
  const vokal = 'aiueo';
  for (let i = 0; i < text.length; i++) {
    let flag = false;
    for (let j = 0; j < vokal.length; j++) {
      if (text[i] == vokal[j]) {
        flag = true;
      }
    }
    if (!flag) {
      return false;
    }
  }
  return true;
}

console.log(checkVokal(text));
console.log(checkVokal(text2));
