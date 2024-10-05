


// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); // Main services
//   const [selectedServiceId, setSelectedServiceId] = useState(null); // Store the selected service ID
//   const [location, setLocation] = useState('');
//   const [professionals, setProfessionals] = useState([]);
//   const dropdownRef = useRef(null); 

//   // Dummy services data for demonstration
//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap installation/replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },


//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
          
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },

//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 7, title: 'TV Repair' },
//           { id: 7, title: 'Microwave and Small Appliance Repair' },
//           { id: 7, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     // Toggle the selected service ID when clicked
//     setSelectedServiceId((prevServiceId) =>
//       prevServiceId === serviceId ? null : serviceId
//     );
//   };

//   const handleLocationSubmit = async (e) => {
//     e.preventDefault();
//     // Mock API call to fetch professionals based on location and selected sub-service
//     const fetchedProfessionals = [
//       { id: 1, name: 'John Doe', rating: '4.9' },
//       { id: 2, name: 'Jane Smith', rating: '4.7' },
//     ];
//     setProfessionals(fetchedProfessionals);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           {/* <div className="search-bar">
//             <input type="text" placeholder="Search for services..." />
//           </div> */}
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Service Selection Buttons */}
//       <div className="service-selection-buttons">
//         <h2>Select a Service</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id}>
//               <button 
//                 className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {service.title}
//               </button>

//               {/* Sub-service Selection - Only show if the service is selected */}
//               {selectedServiceId === service.id && (
//                 <div className="sub-services-list">
//                   {service.subServices.map((subService) => (
//                     <div key={subService.id} className="sub-service-card">
//                       <h4>{subService.title}</h4>
//                       {/* <p>Price: {subService.price}</p>
//                       <button>Book Now</button> */}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Location and Professional Selection */}
//       <div className="location-form">
//         <h3>Book a Professional</h3>
//         <form onSubmit={handleLocationSubmit}>
//           <input
//             type="text"
//             placeholder="Enter your location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//           <button type="submit">Find Professionals</button>
//         </form>
//         {professionals.length > 0 && (
//           <div className="professionals-list">
//             <h4>Available Professionals:</h4>
//             {professionals.map((professional) => (
//               <div key={professional.id} className="professional-card">
//                 <h5>{professional.name}</h5>
//                 <p>Rating: {professional.rating}</p>
//                 <p>Price: {professional.price}</p>
//                 <button>Select</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;


// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); // Main services
//   const [selectedServiceId, setSelectedServiceId] = useState(null); // Store the selected service ID
//   const [location, setLocation] = useState('');
//   const [professionals, setProfessionals] = useState([]);
//   const dropdownRef = useRef(null); 

//   // Dummy services data for demonstration
//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     // Toggle the selected service ID when clicked
//     setSelectedServiceId((prevServiceId) =>
//       prevServiceId === serviceId ? null : serviceId
//     );
//   };

//   const handleLocationSubmit = async (e) => {
//     e.preventDefault();
//     // Mock API call to fetch professionals based on location and selected sub-service
//     const fetchedProfessionals = [
//       { id: 1, name: 'John Doe', rating: '4.9' },
//       { id: 2, name: 'Jane Smith', rating: '4.7' },
//     ];
//     setProfessionals(fetchedProfessionals);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Service Selection Buttons */}
//       <div className="service-selection-buttons">
//         <h2>Select a Service</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <button 
//                 className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {service.title}
//               </button>

//               {/* Sub-service Selection - Only show if the service is selected */}
//               {selectedServiceId === service.id && (
//                 <div className="sub-services-list">
//                   {service.subServices.map((subService) => (
//                     <div key={subService.id} className="sub-service-card">
//                       <h4>{subService.title}</h4>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Location and Professional Selection */}
//       <div className="location-form">
//         <h3>Book a Professional</h3>
//         <form onSubmit={handleLocationSubmit}>
//           <input
//             type="text"
//             placeholder="Enter your location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//           <button type="submit">Find Professionals</button>
//         </form>
//         {professionals.length > 0 && (
//           <div className="professionals-list">
//             <h4>Available Professionals:</h4>
//             {professionals.map((professional) => (
//               <div key={professional.id} className="professional-card">
//                 <h5>{professional.name}</h5>
//                 <p>Rating: {professional.rating}</p>
//                 <button>Select</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;



// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); // Main services
//   const [selectedServiceId, setSelectedServiceId] = useState(null); // Store the selected service ID
//   const [location, setLocation] = useState('');
//   const [professionals, setProfessionals] = useState([]);
//   const dropdownRef = useRef(null); 

//   // Dummy services data for demonstration
//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     // Toggle the selected service ID when clicked
//     setSelectedServiceId((prevServiceId) =>
//       prevServiceId === serviceId ? null : serviceId
//     );
//   };

//   const handleLocationSubmit = async (e) => {
//     e.preventDefault();
//     // Mock API call to fetch professionals based on location and selected sub-service
//     const fetchedProfessionals = [
//       { id: 1, name: 'John Doe', rating: '4.9' },
//       { id: 2, name: 'Jane Smith', rating: '4.7' },
//     ];
//     setProfessionals(fetchedProfessionals);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//       setSelectedServiceId(null); // Reset selected service when clicking outside
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Service Selection Buttons */}
//       <div className="service-selection-buttons">
//         <h2>Select a Service</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <button 
//                 className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {service.title}
//               </button>

//               {/* Sub-service Selection - Only show if the service is selected */}
//               {selectedServiceId === service.id && (
//                 <div className="sub-services-list">
//                   {service.subServices.map((subService) => (
//                     <div key={subService.id} className="sub-service-card">
//                       <h4>{subService.title}</h4>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Location and Professional Selection */}
//       <div className="location-form">
//         <h3>Book a Professional</h3>
//         <form onSubmit={handleLocationSubmit}>
//           <input
//             type="text"
//             placeholder="Enter your location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//           <button type="submit">Find Professionals</button>
//         </form>
//         {professionals.length > 0 && (
//           <div className="professionals-list">
//             <h4>Available Professionals:</h4>
//             {professionals.map((professional) => (
//               <div key={professional.id} className="professional-card">
//                 <h5>{professional.name}</h5>
//                 <p>Rating: {professional.rating}</p>
//                 <button>Select</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;



// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); // Main services
//   const [selectedServiceId, setSelectedServiceId] = useState(null); // Store the selected service ID
//   const [professionals, setProfessionals] = useState([]);
//   const dropdownRef = useRef(null); 

//   // Dummy services data for demonstration
//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (serviceId) => {
//     // Toggle the selected service ID when clicked
//     setSelectedServiceId((prevServiceId) =>
//       prevServiceId === serviceId ? null : serviceId
//     );
//   };

//   const handleFindProfessionals = () => {
//     // Mock API call to fetch professionals based on selected service
//     const fetchedProfessionals = [
//       { id: 1, name: 'John Doe', rating: '4.9' },
//       { id: 2, name: 'Jane Smith', rating: '4.7' },
//     ];
//     setProfessionals(fetchedProfessionals);
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Service Selection Buttons */}
//       <div className="service-selection-buttons">
//         <h2>Select a Service</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <button 
//                 className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {service.title}
//               </button>

//               {/* Sub-service Selection - Only show if the service is selected */}
//               {selectedServiceId === service.id && (
//                 <div className="sub-services-list">
//                   {service.subServices.map((subService) => (
//                     <div key={subService.id} className="sub-service-card">
//                       <h4>{subService.title}</h4>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Find Professionals Button */}
//       <div className="find-professionals">
//         <button onClick={handleFindProfessionals} className="find-professionals-button">Find Professionals</button>
//         {professionals.length > 0 && (
//           <div className="professionals-list">
//             <h4>Available Professionals:</h4>
//             {professionals.map((professional) => (
//               <div key={professional.id} className="professional-card">
//                 <h5>{professional.name}</h5>
//                 <p>Rating: {professional.rating}</p>
//                 <button>Select</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;



