const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.getElementById("password"); 

form.addEventListener ("btn", (event) => {
    event.preventDefault();

    //verifica se o email esta preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Insira endereço de e-mail");
        return;
    }

    //verifica se a senha esta preenchida
    if (!validatePassword((passwordInput.value))) {
        alert("A senha precisa ter no mínimo 8 dígitos.");
        return;
}

    //Enviar se tudo estiver preenchido
    form.getElementsByTagName("btn")[0].click();
})

//função de validação de e-mail
function isEmailValid(email){
    //regex de validação
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}   

//funcção de validação de senha
function validatePassword(password, minDigits=8) {
    if (password.length >= minDigits ) {
      // senha válida
    return true;
    }
    // senha inválida
    return false;
}


