document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const categoryNameDropdown = document.getElementById('categoryName');
    const productButton = document.querySelector("#btn2");

    let categories = JSON.parse(localStorage.getItem('categories')) || [];

    categories.forEach(function (category) {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        categoryNameDropdown.appendChild(option);
    });

    productButton.addEventListener('click', function (event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productPrice = document.getElementById('productPrice').value;
        const productSKU = document.getElementById('productSKU').value;
        const productQuantity = document.getElementById('productQuantity').value;
        const selectedCategory = categoryNameDropdown.value;


        if (productName === "") {
            document.querySelector("#small1").innerHTML = "Please enter a productName .";
            return false;
        }
        else {
            document.querySelector("#small1").innerHTML = "";
        }

        if (productDescription === "") {
            document.querySelector("#small2").innerHTML = "Please enter a productDescription.";
            return false;
        }
        else {
            document.querySelector("#small2").innerHTML = "";
        }

        if (productPrice === "") {
            document.querySelector("#small3").innerHTML = "Please enter a productPrice .";
            return false;
        }
        else {
            document.querySelector("#small3").innerHTML = "";
        }

        if (productSKU === "") {
            document.querySelector("#small4").innerHTML = "Please enter a productSKU.";
            return false;
        }
        else {
            document.querySelector("#small4").innerHTML = "";
        }

        if (productQuantity === "" || productQuantity <= 0) {
            document.querySelector("#small5").innerHTML = "Please enter a valid product quantity minimum 1.";
            return false;
        } else {
            document.querySelector("#small5").innerHTML = "";
        }
        
        saveProduct(productName, productDescription, productPrice, productSKU, selectedCategory, productQuantity);
        productForm.reset();
        window.location.href = "homePage.html";
    });
});

function saveProduct(name, description, price, sku, category, quantity) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({
        name: name,
        description: description,
        price: price,
        sku: sku,
        quantity: quantity,
        category: category
    });

    localStorage.setItem('products', JSON.stringify(products));
}

