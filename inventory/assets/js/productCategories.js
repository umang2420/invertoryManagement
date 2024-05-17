document.addEventListener('DOMContentLoaded', function () {
    const CategoryButton = document.querySelector("#btn1");

    CategoryButton.addEventListener('click', function (event) {
        event.preventDefault();

        const categoryName = document.getElementById('categoryName').value;
        const categoryDescription = document.getElementById('categoryDescription').value;

        if (categoryName === "") {
            document.querySelector("#small1").innerHTML = "Please enter a category name.";
            return false;
        }
        else {
            document.querySelector("#small1").innerHTML = "";
        }
        if (categoryDescription === "") {
            document.querySelector("#small2").innerHTML = "Please enter a category description.";
            return false;
        }
        else {
            document.querySelector("#small2").innerHTML = "";
        }
        saveCategory(categoryName, categoryDescription);
        document.getElementById('categoryForm').reset();
        window.location.href = "homePage.html";
    });
});

function saveCategory(name, description) {
    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push({
        name: name,
        description: description
    });
    localStorage.setItem('categories', JSON.stringify(categories));
}
