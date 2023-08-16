import React, { useState, useEffect } from 'react';
import Section from '../uielements/Section';
import H2 from '../typography/H2';

async function fetchCompletedMentors(currentPage, itemsPerPage, searchQuery) {
  try {
    const response = await fetch(
      `https://aj2709.pythonanywhere.com/Callback/mentor`
    );
    const data = await response.json();
    if (data.status === 'Success') {
        console.log(data)
      const allMentors = Object.values(data.MentorData).reverse();
      if (searchQuery) {
        const filteredMentors = allMentors.filter(mentor => 
          mentor.FullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.EmailId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.ContactNo.includes(searchQuery) ||
          mentor.CurrentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.City.toLowerCase().includes(searchQuery.toLowerCase())
          // Add more conditions for other fields
        );
        return filteredMentors;
      } else {
        return allMentors;
      }
    }
  } catch (error) {
    console.error('Error fetching completed mentors:', error);
    return [];
  }
}

export default function MentorAdmin() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchCompletedMentors(currentPage, itemsPerPage, searchQuery)
      .then(data => setSearchResults(data))
      .finally(() => setIsLoading(false));
  }, [currentPage, searchQuery]);

  return (
    <div className='p-6'>
      <H2 className="!text-3xl">New Applications for Mentor</H2>
      {/* <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults.length === 0 ? (
          <p>No new application for mentors.</p>
        ) : (
          searchResults.map((mentor, index) => (
            <div key={index} className="grid grid-cols-2 bg-accent rounded-md my-6 shadow p-4">
              <div className="p-3">
                <strong>Full Name:</strong> {mentor.FullName}<br />
                <strong>Contact No:</strong> {mentor.ContactNo}<br />
                <strong>Email ID:</strong> {mentor.EmailId}<br />
                
                <strong>City:</strong> {mentor.City}<br />
                
                <strong>LinkedIn Profile:</strong> {mentor.LinkedIn}<br />
                
              </div>
              <div className="p-3">
              <strong>Total Years of Experience:</strong> {mentor.TotalYearsExp}<br />
              <strong>Current Company:</strong> {mentor.CurrentCompany}<br />
              <strong>Days Interested:</strong> {mentor.DaysInterested}<br />
                <strong>Expected CTC:</strong> {mentor.ExpectedCTC}<br />
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
}
