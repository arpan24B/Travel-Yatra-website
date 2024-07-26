/*Adding*/
let a = 5;
let b = 2;
let c = a+b; 
console.log(c);

/*Subtracting*/
let x = 5;
let y = 2;
let z = x - y;
console.log(z);

/*Multiplying*/
let d = 5;
let e = 2;
let f = d * e;
console.log(f);

/*Dividing*/
let i = 5;
let j = 2;
let k = x / y;
console.log(k);

/*Reminder*/
let m = 5;
let n = 2;
let o = x % y;
console.log(o);

/*Incrementing*/
let p = 5;
p++;
let q = p;
console.log(q);

/*Decrementing*/
let g = 5;
g--;
let h = g;
console.log(h);

/*Exponentiation*/
let s = 5;
let t = s ** 2;
console.log(t);


/*JavaScript Assignment Operators*/

/*The = Operator*/
var num1 = 12
var num2 = 6 + num1;
console.log(num2);

/*The += Operator*/
var num1 = 12;
num1 += 6;
console.log(num1);

/*The -= Operator*/
var num1 = 12;
num1 -= 6;
console.log(num1);

/*The *= Operator*/
var num1 = 12;
num1 *= 6;
console.log(num1);

/*The **= Operator*/
var num1 = 12;
num1 **= 6;
console.log(num1);

/*The /= Operator*/
var num1 = 12;
num1 /= 6;
console.log(num1);

/*The %= Operator*/
var num1 = 12;
num1 %= 6;
console.log(num1);

/*Shift Assignment Operators*/

/*The <<= Operator*/
var num1 = -200;
num1 <<= 5;
console.log(num1);

/*The >>= Operator(Right Shift Operator)*/
var num1 = -200;
num1 >>= 5;
console.log(num1);

/*The >>>= Operator(Unsigned Right Shift Operator)*/
var num1 = -200;
num1 >>>= 5;
console.log(num1);

/*Bitwise Assignment Operators*/

/*The &= Operator( Bitwise AND Assignment Operator)*/
var num1 = 20;
num1 &= 5;
console.log(num1);

/*The |= Operator(Bitwise OR Assignment Operator )*/
var num1 = 20;
num1 |= 5;
console.log(num1);

/*The ^= Operator(Bitwise XOR Assignment Operator )*/
var num1 = 20;
num1 ^= 5;
console.log(num1);

/*Logical Assignment Operators*/

/*The &&= Operator(Logical AND Assignment Operator )*/
var num1 = 20;
num1 &&= 5;
console.log(num1);

/*The ||= Operator(Logical OR Assignment Operator )*/
var num1 = 10;
num1 ||= 5;
console.log(num1);

/*The ??= Operator(Nullish Coalescing Assignment Operator)*/
var num1=20;
num1 ??= 5;
console.log(num1);

/*JavaScript String Methods*/

/*JavaScript String Length*/
let text = "RTAVCRTUSPE";
let length = text.length;
console.log(length);

/*Extracting String Parts*/

/*JavaScript String slice()*/
let food = "Kabab, Tandoor, Fry";
let part = food.slice(-3);
console.log(part);

/*JavaScript String substring()*/
let str = "Kabab, Tandoor, Fry";
let data = str.substring(7, 14);
console.log(data);

/*JavaScript String substr()*/
let str1 = "Kabab, Tandoor, Fry";
let data1 = str1.substr(7);
console.log(data1);

/*Replacing String Content*/
let text1 = "Please visit Google!";
let newText = text1.replace("Google", "Tutorial Point");
console.log(newText);

/*JavaScript String ReplaceAll()*/
let text2 = "London is a land of various cultures and a rich heritage. London is the seventh-largest country by area globally";
text2 = text2.replaceAll(/London/g,"India");
console.log(text2);

/*JavaScript String to UpperCase()*/
let txt = "Hello World!";
let txt1 = txt.toUpperCase();
console.log(txt1);

