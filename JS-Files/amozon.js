import { cart } from "../JS-Files/cart.js";
import { products } from "../JS-Files/products.js"; 
console.log("Starting");
let productHTML = '';
// In this code we generate the prodcuts in fo using the js code that's we do that bleow.
// The advantage of this js codes are we can't use the html codes again and again for all the products and we have to only details of the products only.
products.forEach((product) => {
    productHTML+=`   
    <div class="product-container">
        <div class="product-image-container">
            <img src="${product.image}" alt="product1" class="product-image">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-rating-container">
            <img src="../ratings/rating-${ product.rating.stars*10 }.png" class="product-ratings-stars">
            <div class="product-ratings-count" >
                ${product.rating.count}
            </div>
        </div>
        <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="product-spacer"></div>
        <div class="added-to-cart">
            <img src="../icons/checkmark.png" alt="checkmark" class="added-to-cart-icon">
            Added
        </div>
        <button class="add-to-cart-button js-add-to-cart-button"
        data-product-id="${product.id}"
        >
            Add to Cart
        </button>
    </div>`;
});

console.log(productHTML);
document.querySelector('.js-product-grid').innerHTML = productHTML;

function UpdateCartQuantity()
{
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.querySelector('.cart-quantity-js')
  .innerHTML = cartQuantity;

  console.log(cart);
  console.log(cartQuantity);
}

function AddToCart(productId)
{
  let matchingItem;
  cart.forEach((item) => {
  if(productId === item.productId)
  {
    matchingItem = item;
  }
  });
  if(matchingItem)
  {
    matchingItem.quantity++;
  }
  else
  {
    cart.push(
      {
        productId: productId,
        quantity: 1 
  })}
}
document.querySelectorAll('.js-add-to-cart-button')
 .forEach((button) =>
{
  button.addEventListener('click', () =>{
    console.log('Added product');
    const productId = (button.dataset.productId);
    AddToCart(productId);
    UpdateCartQuantity();


  });
});
