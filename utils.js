export function didUserWin(player, computer) {
    if ((player === 'rock' && computer === 'scissors')
     || (player === 'scissors' && computer === 'paper')
     || (player === 'paper' && computer === 'rock')) {
        return 'win';
    }
    if (player === computer) {
        return 'draw';
    }
    return 'lose';
    
}
