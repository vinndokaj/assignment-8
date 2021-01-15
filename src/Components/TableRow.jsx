import React from 'react'
import TableCell from './TableCell';

const TableRow = ({numCols, changeColor}) => {
    const getRow = () => {
        let row = [];
        for(let i=0; i < numCols; i++){
            row[i]=<TableCell key={i}
                    changeColor={changeColor} 
                    />
        }
        return row;
    }

    return (
        <div className='tableRow'>
            {getRow()}
        </div>
    )
}

export default TableRow;