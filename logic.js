var mytags = document.querySelectorAll(".col-3")
//console.log(document.querySelectorAll(".col-3"))
mytags.forEach((e)=> e.addEventListener("click",(e1)=> displaytext(e1.target.innerText)))
document.onkeypress= (e) => displaytext(e.key)
function displaytext(val){
    var con = document.getElementById("dispbox");
    //console.log(val,"q",con.innerText);
    if(val==="=" || val==="Enter" ){
       //console.log((eval(con.innerText)))
       con.innerText = String(eval(con.innerText))
    }
    else if(val=="AC"|| val=="d" || val=="D")
    {
        con.innerText=""
    }
    else if(val=="C" || val=="c")
    {
        con.innerText= con.innerText.slice(0,con.innerText.length-1)
    }
    else if(!isNaN(val) || val=="+" || val=="-" || val=="*" || val=="/" || val=="%")
    {
        con.innerText+=val
        //console.log("here")
    }

}
