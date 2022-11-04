function changecolor(){
    alert("de kleur wordt aangepast.");
    console.log("het werkt ook in de console")
    document.getElementById("tekst1").style.color = "gold";
}

function calculator(num,num2){
    var num = parseInt( prompt("voer getal in",""));
    var num2 = parseInt( prompt ("voer getal in",""));
    let answer = num + num2;
    console.log(answer);
    alert(answer);
}

function multiplybyfive(){
    var num = prompt("voer je getal in:","");
    let answer = num * 5;
    console.log(answer)
    alert(answer);
    
}

function calculateminutes(){
    var num = prompt(" voer secondes in","")
    let answer = num / 60;
console.log(answer)
alert(answer);
}