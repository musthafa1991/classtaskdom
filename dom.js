
// querySelectorAll -recent
// features can be added old feature

// editing content in html vai js


// const todocls=document.querySelector(".todo");
// todocls.innerText="it replaced";
// console.log(todocls.innerText);



const todocls=document.querySelectorAll(".todo");

for( let tod of todocls){
tod.innerText="it replaced";
console.log(tod.innerText);
}



// append->add
// Element.append(child)



const favlist=["badminton","chess","cricket","football","handball"];
const ulcrt=document.createElement("ul");

for(let favs of favlist){
    const list=document.createElement("li");
list.innerText=favs;
ulcrt.append(list);
}
document.body.append(ulcrt);

// add item to list
// add list to body


// provide placeholder from js
const plc=document.querySelector(".username");
plc.setAttribute("placeholder","Enter username");


// adding image on html page

// const imageurl="https://thumbs.dreamstime.com/b/sun-rays-mountain-landscape-5721010.jpg";

// const imageadd=document.createElement("img");
// imageadd.setAttribute("src",imageurl);
// document.body.append(imageadd);


// task 1

const imgurls=["https://scontent.fblr5-1.fna.fbcdn.net/v/t1.18169-9/1891201_721728077871576_2076851305_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Tt61qSV-C20AX8Kkn5L&_nc_ht=scontent.fblr5-1.fna&oh=00_AT8GMKQeQan0VPKytlDTa3pinGIThLvw_2zXVD_6PoHXgw&oe=6204AE33","https://llandscapes-10674.kxcdn.com/wp-content/uploads/2018/04/landscape-photography-portfolio-5.jpg","https://images.unsplash.com/photo-1611307742746-43cbea512c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80","https://expertphotography.b-cdn.net/wp-content/uploads/2021/01/landscape-photography-10_reupload.jpeg"]

for(let url of imgurls){
const imageadd=document.createElement("img");

imageadd.setAttribute("src",url);
document.body.append(imageadd);
const brt=document.createElement("br");
document.body.append(brt);
}



// task 2


const indimg="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg";
const comdiv=document.createElement("div");
const div1=document.createAttribute("class");
div1.value="container";
comdiv.setAttributeNode(div1)


const imgdiv=document.createElement("div");


const imag=document.createElement("img");
imag.setAttribute("src",indimg);
const img1=document.createAttribute("class");
img1.value="indimag";
imag.setAttributeNode(img1);
imgdiv.append(imag);
comdiv.append(imgdiv);



const cntdiv=document.createElement("div");
const cntclass=document.createAttribute("class");
cntclass.value="content";
cntdiv.setAttributeNode(cntclass);
comdiv.append(cntdiv);


const heading=document.createElement("h3");

heading.innerText="INDIA";
cntdiv.append(heading);

const p1=document.createElement("p");
const spn1=document.createElement("span");
// spn1.innerText="Population :";
// p1.append(spn1);
p1.innerText="Population:1400_000_000";
cntdiv.append(p1);

const p2=document.createElement("p");
p2.innerText="Region:Asia"
cntdiv.append(p2);

const p3=document.createElement("p");
p3.innerText="Capital:Delhi"
cntdiv.append(p3);


comdiv.append(cntdiv);


document.body.append(comdiv);
