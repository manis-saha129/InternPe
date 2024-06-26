function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}
