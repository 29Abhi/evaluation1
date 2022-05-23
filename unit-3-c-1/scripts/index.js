//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit", myfunction);

var productdata = JSON.parse(localStorage.getItem("products")) || [];

function myfunction(e){
    e.preventDefault();
    var type = document.querySelector("#type").value;
    var dicr = document.querySelector("#desc").value;
    var price = document.querySelector("#price").value;
    var image = document.querySelector("#image").value;

var prodobj = {
    type: type,
    desc: dicr,
    price: price,
    image: image,
}
productdata.push(prodobj);
// console.log(productdata);
localStorage.setItem("products",JSON.stringify(productdata));



}
