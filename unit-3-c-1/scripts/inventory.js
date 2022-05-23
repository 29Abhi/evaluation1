var productitem = JSON.parse(localStorage.getItem("products"));
console.log( productitem);

productitem.map(function (elem,index){

    var div = document.createElement("div");

    var img = document.createElement("image");
    img.src = elem.image;

    var type = document.createElement("h4");
    type.innerText = elem.type;

    var dcri = document.createElement("h4");
    dcri.innerText = elem.desc;

    var price = document.createElement("h4");
    price.innerText = elem.price;

    var btn = document.createElement("button")
    btn.innerText = "Remove"
    btn.addEventListener("click", function(){
        removeitem(elem,index)
    })
div.append(img,type,dcri,price,btn);
document.querySelector("#all_products").append(div);

});

function removeitem(elem,index){
    productitem.splice(index,1)
    localStorage.setItem("products",JSON.stringify( productitem))
    window.location.reload()
}