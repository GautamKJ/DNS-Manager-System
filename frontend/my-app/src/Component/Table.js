import React, { useState } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Modal from "./Modal";


const Table = (record) => {
    const[modalOpen,setmodalOpen] = useState(false);
    const editRow=()=>{
        // <Modal/>
        // navigate("/modal");
        setmodalOpen(true);
        
        console.log("EDIT");
    
    }
    // console.log(record);
    // console.log(record.props);

  return (
    <>
   {modalOpen && <Modal props={record}/>}
            <tr key={record._id}>
              <td>{record.props.domain}</td>
              <td>{record.props.recordType}</td>
              <td>{record.props.value}</td>
              <td className='actions'>
              <BsFillTrashFill
                      className="delete-btn"
                    //   onClick={() => deleteRow(idx)}
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
