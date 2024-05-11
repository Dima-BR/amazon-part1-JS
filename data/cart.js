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
      }
      calculateCartQuantity();

export function removeProduct(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== Number(productId)){
            newCart.push(cartItem);
        }
    })

    cart = newCart;

    let cartQuantity = 0;
    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity
    })
    
    saveToLocalStorage();
    location.reload()
}


// Update date when user select different delivery option
// param >> product id & delivery option id

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(Number(productId) === Number(cartItem.productId)|| productId === cartItem.productId){
            matchingItem = cartItem;
        } 
    });
    matchingItem.deliveryOptionId = Number(deliveryOptionId);

    saveToLocalStorage();
}
