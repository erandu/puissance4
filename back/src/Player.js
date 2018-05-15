class Player {
	constructor(id) {
		// this.name = "player" + Math.floor(Math.random() * Math.floor(99999)).toString(); TODO later
		this.id = id
		
	}

	setGrid(_grid){
		this.grid=_grid;
	}

	play(col) {
		this.grid.play(col, this.id);
	}
}

export default Player;