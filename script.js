// Bilal Mohammed,C0882358
let inputEl1 = document.getElementById("val1");
//this variable is created to manipulate 1st input element
let inputEl2 = document.getElementById("val2");
//this variable is created to manipulate 2nd input element
let currency1 = document.getElementById("c1");
//this variable is created to manipulate 1st select element
let currency2 = document.getElementById("c2");
//this variable is created to manipulate 2nd select element


let btnEl = document.getElementById("btn");
//this variable is created to manipulate btn element
//this function is for manipulating 1st dropdown
function changeCurrency1(){
    inputEl2.value = "";
    inputEl1.value = "";
    //when changing the currency setting the value of both currencies to ""
    if(currency1.value==="cad"){
        currency2.value = "usd";
    }
    else{
        currency2.value = "cad";
    }
}
//this function is for manipulating 2nd dropdown
function changeCurrency2(){
     //when changing the currency setting the value of both currencies to ""
    inputEl1.value = "";
    inputEl2.value = "";
    if(currency2.value==="cad"){
        currency1.value = "usd";
    }
    else{
        currency1.value = "cad";
    }
}

//this function performs the conversion of currencies and also the necessary input validations
function convert()
{  
        if((inputEl1.value!=="")&&!isNaN(inputEl1.value)&&inputEl2.value==="")
        {
            inputEl1.value = parseFloat(inputEl1.value);
            if(currency1.value==="cad"){
                
                //console.log(inputEl2.value);
            
                //console.log(val);
                inputEl2.value = inputEl1.value*0.76;
            alert("The currency in USD is: "+inputEl2.value);
            }
            else{
                
                inputEl2.value = inputEl1.value*1.32;
                //console.log(val);
            alert("The currency in CAD is: "+inputEl2.value);
            }
            
        }
        else if((inputEl2.value!=="")&&!isNaN(inputEl2.value)&&inputEl1.value===""){
            inputEl2.value = parseFloat(inputEl2.value);
            if(currency2.value==="cad"){
            
                inputEl1.value = inputEl2.value*0.76; 
            
                //console.log(val);
            alert("The currency in USD is: "+inputEl1.value);
            }
            else{
                inputEl1.value = inputEl2.value*1.32; 
            
                //console.log(val);
            alert("The currency in CAD is: "+inputEl1.value);
            }
            
        }
        else{
            alert("Only One of the values should be given and it must be a number so please try again with a number");
        }
     
}