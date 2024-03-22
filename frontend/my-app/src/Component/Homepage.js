import React, { useState } from 'react'
import Navbar from "../Component/Navbar"
import email_icon from '../Assets/email.png'
import domain_icon from '../Assets/domain_icon.png'
import value_icon from '../Assets/value_icon.png'
import url_icon from '../Assets/www_icon.png'


const Homepage = () => {
    
    const [dnsRecords, setDNSRecords] = useState([ { "domain": "example1.com", "recordType": "A", "value": "192.168.1.1" },
    { "domain": "example2.com", "recordType": "A", "value": "192.168.1.2" },
    { "domain": "example3.com", "recordType": "MX", "value": "mail.server3.com" },
    { "domain": "example4.com", "recordType": "CNAME", "value": "www.example4.com" },
    { "domain": "example5.com", "recordType": "A", "value": "192.168.1.5" },
    { "domain": "example6.com", "recordType": "A", "value": "192.168.1.6" },
    { "domain": "example7.com", "recordType": "MX", "value": "mail.server7.com" },
    { "domain": "example8.com", "recordType": "CNAME", "value": "www.example8.com" },
    { "domain": "example9.com", "recordType": "A", "value": "192.168.1.9" },
    { "domain": "example10.com", "recordType": "A", "value": "192.168.1.10" },
    { "domain": "example11.com", "recordType": "MX", "value": "mail.server11.com" },
    { "domain": "example12.com", "recordType": "CNAME", "value": "www.example12.com" },
    { "domain": "example13.com", "recordType": "A", "value": "192.168.1.13" },
    { "domain": "example14.com", "recordType": "A", "value": "192.168.1.14" },
    { "domain": "example15.com", "recordType": "MX", "value": "mail.server15.com" },
    { "domain": "example16.com", "recordType": "CNAME", "value": "www.example16.com" },
    { "domain": "example17.com", "recordType": "A", "value": "192.168.1.17" },
    { "domain": "example18.com", "recordType": "A", "value": "192.168.1.18" },
    { "domain": "example19.com", "recordType": "MX", "value": "mail.server19.com" },
    { "domain": "example20.com", "recordType": "CNAME", "value": "www.example20.com" },
    { "domain": "example21.com", "recordType": "A", "value": "192.168.1.21" },
    { "domain": "example22.com", "recordType": "A", "value": "192.168.1.22" },
    { "domain": "example23.com", "recordType": "MX", "value": "mail.server23.com" },
    { "domain": "example24.com", "recordType": "CNAME", "value": "www.example24.com" },
    { "domain": "example25.com", "recordType": "A", "value": "192.168.1.25" },
    { "domain": "example26.com", "recordType": "A", "value": "192.168.1.26" },
    { "domain": "example27.com", "recordType": "MX", "value": "mail.server27.com" },
    { "domain": "example28.com", "recordType": "CNAME", "value": "www.example28.com" },
    { "domain": "example29.com", "recordType": "A", "value": "192.168.1.29" },
    { "domain": "example30.com", "recordType": "A", "value": "192.168.1.30" },
    { "domain": "example31.com", "recordType": "MX", "value": "mail.server31.com" },
    { "domain": "example32.com", "recordType": "CNAME", "value": "www.example32.com" },
    { "domain": "example33.com", "recordType": "A", "value": "192.168.1.33" },
    { "domain": "example34.com", "recordType": "A", "value": "192.168.1.34" },
    { "domain": "example35.com", "recordType": "MX", "value": "mail.server35.com" },
    { "domain": "example36.com", "recordType": "CNAME", "value": "www.example36.com" },
    { "domain": "example37.com", "recordType": "A", "value": "192.168.1.37" },
    { "domain": "example38.com", "recordType": "A", "value": "192.168.1.38" },
    { "domain": "example39.com", "recordType": "MX", "value": "mail.server39.com" },
    { "domain": "example40.com", "recordType": "CNAME", "value": "www.example40.com" },
    { "domain": "example41.com", "recordType": "A", "value": "192.168.1.41" },
    { "domain": "example42.com", "recordType": "A", "value": "192.168.1.42" },
    { "domain": "example43.com", "recordType": "MX", "value": "mail.server43.com" },
    { "domain": "example44.com", "recordType": "CNAME", "value": "www.example44.com" },
    { "domain": "example45.com", "recordType": "A", "value": "192.168.1.45" },
    { "domain": "example46.com", "recordType": "A", "value": "192.168.1.46" },
    { "domain": "example47.com", "recordType": "MX", "value": "mail.server47.com" },
    { "domain": "example48.com", "recordType": "CNAME", "value": "www.example48.com" },
    { "domain": "example49.com", "recordType": "A", "value": "192.168.1.49" },
    { "domain": "example50.com", "recordType": "A", "value": "192.168.1.50" },
    { "domain": "example51.com", "recordType": "MX", "value": "mail.server"}
  
    ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");

  
  // Calculate the index of the last record on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  // Calculate the index of the first record on the current page
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Get the records for the current page
  const currentRecords = dnsRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  // Filter records based on the search term
  const filteredRecords = currentRecords.filter((record) =>
    record.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination functions
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(Math.ceil(dnsRecords.length / recordsPerPage), prevPage + 1));
  };

  // Calculate total pages
  const totalPages = Math.ceil(dnsRecords.length / recordsPerPage);
  return (
    <div>
      <Navbar/>

      <div className="dns-records-table">
      <h3>DNS Records Table</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by domain"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-number">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={goToNextPage}
          disabled={indexOfLastRecord >= dnsRecords.length}
        >
          Next
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Type</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record._id}>
              <td>{record.domain}</td>
              <td>{record.recordType}</td>
              <td>{record.value}</td>
              <td>
                <button
                //   onClick={() => deleteRecord(record._id)}
                  className="delete-button"
                >
                  <i class='bx bxs-trash' ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default Homepage
