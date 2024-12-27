console.log("Starting");
let productHTML = '';
// In this code we generate the prodcuts in fo using the js code that's we do that bleow.
// The advantage of this js codes are we can't use the html codes again and again for all the products and we have to only details of the products only.
const products = [{
     image: '../products/athletic-cotton-socks-6-pairs.jpg',
     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
     rating:{
        stars : 4,
        count: 87
     },
     priceCent:1090
},{
     image: '../products/intermediate-composite-basketball.jpg',
     name: ' Intermediate Size Basketball ',
     rating:{
        stars: 4,
        count: 127
     },
     priceCent:1390
},{
     image: '../products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
     name: 'Adult-Plain Cotton-tshirt-2-pack',
     rating:{
        stars: 4.5,
        count: 56
     },
     priceCent:799
},{
    image: '../products/black-2-slot-toaster.jpg',
    name: '2 Slot Toaster - Black',
    rating:{
       stars: 5,
       count: 2197
    },
    priceCent:1899
}];
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
            $${(product.priceCent/100).toFixed(2)}
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
        <button class="add-to-cart-button">
            Add to Cart
        </button>
    </div>`;
});
console.log(productHTML);
document.querySelector('.js-product-grid').innerHTML = productHTML;
