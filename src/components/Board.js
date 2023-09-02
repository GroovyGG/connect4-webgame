import './Board.css'
import { rows, cols } from '../constants/constants'
import React, { useState } from 'react';

const Board = ({ handleColumnClick }) => {

    const tiles = 
        new Array(rows)
            .fill()
            .map(_ => new Array(cols).fill(''));

    return (
        <div className="board">
            {tiles.map((row, i) => 
                row.map((_, j) => 
                    <div 
                        key={i+'-'+j} 
                        className={`tile tile-${i}-${j}`} 
                        onClick={() => handleColumnClick(j)}
                    />
                )
            )}
        </div>   
    )
}

export default Board;
