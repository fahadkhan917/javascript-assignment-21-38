//chapter 21-25

//q1
/*
var first=prompt("enter the First name");
var last=prompt("enter the last name");
var fullname=first+last;
document.write("full name is "+fullname);
*/


//Q2
/*
var user=prompt("enter the favorite mobile phone model");
var size=user.length;
document.write("Length of string"+size);
*/


//q3
/*
var name="pakistani";
var name1=name.indexOf("n");
document.write("Index of 'n'"+name1);
*/

//Q4
/*
var hello="hello world";
var check=hello.lastIndexOf("l");
document.write("String"+hello+"<br>");
document.write("Last index of 'l':"+check);

//Q5

var word="Pakistani";
var sec=word.charAt(3);
document.write("String:"+word+"<br>");
document.write("Character at index 3:"+sec);


//Q6

var first=prompt("enter the First name");
var last=prompt("enter the last name");
var fullname=first.concat(last);
document.write("full name is "+fullname);



//q7
var city="hyderabad";
var city1=city.replace("hyder","Islam");
document.write(city1);


//Q8

var message = "Ali and Sami are best friends They play cricket and football together";
var rep=message.replace(/and/g,"&");
document.write(message+"<br>");
document.write(rep+"<br>");

//q9

var strnumb="472";
var num=Number("Value"+strnumb);
document.write(strnumb+"<br>");
document.write(num);

//Q10
var user=prompt("enter the name");
document.write("User input"+user+"<br>");
var user=user.toUpperCase();
document.write("Upper case"+user);



//Q11

var user=prompt("enter the input");
var tile=user.slice(0,1);
tile=tile.toUpperCase();
var sec=user.slice(1);
sec=sec.toLowerCase();
var user=tile+user;
document.write(user);

*/
//q12
// var num=35.36;
// var without=num.toString().replace(".","");
// document.write("Number"+num+"<br>");
// document.write("Result"+without);




//Q13
//  var user=prompt("enter the username");
//  if(user.charCodeAt(64)){
// alert("please enter a valid username");
//  }

//Q14
// var user=prompt("enter the search");
// var arr=["cake","apple pie","cookie","chips","patties"];
// var first=arr[2].slice(0,1);
// first=first.toUpperCase();
// document.write(first);
// var sec=arr[2].slice(1);
// sec=sec.toLowerCase();
// document.write(sec);




//  for(var i=0;i<arr.length;i++){
    
//  if(user===arr[i] && user==="cookie" || user===arr[i] && user==="Cookie" || user===arr[i]&& user==="COOKIE" ||user===arr[i]&& user==="coOKIE"){
 
//      document.write("Cookie is avaible at "+arr.indexOf("cookie"));
//  }
//  }

//q

// var user=prompt("enter the search");
// user1=user.toLowerCase();
// var arr=["cake","apple pie","cookie","chips","patties"];
// for(var i=0;i<arr.length;i++){
// if(user1===arr[i]){

// document.write(arr[i]+"is avaible at index"+arr.indexOf('cookie'));

// }
// else{

//     document.write(user1+"Not here");
//     break;

// }


// }

//q15
// var user=prompt("enter the password");
// if(user.charCodeAt(48) < user.charCodeAt(57) && user.charCodeAt(97) < user.charCodeAt(122) ){
// if(user.startsWith(Number)){
// if(user.slice(0,6)){

//     document.write(user);

// }

// }

// }


//q16
/*
var  uni="university of karachi";
uni=uni.split("");
for(var i=0;i<uni.length;i++){

    document.write(uni[i]+"<br>");

}

*/


//Q17
/*
var lett="pakistan";
var let1=lett[lett.length-1];
document.write(let1);
*/


//Q18

//  var str="the the qiuck brown fox jumps over the lazy dog";
//  var count=" ";
//  for(var i=0;i<sl.length;i++){
//        if(sl[i]==="the"){
//   count++;

//   }


//   }
//   document.write(count);




//chapter26-30
//Q1
// var user=parseFloat(prompt("enter the positive interger"));

// document.write("number:"+user+"<br>");
// var rnd=Math.round(user);
// document.write("Round off value"+rnd+"<br>");
// var flor=Math.floor(user);
// document.write("Floor value"+flor+"<br>");
// var ce=Math.ceil(user);
// document.write("ceil value"+ce+"<br>");


