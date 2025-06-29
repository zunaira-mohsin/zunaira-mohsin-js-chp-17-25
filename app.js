//CHAPTER NO 17-20;
//QUESTION NO 01;
let multiarr=[[]];
//QUESTION NO 02;
let matrix =[
    [0, 1,2,3]
    [1,0,1,2]
    [2,1,0,1]
]
//QUESTION NO 03;
document.writeln("<h3>Numeric counting</h3>")
for(let i=1;i<11;i++) {
    document.writeln(i+"<br>")
}
//QUESTION NO 04;
let tablenumber =+prompt("Enter a number to show its  multiplication table")
let lengthnumber =+prompt("Enter length of multiplication table")
document.writeln("<h3>Multiplication table of " + tablenumber +" length "+lengthnumber+"</h3>")
for(let i=0;i<lengthnumber;i++){
    document.writeln(tablenumber+"x"+i+"="+(tablenumber*i)+"<br>")
}
//QUESTION NO 05;
let fruit =["Apple","banana","mango","orange","strawberry"]
document.writeln("<h3>Fruit Name</h3>")
    document.writeln("Element at index 0 is apple"+"<br>")
  document.writeln("Element at index 1 is banana"+"<br>")
      document.writeln("Element at index 2 is mango"+"<br>")
    document.writeln("Element at index 3 is orange"+"<br>")
   document.writeln("Element at index 4 is strawberry"+"<br><br>")
for (let i=0;i<fruit.length;i++){
    document.writeln(fruit[i]+"<br>")
}
 //QUESTION NO 06;
 //part=a;
 document.writeln("<h3>Counting </h3>")
    for(let i=1;i<16;i++){
 document.writeln(i+",")
    }
 //part=b;
    document.writeln("<h3>Reverse counting </h3>")
    for(let i=10;i>=1;i--){
        document.writeln(i+",")
    }
 //part=c;
 document.writeln("<h3>Even number</h3>")
 for(let i=0;i<=20;i+=2){
    document.writeln(i+",")
 }
 //part=d;
 document.writeln("<h3>Odd number</h3>")
 for(let i=1;i<=19;i+=2){
    document.writeln(i+",")
 }
//part=e;
 document.writeln("<h3>Series</h3>")
 for(let i=2;i<=20;i+=2){
    document.writeln(i+"K"+",")
 }
//   //QUESTION NO 07;
 let  arr = ["cake", "apple pie", "cookie", "chips", "patties"]
 let bakery =prompt("Welcome! to  Sweet Crumbs bakery what do you want to order")
if (bakery==="cookie"){
alert("Cookie is available at index 2 in our bakery")
}
if(bakery=== "apple-pie"){
alert("Apple pie is available at index 1 in our bakery")
}
if(bakery==="chips"){
    alert("Chips is available at index 3 in our bakery")
}
if(bakery==="patties"){
    alert("patties is available at index 4 in our bakery")
}
else{
    alert("we are sorry " +bakery+  " is not a available in our bakery")
}
 //QUESTION NO 08;
 let Number1= [24,53,78,91,12]
 document.writeln("<h4>Number :"+Number1+"</h4>")
 let largest = Math.max(...Number1);
 document.writeln("<h4>The largest Number is : "+largest+"<br></h4>")
  //QUESTION NO 09;
  let Number2= [24,53,78,91,12]
 document.writeln("<h4>Number :"+Number2+"</h4>")
 let largesT = Math.min(...Number2);
 document.writeln("<h4>The Smallest Number is : "+largesT+"</h4>")
 //QUESTION NO 10;
 document.writeln("<h3>Multiples of 5 ranging 1 to 100</h3>")
 for(let i=5;i<=100;i++){
     if (i % 5 === 0) {
    document.writeln(i+",")
 }
}
//CHAPTER NO 21-25;
 //QUESTION NO 01;
 let firstName =prompt("Enter your first Name")
  let lastName =prompt("Enter your second Name")
let fullName=firstName+lastName;
alert("Hello "+fullName+ " Welcome!")
 //QUESTION NO 02;
 let favoritephone =prompt("Enter your favorite mobile phone")
let length=favoritephone.length
document.writeln("<h4>My Favorite phone is : "+favoritephone+"<br>"+"Length of string : "+length+"</h3>")
 //QUESTION NO 03;
 let Name ="Pakistani"
 let word=Name.indexOf("n");
 document.writeln("<h4>String : "+Name+"<br>"+"Index of "+ "n :"  + (word)+"</h4>")
 //QUESTION NO 04;
 let hello ="Hello world"
 let word1=hello.lastIndexOf("l")
 document.writeln("<h4>String : "+hello+"<br>"+"Index of "+ "l :"  + (word1)+"</h4>")
  //QUESTION NO 05;
