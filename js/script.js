const bmicalc=()=>{
  var w =document.getElementById("Weight").value;
  var h =document.getElementById("Height").value;
  var result=document.getElementById("showresult");
  var bmi = w/(h/100*h/100);
  var total= bmi.toFixed(2);
  


  if (total<=16.0){
    result.innerHTML=`YOUR BMI IS ${total},YOU ARE UNDERWEIGHT!`
  }
  if ((total>=16.0) && (total<18.5)){
    result.innerHTML=`YOUR BMI IS ${total},YOU ARE UNDERWEIGHT!`
  }
  if ((total>=18.5) && (total<25.0)){
    result.innerHTML=`YOUR BMI IS ${total},YOU ARE NORMAL!`
  }
 if (total>=25.0){
    result.innerHTML=`YOUR BMI IS ${total},YOU ARE OVERWEIGHT!`
  }


  
}