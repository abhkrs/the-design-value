import React, { useState, useEffect } from 'react';
import P from '../typography/P';
import H3 from '../typography/H3';
import WhatsApp from '../APIComponents/WhatsApp';
import AddCertificate from '../APIComponents/AddCertificate';
import DeleteRegStudent from '../APIComponents/DeleteRegStudent';
import Pagination from '../sections/Pagination';

export default function CompleatedCourse() {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://aj2709.pythonanywhere.com/Register/courseCompleted');
      const data = await response.json();
      const registrationData = data.RegistrationData;
      const fetchedData = Object.keys(registrationData).reverse().map((key) => ({
        id: key,
        name: registrationData[key].FullName,
        email: registrationData[key].Email,
        mobile: registrationData[key].MobNo,
        course: registrationData[key].Course,
        feePaid: registrationData[key].PaymentDetails.some(
          (payment) => payment.PaymentStatus === true
        ),
        whatsapp: registrationData[key].WhatsApp,
        regUid: registrationData[key].regUid,
        studentID: registrationData[key].StudentId,
        certificate: null,
      }));
      setStudentData(fetchedData);
      setSearchResults(fetchedData);
      setLoading(false);
      console.log(studentData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setIsLoading(false);
    }
  };

  const debounce = (func, delay) => {
    clearTimeout(debounceTimeout);
    const timeout = setTimeout(func, delay);
    setDebounceTimeout(timeout);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    debounce(() => performSearch(query), 500);
  };

  const performSearch = (query) => {
    if (query === '') {
      setSearchResults(studentData);
    } else {
      const filteredResults = studentData.filter((student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.email.toLowerCase().includes(query.toLowerCase()) ||
        (student.mobile && student.mobile.includes(query)) ||
        student.studentID.toLowerCase().includes(query.toLowerCase()) 
      );
      setSearchResults(filteredResults);
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults(studentData);
    } else {
      performSearch(searchQuery);
    }
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(searchResults.length / itemsPerPage));

  const highlightText = (text, query) => {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  const handleAddCertificateSuccess = async () => {
    setLoading(true);
    await fetchData();
  };

  const handleDeleteSuccess = async () => {
    setLoading(true);
    await fetchData();
  };

  return (
    <main className='relative'>
      <div className="block w-1/3 absolute -top-[134px] z-40">
        <input
          type="search"
          name="searchbox"
          placeholder="Search here"
          id=""
          className="border rounded-md shadow px-3 py-2 w-full h-10"
          value={searchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
        />
      </div>
      {(isLoading || (searchQuery && searchResults.length === 0) || (studentData.length === 0)) ? (
        <div className='h-80 flex items-center justify-center'>
          <p>{isLoading ? 'Loading...' : (studentData.length===0?"None of the students has compleated the course yet.":'No match found...!')}</p>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="flex items-center justify-center h-80">
              <p>Loading...</p>
            </div>
          ) : (
            <div>
              {searchResults
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((student) => (
                  <div className="my-3" key={student.id}>
                    <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6">
                      <div>
                        <H3 className="!text-3xl">{highlightText(student.name, searchQuery)}</H3>
                        <H3 className="text-secondary my-2">Student ID - {highlightText(student.studentID, searchQuery)}</H3>
                        <WhatsApp whatsapp={student.whatsapp} regUid={student.regUid} />
                      </div>
                      <div className="px-8 flex flex-col justify-center gap-2">
                        <P>
                          <span className="!font-semibold">EMAIL ID - </span>
                          {highlightText(student.email, searchQuery)}
                        </P>
                        <P>
                          <span className="!font-semibold">MOBILE NUMBER - </span>
                          {highlightText(student.mobile, searchQuery)}
                        </P>
                        <P>
                          <span className="!font-semibold">COURSE - </span>
                          {highlightText(student.course, searchQuery)}
                        </P>
                      </div>
                      <div className="px-6 flex flex-col justify-center items-end">
                        {student.feePaid ? (
                          <P className="max-w-max">✅ Fee Paid for this Month</P>
                        ) : (
                          <P className="max-w-max">❌ Fee Not Paid for this Month</P>
                        )}
                        <AddCertificate stdData={student} onSuccess={handleAddCertificateSuccess} />
                        <DeleteRegStudent stdData={student} onSuccess={handleDeleteSuccess} />
                      </div>
                    </div>
                  </div>
                ))}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={() => setCurrentPage(currentPage + 1)}
                onPrev={() => setCurrentPage(currentPage - 1)}
                className="mt-8 -mb-3"
              />
            </div>
          )}
        </div>
      )}
    </main>
  );
}