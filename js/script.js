function DisplayResult(Result,Valid){
  if (Valid == true){
    document.getElementById("Output").innerHTML = "<p>You will have to pay "+Result+". Thank you for using our service.</p>";
  } else{
    document.getElementById("Output").innerHTML = "<p>Please make sure that you enter a whole and positive number for your age, and a proper day of the week.</p>";
  }
}
function DetermineCost(){
  let age = document.getElementById("age").value;
  let day = document.getElementById("day").value;
  let result = "";
  let resultValidNumber = true;
  if (age <=5 || age >=95){
    result = "no admission fees"
  } else
    if (age<=12 && age <=21){
       result = "the student discount"
  } else 
    if (day == "tuesday" || day == "thursday"){
      result = "the student discount"
  }  else{
      result = "full price"
  }
  if (! age || age<0 || Math.round(age)!=age){
    resultValidNumber = false;
  }
  DisplayResult(result,resultValidNumber)
}

