var mytags = document.querySelectorAll(".col-3")
//console.log(document.querySelectorAll(".col-3"))
mytags.forEach((e)=> e.addEventListener("click",(e1)=> displaytext(e1.target.innerText)))
var brackets = 0;
var flag = false;
document.onkeyup= (e) => {
    //console.log(e)
    displaytext(e.key)}
function countdots(s){
var res = 0;
for (let i=0;i<s.length;i++){
    if(s[i] == ".")
    res++
    if((s[i]=="+" ||s[i]=="-" ||s[i]=="*" ||s[i]=="/" ||s[i]=="(" ||s[i]==")")&&(res>0))
    res--;
}
return res==0
}
function displaytext(val){
    var con = document.getElementById("dispbox");
    //console.log(val,"q",con.innerText);
    if(flag)
    {con.innerText="";
    con.setAttribute("style","color:white")
    flag=false;
    }
    if(val==="=" || val==="Enter" ){
       //console.log((eval(con.innerText)))
       try {
        con.innerText = String(eval(con.innerText))
       } catch (error) {
        con.innerText=error.message;
           flag=true;
           con.setAttribute("style","color:red")
       }
       
    }
    else if(val=="AC"|| val=="d" || val=="D" || val=="Delete")
    {
        con.innerText=""
        brackets=0;
    }
    else if(val=="C" || val=="c" || val=="Backspace")
    {   if(con.innerText[con.innerText.length-1] == "(")
            brackets--;
            if(con.innerText[con.innerText.length-1] == ")")
            brackets++;
        con.innerText= con.innerText.slice(0,con.innerText.length-1)
    }
    else if(!isNaN(val) || val=="+" || val=="-" || val=="*" || val=="/" || val=="%" || val=="(" || val==")" || val=="( )")
    {
        if(val=="( )" && brackets==0 || val=="("){
            if(!isNaN(con.innerText[con.innerText.length-1]) || con.innerText[con.innerText.length-1] == ")")
            con.innerText+="*("
            else
            con.innerText+="("
            brackets++;
        }
        else if(val==")" || val=="( )" && (!isNaN(con.innerText[con.innerText.length-1]) || con.innerText[con.innerText.length-1] == ")") && brackets>0){
            con.innerText+=")"
            brackets--;
        }
        else if(val == "( )" ||val=="(")
        {
            if(!isNaN(con.innerText[con.innerText.length-1]) || con.innerText[con.innerText.length-1] == ")")
            con.innerText+="*("
            else
            con.innerText+="("
            brackets++;
        }
        else
        con.innerText+=val
        //console.log(brackets)
    }
    else if(val=="." && countdots(con.innerText)){
        con.innerText+=val
    }


}
