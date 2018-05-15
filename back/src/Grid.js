import Player from "./Player"


class Grid {

	
	constructor( _player1 , _player2) {
		this.grid = [];
		this.nbrOfCol = 7;
		this.nbrOfRow = 6;
		this.player1= _player1;
		this.player2= _player2;


		// Puissance 4
	    for (let i = 0; i < this.nbrOfRow; i++) {
	        this.grid.push([]);
	        for (let j = 0; j < this.nbrOfCol; j++) {
	            this.grid[i].push(0);
	        }
	    }
	}

	play(userId, col) {
		if (col < 0 || col >= this.nbrOfCol){
			return 1;
		}
		for (let i = this.nbrOfRow - 1; i >= 0; i--){
			if (this.grid[i][col] === 0) {
				this.grid[i][col] = userId;
				return 0;
			}
		}
		return 1;
	}

	show() {
		
		
		for (let i = 0; i < 6; i++){
			console.log(this.grid[i]);
		}
		;
	}

	check_victoire(userId, col){
		let i=0;
		
		
		for ( i = this.nbrOfRow - 1; i >= 0; i--){
			if (this.grid[i][col] != 0) { //On detecte le coup joué
				this.compteur_droite_gauche(userId, col, i);
				
			}
		}
		
		

	}

	compteur_droite_gauche(userId, colonne , ligne){

	let aligne=0;
	let j = colonne;
	console.log(this.grid[ligne][colonne])
	do {
		if (this.grid[ligne][j] == userId)
			{
				aligne++;
				console.log("on rentre");
			}
				j++;
	}
	while ( this.grid[ligne][j] !=userId && j< this.nbrOfCol);

	j = colonne;
	aligne=aligne-1;
	do {
		if (this.grid[ligne][j] == userId)
				aligne++;
		j--;
	}
	while ( this.grid[ligne][j] !=userId && j>=0);

	console.log("aligne horizontale");
	console.log(aligne);



	}
}

export default Grid;