import express from "express";

import Grid from './Grid';
import Player from './Player';

let waiting_queue  = [];
let myGrid = null;

let joueur_1=0;
let joueur_2=0;
let joueur_courant=0;

let id_courant=0;
let game_started=false;


const app = express()

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('../front'));
server.listen(80, () => console.log('Puissance 4 listening on port 80!'));



app.get('/', function (req, res) {
res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {


    socket.on('news', function (data) {    
        
        if(data.id==joueur_courant && game_started==true && myGrid.victory==0)
            {
                myGrid.play(data.id,data.pos_x);
                //myGrid.check_victory(data.id, data.pos_x);
                //myGrid.show();
                if(myGrid.victory==1)
                {
                    console.log("victory");
                    io.emit('victory', joueur_courant);
                   //myGrid.reset_gride();

                }

                if(myGrid.victory==-1)
                {
                    console.log("match nul");
                    io.emit('nul', "Match nul !");
                   //myGrid.reset_gride();

                }
                    
                if(joueur_courant==joueur_1)
                    joueur_courant=joueur_2;                
                else
                    joueur_courant=joueur_1 ;

            io.emit('joueur_courant', joueur_courant)    
            io.emit('grille', myGrid.grid);
            
            }

       
        });


    socket.on('co', function(){
            if(waiting_queue.length<2)
            {
            waiting_queue.push(new Player(socket.id));        
            socket.emit('Welcome',waiting_queue[waiting_queue.length-1].id)
            id_courant=waiting_queue[waiting_queue.length-1].id;
                    if(waiting_queue.length==2 )
                        {   
                            

                            myGrid = new Grid (waiting_queue[0],waiting_queue[1]); 
                            game_started=true;
                            joueur_1=waiting_queue [0].id;
                            joueur_2=waiting_queue [1].id;
                            joueur_courant=joueur_1; 
                            io.emit('Start',"Le jeu commence :")
                            io.emit('joueur_courant', joueur_courant) 
                            
                            
                        
                        }
                    else if(waiting_queue.length==1)
                        {
                            socket.emit('Wait',"En attente d'un 2e joueur. Vous commencerez la partie")
                        }
                }
            else
            {
                socket.emit('Full',"Deux joueurs sont déjà connectés. Veuillez réactualiser")
                socket.disconnect('unauthorized');
            }
    }); 

    socket.on('deco', function(){
        waiting_queue=waiting_queue.filter( (player) => ( player.id !== socket.id ) )    
     }); 
    
    socket.on('disconnect', function(){
        waiting_queue=waiting_queue.filter( (player) => ( player.id !== socket.id ) )
    }); 

  
});


