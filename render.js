function addme(e1,e2,e3,e4,c1){
    var res = document.createElement("div")
    res.setAttribute("class","row")
    res.innerHTML = `<div class="col-3"><p>${e1}</p></div>
    <div class="col-3"><p>${e2}</p></div>
    <div class="col-3"><p>${e3}</p></div>
    <div class="col-3 ${c1}"><p>${e4}</p></div>`;

    return res
}
var root = document.getElementById("root")


var container = document.createElement("div")
container.setAttribute("class","container-fluid")
var row1 = document.createElement("div")
row1.setAttribute("class","row")
var calcol = document.createElement("div")
calcol.setAttribute("id","calcol")
calcol.setAttribute("class","col-12")
var rowt=document.createElement("div")
rowt.setAttribute("class","row")
rowt.setAttribute("id","dispbox")
calcol.appendChild(rowt)
var row2 = document.createElement("div")
row2.setAttribute("class","row")
row2.setAttribute("id","calc")
var col12 = document.createElement("div")
col12.setAttribute("class","col-12")

col12.appendChild(addme('AC','C','%','/','c'))
col12.appendChild(addme('7','8','9','*','c'))
col12.appendChild(addme('4','5','6','-','c'))
col12.appendChild(addme('1','2','3','+','c'))
col12.appendChild(addme('.','0','( )','=','c1'))

row2.appendChild(col12)

calcol.appendChild(row2)
row1.appendChild(calcol)
container.appendChild(row1)
root.appendChild(container)


