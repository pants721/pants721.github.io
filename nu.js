const nuP = document.getElementById("contentNu");
var fullBlob = "the goals of the many have nothing in common with the goals of the few. we have seen people, not money, not class, we see more. a new day is coming, a beautiful day. the people have not but will. the power that be seeks to take. free is a lie repeated to us from a young age. ideas come to us from a god. we hope they will try to guide us right. find them; lose your disposition and you will find a divinity of humanity hard to come by. these gods let our fellow humans be held in chains. how may we trust them? find yourself questioning the establishment, overwhelm the upset of truth that has overcome u. you are what their establishment fears; nu thought."
var nuWords = ["many", "have", "nothing", "few", "have", "more", "day", "is", "coming", "the", "people", "will", "be", "free", "ideas", "will", "lose", "these", "chains", "trust", "yourself", "overwhelm", "their", "establishment", "nu", "thought"];
var nuWordsIndecies = [4, 5, 6, 14, 16, 25, 34, 35, 39, 43, 47, 76, 91, 100, 104, 107, 111, 123, 124, 126, 127];

function tokenize(str) {
    return str.split(' ')
    .map(item => item)
};

var tokens = tokenize(fullBlob);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];
    var randAnimNum = getRandomInt(4);
    if (nuWordsIndecies.includes(i)) {
        tokens[i] = `<span id="nuWord">${tokens[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")}</span>`;
    } else {
        tokens[i] = `<span id="blockedWord" style="animation: whiteToBlackAnim ${randAnimNum}s">${tokens[i]}</span>`;
    }
};

fullBlob = tokens.join(' ');

nuP.innerHTML = fullBlob;