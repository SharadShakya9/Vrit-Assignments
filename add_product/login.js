const container = document.querySelector('.container')
const toSignUpBtn = document.getElementById('register')
const toSignInBtn = document.getElementById('login')
const signInBtn = document.getElementById('sign-in')
const loginForm = document.getElementById('login-form')

toSignUpBtn.addEventListener("click", () => {
    container.classList.add("active")
})

toSignInBtn.addEventListener("click", () => {
    container.classList.remove("active")
})

signInBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if (!loginForm.checkValidity()) {
        loginForm.reportValidity()
        return
    }

    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: document.querySelector(".username").value,
            password: document.querySelector(".password").value,
            expiresInMins: 30, // optional, defaults to 60
        }),
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if (res.message) {
                alert(res.message)
                return
            }

            localStorage.setItem('token', res.token)

            window.location.href = "./store.html"
        })
        .catch((error) => {
            console.error('error', error)
        })
})