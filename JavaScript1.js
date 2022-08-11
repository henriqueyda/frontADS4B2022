function Enviar() {
    var nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

// function ChecaEmail(event) {
//     var email = document.getElementById("emailid");
//     if (email.value == "") {
//         alert('Favor preencher o email!')
//         event.preventDefault()
//     }
//     else {
//         alert('Seu email é: ' + email.value)
//     }
// }