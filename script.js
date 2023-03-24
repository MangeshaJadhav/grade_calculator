let btn = document.getElementById("btn");

let english = document.getElementById("english").value;
let maths = document.getElementById("maths").value;
let physics = document.getElementById("physics").value;
let chemistry = document.getElementById("chemistry").value;
let computer = document.getElementById("computer").value;

let total = document.getElementById("total");
let avearge = document.getElementById("avearge");
let grade = document.getElementById("grade");

btn.addEventListener("click", function (event) {
let english = document.getElementById("english").value;
let maths = document.getElementById("maths").value;
let physics = document.getElementById("physics").value;
let chemistry = document.getElementById("chemistry").value;
let computer = document.getElementById("computer").value;

let total = document.getElementById("total");
let avearge = document.getElementById("avearge");
let grade = document.getElementById("grade");


  total.innerText=parseFloat( english) +parseFloat( maths) + parseFloat( physics)+parseFloat(chemistry)+parseFloat(computer);

    total.innerHTML=parseInt(total);

    avearge.innerText=(total/500)*100;

    let per=(total/500)*100;

    if(per>90){
        grade="A"
    }
    else if(per>80 && per<89){
        grade="B"
    }
    else if(per>70 && per<79){
        grade="C"
    }
    else if(per>60 && per<69){
        grade="D"
    }
    else if(per<60){
        grade="E"
    }
});
