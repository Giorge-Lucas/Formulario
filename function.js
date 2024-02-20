function enviar() {

    var exibe = document.getElementById("concluido");
    var subForm = document.getElementById("enviado");
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;

    if (nome == "" || sobrenome == "" || email == "" ) {
        exibe.innerHTML = "complete as informações"
    }  if (nome != "" && sobrenome != "" && email != ""  ) {
        exibe.innerHTML = "enviado"

        
    }
}
