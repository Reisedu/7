const session = localStorage.getItem("session");
let logged = sessionStorage.getItem("logged");
const qSelect = (select) => document.querySelector(select);

chekLogged();

const login = () => {
    const form = qSelect("#formlogin")

    const user = JSON.parse(localStorage.getItem(form.email.value));
    if(!user){
        alert("email ou senha incorreto");
        return;
    }
    if (!form.senha.value === user.senha){
        alert("email ou senha incorreto");
        return;
    }
    saveSession (form.email.value);
    window.location = "./recado.html";
};

function saveSession(data){
    sessionStorage.setItem("logged", data);  
}

function chekLogged(){
    if (logged){
        saveSession(logged, session);
        window.location.href = "./recado.html"
    }
}

