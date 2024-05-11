import { cart, addToCart, removeProduct, updateQuantity, updateDeliveryOption } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatPrice } from './utils/money.js';
import { deliveryOptions } from '../data/deliveryOption.js';

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


export function reRenderCart() {
    let cartItemHTML = '';

    cart.forEach(((cartItem) => {
        let matchingProduct;
        products.forEach((product) => {
            if (Number(cartItem.productId) === product.id) {
                matchingProduct = product;
            }
        })
        if (!matchingProduct) {
            console.warn(`Product with id: ${cartItem.productId} not found.`);
            return;
        }

        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption;

        deliveryOptions.forEach((option) => {
            if (option.id === deliveryOptionId) {
                deliveryOption = option;
            }
        });
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDay, 'day');
        const formatdeliveryDate = deliveryDate.format('dddd,MMMM DD');

        cartItemHTML += `
    <div
        class="js-cart-item-${matchingProduct.id} grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
        
        <div
            class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            
            <div class="img-box">
                <span class="text-green-500 pb-5 inline-block">
                    Delivery Date: ${formatdeliveryDate}
                </span>
                <img src="${matchingProduct.images.main}"
                    alt="${matchingProduct.name.title}" class="xl:w-[140px]"/>
            </div>
            <div class="pro-data w-full max-w-sm">
                <a href="./PDP.html">
                    <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                        ${matchingProduct.name.title}
                    </h5>
                </a>
                <p
                    class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    ${matchingProduct.brand}</p>
                <div class="flex flex-wrap my-2">
                    <p class="mr-4 text-sm font-medium">
                        <span class="dark:text-gray-400">Color:</span>
                        <span
                            class="ml-2 text-gray-400 dark:text-gray-400">${matchingProduct.dimensions.color}</span>
                    </p>
                                <p class="text-sm font-medium dark:text-gray-400">
                                    <span>Size:</span>
                                    <span class="ml-2 text-gray-400">${matchingProduct.dimensions.size}</span>
                                </p>
                            </div>
                            <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                                <span class="text-sm">${matchingProduct.price.currency}</span>
                                <span>${formatPrice(matchingProduct.price.discounted)}</span>
                            </h6>
                        </div>
                    </div>
                    <div
                        class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">


                        <ul
                            class="delivery-options-list w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                            ${deliveryOptionHTML(matchingProduct, cartItem)}
                        </ul>

                        <div class="flex items-center w-full mx-auto justify-center">
                            <button
                                class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                        stroke-linecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                        stroke-linecap="round" />
                                </svg>
                            </button>
                            <input type="text"
                                class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                placeholder="1" value="${cartItem.quantity}">
                            <button
                                class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                        stroke-linecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                        stroke-linecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                        stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                        <button
                            class="flex items-center w-full mx-auto justify-center hover:text-gray-600 cursor-pointer js-delete"
                            onClick="${() => addToCart(matchingProduct.id)}" data-product-id=${matchingProduct.id}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-6 h-6 bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></button>
                    </div>
                </div>
    
    `;
    }));

    document.querySelector('.js-cart-items').innerHTML = cartItemHTML;

    document.querySelectorAll('.js-delete').forEach(link => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeProduct(productId);

            document.querySelector(`.js-cart-item-${productId}`).remove();
        });
    });

    document.querySelector('.js-cart-total-items').innerHTML = `Your Cart have ${cart.length} items in cart and ${updateQuantity()} peices`;

    function deliveryOptionHTML(matchingProduct, cartItem) {
        let html = '';
        // 1. loop through deliveryOptions
        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDay, 'day');
            const formatdeliveryDate = deliveryDate.format('dddd,MMMM DD');

            const deliveryPrice = deliveryOption.deliveryPrice === 0 ? 'Free - ' : `$${deliveryOption.deliveryPrice} - `


            let isChecked = cartItem.deliveryOptionId === deliveryOption.id;

            //2. create html for each item 
            html += `
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 js-delivery-option" 
            data-delivery-option-id="${deliveryOption.id}"
            data-product-id="${matchingProduct.id}"
            >
                <div class="flex items-center ps-3">
                    <input id="list-radio-license" type="radio" value="" name="delivery-option-${matchingProduct.id}"
                        class="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 " ${isChecked ? 'checked' : ''}>
                    <label for="list-radio-license"
                        class=" w-full py-1 ms-2 text-sm font-medium text-gray-900 ">${formatdeliveryDate} 
                        <span class="inline-block w-full py-1  text-sm font-medium text-gray-500">${deliveryPrice} Shipping </span>
                        </label>
                </div>
            </li>
        `
        })
        //3. combain all html into one string then return html
        return html;
    }

    function totalCart() {

        let total = 0;
        cart.forEach((cartItem) => {
            products.forEach(((product) => {
                if (Number(product.id) === Number(cartItem.productId)) {
                    total += product.price.discounted * cart[0].quantity;
                }
            }))
        })
        document.getElementById('cart-total').innerHTML = `$${Number(total.toFixed(2)) + 10.00}`
        document.querySelector('.subtotal').innerHTML = `$${total.toFixed(2)}`
    }
    totalCart();
    document.querySelectorAll('.js-delivery-option').forEach(el => {
        el.addEventListener('click', () => {
            const { productId, deliveryOptionId } = el.dataset;
            // remove the element before re-rendering cart
            updateDeliveryOption(productId, deliveryOptionId);
            reRenderCart();

            // window.location.reload(); // will enhanced later by create function to rerender the page
        })
    })
}
reRenderCart();

