import React from 'react'
import TableRow from './TableRow';


const Table = ({numRows, numCols, changeColor}) => {
    const getTable = () => {
        let table = [];
        for(let i=0; i < numRows; i ++){
            table[i] = <TableRow key={i}
                        numCols={numCols} 
                        changeColor={changeColor}
                        />
        }
        return table;
    }
    
    return (
        <div className='table'>
            {getTable()}
        </div>
    )
}

export default Table;