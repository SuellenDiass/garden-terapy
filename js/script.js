//garantir que o formulário funcione apenas se os campos estiverem preenchidos!
// dequemviraoevento.addEventListener("evento" oquedevefazer)
// linkar o <script> no html
// function nomeDaFuncao(){codigo deve ser executado}

 document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

 function validaFormulario(){
   if(document.getElementById("nome").value != "" && 
     document.getElementById("email").value != "" &&         
     document.getElementById("telefone").value != ""){
      alert("Prontinho! Você receberá as novidades por e-mail!") 
  }else{
      alert("Por favor! Falta preencher um dos campos!") 
  }
}




