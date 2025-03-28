document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "iPhone 15 Pro", category: "phones", price: 999, image: "images/iphone15.jpg" },
        { id: 2, name: "MacBook Pro", category: "laptops", price: 1999, image: "images/macbook.jpg" },
        { id: 3, name: "Wireless Earbuds", category: "accessories", price: 129, image: "images/earbuds.jpg" }
    ];

    const productContainer = document.getElementById("product-container");

    function displayProducts() {
        productContainer.innerHTML = "";
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    displayProducts();
});

