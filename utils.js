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

export function calcLeadingTotal(win, draw, lose) {
    if (win > draw && win > lose && (win !== draw || win !== lose)) {
        return 'win';
    }
    else if (draw > win && draw > lose && (draw !== win || draw !== lose)) {
        return 'draw';
    } 
    else if (lose > draw && lose > win && (lose !== draw || lose !== win)) {
        return 'lose';
    }
    else {
        return 'reset';
    }
} 