import React, { useState } from "react";

const Modal = (record) => {

    const [detail,setdetail]=useState({domain:record.props.props.domain,recordType:record.props.props.recordType,valueR:record.props.props.value});

const handleChange=(e)=>{

    setdetail({...detail,[e.target.name]:e.target.value})

}

const handleSubmit=()=>{
    
}


  return (
    <>
  
      <div className="modal-container">
        <div className="modal_box">
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
              <label htmlFor="page">RecordType</label>
              <input
                type="text"
                name="recordType"
                value={detail.recordType}
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
              Submit
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
