export function getRandomThrow(randomThrow) {
    randomThrow = Math.ceil(Math.random() * 3);
    if (randomThrow === 1) {
        return 'rock';
    }
    if (randomThrow === 2) {
        return 'paper';
    }
    else { 
        return 'scissors';
    }
}