/*JavaScript String to LowerCase()*/
let txt2 = "hello World";
let txt3 = txt2.toLowerCase();
console.log(txt3);//lowercase

/*JavaScript String concat()*/
let txt4 = "Hello";
let txt5 = "World";
let txt6 = txt4.concat("_" ,txt5);
console.log(txt6);

/*JavaScript String trim()*/
let text5 = "      Hello String!      ";
let text6 = text5.trim();
console.log(text6);

/*JavaScript String trimStart()*/
let text7 = "     Hello World!     ";
let text8 = text7.trimStart();
console.log(text8);

/*JavaScript String trimEnd()*/
let txt7 = "     Hello World!     ";
let txt8 = txt7.trimEnd();
console.log(txt8);

/*JavaScript String Padding*/

/*JavaScript String padStart()*/
let newTxt = "5";
let padded = newTxt.padStart(2,"x");
console.log(padded);

/*Extracting String Characters*/

/*JavaScript String charAt()*/
let texti = "HELLO CHARACTER";
let char = texti.charAt(7);
console.log(char);

/*JavaScript String charCodeAt()*/
let textr = "HELLO FAMILY";
let char1 = textr.charCodeAt(0);
console.log(char1);

/*Property Access*/
let textt = "Hello Fans";
let char2 = textt[0];
console.log(char2);

/*Converting a String to an Array*/

/*JavaScript String split()*/
/* "," */
let textt1 = "a,b,c,d,e,f";
let myArray = textt1.split(",");
console.log(myArray);
/* " " */
let textt2 = "a,b,c,d,e,f";
let myArray1 = textt2.split("");
console.log(myArray1);
/* "|" */
let textt3 = "a,b,c,d,e,f";
let myArray2 = textt3.split("|");
console.log(myArray2);

/*JavaScript String Search*/

/*Javascript String indexOf()*/
let textt4 = "Please locate where 'locate' occurs!";
let index = textt4.indexOf("locate");
console.log(index);

/*JavaScript String lastIndexOf()*/
let textt5 = "Please locate where 'locate' occurs!";
let index1 = textt5.lastIndexOf("locate");
console.log(index1);

/*JavaScript String search()*/
let textt6 = "Please locate where 'locate' occurs!";
let index2 = textt6.search("locate");
console.log(index2);


/*JavaScript Number Properties*/
/*JavaScript EPSILON*/
let x1 = Number.EPSILON;
let x2 = x1;
console.log(x2);

/*JavaScript MAX_VALUE*/
let x3 = Number.MAX_VALUE;
let x4 = x3;
console.log(x4);

/*JavaScript MIN_VALUE*/
let x5 = Number.MIN_VALUE;
let x6 = x5;
console.log(x6);

/*JavaScript MAX_SAFE_INTEGER*/
/*Number.MAX_SAFE_INTEGER is (2^53 - 1).*/
let x7 = Number.MAX_SAFE_INTEGER;
let x8 = x7;
console.log(x8);

/*JavaScript MIN_SAFE_INTEGER*/
/*Number.MIN_SAFE_INTEGER is -(2^53 - 1).*/
let xx1 = Number.MIN_SAFE_INTEGER;
let xx2 = xx1;
console.log(xx2);

/*JavaScript POSITIVE_INFINITY*/
let xx3 = Number.POSITIVE_INFINITY;
let xx4 = xx3;
console.log(xx4);

/*JavaScript NEGATIVE_INFINITY*/
let xx5 = Number.NEGATIVE_INFINITY;
let xx6 = xx5;
console.log(xx6);

/*JavaScript NaN - Not a Number*/
let xx7 = Number.NaN;
let xx8 = xx7;
console.log(xx8);

/*javascript Array Methods*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

/*JavaScript Array toString()*/
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let size1 = fruits1.toString();
console.log(size1);


for (let i = 0; i <=10; i++) 
{
    console.log(i);
}

for (let i = 0; i >=-10; i--) 
{
    console.log(i);
}








