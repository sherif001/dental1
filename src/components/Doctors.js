import React from 'react';
import '../styles/Doctors.css';

const Doctors = () => {
  return (
    <div className="doctors-page">
      <h1 className="page-title">Meet Our Expert Doctors</h1>
      <div className="doctors-list">
        <div className="doctor-card">
          <img src="doctor1.jpg" alt="Doctor 1" className="doctor-img" />
          <h3>Dr. John Doe</h3>
          <p>Specialist in Orthodontics</p>
        </div>
        <div className="doctor-card">
          <img src="doctor2.jpg" alt="Doctor 2" className="doctor-img" />
          <h3>Dr. Jane Smith</h3>
          <p>Expert in Cosmetic Dentistry</p>
        </div>
        {/* أضف المزيد من الأطباء هنا */}
      </div>
    </div>
  );
};

export default Doctors;
