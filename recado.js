let logged = sessionStorage.getItem("logged");

let user = undefined;
let isEdit = false;
let IdEdit = undefined;

function chekLogged(){
    if(!logged){
        window.location.href = "./recado.html";
        return
    }
    const dataUser = localStorage.getItem(logged);
    if (dataUser){
        user = JSON.parse(dataUser);
    }
}

function MostrarMensagem(){
    let HTMLmessagens = "";
    const messagens = user.recados;
    if (messagens.length){
            messagens.forEach((messagen, index) =>{
                HTMLmessagens +=
                    <tr class="line">
                        <td class="tabela_id">${index}</td>
                        <td class="tabela_oque">${messagen.description}</td>
                        <td class="tabela_como">${messagen.details}</td>
                        <td class="tabela_botao">
                            <button class="btnedita" onClik="ediMessage(${index})">editar</button>
                            <button class="btnapaga" onClik="deleteMessage(${index})">apagar</button>   
                        </td>
                    </tr>
            };
        };
}
document.getElementById("tbody").innerHTML = HTMLmessages;
}

function salvarRecado()
    const forMessage = document.getElemenById("formrecado");
    const descripition = forMessage.message.value;
    const details = formMessage.details.value;

  if (!details || !description) {
    alert("campo em branco");
    return;
  }
  const message = {
    description,
    details,
  };

  if (isEdit) {
    user.recados[IdEdit] = message;
    isEdit = false;
    IdEdit = null;
  } else {
    user.recados.push(message);
  }

  localStorage.setItem(user.username, JSON.stringify(user));
  MostrarMensagem();
  formMessage.reset();
}
function deleteMessage(index) {
    user.recados.splice(index, 1);
    localStorage.setItem(user.username, JSON.stringify(user));
    MostrarMensagem();
  }
  
  function editMessage(index) {
    const formMessage = document.getElementById("form-message");
    formMessage.message.value = user.recados[index].description;
    formMessage.details.value = user.recados[index].details;
    isEdit = true;
    IdEdit = index;
  }
  
  function logout() {
    sessionStorage.clear();
    window.location.href = "./login.html";
  }