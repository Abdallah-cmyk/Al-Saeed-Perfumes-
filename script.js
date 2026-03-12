const products = {

bakhoor: [

{
name:"بخور نفرتيتي",
price:"250 جنيه",
image:"images/nefertiti.jpg",
id:"nefertiti"
},

{
name:"بخور كليوباترا",
price:"260 جنيه",
image:"images/cleo.jpg",
id:"cleo"
}

],

oud: [

{
name:"عطر عود ملكي",
price:"450 جنيه",
image:"images/oud1.jpg",
id:"oud1"
},

{
name:"عطر مسك فاخر",
price:"420 جنيه",
image:"images/musk.jpg",
id:"musk"
}

]

}

const params = new URLSearchParams(window.location.search)
const cat = params.get("cat")

const container = document.getElementById("products")

if(products[cat]){

products[cat].forEach(p=>{

container.innerHTML += `

<div class="card"><img src="${p.image}"><h3>${p.name}</h3><p>${p.price}</p><a href="product.html?id=${p.id}">عرض المنتج</a>

</div>`

})

}
