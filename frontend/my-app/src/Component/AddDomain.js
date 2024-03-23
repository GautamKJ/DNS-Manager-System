import React, { useState } from 'react'
import Navbar from "../Component/Navbar"
import email_icon from '../Assets/email.png'
import domain_icon from '../Assets/domain_icon.png'
import value_icon from '../Assets/value_icon.png'
import url_icon from '../Assets/www_icon.png'

const AddDomain = () => {
    document.title='Add Domain';
    
    const [file, setFile] = useState(null);
    let fileReader;
    const handleFileRead = async(e) => {
            const content = fileReader.result;


            console.log(typeof(content));
            const dnsRecordsData = JSON.parse(content); 
            console.log(dnsRecordsData); 
                
                
            for (const key in dnsRecordsData) {
                
            console.log(dnsRecordsData[key] );

            }
    }

      const handleFileChosen = (file) => {
        
        fileReader = new FileReader();
        
        fileReader.onloadend = handleFileRead;
        
        fileReader.readAsText(file);
        
      };
  return (
    <div>
      <Navbar/>

      <div class="home_container">

        <div class="home_box">
        
        <form onSubmit={onsubmit} class="home_file">
        
            <input type="file" class="home_file_input" name="uploadedimage" onChange={e => handleFileChosen(e.target.files[0])}  aria-describedby="inputGroupFileAddon03" aria-label="Upload" accept=".json, .cvs"/>
            <button type="submit" id="cbtn" class="home_addbtn" >Submit</button>
            
        </form>

        {/* <div className='home_choice'>OR</div> */}
    <form className='home_form'>
        <div className='home_input_box'>
        <div className='home_input'>
        <img src={domain_icon}/>
            <input type="text" placeholder="Domain" name="name"  />
        </div>   
          
        <div className='home_input'>
        <img src={url_icon}/>
            <input type="text" placeholder="RecordType" name="name"  />
        </div>  

        <div className='home_input'>
        <img src={value_icon}/>
            <input type="text" placeholder="Value" name="name"  />
        </div>  

        <div className='home_submit'>
            <div className='home_submitbtn'>ADD</div>
            
        </div>
        </div>
        </form>

    </div>
    </div>
    
    </div>
  )
}

export default AddDomain
