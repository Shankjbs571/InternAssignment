import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  const infoBoxStyle = (bgColor) => ({
    background: bgColor,
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px'
  });

  return (
    <div className="md:w-1/3 p-4">
      <div className="bg-gray-100 p-5 mb-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> OUR LOCATIONS</h4>
        <p>1485 Bayshore Blvd, Ste 154, San Francisco, CA 95124</p>
      </div>
      <div className="bg-blue-100 p-5 mb-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faPhone} /> CONNECT WITH US</h4>
        <p>CALL: +011 3253 4567<br />+011 3253 4569</p>
      </div>
      <div className="bg-teal-100 p-5 mb-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-2"><FontAwesomeIcon icon={faClock} /> VISITING HOURS</h4>
        <p>Sunday: 08:00 AM - 10:00 PM<br />Monday - Friday: 05:00 AM - 12:00 AM</p>
      </div>
    </div>
  );
};

export default ContactInfo;
