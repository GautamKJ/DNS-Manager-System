import React, { useState } from 'react'

const Dropdown = ({selected,setSelected}) => {
    const [isActive,setIsActive] =useState(false);
    const options = ["Domain","recordType","Value"];

    console.log(selected);

  return (
    <>
        <div className='dropdown' >
            <div className='dropdown-btn' onClick={e=>setIsActive(!isActive)}>{selected}
            <span className='fas fa-caret-down'></span>
            </div>
            {isActive && <div className='dropdown-content'>
            {
                options.map((option,index)=>(
                    <div onClick={(e)=>
                        {setIsActive(false);
                        setSelected(e.target.textContent)
                        }}
                         className='dropdown-item'>{option} </div>  
                ))
            }
            </div>
            }
        </div>
    </>
  )
}

export default Dropdown
