import './Board.css'
import{rows,cols} from '../constants/constants'

const Board = () => {

    const tiles = 
        new Array(rows)
            .fill()
            .map(_ => new Array(cols).fill(''))

    return <div className="board">
        {tiles.map((row,i) => 
            row.map((_,j) => <div key={i+'-'+j}/>)
        )}
    </div>   
}

export default Board