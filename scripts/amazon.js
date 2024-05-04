import { addToCart, updateQuantity,calculateCartQuantity } from '../data/cart.js';
import {products} from '../data/products.js';
import {formatPrice} from './utils/money.js';  

let productHtml = '';

products.forEach((product)=>{
     productHtml += `
    <div class="w-full">
                    <div class="relative p-4 bg-white rounded shadow dark:bg-gray-700">
                        <div class="block mb-2" href="#">
                            <div class="relative overflow-hidden">
                            <div class="mb-5 overflow-hidden">
                                <img class="object-cover w-full mx-auto transition-all rounded h-72 ease-in-out"
                                        src=${product.images.main} alt=${product.name.title}>
                                    <img class="hover-image object-cover absolute top-0 left-0 w-full rounded h-72 opacity-0 transition duration-200 ease-in-out hover:opacity-100"
                                        src=${product.images.hover} alt=${product.name.title}>
                                </div>
                                <div class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                            class="absolute text-rose-500 top-3 right-3" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                    </div>
                                <div
                                    class="absolute px-4 py-1 text-xs text-white rounded top-3 left-3 sale bg-rose-500">
                                    Sale
                                </div>
                            </div>
                            <a href="./PDP.html">
                                <h3 class="mb-2 text-xl font-bold dark:text-white">${product.name.title} </h3>
                            </a>
                            <p class="text-lg font-bold text-blue-500 dark:text-blue-300 ">
                                <span>${formatPrice(product.price.discounted)}</span>
                                <span class="text-xs font-semibold text-gray-400 line-through ">${formatPrice(product.price.regular)}${product.price.currency}</span>
                            </p>
                            <div class="flex gap-1 mt-2 text-orange-400 rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path stroke="currentColor" stroke-width="1" 
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>


                            <button
                                class="absolute z-10 flex items-center justify-center p-1 text-center text-gray-100 bg-blue-500 rounded-full shadow-xl bottom-4 right-4 hover:bg-blue-700 w-11 h-11 js-add-to-cart"
                                data-product-id="${product.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-7 h-7" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
    `
})

document.querySelector('.js-container').innerHTML = productHtml;

// cart part 
// select all cart buttons
document.querySelectorAll('.js-add-to-cart').forEach(button =>{
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(Number(productId));

        updateQuantity();
    })
})
updateQuantity();



