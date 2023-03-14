function lable(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    let ele1 = document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}

function linebreak(tagname){
    let br=document.createElement(tagname);
    return br;
}
function buuton(tagname,Submit){
    let but = document.createElement(tagname);
    but.innerHTML="submit";
    return but;
}
let first = lable("label","for","firstname","Firstname");
let br1 = linebreak("br");
let name = input("input","type","text","name","firstname","id","firstname");
let br2 = linebreak("br");
let middle = lable("label","for","middlename","Middlename");
let br3 = linebreak("br");
let name1 = input("input","type","text","name","middlename","id","middlename");
let br30 = linebreak("br");
let last= lable("label","for","lastname","Lastname");
let br31= linebreak("br");
let name2 = input("input","type","text","name","lastname","id","lastname");
let br4 = linebreak("br");
let email= lable("label","for","email","Email");
let br5 = linebreak("br");
let name3 = input("input","type","email","name","email","id","email");
let br6 = linebreak("br");
let password= lable("label","for","pass","Password");
let br7 = linebreak("br");
let name4 = input("input","type","password","name","password","id","pass");
let br70 = linebreak("br");
let butt = buuton("button","Submit");
let br71 = linebreak("br");

document.body.append(first,br1,name,br2,middle,br3,name1,br30,last,br31,name2,br4,email,br5,name3,br6,password,br7,name4,br70,br71,butt)






