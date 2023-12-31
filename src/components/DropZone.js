import './DropZone.css'
import { cols, rows, size } from '../constants/constants'
import ActiveCoin from './ActiveCoin'
import Winner from './Winner'
import { useEffect, useState } from 'react';

const DropZone = () => {

    const [turn,setTurn] = useState(1)
    const [dropped,setDropped] = useState([])
    const [winner,setWinner] = useState(0)

    const reset = () => {
        setTurn(1)
        setDropped([])
        setWinner(0)
    }

    const findWinner = () => {
        const p1 = dropped.filter(d => d.player === 1)

        p1.forEach(({x,y}) => {
            if (p1.find(m => x === m.x + 1 && y === m.y) &&
                p1.find(m => x === m.x + 2 && y === m.y) &&
                p1.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(1)
            if (p1.find(m => x === m.x && y === m.y + 1) &&
                p1.find(m => x === m.x && y === m.y + 2) &&
                p1.find(m => x === m.x && y === m.y + 3)
            )
            setWinner(1)
            if (p1.find(m => x === m.x + 1 && y === m.y + 1) &&
                p1.find(m => x === m.x + 2 && y === m.y + 2) &&
                p1.find(m => x === m.x + 3 && y === m.y + 3)
            )
            setWinner(1)
            if (p1.find(m => x === m.x + 1 && y === m.y - 1) &&
                p1.find(m => x === m.x + 2 && y === m.y - 2) &&
                p1.find(m => x === m.x + 3 && y === m.y - 3)
            )
            setWinner(1)
        })

        const p2 = dropped.filter(d => d.player === 2)

        p2.forEach(({x,y}) => {
            if (p2.find(m => x === m.x + 1 && y === m.y) &&
                p2.find(m => x === m.x + 2 && y === m.y) &&
                p2.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(2)
            if (p2.find(m => x === m.x && y === m.y + 1) &&
                p2.find(m => x === m.x && y === m.y + 2) &&
                p2.find(m => x === m.x && y === m.y + 3)
            )
            setWinner(2)
            if (p2.find(m => x === m.x + 1 && y === m.y + 1) &&
                p2.find(m => x === m.x + 2 && y === m.y + 2) &&
                p2.find(m => x === m.x + 3 && y === m.y + 3)
            )
            setWinner(2)
            if (p2.find(m => x === m.x + 1 && y === m.y - 1) &&
                p2.find(m => x === m.x + 2 && y === m.y - 2) &&
                p2.find(m => x === m.x + 3 && y === m.y - 3)
            )
            setWinner(2)
        })
    }
    useEffect(() => {
        if (dropped.length === rows * cols) setWinner(-1);
        findWinner();
    
        if (dropped.length > 0) {
            const lastDropped = dropped[dropped.length - 1];
            if (lastDropped.status === 'dropping') {
                setDropped(dropped.slice(0, -1).concat({ ...lastDropped, status: 'dropped' }));
            }
        }
    }, [dropped.length]);
    
    // Inside your DropZone component

    useEffect(() => {
        if(dropped.length === rows*cols)
            setWinner(-1)

        findWinner()

        // Update the status of the last dropped coin from 'dropping' to 'dropped'
        if (dropped.length > 0) {
            const lastDropped = dropped[dropped.length - 1];
            if (lastDropped.status === 'dropping') {
                setDropped(dropped.slice(0, -1).concat({ ...lastDropped, status: 'dropped' }));
            }
        }

},[dropped.length])


    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key={i} 
                className={`p${m.player} ${m.status}`}
                style={{transform:`translate(${m.y*size}px,${m.x*(size)+150}px)`}}>
            </div>
        )}
        {
            winner 
            ?   <Winner winner={winner} reset={reset}/>
            :   <ActiveCoin dropped={dropped} turn={turn} setDropped={setDropped} setTurn={setTurn} />
        }
    </div>    
    
    
}

export default DropZone