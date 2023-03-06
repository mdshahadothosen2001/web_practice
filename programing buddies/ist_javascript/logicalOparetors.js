//if else use

let lobi=50;
if(lobi>10){
    console.log("This number is Highest value");

}
else  if(lobi<10){
    console.log("This number is Lowset value")
}
else 
    console.console.log("This value is Invalid");






    //use function

    function fun(value){
      
if(value>10){
    console.log("This number is Highest value");

}
else  if(value<10){
    console.log("This number is Lowset value")
}
else 
    console.console.log("This value is Invalid");

    }

    
    fun(50);
      
    fun(5);

    fun(1);



    //use AND Oparetors

let variable=60;
if( variable>50 && variable!=40){
    console.log("Your number big than 50");

}
else{
    console.log("your number is smaller than 50")
}

// use OR Oparetors

let orNumber=60;
if(orNumber>60 || orNumber==60){
    console.log("Number is 60 or big");
}
else{
    console.log("Number is invalid");
}   

// use OR Oparetor again

let orNumber1=90;
if(orNumber1>60 || orNumber1==60){
    console.log("Number is 60 or big");
}
else{
    console.log("Number is invalid");
} 

// use OR Oparetor again

let orNumber2=30;
if(orNumber2>60 || orNumber2==60){
    console.log("Number is 60 or big");
}
else{
    console.log("Number is invalid");
} 

//NOT Oparetor
let notNum =40;
if(notNum !=50){
    console.log("This Number is not 50")
}
else{
    console.log("This Number is others")
}

//NOT Oparetor Again
let notNum1 =50;
if(notNum1 !=50){
    console.log("This Number is not 50")
}
else{
    console.log("This Number is others")
}

// string 
let val="practice";
if(val=="practice"){
    console.log("More Practices PLS")
}
else{
    console.log("Your string is not practice ")
}

// string  Again
let valu="welcome";
if(valu=="Thanks"){
    console.log("your string is not matching")
}
else{
    console.log("Your string is matching ")
}

//switch
function result(mark) {
    
    switch (mark/10) {
        case 8:
            console.log("Your CGPA is A+")
            
            break;
            case 7:
                console.log("Your CGPA is A")
                
                break;
                case 6:
                    console.log("Your CGPA is B")
                    
                    break;
                    case 5:
                        console.log("Your CGPA is C")
                        
                        break;
                        case 4:
                            console.log("Your CGPA is D")
                            
                            break;   
                            case 3:
                                console.log("Fail")
                                
                                break;     
    
        default:
            console.log("Invalid")
            break;
    }
    
}
result(80)
result(90);
result(60);
result(40);
result(30);
result(25);
