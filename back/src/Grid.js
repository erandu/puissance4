import Player from "./Player"


class Grid {

	
	constructor( _player1 , _player2) {
		this.grid = [];
		this.nbrOfCol = 7;
		this.nbrOfRow = 6;
		this.player1= _player1;
		this.player2= _player2;
		this.victoire=false;


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
				this.check_victoire(userId, col, i)
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

	check_victoire(userId, col, i){
		
				this.compteur_droite_gauche(userId, col, i);
				this.compteur_haut_bas(userId, col, i);
				this.compteur_diagonale_haut_gauche_bas_droite(userId, col, i);
				this.compteur_diagonale_haut_droite_bas_gauche(userId, col, i);
					

	}

	compteur_droite_gauche(userId, colonne , ligne){
				let aligne=0;
				let j = colonne;
				do {
					if (this.grid[ligne][j] == userId)
						{
							aligne++;
							if (aligne==4)
								this.victoire=true;
						}
						j++;
				}
				while ( this.grid[ligne][j] ==userId && j< this.nbrOfCol);

				j = colonne;
				aligne=aligne-1; //Le pion joué est déjà compté
				do {
					if (this.grid[ligne][j] == userId)
					{
							aligne++;
							if (aligne==4)
								this.victoire=true;
					}
					j--;
				}
				while ( this.grid[ligne][j] ==userId && j>=0);				
	}

	compteur_haut_bas(userId, colonne , ligne){
				let aligne=0;
				let j = ligne;
				do {
					if (this.grid[j][colonne] == userId)
						{
							aligne++;
							if (aligne==4)
								this.victoire=true;
						}
						j++;
				}
				while ( this.grid[j-1][colonne] ==userId && j< this.nbrOfRow);

				j = ligne;
				aligne=aligne-1; //Le pion joué est déjà compté
				do {
					if (this.grid[j][colonne] == userId)
					{
							aligne++;
							if (aligne==4)
								this.victoire=true;
					}
					j--;
				}
				while ( this.grid[j+1][colonne] ==userId && j>=0);

	}

	compteur_diagonale_haut_gauche_bas_droite(userId, colonne , ligne){
		let aligne=0;
		let j = colonne;
		let i = ligne;
		
		do {		
			
			if (this.grid[i][j] == userId)
				{
					aligne++;
					if (aligne==4)
						this.victoire=true;
				}
				j--;
				i--;
		}
		while ( this.grid[i][j] == userId && j>=0  && i >=0);

		j = colonne;
		i = ligne;
		aligne=aligne-1; //Le pion joué est déjà compté
			if(ligne!=this.nbrOfRow-1)
			{

				do {
					console.log(i)
					console.log(j)	
					if (this.grid[i][j] == userId)
					{
							aligne++;
							if (aligne==4)
								this.victoire=true;
					}
					j++;
					i++;
					if(i==this.nbrOfRow){
						break;
					}
				}
				while ( this.grid[i][j] ==userId && j<this.nbrOfCol && i<this.nbrOfRow);	
			}	
		}


		compteur_diagonale_haut_droite_bas_gauche(userId, colonne , ligne){
			let aligne=0;
			let j = colonne;
			let i = ligne;
			
			do {		
				
				if (this.grid[i][j] == userId)
					{
						aligne++;
						if (aligne==4)
							this.victoire=true;
					}
					j++;
					i--;
			}
			while ( this.grid[i][j] == userId && j<this.nbrOfCol  && i >=0);
	
			j = colonne;
			i = ligne;
			aligne=aligne-1; //Le pion joué est déjà compté
				if(ligne!=this.nbrOfRow-1)
				{
	
					do {
						console.log(i)
						console.log(j)	
						if (this.grid[i][j] == userId)
						{
								aligne++;
								if (aligne==4)
									this.victoire=true;
						}
						j--;
						i++;
						if(i==this.nbrOfRow){
							break;
						}
					}
					while ( this.grid[i][j] ==userId && j>=0 && i<this.nbrOfRow);	
				}	
			}
		

		

	reset_gride(){
		for (let i = 0; i < this.nbrOfRow; i++) {
			for (let j = 0; j < this.nbrOfCol; j++) {
				this.grid[i][j]=0;	
			}
		}

	}
}

export default Grid;