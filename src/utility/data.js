const jobsData = [
    {
      "id": "1",
      "title": "Senior React Developer",
      "type": "Full-Time",
      "description": "We are seeking a talented Front-End Developer to join our team in Bangalore, Karnataka. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
      "location": "Bangalore, Karnataka",
      "salary": "₹15L - ₹18L",
      "company": {
        "name": "TechInnovate Solutions",
        "description": "TechInnovate Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
        "contactEmail": "contact@techinnovate.com",
        "contactPhone": "+91 98765 43210"
      }
    },
    {
      "id": "2",
      "title": "Front-End Engineer (React & Redux)",
      "type": "Full-Time",
      "location": "Hyderabad, Telangana",
      "description": "Join our team as a Front-End Developer in Hyderabad. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
      "salary": "₹12L - ₹15L",
      "company": {
        "name": "PixelTech Solutions",
        "description": "PixelTech Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
        "contactEmail": "contact@pixeltech.com",
        "contactPhone": "+91 98450 12345"
      }
    },
    {
      "id": "3",
      "title": "React.js Developer",
      "type": "Full-Time",
      "description": "Are you passionate about front-end development? Join our team in Pune, Maharashtra, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
      "location": "Pune, Maharashtra",
      "salary": "₹10L - ₹14L",
      "company": {
        "name": "CodeCrafters Pvt Ltd",
        "description": "CodeCrafters is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
        "contactEmail": "contact@codecrafters.com",
        "contactPhone": "+91 77660 98765"
      }
    },
    {
      "id": "4",
      "title": "React Front-End Developer",
      "type": "Part-Time",
      "description": "Join our team as a Part-Time Front-End Developer in Chennai, Tamil Nadu. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
      "location": "Chennai, Tamil Nadu",
      "salary": "₹8L - ₹10L",
      "company": {
        "name": "Web Wizards",
        "description": "Web Wizards is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
        "contactEmail": "contact@webwizards.com",
        "contactPhone": "+91 90909 87654"
      }
    },
    {
      "id": "5",
      "title": "Full Stack React Developer",
      "type": "Full-Time",
      "description": "Exciting opportunity for a Full-Time Front-End Developer in Mumbai, Maharashtra. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
      "location": "Mumbai, Maharashtra",
      "salary": "₹18L - ₹22L",
      "company": {
        "name": "Skyline Technologies",
        "description": "Skyline Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
        "contactEmail": "contact@skylinetech.com",
        "contactPhone": "+91 98111 23456"
      }
    },
    {
      "id": "6",
      "title": "React Native Developer",
      "type": "Full-Time",
      "description": "Join our team as a Front-End Developer in Kolkata, West Bengal. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
      "location": "Kolkata, West Bengal",
      "salary": "₹12L - ₹14L",
      "company": {
        "name": "Fusion Web Solutions",
        "description": "Fusion Web Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
        "contactEmail": "contact@fusionweb.com",
        "contactPhone": "+91 93211 76543"
      }
    },
    {
      "id": "7",
      "title": "React UI Developer",
      "type": "Contract",
      "description": "We are hiring a UI Developer with React expertise for a contract-based role in New Delhi. This is a great opportunity to work on cutting-edge projects and collaborate with a dynamic team.",
      "location": "New Delhi",
      "salary": "₹10L - ₹13L",
      "company": {
        "name": "UI Masters",
        "description": "UI Masters is a web design and development company specializing in creating stunning and user-friendly applications. We focus on innovation and delivering top-notch UI/UX solutions.",
        "contactEmail": "contact@uimasters.com",
        "contactPhone": "+91 98765 45678"
      }
    },
    {
      "id": "8",
      "title": "React Developer - Remote",
      "type": "Remote",
      "description": "Join our fully remote team as a React Developer! We are looking for passionate developers who want to build cutting-edge applications from the comfort of their homes.",
      "location": "Remote (India)",
      "salary": "₹9L - ₹12L",
      "company": {
        "name": "CloudTech Solutions",
        "description": "CloudTech Solutions is a fully remote company specializing in cloud-based software solutions. Our mission is to empower businesses with state-of-the-art technology.",
        "contactEmail": "contact@cloudtech.com",
        "contactPhone": "+91 99887 65432"
      }
    },
    {
      "id": "9",
      "title": "React Internship",
      "type": "Internship",
      "description": "We are offering a React internship for fresh graduates and final-year students in Noida, Uttar Pradesh. Gain hands-on experience and kickstart your career in front-end development!",
      "location": "Noida, Uttar Pradesh",
      "salary": "₹3L - ₹5L",
      "company": {
        "name": "CodeBase Labs",
        "description": "CodeBase Labs is an IT training and development firm focused on helping freshers gain industry experience through internships and live projects.",
        "contactEmail": "contact@codebaselabs.com",
        "contactPhone": "+91 88776 54321"
      }
    },
    {
      "id": "10",
      "title": "Lead React Developer",
      "type": "Full-Time",
      "description": "We are looking for a Lead React Developer to manage a team of talented engineers in Jaipur, Rajasthan. This role requires strong leadership and technical expertise in front-end development.",
      "location": "Jaipur, Rajasthan",
      "salary": "₹20L - ₹25L",
      "company": {
        "name": "Raj IT Solutions",
        "description": "Raj IT Solutions is an enterprise-level software company providing high-end solutions for businesses across various domains.",
        "contactEmail": "contact@rajitsolutions.com",
        "contactPhone": "+91 77665 43210"
      }
    }
  ];

  export { jobsData }