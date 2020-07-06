let statement:string;
statement="this is the first assignment of the TypeScrpt. the scope of"
 +" assignment is to create multi statement string and doing some string "
 +" operations on it";
 statement=statement.toLowerCase();

 let arrString=statement.split('.');

 statement="";
 console.log("Statement case of paragraph is:");

 for(let line of arrString)
 {
     line= line.trim()[0].toUpperCase()+line.trim().slice(1);
     statement=statement+line+". ";
 }
 console.log(statement);

//////////////count words//////////
let countWords=statement.split(' ');
console.log();

console.log("Number of words in above paragraph:"+countWords.length);

////////////words have a////////////
console.log();
console.log("Words having a character");
for(let word of countWords)
{
    if(word.search("a")>=0)
        console.log(word);   
}

////////Count Number using group by//////////
let count=1;
statement=statement.toLowerCase()
let sortedArray=statement.split(' ').sort();
let str="";
console.log();
console.log("Word wise count");
for(let i=0;i<sortedArray.length;i++)
{
    if(i!=0 &&  str.trim().toLowerCase()==sortedArray[i].trim().toLowerCase())
    {
        count+=1;
    }
    else if(str!="")
    {
        console.log("No of "+str+": "+count);
        count=1;
    }

    if(i==sortedArray.length-1)
    {
        console.log("No of "+sortedArray[i]+": "+count);
    }
    str=sortedArray[i];
}
