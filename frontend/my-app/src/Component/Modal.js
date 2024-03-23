import React, { useState } from "react";

const Modal = (props) => {

    
    
const [detail,setdetail]=useState({domain:props.record.props.domain,propsType:props.record.props.recordType,valueR:props.record.props.value});

    

const handleChange=(e)=>{

    setdetail({...detail,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{
    e.preventDefault();
    
    props.onStateChange();
    
}


  return (
    <>
        
      <div className="modal-container">
      
        <div className="modal_box">
        <h2>Edit</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="page">Domain</label>
              <input
                type="text"
                name="domain"

                value={detail.domain}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="page">propsType</label>
              <input
                type="text"
                name="propsType"
                value={detail.propsType}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="page">Value</label>
              <input
                type="text"
                name="valueR"
                value={detail.valueR}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn">
              Update
            </button>
            <button  className="cncl_btn">
              Cancel
            </button>
          </form>
        </div>
      </div>

    </>
  );
};

export default Modal;