//Q2
// var user=parseFloat(prompt("enter the negative floating point"));
// document.write("Number"+user+"<br>");
// var rnd=Math.round(user);
// document.write("round off value:"+rnd+"<br>");
// var fl=Math.floor(user);
// document.write("Floor value:"+fl+"<br>");
// var ce=Math.ceil(user);
// document.write("ceil value:"+ce+"<br>");

//Q3
// var a=-4;
// var check=Math.abs(a);
// document.write("the absolute value of"+a+"is"+check);


//q4
//var check=Math.random();
//document.write(check);

// var big=Math.random();
// var imp=(big*6);
// var n=Math.round(imp);
// document.write(n);

//Q5
// var head=Math.random()*3;
// var tail=Math.random()*2;
// var heto=Math.floor(head);
// var tatoss=Math.floor(tail);

// if(heto===2){

// document.write("head win"+heto);

// }
// else if(tatoss===1){

//     document.write("tail wain"+tatoss)
// }
//Q6

// var num=Math.random()*100;
// var fi=Math.floor(num);
// document.write(fi);

//Q7

// var user=parseFloat(prompt("enter the weight"));
// document.write("The weight of user is"+user+"kilograms");


//Q8
// var user=prompt("enter the number");
// var user1=Math.random(user)*10;
// //var check=Math.floor(user1);
// document.write(user1);
// var num=6;
// if(num===check){

// document.write("match");

// }


//chapter31-34

//Q1
// var a=new Date();
// document.write(a);


//Q2
// var arr=["january","February","March","April","May","june","july","august","sep","oct","nov","dec"];
// var a=new Date();
// var month=a.getMonth();
// var cumoth=arr[month];
// document.write(cumoth);

//Q3

// var a=new Date();
// var b=a.toString();
// var today=b.slice(0,3);
// document.write(today);

//Q4
// var a=new Date();
// var b=a.getDay();
// if(b==0 || b==7){
// document.write("its fun day");
// }

//Q5

// var a=new Date();
// var b=a.getDate();
// if(b<=15){
// document.write("First fifteen days of the month");
// }
// else if(b=>15){

//     document.write("Last days of the month");
// }

//Q6
// var a=new Date();
// document.write("Current date"+a+"<br>");
// var milisec=a.getTime();
// document.write("Elapsed milisecond since January 1,1970"+milisec+"<br>");
// var min=milisec/(1000*60*60);
// document.write("Elapsed minutes since January"+min);


//Q7
// var a=new Date();
// var b=a.getHours();
// if(b<=12){
// document.write("Am");
// }
// else if(b>=12){
// document.write("PM");

// }

//Q8
// var a=new Date("dec 31, 2020");
// document.write(a);


//Q9
// var a=new Date("june 18, 2015");
// var b=a.getTime();
// var c=new Date();
// var d=c.getTime();
// var fin=d-b;
// var final=fin/(1000*60*60*24);
// document.write(final);

//Q10
// var a=new Date("dec 05,2015");
// document.write("On refernce date"+a+"<br>");
// var b=a.getTime();
// var c=new Date();
// var d=c.getTime();
// var fin=d-b;
// var final=fin/(1000*60);
// var finaal=Math.floor(final);
// document.write(finaal+"seconds had passed since begining of 2015");

//q11
// var a=new Date();
// document.write("current date"+a+"<br>");

// var b=a.toString();
// var c=b.slice(0,15);
// document.write("1 hour ago,it was"+c);

// var d=a.toString();
// var e=d.slice(15,18)-1;
// document.write(" "+e);

// var f=a.toString();
// var g=f.slice(18,70);
// document.write(g);

//Q12

// var a=new Date();
// document.write(a+"<br>");
// var b=new Date("jun 23,1915");
// document.write(b);


///Q13

// var a=new Date(prompt("enter you age"));
// var b=a.getTime();
// var c=new Date();
// var d=c.getTime();
// var e=d-b;
// document.write(e);
// var f=Date.now();
// document.write(f);



