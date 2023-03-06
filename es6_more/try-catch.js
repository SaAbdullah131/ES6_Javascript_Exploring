
const checkAge = ()=> {
   const ageField = document.getElementById("age");
  const errorTag = document.getElementById("error");

   try {
    // console.log(bBaria)
    const age = parseInt(ageField.value);
    if(isNaN(age)){
        // console.log("Age not Found",age,ageField); 
        throw("Please Enter a Valid Age");
    }
    else if(age < 18) {
        throw "bacha kaccha not allowed";
    }
    else if(age > 30) {
        throw "Murobbi ra aikhane aisen na"; 
        
    }
    errorTag.innerHTML = '';
}
catch(err) {
    console.log("ERROR:",err);
    errorTag.textContent = "ERROR"+err;
}

finally {
    console.log("All Done inside try catch");
}
console.log(11111);
}