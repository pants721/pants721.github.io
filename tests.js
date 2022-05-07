const ourStr = "HELLO SEVEN TWELVE ROTHMAN HABITAT";
const nuWords = ["SEVEN", "TWELVE"];

function getStr(str) {
    return str.split(' ')
    .map(item => item)
}

var tokens = getStr(ourStr);

for (let i = 0; i < tokens.length; i++) {
    const curr = tokens[i];
    if (nuWords.includes(curr)) {
        console.log(curr);
    }
}

