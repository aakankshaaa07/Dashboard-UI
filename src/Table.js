import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Table() {

  // Dummy data for the table
  const customers = [
    {
      "id": 1,
      "name": "Jane Cooper",
      "company": "Microsoft",
      "phone": "(225) 555-0118",
      "email": "jane@microsoft.com",
      "country": "United States",
      "dateAdded": "2023-02-02",
      "status": "Active"
    },
    {
      "id": 2,
      "name": "Floyd Miles",
      "company": "Yahoo",
      "phone": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "country": "Croatia",
      "dateAdded": "2023-01-04",
      "status": "Inactive"
    },
    {
      "id": 3,
      "name": "Ronald Richards",
      "company": "Adobe",
      "phone": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "country": "Israel",
      "dateAdded": "2023-03-04",
      "status": "Inactive"
    },
    {
      "id": 4,
      "name": "Marvin McKinney",
      "company": "Tesla",
      "phone": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "country": "Iran",
      "dateAdded": "2023-07-04",
      "status": "Active"
    },
    {
      "id": 5,
      "name": "Jerome Bell",
      "company": "Google",
      "phone": "(629) 555-0129",
      "email": "jerome@google.com",
      "country": "Germany",
      "dateAdded": "2023-04-04",
      "status": "Active"
    },
    {
      "id": 6,
      "name": "Kathryn Murphy",
      "company": "Microsoft",
      "phone": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "country": "Brazil",
      "dateAdded": "2023-03-16",
      "status": "Active"
    },
    {
      "id": 7,
      "name": "Emily Davis",
      "company": "Cisco",
      "phone": "(555) 123-4567",
      "email": "emily@cisco.com",
      "country": "Finland",
      "dateAdded": "2023-06-17",
      "status": "Inactive"
    },
    {
      "id": 8,
      "name": "Benjamin Thompson",
      "company": "Caterpillar",
      "phone": "(456) 789-0123",
      "email": "benjamin@caterpillar.com",
      "country": "China",
      "dateAdded": "2023-07-04",
      "status": "Active"
    },
    {
      "id": 9,
      "name": "Sophia Johnson",
      "company": "Apple",
      "phone": "(321) 098-7654",
      "email": "sophia@apple.com",
      "country": "India",
      "dateAdded": "2023-05-08",
      "status": "Active"
    },
    {
      "id": 10,
      "name": "Samuel Martinez",
      "company": "Walmart",
      "phone": "(890) 123-4567",
      "email": "samuel@walmart.com",
      "country": "South Korea",
      "dateAdded": "2023-01-10",
      "status": "Inactive"
    },
    {
      "id": 11,
      "name": "Olivia Brown",
      "company": "Meta",
      "phone": "(567) 890-1234",
      "email": "olivia@meta.com",
      "country": "Switzerland",
      "dateAdded": "2023-05-07",
      "status": "Inactive"
    },
    {
      "id": 12,
      "name": "Jacob Wilson",
      "company": "Visa",
      "phone": "(456) 789-0123",
      "email": "Jacob@visa.com",
      "country": "Egypt",
      "dateAdded": "2023-06-22",
      "status": "Active"
    },
    {
      "id": 13,
      "name": "Ava Anderson",
      "company": "Samsung",
      "phone": "(234) 567-8901",
      "email": "ava@samsung.com",
      "country": "Japan",
      "dateAdded": "2023-02-25",
      "status": "Active"
    },
    {
      "id": 14,
      "name": "Ethan Taylor",
      "company": "Walmart",
      "phone": "(678) 901-2345",
      "email": "ethan@walmart.com",
      "country": "Australia",
      "dateAdded": "2023-07-12",
      "status": "Active"
    },
    {
      "id": 15,
      "name": "Isabella Thomas",
      "company": "NVIDIA",
      "phone": "(789) 012-3456",
      "email": "isabella@nvidia.com",
      "country": "Turkey",
      "dateAdded": "2023-03-19",
      "status": "Active"
    },
    {
      "id": 16,
      "name": "Liam Smith",
      "company": "Aramco",
      "phone": "(555) 987-6543",
      "email": "liam@aramco.com",
      "country": "Saudi Arabia",
      "dateAdded": "2023-05-17",
      "status": "Active"
    },
    {
      "id": 17,
      "name": "Henry Anderson",
      "company": "Goldman Sachs",
      "phone": "(555) 987-6543",
      "email": "Henry@gs.com",
      "country": "New Zealand",
      "dateAdded": "2023-07-02",
      "status": "Active"
    },
    {
      "id": 18,
      "name": "Noah Davis",
      "company": "JPMorgan Chase",
      "phone": "(555) 876-5432",
      "email": "noah@jpmc.com",
      "country": "UAE",
      "dateAdded": "2023-05-23",
      "status": "Active"
    },
    {
      "id": 19,
      "name": "Amelia Wilson",
      "company": "Procter & Gamble",
      "phone": "(555) 876-5432",
      "email": "amelia@png.com",
      "country": "South Africa",
      "dateAdded": "2023-01-15",
      "status": "Inactive"
    },
    {
      "id": 20,
      "name": "John Doe",
      "company": "Mastercard",
      "phone": "(555) 654-3210",
      "email": "john@mastercard.com",
      "country": "Belgium",
      "dateAdded": "2023-01-26",
      "status": "Active"
    },
    {
      "id": 21,
      "name": "Aaron Mitchell",
      "company": "Amazon",
      "phone": "(987) 654-3210",
      "email": "aaron@amazon.com",
      "country": "United Kingdom",
      "dateAdded": "2023-05-21",
      "status": "Inactive"
    }
  ]

  // Keeps track of the currently selected page
  const [currentPage, setCurrentPage] = useState(1);

  // To manage the search input
  const [searchQuery, setSearchQuery] = useState('');

  // To manage the sorting features
  const [sortOption, setSortOption] = useState('');

  // Maximum number of entries displayed on the page
  const pageSize = 4;

  // Function to filter and sort the data based on search query and select option
  const filteredAndSortedData = customers.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'country') {
      return a.country.localeCompare(b.country);
    } else if (sortOption === 'company') {
      return a.company.localeCompare(b.company);
    } else if (sortOption === 'newest') {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    } else {
      return 0;
    }
  });

  // Calculate the total number of pages based on the data and page size
  const totalPages = Math.ceil(filteredAndSortedData.length / pageSize);

  // Slice the data to be displayed on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  // Function is called when a page button is clicked, and updates the currentPage state accordingly
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle sorting based on the selected option
  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  // Function is called when a search query is made
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };


  return (
    <div className="Table">
      <div className="tableHeader">
        <div className="heading">
          <h2>Active Members</h2>
        </div>
        <div className="filters">
          <div className="searchBar">
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
            />
          </div>
          <div className="filter">
            <select onChange={handleSort} value={sortOption}>
              <option value="">Sort By</option>
              <option value="newest">Newest</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="country">Country</option>
              <option value="company">Company</option>
            </select>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td><button className={item.status==="Active"? 'active' : 'inactive'}>{item.status}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tableFooter">
        <div className="tableStatus">
          {/* Shows the number of entries visible out of the total */}
          Showing data {startIndex+1} to {endIndex>filteredAndSortedData.length? filteredAndSortedData.length: endIndex} of {filteredAndSortedData.length} entries
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'activePage' : ''}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;