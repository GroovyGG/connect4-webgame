import { useEffect, useState } from "react";

const ActiveCoin = ({turn, dropped, setDropped, setTurn}) => {

    const [column, setColumn] = useState(0); 
    const [row, setRow] = useState()

    const handleColumnClick = (col) => {
        if (dropped.find(drop => drop.x === 0 && drop.y === col)){
            return;
        }
        else {
            const len = 5 - dropped.filter(drop => drop.y === col).length;
            setRow(len);
            setTimeout(() => {
                setDropped([
                    ...dropped,
                    {x : len, y: col, player: turn, status: 'dropped'} // change 'dropping' to 'dropped'
                ]);
                const newTurn = turn === 1 ? 2 : 1;
                setTurn(newTurn);
                localStorage.setItem('turn', newTurn);
                //setTurn(turn === 1 ? 2 : 1);
            }, 500);
        }
    }

    useEffect(() => {
        setColumn();
        setRow();
    }, [turn])

    const columns = [0, 1, 2, 3, 4, 5, 6];

    return (
        <div className="board">
            {columns.map(col => (
                <div 
                key={col} 
                className={`active p${turn} column-${col} dropping`} 
                onClick={() => handleColumnClick(col)}
                >
                </div>
            
            ))}
        </div>
    );
}

export default ActiveCoin;