// q14
// document.write("<h1>K-Electric Bill</h1>")
// var a=prompt("enter the user name");
// document.write("Customer Name"+a+"<br>");
// var arr=["january","February","March","April","May","june","july","august","sep","oct","nov","dec"];
// var b=new Date();
// var c=b.getMonth();
// var mon=arr[c];
// document.write("Current month:"+mon+"<br>");
// var numunit=prompt("enter the number of unit");
// document.write("Number of units"+numunit+"<br>");
// var chrperunit=prompt("enter the charges per unit");
// document.write("Charges per units"+chrperunit+"<br>");
// document.write("<br>");
// var netamount=numunit*chrperunit;
// document.write("Net Amount Payable(Within Due Date):"+netamount+"<br>");
// var latepay=350;
// document.write("Late payemnt surcharge:"+latepay+"<br>");
// var groamount=netamount+latepay;
// document.write("Gross Amount Payable(After Due Date)"+groamount+"<br>");




//chapter 35-38
//Q1
// function abc(){

// var a=new Date();
// document.write(a);

// }


// abc();

//Q2
// function name(){

// var first_name="fahad";
// var last_name="khan";
// var full_name=first_name+last_name;
// document.write(full_name);

// }

// name();

//Q3
// function add(){
// var firstnum=+prompt("enter the first name");
// var secnum=+prompt("enter the second number");
// var sum=firstnum+secnum;
// return sum;

// }


// var a=add();
// document.write(a);

//Q4
// function chk(num1,num2,opr){
// if(opr==="+"){
// return num1+num2;


// }
// else if(opr==="-"){
// return num1-num2;


// }

// else if(opr==="*"){
// return num1*num2;


// }


// }

// var result=chk(7,8,"+");
// var result1=chk(12,10,"-");
// var result2=chk(5,5,"*");
// document.write(result+"<br>");
// document.write(result1+"<br>");
// document.write(result2+"<br>");

//Q5
// function sq(num){

// document.write(num*num);

// }

// sq(8);


//Q6



//Q7
// function display(){
// var start=prompt("enter the start number");
// var end=prompt("enter the end number");
// for(var i=start;i<end;i++){

// document.write(i);

// }

// }

// display();

//Q8


// function calcHypotenus(base,per) {
//     var b=Math.sqrt(base*base + per*per);
//     return b;
// }

// var a=calcHypotenus(5,5);
// document.write(a);


//q9
// function area(width,height){

// var a=width*height;
// document.write(a);

// }

// area(10,5);
// area(width,height);

//q10
// function pali(){

//    var user=prompt("enter the name");
//    var check="";
//    for(var i=4;i>=0;i--){
//        check +=user[i];
//    }
//  if(check===user){

//     document.write(user+"this word is palindrome");
//  }

//    } 
   



// pali();
//q11

// function upper(txt){

// document.write(txt+"<br>");
// var a=txt.slice(0,1);
// var b=a.toUpperCase();
// document.write(b);
// var c=txt.slice(1,3);
// document.write(c);

// var e=txt.slice(4,5);
// var d=e.toUpperCase();
// document.write(d);
// var e=txt.slice(5,9);
// document.write(e);

// var f=txt.slice(10,11);
// var g=f.toUpperCase();
// document.write(g);
// var h=txt.slice(12,15);
// document.write(h);


// var i=txt.slice(16,17);
// var j=i.toUpperCase();
// document.write(j);
// var k=txt.slice(17,19);
// document.write(k);

// }

// upper("the quick brown fox");

//q12
// function long(a){

//     var abc=a.match(/\w[a-z]{0,}/gi);
//     var result=abc[0];

//     for(var i=1;i<abc.length;i++){
//   if(result.length<abc[i].length){
//     result=abc[i];
    

//   }

//     }

//     document.write(result);

// }
// long("Web Development tutorail");

//Q13
// function abc(a,b){

//     var count=0;
//     for(var i=0;i<a.length;i++){
// if(a[i]===b){
// count++;

// }

//     }
    
//     document.write(count);



// }


// abc("JSResourceS.com",'o');

//Q14

// function cal(radius){
// var a=2*3.14*radius;;
// document.write("Circumference of circle"+a+"<br>");

// }

// function calarea(cirrad){

//     var b=3.14*cirrad*cirrad;
//     document.write("Area of circle"+b);

// }

// cal(5);
// calarea(4);

