let num=13
    count =0;
    for (i=1;i<=num;i++){
  if(num%i==0){
   count++;
  }
} if(count==1){
 console.log("Prime");
}else{
  console.log("Not a prime");
}