//EDAD//

let edad = prompt("Ingrese su edad")
        edad=Number(edad);

        if (edad>18){
            alert("Puedes ingresar al sitio web");
        } else {
            alert("No puedes ingresar al sitio web")
        };


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
{
    id: 1,
    nombre: "Harina",
    precio: 50,
    img:"https://http2.mlstatic.com/D_NQ_NP_632395-MLA47305565439_082021-O.webp",
    cantidad: 1,
},
{
    id: 2,
    nombre: "Galletas",
    precio: 75,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaizvPIGCnr4WxAT9qaTsINz2fPAQC0bMVFg&usqp=CAU",
    cantidad: 1,
},
{
    id: 3,
    nombre: "Cerveza",
    precio: 100,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vqRek9YL8TQwe2I_yCl_S9Q7Ac2UKV1_dw&usqp=CAU",
    cantidad: 1,
},
{
    id: 4,
    nombre: "Leche",
    precio: 125,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7NiGIbctqCFTcGeEKRdvNf2gXGgO1o1ICg&usqp=CAU",
    cantidad: 1,
    },
];


productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "Comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    if (repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        })
    }else{

        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    
        console.log(carrito);
        carritoCounter();
        saveLocal();
    }
    });
});

const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};
