let id=0;

var socket = io.connect('http://localhost:5000', {autoConnect : false});
socket.open();


socket.on('Welcome', function (data) {

  console.log(data);
  id=data;
  $("#joueur").html("Vous êtes le joueur " +data);
  if (id==0)
  {
    $('#deco').hide();
  }
  
  
 
});

socket.on('grille', function (data) {

   console.log(data);
   update_case_ui(data)
    
  });


  socket.on('Wait', function (data) {

    $("#info_connexion").html(data);   
    
  });


  socket.on('Full', function (data) {

    $("#info_connexion").html(data); 
    $('#deco').hide();      
   
  });


  socket.on('Start', function (data) {

    $("#info_connexion").html(data); 
    init();      
   
  });


  socket.on('joueur_courant', function (data) {

    $("#joueur_courant").html("C'est le tour du joueur " +data); 
     
   
  });


  socket.on('victoire',function (data) {
    console.log("victoire")
    if(data==id)
    {
      $("#victoire").html("Gagné !"); 
      $("#victoire").css("background-color","green");
      $("#victoire").css("color","white");
    }
    else
    {
      $("#victoire").html("Perdu !"); 
      $("#victoire").css("background-color","red");
      $("#victoire").css("color","white");
    }
    

  });


  