// import React, { useState, useEffect, useRef } from 'react';
// import './CustomerDashboard.css'; 
// import homeReviveLogo from '../assets/home-revive-logo.png.webp';

// const CustomerDashboard = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [services, setServices] = useState([]); // Main services
//   const [selectedService, setSelectedService] = useState(null); // Store the selected service
//   const dropdownRef = useRef(null); 

//   // Dummy services data for demonstration
//   useEffect(() => {
//     const dummyServices = [
//       {
//         id: 1,
//         title: 'Plumbing Service',
//         subServices: [
//           { id: 1, title: 'Tap Repair' },
//           { id: 2, title: 'Tap Installation/Replacement' },
//           { id: 3, title: 'Pipe Leak Repair' },
//           { id: 4, title: 'Toilet Repair' },
//           { id: 5, title: 'Toilet Installation' },
//           { id: 6, title: 'Drain Cleaning' },
//           { id: 7, title: 'Basin Installation/Repair' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Electrical Work',
//         subServices: [
//           { id: 8, title: 'Wiring and Rewiring' },
//           { id: 9, title: 'Light Fixture Installation' },
//           { id: 10, title: 'Ceiling Fan Installation/Repair' },
//           { id: 11, title: 'Electrical Panel Upgrades' },
//           { id: 12, title: 'Appliance Wiring and Installation' },
//           { id: 13, title: 'Outdoor Lighting Installation' },
//         ],
//       },
//       {
//         id: 3,
//         title: 'Carpentry',
//         subServices: [
//           { id: 14, title: 'Furniture Assembly' },
//           { id: 15, title: 'Cabinet Installation and Repair' },
//           { id: 16, title: 'Door and Window Frame Installation' },
//           { id: 17, title: 'Furniture Repair and Refinishing' },
//           { id: 18, title: 'Closet Organization Systems' },
//         ],
//       },
//       {
//         id: 4,
//         title: 'Electronic Repairs',
//         subServices: [
//           { id: 19, title: 'TV Repair' },
//           { id: 20, title: 'Microwave and Small Appliance Repair' },
//           { id: 21, title: 'Audio System Repair' },
//         ],
//       },
//     ];
//     setServices(dummyServices);
//   }, []);

//   const handleServiceClick = (service) => {
//     // Toggle the selected service when clicked
//     setSelectedService((prevService) => (prevService === service ? null : service));
//   };

//   const handleProfileClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="customer-dashboard">
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
//           <span className="logo-text">Home Revive</span>
//         </div>
//         <div className="nav">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Support</div>
//           <div className="profile" onClick={handleProfileClick}>
//             <img src="https://via.placeholder.com/40" alt="Profile" />
//             <span className="profile-name">My Profile</span>
//           </div>
//           {showDropdown && (
//             <div className="profile-dropdown" ref={dropdownRef}>
//               <ul>
//                 <li>View Profile</li>
//                 <li>Service History</li>
//                 <li>My Bookings</li>
//                 <li>Account Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Service Selection Buttons */}
//       <div className="service-selection-buttons">
//         <h2>Select a Service</h2>
//         <div className="services-buttons">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <button
//                 className={`service-button ${selectedService === service ? 'active' : ''}`}
//                 onClick={() => handleServiceClick(service)}
//               >
//                 {service.title}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sub-service Display Section */}
//       {selectedService && (
//         <div className="sub-services-section">
//           <h3>Available services for {selectedService.title} :</h3>
//           <div className="sub-services-list">
//             {selectedService.subServices.map((subService) => (
//               <div key={subService.id} className="sub-service-card">
//                 <h4>{subService.title}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Find Professionals Button */}
//       <div className="find-professionals">
//         <button className="find-professionals-button">Find Professionals</button>
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;


