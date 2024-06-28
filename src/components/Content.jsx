// import React from 'react';
// import './Innovision.css';

// const Innovision = () => {
//   return (
//     <div className="innovision-wrapper">
//       <div className="header">
//         <h1>Welcome to Innovision 2024</h1>
//         <p>
//           An exciting competition organized by E-Cell IET DAVV. This event is designed to identify,
//           nurture, and fund the next wave of innovative startups. Innovision will be a hybrid event,
//           combining both online and offline components, providing a comprehensive platform for
//           budding entrepreneurs.
//         </p>
//       </div>
//       <div className="section">
//         <h2>Registration Details</h2>
//         <ul>
//           <li>Start Date: 28th June 2024</li>
//           <li>End Date: 9th July 2024</li>
//           <li>Platform: Online registration via our official website</li>
//         </ul>
//       </div>
//       <div className="section">
//         <h2>Competition Overview</h2>
//         <p>
//           Innovision 2024 will consist of four stages of rigorous competition and also insightful speaker
//           sessions. Each stage will have clearly defined criteria for judging and sorting startups,
//           ensuring a fair and thorough evaluation process. Teams that qualify in the top tiers will be
//           provided with funding up to INR 20,000 thousand and the opportunity to secure grants up to
//           INR 10 lakhs.
//         </p>
//       </div>
//       <div className="section">
//         <h2>Event Highlights</h2>
//         <ul>
//           <li>Hybrid Format: Some speaker sessions and competition stages will be conducted offline, while others will be online.</li>
//           <li>Expert Panels: Gain insights from experienced entrepreneurs, industry experts, and investors.</li>
//           <li>Networking Opportunities: Connect with fellow innovators, mentors, and potential investors.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Innovision;

import React, { useState } from 'react';
import './Innovision.css';

const Innovision = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  return (
    <div className="event-details-container">
      <div className="buttons">
        <button onClick={() => setActiveSection('welcome')} className='content-button'>Welcome</button>
        <button onClick={() => setActiveSection('registration')} className='content-button'>Registration Details</button>
        <button onClick={() => setActiveSection('competition')} className='content-button'>Competition Overview</button>
        <button onClick={() => setActiveSection('highlights')} className='content-button'>Event Highlights</button>
        
      </div>
      <div className="content">
        {activeSection === 'welcome' && (
          <div>
            <h2>Welcome to Innovision 2024</h2>
            <p>
              Welcome to Innovision 2024, an exciting competition organized by E-Cell IET DAVV. This event is designed to identify, nurture, and fund the next wave of innovative startups. Innovision will be a hybrid event, combining both online and offline components, providing a comprehensive platform for budding entrepreneurs.
            </p>
          </div>
        )}
        {activeSection === 'registration' && (
          <div id="kuchhtoh">
            <h2>Registration Details</h2>
            <p>- Start Date: 28th June 2024</p><br />
            <p>- End Date: 9th July 2024</p><br />
            <p>- Platform: Online registration via our official website</p>
          </div>
        )}
        {activeSection === 'competition' && (
          <div>
            <h2>Competition Overview</h2>
            <p>
              Innovision 2024 will consist of four stages of rigorous competition and also insightful speaker sessions. Each stage will have clearly defined criteria for judging and sorting startups, ensuring a fair and thorough evaluation process. Teams that qualify in the top tiers will be provided with funding up to INR 20,000 thousand and the opportunity to secure grants up to INR 10 lakhs.
            </p>
          </div>
        )}
        {activeSection === 'highlights' && (
          <div>
          <h2>Event Highlights</h2>
          <p>- Hybrid Format: Some speaker sessions and competition stages will be conducted offline, while others will be online.</p><br />
          <p>- Expert Panels: Gain insights from experienced entrepreneurs, industry experts, and investors.</p><br />
          <p>- Networking Opportunities: Connect with fellow innovators, mentors, and potential investors.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Innovision;
