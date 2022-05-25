const session = localStorage.getItem("session");
let logged = sessionStorage.getItem("logged");
const qSelect = (select) => document.querySelector(select);

const form = document.querySelector("#formcadastro");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const user JSON.parse(localStorage.getItem("users") || "[]");
    const email = form.email.value;
    const senha = form.senha.value;
    const repetesenha = form.repetesenha.value;
    const usuarioexiste = user.some(
        (usuario) => usuario.email === email
    );
    if(usuarioexiste){
        alert("email ja cadastrado");
        return
    }

    if (senha != repetesenha){
        alert("as senhas precisam ser iguais");
        return;
    }
    user.push({
        email: email;
        senha: senha;
    });
    localStorage.setItem("users", JSON.strigify(user));
    alert("cadastrado");
    location.href"login.html";
});