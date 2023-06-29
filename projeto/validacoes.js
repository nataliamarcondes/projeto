
// scripts de validacao

window.onload = function(){
    console.log("pagina carregada..");

    function validarFormulario(){

        let erro = 0;
        if( document.getElementById("nome").value.length == 0){
             console.log("campo nome nao preenchido");   
             document.getElementById("nome_msg").innerHTML = "Campo nome obrigatório.";                
             document.getElementById("nome").style.border = "1px solid red";             
             erro++;
        } else{
          document.getElementById("nome_msg").innerHTML = "";                
          document.getElementById("nome").style.border = "1px solid green";             
       }   

        if( document.getElementById("email").value.length == 0){            
            console.log("campo email nao preenchido") ;
            document.getElementById("email_msg").innerHTML = "Campo e-mail obrigatório.";            
            document.getElementById("email").style.border = "1px solid red";
            erro++;
       } else{
          document.getElementById("email_msg").innerHTML = "";                
          document.getElementById("email").style.border = "1px solid green";             
      }

        if( document.getElementById("mensagem").value.length == 0){            
            console.log("campo comentario nao preenchido") ;
            document.getElementById("mensagem_msg").innerHTML = "Campo mensagem obrigatório.";
            document.getElementById("mensagem").style.border = "1px solid red";
            erro++;
       } else{
          document.getElementById("mensagem_msg").innerHTML = "";                
          document.getElementById("mensagem").style.border = "1px solid green";             
      }


       if(erro > 0){
            console.log("erros encontrados");
       } else{
            console.log("Validação ok.");
       }       
        
    }  


    // vincular ao clicar no botao, funcao validar
    document.getElementById("enviar").onclick = function(){
            validarFormulario();
            return false; // evitar redirecionamento
    }



}