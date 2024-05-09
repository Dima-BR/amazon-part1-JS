export let cart = JSON.parse(localStorage.getItem('cart')) || [];
// export let cart = [{
//     productId: 1,
//     quantity: 3,
//     deliveryOptionId: 1
// },
// {
//    productId: 2,
//    quantity: 4,
//    deliveryOptionId: 2
// }]
// localStorage.setItem('cart', JSON.stringify(cart))


if(cart === null || cart.length == 0 || cart === undefined){
    // saveToLocalStorage('cart', []);

    // document.querySelector('.js-cart-section').remove();
    
    console.log("cart is empty");
    // [{
    //     productId: 1,
    //     quantity: 1,
    //     deliveryOptionId: 1
    // },
    // {
    //    productId: 2,
    //    quantity: 4,
    //    deliveryOptionId: 2
    // }];
}

 
function saveToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}
export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === Number(cartItem.productId)|| productId === cartItem.productId){
            matchingItem = cartItem;
        } 
    })
    if(matchingItem){
        matchingItem.quantity++;
    }else{
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId:1
        })
    }
    console.log("cart-addToCart",cart);
    saveToLocalStorage();
}
export function updateQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    
    return cartQuantity;
}
    export function calculateCartQuantity() {
        let cartQuantity = 0;
      
        cart.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
      
        // return console.log("calculateCartQuantity cartQuantity",cartQuantity);
      }
      calculateCartQuantity();

export function removeProduct(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== Number(productId)){
            // console.log("productId", productId, "cartItem.productId", cartItem.productId);
            newCart.push(cartItem);
        }
        // console.log("productId", productId, "cartItem.quantity", cartItem.quantity);
    })

    cart = newCart;

    let cartQuantity = 0;
    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity
        // console.log("cartQuantity Inside remove", cartQuantity);
    })
    // console.log("cartQuantity outside remove", cartQuantity);
    
    saveToLocalStorage();
    location.reload()
    // console.log("newCart", newCart);
}


// Update date when user select different delivery option
// param >> product id & delivery option id

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    console.log({
        cart: cart,
        productId: productId,
        deliveryOptionId: deliveryOptionId
    });

    cart.forEach((cartItem) => {
        console.log("con1", productId === Number(cartItem.productId));
        console.log("con2", productId === cartItem.productId);
        console.log("typeof productId", typeof productId);
        console.log("typeof deliveryOptionId", typeof deliveryOptionId);
        if(Number(productId) === Number(cartItem.productId)|| productId === cartItem.productId){
            console.log("productId", productId, "cartItem.productId", cartItem.productId);
            matchingItem = cartItem;
        } 
    });
    console.log("matchingItem", matchingItem);
    matchingItem.deliveryOptionId = Number(deliveryOptionId);

    saveToLocalStorage();
}
