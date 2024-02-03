const move = (function () {
    let gameboard = [['@', '@', '@'], 
                ['@', '@', '@'], 
                ['@', '@', '@']];
    let totalMoves = 0;
    console.table(gameboard);
    

    const endGame = () => {
        if (totalMoves % 2 === 0) {
            if (gameboard[0][0] === gameboard[0][1] && gameboard[0][0] === gameboard[0][2]) {
                console.log('player 2 won');
            }
        }
    }
    const topLeft = () => {
        if (gameboard[0][0] === '@' && totalMoves % 2 === 0 ) {
            gameboard[0][0] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[0][0] === '@' && totalMoves % 2 !== 0) {
            gameboard[0][0] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
        endGame();
    }
    const topMiddle = () => {
        if (gameboard[0][1] === '@' && totalMoves % 2 === 0 ) {
            gameboard[0][1] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[0][1] === '@' && totalMoves % 2 !== 0) {
            gameboard[0][1] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
        endGame();
    }
    const topRight = () => {
        if (gameboard[0][2] === '@' && totalMoves % 2 === 0 ) {
            gameboard[0][2] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[0][2] === '@' && totalMoves % 2 !== 0) {
            gameboard[0][2] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
        endGame();
    }
    const middleLeft = () => {
        if (gameboard[1][0] === '@' && totalMoves % 2 === 0 ) {
            gameboard[1][0] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[1][0] === '@' && totalMoves % 2 !== 0) {
            gameboard[1][0] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
    }
    const middleMiddle = () => {
        if (gameboard[1][1] === '@' && totalMoves % 2 === 0 ) {
            gameboard[1][1] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[1][1] === '@' && totalMoves % 2 !== 0) {
            gameboard[1][1] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
    }
    const middleRight = () => {
        if (gameboard[1][2] === '@' && totalMoves % 2 === 0 ) {
            gameboard[1][2] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[1][2] === '@' && totalMoves % 2 !== 0) {
            gameboard[1][2] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
    }
    const bottomLeft = () => {
        if (gameboard[2][0] === '@' && totalMoves % 2 === 0 ) {
            gameboard[2][0] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[2][0] === '@' && totalMoves % 2 !== 0) {
            gameboard[2][0] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
    }
    const bottomMiddle = () => {
        if (gameboard[2][1] === '@' && totalMoves % 2 === 0 ) {
            gameboard[2][1] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[2][1] === '@' && totalMoves % 2 !== 0) {
            gameboard[2][1] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
    }
    const bottomRight = () => {
        if (gameboard[2][2] === '@' && totalMoves % 2 === 0 ) {
            gameboard[2][2] = 'X';
            totalMoves++;
            console.table(gameboard);
        } else if (gameboard[2][2] === '@' && totalMoves % 2 !== 0) {
            gameboard[2][2] = 'O';
            totalMoves++;
            console.table(gameboard);
        } else {
            console.log('taken');
        }
    }
    return { topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight };
})();


