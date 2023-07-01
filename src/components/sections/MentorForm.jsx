import { useState } from 'react';

const MentorsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [resume, setResume] = useState(null);
  const [experience, setExperience] = useState('1');

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='relative'>
      {!isOpen && (
        <button
          onClick={toggleForm}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Apply Now
        </button>
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            
            <form onSubmit={handleSubmit} className='relative'>
            <button
              onClick={toggleForm}
              className="absolute -top-2 right-0 text-red-500"
            >
              Close
            </button>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 p-1 rounded ml-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 p-1 rounded ml-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-300 p-1 rounded ml-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="border border-gray-300 p-1 rounded ml-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resume">Resume</label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="border border-gray-300 p-1 rounded ml-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="experience">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="border border-gray-300 p-1 rounded ml-6"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorsForm;