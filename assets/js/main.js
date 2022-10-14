const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'Sweatshirts',
      quantity: 20
    }
  ]

  /* LOADER */

  const loader = document.getElementById("loader");

const loadComponent = () => {

    setTimeout( () => {
        
        loader.classList.add("hide");
    }, 3000);
}

  /* CAR MENU */
 
  let btnShop = document.getElementById("btn-shop")
  let cartMenu = document.querySelector(".cart")

  btnShop.addEventListener("click", () => {

    cartMenu.classList.add("open");
  
})


let btnCartClose = document.getElementById("cart-close");

  btnCartClose.addEventListener("click", () => {

    cartMenu.classList.remove("open");
  })




  /* MENU */

  let btnMenu = document.getElementById("btn-menu");
  let menu = document.querySelector(".nav-menu");

  btnMenu.addEventListener("click", () => {

      menu.classList.add("visible");
    
  })

  /* CLOSE MENU */

  let btnClose = document.getElementById("btn-close");

  btnClose.addEventListener("click", () => {

    menu.classList.remove("visible");
  })

/* SHOW PRODUCTS */
let showProducts = () =>{
    let productsContainer = document.getElementById("products-list")

    let fragment = ``

    items.forEach(product => {

      fragment+= `<div class="product-card" id="${product.id}">
      <img src="${product.image}" class="product-img">
      <h2 class="title-product">$${product.price}.00<span class="stock">|Stock${product.quantity}</span></h2>
      <p class="product-name">${product.name}</p>
      <button class="btn-add">ADD</button>
      </div>
      `
    })

    productsContainer.innerHTML = fragment 
    
    cartFunctionality()
}

    
    

/* DARK MODE */ 

let btnMoon = document.getElementById("btn-moon");

btnMoon.addEventListener("click", () => {

  document.body.classList.toggle("dark")

  if(btnMoon.classList.contains("bx-moon")) {

    btnMoon.classList.replace("bx-moon", "bx-sun");
  } else{

    btnMoon.classList.replace("bx-sun", "bx-moon")
  }
})

document.addEventListener("DOMContentLoaded", () => {
  loadComponent()
  showProducts()
});

/* CART PRODUCTS */

function cartFunctionality() {

  let btns = document.querySelectorAll(".btn-add")
  let cart = [];

  btns.forEach(button => {

    button.addEventListener("click", e => {

      let id = parseInt(e.target.parentElement.id);
      let selectProduct = items.find(item => item.id === id);
      let index = cart.indexOf(selectProduct);

      if(index !== -1) {

        if(cart[index].quantity <= cart[index].cantidad){

          alert("no hay stock")
        }else{

          cart[index].cantidad++
        }

        
      }else{

        selectProduct.cantidad = 1;
        cart.push(selectProduct);
      }

      showProductsIncart(cart);
    })
  })
}

function showProductsIncart(cart) {

  
}