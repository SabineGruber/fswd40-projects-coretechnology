try {
function calculateInsurance() {
	name = document.getElementById("input0").value;
	age = parseInt(document.getElementById("input1").value);
 	country = document.getElementById("input2").value;
	horsepower = parseInt(document.getElementById("input3").value);


if (country == "austria") {
	bb =  horsepower * 100
    xx = age + 50
    insurance = bb / xx;
    document.getElementById("footer").innerHTML = name + ", your insurance costs " + Math.round(insurance) + " EUR ";
}

else 
	

	if (country == "germany") {
    gg = horsepower * 120
    hh = age + 100
    insurance= gg/hh;
    document.getElementById("footer").innerHTML = name + ", your insurance costs "+ Math.round(insurance) +" EUR ";
}
else 
	

	if (contruy == "italy") {
    ss = horsepower * 150
    mm = age + 152 //it is the same !!
    insurance= ss/mm;
    document.getElementById("footer").innerHTML = name + ", your insurance costs "+ Math.round(insurance) +" EUR" ;
} else 
    document.getElementById("footer").innerHTML =" sorry .. try again" ;

}



  
}
catch(error) {
  console.error(error);
 }