import React, { useState, useEffect, useRef } from 'react';
import './CustomerDashboard.css'; 
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const CustomerDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [services, setServices] = useState([]); 
  const [selectedServiceId, setSelectedServiceId] = useState(null); 
  const [professionals, setProfessionals] = useState([]);
  const [showFindButton, setShowFindButton] = useState(false); // State for controlling button visibility
  const dropdownRef = useRef(null); 

  useEffect(() => {
    const dummyServices = [
      {
        id: 1,
        title: 'Plumbing Service',
        subServices: [
          { id: 1, title: 'Tap Repair' },
          { id: 2, title: 'Tap Installation/Replacement' },
          { id: 3, title: 'Pipe Leak Repair' },
          { id: 4, title: 'Toilet Repair' },
          { id: 5, title: 'Toilet Installation' },
          { id: 6, title: 'Drain Cleaning' },
          { id: 7, title: 'Basin Installation/Repair' },
        ],
      },
      {
        id: 2,
        title: 'Electrical Work',
        subServices: [
          { id: 8, title: 'Wiring and Rewiring' },
          { id: 9, title: 'Light Fixture Installation' },
          { id: 10, title: 'Ceiling Fan Installation/Repair' },
          { id: 11, title: 'Electrical Panel Upgrades' },
          { id: 12, title: 'Appliance Wiring and Installation' },
          { id: 13, title: 'Outdoor Lighting Installation' },
        ],
      },
      {
        id: 3,
        title: 'Carpentry',
        subServices: [
          { id: 14, title: 'Furniture Assembly' },
          { id: 15, title: 'Cabinet Installation and Repair' },
          { id: 16, title: 'Door and Window Frame Installation' },
          { id: 17, title: 'Furniture Repair and Refinishing' },
          { id: 18, title: 'Closet Organization Systems' },
        ],
      },
      {
        id: 4,
        title: 'Electronic Repairs',
        subServices: [
          { id: 19, title: 'TV Repair' },
          { id: 20, title: 'Microwave and Small Appliance Repair' },
          { id: 21, title: 'Audio System Repair' },
        ],
      },
    ];
    setServices(dummyServices);
  }, []);

  const handleServiceClick = (serviceId) => {
    setSelectedServiceId(serviceId);
    setShowFindButton(true); // Show the find professionals button when a service is selected
  };

  const handleFindProfessionals = () => {
    // Mock API call to fetch professionals
    const fetchedProfessionals = [
      { id: 1, name: 'John Doe', rating: '4.9' },
      { id: 2, name: 'Jane Smith', rating: '4.7' },
    ];
    setProfessionals(fetchedProfessionals);
  };

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="customer-dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item">Home</div>
          <div className="nav-item">Support</div>
          <div className="profile" onClick={handleProfileClick}>
            <img src="https://via.placeholder.com/40" alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown" ref={dropdownRef}>
              <ul>
                <li>View Profile</li>
                <li>Service History</li>
                <li>My Bookings</li>
                <li>Account Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Service Selection */}
      <div className="service-selection-buttons">
        <h2>Select a Service</h2>
        <div className="services-buttons">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <button 
                className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`} 
                onClick={() => handleServiceClick(service.id)}
              >
                {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Subservices Display */}
      {selectedServiceId && (
        <div className="sub-services-list">
        <h3>Available services :</h3>
          {services
            .find(service => service.id === selectedServiceId)
            .subServices.map(subService => (
              <div key={subService.id} className="sub-service-card">
                <h4>{subService.title}</h4>
              </div>
          ))}
        </div>
      )}

      {/* Find Professionals Button */}
      {showFindButton && (
        <div className="fixed-find-professionals">
          <button onClick={handleFindProfessionals} className="find-professionals-button">Find Professionals</button>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
