import React, { useState } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Modal from "./Modal";


const Table = (record) => {
    const[modalOpen,setmodalOpen] = useState(false);

    const editRow=()=>{
        setmodalOpen(true);
    }

    
    const deleteRow=(id)=>{
    }

    const handleStateChange =() => {
      setmodalOpen(false);
    };
    

  return (
    <>
   {modalOpen &&  <Modal record={record} onStateChange={handleStateChange}/>}
            <tr key={record._id}>
              <td>{record.props.domain}</td>
              <td>{record.props.recordType}</td>
              <td>{record.props.value}</td>
              <td className='actions'>
              <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(record._id)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow()}
                    />
              </td>
            </tr>
            
    </>
  )
}

export default Table
