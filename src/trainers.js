function N() {
	shuffleHandInDeck();
	draw(prizes.length);
	supporterPlayed = true;
	updateDebug();
}

function sycamore() {
	discardHand();
	draw(7);
	updateDebug();
	supporterPlayed = true;
}

function levelball() {
	searchDeck();
	param = "data.card.hp <= 90 && data.card.supertype.indexOf('mon') >= 0";
}

function ultraball() {
	discardHandVar = 1;
	alert("Please discard two cards from your hand.");
	param = "data.card.supertype.indexOf('mon') >= 0";
}

function trainermail() {
	peekDeck(4);
	param = "data.card.supertype == 'Trainer' && !data.card.name.includes('Mail')";
}

function maxelixir() {
	peekDeck(6);
	param = "data.card.supertype == 'Energy' && data.card.subtype == 'Basic'";
}
