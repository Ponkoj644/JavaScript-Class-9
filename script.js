// (1) getElementById Method//

//Example 1 (Catch the element by id)
// const id1 = document.getElementById("id1");
// // console.log(id1);

// //Example 2 (Inner HTML)
// console.log(id1.innerHTML);

// //Example 3 (Change Inner HTML Text)
// id1.innerHTML = "Java Script";

// // Other Type of example to change inner html text //
// // document.getElementById("id1").innerHTML = "New JavaScript";

// (2) getElementByTagName Method//
// const tag1 = document.getElementsByTagName("h1")[1];
// console.log(tag1.innerHTML);
// tag1.innerHTML = "JavaScript Header two";

// (3) getElementByClassName Method//
// const class1 = document.getElementsByClassName("class1")[0];
// console.log(class1.innerText);
// class1.innerText = "JavaScript Text1 !";

// (4) DOM Element Style//
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.style.color = "blue";
// id1.style.fontStyle = "italic";
// id1.style.backgroundColor = "white";
// id1.style.textAlign = "center";

// (5) DOM Element Attributes//
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// console.log(id1.attributes);
// console.log(id1.attributes.length);
// console.log(id1.attributes.class);

// (6) getAttribute//
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// console.log(id1.getAttribute("id"));
// console.log(id1.getAttribute("class"));

// (7) removeAttribute
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.removeAttribute("class");

// (8) setAttribute
const id2 = document.getElementById("id2");
console.log(id2.innerText);
id2.setAttribute("class", "class2");

// Show or hide

function show() {
  const show = document.getElementById("div1");
  show.style.display = "block";
}
function hide() {
  const hide = document.getElementById("div1");
  hide.style.display = "none";
}
