const product = [
    {
        id: 0,
        image: 'image/1.jpg',
        title: 'Audifonos',
        price: 120,
    },
    {
        id: 1,
        image: 'image/2.jpg',
        title: 'Camara profesional',
        price: 60,
    },
    {
        id: 2,
        image: 'image/3.jpg',
        title: 'Samsung Z Flip',
        price: 230,
    },
    {
        id: 3,
        image: 'image/1.jpg',
        title: 'Audifonos',
        price: 100,
    },
    {
        id: 4,
        image: 'image/5.jpg',
        title: 'Samsung s23 ULTRA',
        price: 1000,
    },
    {
        id: 5,
        image: 'image/6.jpg',
        title: 'Samsung Smart Tag',
        price: 30,
    }
    ,
    {
        id: 6,
        image: 'image/7.jpg',
        title: 'Samsung Note 10 Plus',
        price: 500,
    },
    {
        id: 7,
        image: 'image/8.jpg',
        title: 'Samsung S21 ULTRA',
        price: 800,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Añadir al carrito</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Tu carrito esta vacio";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}