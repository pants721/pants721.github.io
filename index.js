var contactSlideText;
const contactP = document.getElementById("contactScroll");
const gitLink = '<a href="https://github.com/pants721" target="_blank" class="buttonNoDec">git</a>'
const twtLink = '<a href="https://twitter.com/pants721_" target="_blank" class="buttonNoDec">twt</a>'
const ytLink = '<a href="https://www.youtube.com/channel/UCcRap4ly9D1NJ8Me2jzp8JQ" target="_blank" class="buttonNoDec">yt</a>'
const nuLink = '<a href="nu.html" class="buttonNoDec">abt</a>'
const blogLink = '<a href="blog.html" class="buttonNoDec">blg</a>'
var contactArray = [blogLink, nuLink, gitLink, twtLink, ytLink];
var curr = 0;
contactP.innerHTML = contactArray[curr];

function bscrollLeft() {
    if (curr != 0) {
        curr -= 1;
    }
    contactP.innerHTML = contactArray[curr];
};

function bscrollRight() {
    if (curr != contactArray.length - 1) {
        curr ++;
    }
        contactP.innerHTML = contactArray[curr];
};




