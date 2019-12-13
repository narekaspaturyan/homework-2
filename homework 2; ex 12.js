////ex 12 

var question = prompt("Type the name of the figure for computing the area  ");
var question1 = +prompt("For triangle enter height, For rectangle enter length ");
var  question2 =+prompt("Now for triangle enter base, for rectangle enter width ");


if ( question1*question2 === 0){
    alert("Please enter only positives");
} else if (question==="triangle" ){  
    alert("Square of the triangle is "+ question1*question2/2);
}else if(question==="rectangle"){
    alert("Square of the rectangle is "+ question1*question2);
} 