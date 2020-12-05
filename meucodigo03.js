var sair = confirm("Confirma ir para a página do Google?");  //isso serve para aparecer uma janela onde o usuário vai escolher por OK ou cancel.
if(sair == 1){
	window.location = "http://www.google.com.br";  //caso a variável sera igual a 1 clicando em OK da janela, ele desviará para uma outra localão(window.location) que no casi será a página da Google.
}
//Esse exemplo é muito importante para que usuários não saiam sem a confirmação e perderem seus dados, exemplo de site que usa isso é o facebook