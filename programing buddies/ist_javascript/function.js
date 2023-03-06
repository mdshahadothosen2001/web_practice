// simple fumction structure use
function shahadot(num){
    console.log(`hello `+num);
}
shahadot(`Md Shahadot Hosen`);

function practice(variable){
    console.log(`addition with input number ${variable*2}`);
}

practice(56);

  
//use return statement
function addition(num){
    let add=num+378;
    return add;
}
console.log(addition(35));

function stud(nam){
    const firstName="Md ";
    const middleName="Shahadot ";
    const fullName=firstName+middleName+nam;
    return fullName;
}
console.log(stud("Hosen"));
//2nd


function scope(vari){
    let kg=` Tk kg Banana`
    let banana=vari+kg;
    return banana;
}
console.log(scope(190));


function fun(number){
    let number1=number*2;
    let number2=number1+34;
    let number3=number2+" is latest number";
    return number3;
}
console.log(fun(936));

function store(input1,input2,input3){
    let output=input1+input2+input3;
    return output;
}
console.log(store(6,6,6))


//3rd
function vari(num){
   let subtr=num+290;
   return subtr;

}
console.log(vari(20));

//function expression practice
about=function expres(){
    console.log(`Md Shahadot Hosen`);
    console.log(`should more practice,pls`);
}

about();
//four
//practice object

let myList={
    banana:"10 hl",
    apple:"5kg",
    egg:"40ps",
    biscuit:`3kg`,
    misty:`2kg`,
    cinaBadam:`2kg`,
    katBadam:`500g`,
    kaguBadam:`500g`,
    kismis:`250g`,
    khezur:`5kg`,
    tin:`50g`,
    modho:`250g`,
    coffe:`400g`,
    sugar:`1kg`,
    valu:34,
    string:"These make the body healthy and strong",
    string1:"bangladesh",
    string2:"MD SHAHADOT HOSEN",

}
console.log(myList);
console.log(`console log by object structure`);
console.log(myList.khezur);
console.log(myList.misty);
console.log(myList.string);
console.log(myList.string1.toUpperCase());
console.log(myList.string2.toLowerCase());
console.log(myList.string.toUpperCase());

//expression
let w=word="Md Shahadot Hosen ";
let w1=word1="Thank you "
 function welcome(word,word1){
     console.log(add=word+`welcome`);
   console.log(word1+` practices again`);
     

 }
 welcome(w,w1);

