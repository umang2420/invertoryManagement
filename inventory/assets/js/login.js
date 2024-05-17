let loginButton = document.getElementById("btn2");
loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    check();
});

function check() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "") {
        document.querySelector("#small1").innerHTML = "Please enter email";
        return false;
    } else {
        document.querySelector("#small1").innerHTML = "";
    }

    if (password === "") {
        document.querySelector("#small2").innerHTML = "Please enter password";
        return false;
    }
    else {
        document.querySelector("#small2").innerHTML = "";
    }

    let password1 = 'Umang123@';
    let hashPassword = password1.hashCode();

    let data = {
        email: "umanggarg121@gmail.com",
        password: hashPassword,
    };

    if (email === data.email && password.hashCode() === data.password) {
        localStorage.setItem(data.email, JSON.stringify(data));
        localStorage.setItem("islogged", "true");
        alert("Correct details");
        window.location.href = "homePage.html";
    } else {
        alert("Wrong details");
    }
}

String.prototype.hashCode = function () {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};
