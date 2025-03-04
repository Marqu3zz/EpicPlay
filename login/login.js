function setCookie(nome, valor, dias) {
    let data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expires = "expires=" + data.toUTCString();
    document.cookie = nome + "=" + encodeURIComponent(valor) + ";" + expires + ";path=/";
}

function makeLogin() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login === "admin" && password === "1234") { // Simulando credenciais válidas
        setCookie("login", login, 7); // Salva o login por 7 dias
        setCookie("logado", "true", 7);
        window.location.href = "../index.html"; // Redireciona para a página após login
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function togglePassword() {
    password = document.getElementById('password');
    
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}