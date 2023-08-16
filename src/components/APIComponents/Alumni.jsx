import React, { useState, useEffect } from 'react';
import P from '../typography/P';
import H3 from '../typography/H3';
import WhatsApp from './WhatsApp';
import DeleteRegStudent from './DeleteRegStudent';
import AddCertificate from './AddCertificate';

export default function Alumni() {
  const [loading, setLoading] = useState(true);
  const [allStudents, setAllStudents] = useState(true);
  const [alumni, setAlumni] = useState(false);
  const [studentData, setStudentData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://aj2709.pythonanywhere.com/Register/Students');
      const data = await response.json();
      const registrationData = data.RegistrationData;
      console.log(registrationData)
      const fetchedData = Object.keys(registrationData).map((key) => ({
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
        certificate: null,
      }));
      setStudentData(fetchedData.reverse());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="block w-1/3 absolute -top-[70px] z-40">
                <input
                    type="search"
                    name="searchbox"
                    id=""
                    className="border rounded-md shadow px-3 py-2 w-full h-10"
                />
            </div>
      <div className="flex gap-6 my-6">
        <button
          onClick={() => {
            setAllStudents(true);
            setAlumni(false);
          }}
          className={`rounded-full py-2 px-10 inline-flex items-center justify-center ${allStudents ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setAllStudents(false);
            setAlumni(true);
          }}
          className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${alumni ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
        >
          Completed
        </button>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center h-80">
          <p>Loading...</p>
        </div>
      ) : (allStudents && (
        <div>
          {studentData.map((student) => (
            <div className="my-3" key={student.id}>
              <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6">
                <div>
                  <H3 className="!text-3xl">{student.name}</H3>
                  <H3 className="text-secondary my-2">Student ID - {student.id}</H3>
                  <WhatsApp whatsapp={student.whatsapp} regUid={student.regUid} />
                </div>
                <div className="px-8 flex flex-col justify-center gap-2">
                  <P>
                    <span className="!font-semibold">EMAIL ID - </span>
                    {student.email}
                  </P>
                  <P>
                    <span className="!font-semibold">MOBILE NUMBER - </span>
                    {student.mobile}
                  </P>
                  <P>
                    <span className="!font-semibold">COURSE - </span>
                    {student.course}
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
        </div>)
      )}

      {alumni &&
        <div>
          <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
            <div>
              <H3 className="!text-3xl">Abhiroop Bannerjee</H3>
              <H3 className="text-secondary my-2">Student ID - TDVM73001FE</H3>
              <P>✅ Student added to WhatsApp Group</P>
            </div>
            <div className='px-8 flex flex-col justify-center gap-2'>
              <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
              <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
              <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
              <P><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
            </div>
            <div className='px-6 flex flex-col justify-center items-end'>
              <P className="max-w-max">✅ Fee Paid for this Month</P>
              <button
                className='rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                🏆 Add Certificate
              </button>
              <button
                className='rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white'>
                🚫 Delete Student
              </button>
            </div>
          </div>

          <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
            <div>
              <H3 className="!text-3xl">Abhiroop Bannerjee</H3>
              <H3 className="text-secondary my-2">Student ID - TDVM73001FE</H3>
              <P>✅ Student added to WhatsApp Group</P>
            </div>
            <div className='px-8 flex flex-col justify-center gap-2'>
              <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
              <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
              <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
              <P><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
            </div>
            <div className='px-6 flex flex-col justify-center items-end'>
              <P className="max-w-max">✅ Fee Paid for this Month</P>
              <button
                className='rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                🏆 Add Certificate
              </button>
              <button
                className='rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white'>
                🚫 Delete Student
              </button>
            </div>
          </div>
        </div>
      }
    </main>
  );
}
