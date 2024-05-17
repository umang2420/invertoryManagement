document.addEventListener("DOMContentLoaded", function () {
    function filterProducts() {
        const search = document.getElementById('searchInput').value;
        const minPrice = (document.getElementById('minPriceInput').value);
        const maxPrice = (document.getElementById('maxPriceInput').value);
        const filteredProducts = products.filter(product => {
            const matchName = product.name.includes(search);
            const priceRange = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
            return matchName && priceRange;
        });
        productList.innerHTML = '';

        filteredProducts.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.sku}</td>
            <td>${product.category}</td>
            <td><button class="addToCart" data-sku="${product.sku}">Add to Cart</button></td>`;
            productList.appendChild(row);
        });

        document.querySelectorAll('.addToCart').forEach(button => {
            button.addEventListener('click', addToCart);
        });

    }

    function addToCart(event) {
        const sku = event.target.getAttribute('data-sku');
        const product = products.find(prod => prod.sku === sku);
        if (product && product.quantity > 0) {
            product.quantity--;
            if (product.quantity < 3) {
                alert(` The stock level is low for ${product.name}`);
            }
            document.querySelectorAll('#productList tr').forEach(row => {
                if (row.cells[4].textContent === sku) {
                    row.cells[3].textContent = product.quantity;
                }
            });
        } else {
            alert('Product out of stock!');
        }
    }

    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('minPriceInput').addEventListener('input', filterProducts);
    document.getElementById('maxPriceInput').addEventListener('input', filterProducts);

    const categoryList = document.getElementById('categoryList');
    const productList = document.getElementById('productList');

    let isLogged = localStorage.getItem("islogged");

    if (!isLogged || isLogged !== "true") {
        window.location.href = "login.html";
    }

    let logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "login.html";
    });

    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const categoryQuantities = [];
    products.forEach(product => {
        const category = product.category;
        categoryQuantities[category] = (categoryQuantities[category] | 0) + product.quantity;
    });

    categories.forEach(category => {
        const row = document.createElement('tr');
        row.innerHTML =
            `<td>${category.name}</td   >
            <td>${category.description}</td>
            <td>${categoryQuantities[category.name] || 0}</td>`;
        categoryList.appendChild(row);
    });

    products.forEach(function (product) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.sku}</td>
        <td>${product.category}</td>
        <td><button class="addToCart" data-sku="${product.sku}">Add to Cart</button></td>`;
        productList.appendChild(row);
    });

    document.querySelectorAll('.addToCart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

document.getElementById('categoryButton').addEventListener('click', function () {
    window.location.href = 'productCategories.html';
});

document.getElementById('productsButton').addEventListener('click', function () {
    window.location.href = 'productButon.html';
});