let Name2 ="Pakistani"
 let word2=Name.charAt("3");
 document.writeln("<h4>String : "+Name2+"<br>"+"Character at index  "+ "3 :"  + (word2)+"</h4>")
  //QUESTION NO 06;
 let firstName1 =prompt("Enter your first Name")
  let lastName2 =prompt("Enter your second Name")
let fullName1=firstName1.concat()+lastName2
alert("Hello "+fullName1+ " Welcome!")
//QUESTION NO 07;
let city ="Hyderabad Islamabad"
let word4 =city.replace("Hyderabad","Islamabad")
document.writeln("<h4>City : "+city+"</h4>")
document.writeln("<h4>After replacement : "+word4+"</h4>")
//QUESTION NO 08;
let massage ="Ali and Sami are best friends. They play cricket and football together."
let word5=massage.replaceAll("&,and")
document.writeln("<h3>Massage : </h3>")
document.writeln((word5)+"<br>")
//QUESTION NO 09;
let str ="472"
let Num= Number (str)
document.writeln("<h4>Value :" +str+"<br>"+"Type: " +"String"+"<br>Value :" +Num+"<br>"+ "Type: " +"Number"+"<br>"+"</h4>")
//QUESTION NO 10;
let userinput =prompt("Enter your peanuts")
let upper=userinput.toUpperCase();
alert(upper);
//QUESTION NO 11;
 let userinput1 =prompt("Eneter your word")
 let  upper1=userinput1.charAt(0).toUpperCase()
 let upper2=userinput1.slice(1).toLowerCase()
 alert(upper1+upper2);
 //QUESTION NO 12;
 let num=35.36;
 let str1 =num.toString().replace(".","")
 document.writeln("<h4>Number : "+num+"<br>"+"Result : "+str1+"</h4>")
  //QUESTION NO 13;
  let username=prompt("Enter your username")
  let isvalid=true;
  for(let i=0;i<username.length;i++){
let charCode=username.charCodeAt(i);
    if(charCode===33 || charCode===44||charCode===46||charCode===64){
isvalid=false;
break;
    }
}
if(!isvalid){
    alert(" Please enter a valid user name");
}else{
    alert("Correct username entered")
}
    //QUESTION NO 14;
    let  Arr = ["cake", "apple pie", "cookie", "chips", "patties"]
  let Bakery =prompt("Welcome! to  Sweet Crumbs bakery what do you want to order")
  let  item=Bakery.toLowerCase();
  let found=false
  if (item==="cookie"){
alert("Cookie is available at index 2 in our bakery")
found=true;
}
if(item=== "apple-pie"){
alert("Apple pie is available at index 1 in our bakery")
found=true;
}
if(item==="chips"){
    alert("Chips is available at index 3 in our bakery")
    found=true;
}
if(item==="patties"){
    alert("patties is available at index 4 in our bakery")
}
else{
    alert("we are sorry " +item+  " is not a available in our bakery")
    found=false
}
      //QUESTION NO 15;
 let password=prompt( "Enter your password:\n\n" +
  "Requirements:\n" +
  "- At least 6 characters long\n" +
  "- Must contain both letters and numbers\n" +
  "- Should NOT start with a number")
if(password.length < 6){
    alert("Password must be at least 6 characters long")
}
else if(password.charCodeAt(0)>= 48 && password.charCodeAt(0)< 57){
    alert("Password should not start with a number")
}
else{
    let hasnumber=false;
      let hasletter=false;

for(let i=0;i<password.length;i++){
let char =password.charCodeAt(i);

if((char>=65&&char<=90)||(char>=97&&char<=122)){
    hasletter=true;
}
else  if(char>=48&&char<=57){
  hasnumber=true;
 }
}
 if(hasletter&&hasnumber){
    alert(" valid password entered!")
 }else{
    alert( "Yes Correct password")
 }
}
//QUESTION NO 16; 
   let university ="University of Karachi"
   let uni=university.split("");
   document.writeln("<h3>Splid Method</h3>")
   for(let i = 0;i<uni.length;i++){
document.writeln(uni[i]+"<br>")
   }
//QUESTION NO 17; 
let input ="pakistan"
let pakistaninput =input.charAt("7");
document.writeln("<h4>"+"User input : "+input+"<br>"+"Last character of input : "+(pakistaninput)+"</h4>")
 //QUESTION NO 18; 
 let sentence = "The quick brown fox jumps over the lazy dog";
let Word =sentence.toLowerCase();
let words =Word.split(" ");
let count=0;
for(let i=0;i<words.length;i++){
    if(words[i]==="the"){
        count++;
    }
}
 document.writeln("<h4>Text : "+sentence+"<br>"+"There are "+count+ " occurrence (s) of word "+"the"+"</h4>")
 //END