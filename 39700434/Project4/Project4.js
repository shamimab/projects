let arr = [];
let object = {value: Number, isPrime: Boolean , color:String};



function isPrime(n) {
    if (n == 0 || n == 1) return false;
        for(let i = 2; i < Math.floor(n/2) ; i++){
        if (n % i === 0) return false;
    } return true;
}

function findPrime(){
    let n = document.getElementById("num").value;
    if(isPrime(n) === false){

        document.getElementById("result").innerHTML = n + " is Not Prime <br> Its Composite";
        document.getElementById("result").style.color = "#FF0000";
        object = { value : n , isPrime : false , color:  "#FF0000"};
        arr.push(object);
    }
    else {
        document.getElementById("result").innerHTML = n + " is Prime ";
        document.getElementById("result").style.color = "#0000FF";
        object = { value : n , isPrime : true , color: "#0000FF"};
        arr.push(object);
    }
}



function clr(){
     arr = [];
   document.getElementById("result").innerHTML = "";
}


function history(){
    let text = "";
    for(let i =0; i< arr.length ; i++){
        if (arr[i].isPrime ===false){
            text = text + arr[i].value + "is not prime. <br>" ;
            
        }else{
            text = text + arr[i].value + "is prime. <br>";
            
        }
    }
  
    document.getElementById("result").innerHTML = text;
    document.getElementById("result").style.color = "black";


    }
    

function increase(){
    arr.sort(function(a, b) {
        return( parseInt(a.value) - parseInt(b.value));
    });
    history();
}
function decrease(){
    arr.sort(function(a, b) {
        return( parseInt(b.value) - parseInt(a.value));
    });
    history();
 }

 /////////////////////////////////////
 function inc(){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[j].value) < parseInt(arr[i].value)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    history();
}

function dec(){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[j].value) > parseInt(arr[i].value)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    history();
}









