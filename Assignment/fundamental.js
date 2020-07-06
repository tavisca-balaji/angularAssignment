var statement;
statement = "this is the first assignment of the TypeScrpt. the scope of"
    + " assignment is to create multi statement string and doing some string "
    + " operations on it";
statement = statement.toLowerCase();
var arrString = statement.split('.');
statement = "";
console.log("Statement case of paragraph is:");
for (var _i = 0, arrString_1 = arrString; _i < arrString_1.length; _i++) {
    var line = arrString_1[_i];
    line = line.trim()[0].toUpperCase() + line.trim().slice(1);
    statement = statement + line + ". ";
}
console.log(statement);
//////////////count words//////////
var countWords = statement.split(' ');
console.log();
console.log("Number of words in above paragraph:" + countWords.length);
////////////words have a////////////
console.log();
console.log("Words having a character");
for (var _a = 0, countWords_1 = countWords; _a < countWords_1.length; _a++) {
    var word = countWords_1[_a];
    if (word.search("a") >= 0)
        console.log(word);
}
////////Count Number using group by//////////
var count = 1;
statement = statement.toLowerCase();
var sortedArray = statement.split(' ').sort();
var str = "";
console.log();
console.log("Word wise count");
for (var i = 0; i < sortedArray.length; i++) {
    if (i != 0 && str.trim().toLowerCase() == sortedArray[i].trim().toLowerCase()) {
        count += 1;
    }
    else if (str != "") {
        console.log("No of " + str + ": " + count);
        count = 1;
    }
    if (i == sortedArray.length - 1) {
        console.log("No of " + sortedArray[i] + ": " + count);
    }
    str = sortedArray[i];
}
