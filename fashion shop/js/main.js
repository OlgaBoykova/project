'use strict';
const products = [
    {id:1, title: 'Mango People T-shirt', price: 20, rating: 4.5},
    {id:2, title: 'Cherry Blouse', price: 33, rating: 4.0},
    {id:3, title: 'Mango People Jacket', price: 45, rating: 4.5},
    {id:4, title: 'Flower Dress', price: 27, rating: 4.0},
    {id:5, title: 'Black&White Dress', price: 75, rating: 3.5},
    {id:6, title: 'Gray Jacket', price: 105, rating: 4.0},
    {id:7, title: 'Cotton Pants', price: 87, rating: 4.5},
    {id:8, title: 'Blue Hoody', price: 35, rating: 5.0},
];
const getStarRating = (prodRating) => {
    const getFullStar = (num) => {
        let result = '';
        for (let i = 0; i < num; i++)
        result += '<i class="fas fa-star"></i>';
        return result;
    }
    let result = getFullStar(String(prodRating)[0]);
    if (String(prodRating)[2] === '5') {
        return result + '<i class="fas fa-star-half-alt"></i>'
    }
    else {
        return result;
    }
};
const renderProduct = (prodProperties) => {
    let starsRating = getStarRating(prodProperties.rating);
    return `<div class="product">
                <img src="img/item-${prodProperties.id}.png" alt="clothes" class="product-img"><br>
                <a href="#" class="product-name">${prodProperties.title}</a><br>
                <p class="product-price">$${prodProperties.price}
                    <span class="catalog-products-stars">${starsRating}</span>
                </p>
                <div class="overlay">
                    <button class="overlay-btn"> Add to Cart</button>
                </div>
            </div>`
};
const renderPage = list => {
    let productslist = list.map(obj => renderProduct(obj));
    productslist.forEach(element => {
        document.querySelector('.products-wrapper').insertAdjacentHTML('beforeend', element);
    });
}
renderPage(products);