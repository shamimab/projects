
  function Fact(n : number ) : number {
    if(n==0 || n==1){
       return 1;  
    }else{
        for(var i=(n-1); i>=1; i-- ){
            n=n*i;
        }
        return n;
    }
}
function sumDig() : void {
    var n :number = Math.floor(Math.random() * (1000000000 - 1 + 1)) + 1;
    var sum = 0;
     while(n>0){
        var m = n % 10;
      n = Math.floor(n/10) ;
       var o = Fact(m);
       sum = sum + o ;
     }
     
       console.log("test",sum);
     
   }
  
   for(var i=1 ;i<=20; i++){
    sumDig();}
  
 





 
