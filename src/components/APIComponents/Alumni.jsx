import React, { useState, useEffect } from 'react';
import P from '../typography/P';
import H3 from '../typography/H3';
import WhatsApp from './WhatsApp';

export default function Alumni() {
  const [allStudents, setAllStudents] = useState(true);
  const [alumni, setAlumni] = useState(false);
  const [addCert, setAddCert] = useState(false);
  const [del, setDel] = useState(false);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch('https://aj2709.pythonanywhere.com/Register/Students')
      .then((response) => response.json())
      .then((data) => {
        const registrationData = data.RegistrationData;
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
          certificate: null, //certificate data is not provided in the API
        }));
        setStudentData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <main>
      <div className="flex gap-6 my-6">
        <button
          onClick={() => {
            setAllStudents(true);
            setAlumni(false);
          }}
          className={`rounded-full py-2 px-10 inline-flex items-center justify-center ${
            allStudents ? 'bg-primary text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setAllStudents(false);
            setAlumni(true);
          }}
          className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${
            alumni ? 'bg-primary text-white' : 'bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
      {allStudents && (
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
                  <button
                    onClick={() => {
                      setAddCert(true);
                    }}
                    className="rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white"
                  >
                    🏆 Add Certificate
                  </button>
                  <button
                    onClick={() => {
                      setDel(true);
                    }}
                    className="rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white"
                  >
                    🚫 Delete Student
                  </button>
                </div>
              </div>

              {del && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                  <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
                    <P className="my-4 !text-xl">{`Are you sure you want to delete ${student.name}'s profile?`}</P>
                    <div className="my-4">
                      <input
                        type="text"
                        id="name"
                        placeholder={`Enter ${student.name}'s Email to delete his/her profile`}
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <button className="rounded-full max-w-max my-2 py-2 px-4 inline-flex items-center justify-center bg-black text-white">
                      🚫 Delete Student
                    </button>
                    <button
                      onClick={() => {
                        setDel(false);
                      }}
                      className="rounded-full ms-4 max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {addCert && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                  <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
                    <P className="my-4 !text-xl">{`Upload certificate for ${student.name}`}</P>
                    <div className="my-4">
                      <input
                        type="file"
                        id="name"
                        placeholder="Upload Certificate"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <button className="rounded-full max-w-max my-2 py-2 px-4 inline-flex items-center justify-center bg-black text-white">
                      Update Certificate
                    </button>
                    <button
                      onClick={() => {
                        setAddCert(false);
                      }}
                      className="rounded-full ms-4 max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
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
