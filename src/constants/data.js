import images from "./images";

// skills
const skills = [
    {
        title: "UI/UX DESIGN",
        value: "80%"
    },
    {
        title: "WEB DEVELOPMENT",
        value: "75%"
    },
    {
        title: "APP DEVELOPMENT",
        value: "45%"
    },
    {
        title: "MARKETING",
        value: "15%"
    },
];

// stats
const stats = [
    {
        img: `${images.icon_briefcase}`,
        value:  548,
        title: "projects completed"
    },
    {
        img: `${images.icon_clock}`,
        value: 1465,
        title: "working hours"
    },
    {
        img: `${images.icon_star_white}`,
        value: 612,
        title: "positive feedbacks"
    },
    {
        img: `${images.icon_heart}`,
        value: 735,
        title: "happy clients"
    },
];

// works
const works = [
  {
    img: `${images.work_1}`
  },
  {
    img: `${images.work_2}`
  },
  {
    img: `${images.work_3}`
  },
  {
    img: `${images.work_4}`
  },
  {
    img: `${images.work_5}`
  },
  {
    img: `${images.work_6}`
  },
  {
    img: `${images.work_7}`
  },
  {
    img: `${images.work_8}`
  }
]

// services
const services = [
    {
        img: `${images.icon_diamond}`,
        title: "Talent Connection",
        text: 'We match companies with experienced and highly qualified candidates.'
    },
    {
        img: `${images.icon_archer}`,
        title: "Permanent Placements",
        text: 'Full-time permanent placement services for advanced roles.'
    },
    {
        img: `${images.icon_phone}`,
        title: "Temporary Contracts",
        text: 'Staffing solutions for temporary and short-term needs.'
    },
    {
        img: `${images.icon_console}`,
        title: "Contract-to-Hire",
        text: 'Seamless transitions from contract to permanent employment.'
    },
    {
        img: `${images.icon_plane}`,
        title: "National & International Recruitment",
        text: 'Specializing in both domestic and global recruitment services.'
    },
    {
        img: `${images.icon_star}`,
        title: "Custom Recruiting Solutions",
        text: 'Tailored recruitment solutions to meet specific hiring requirements.'
    },
    {
        img: `${images.icon_fantasy}`,
        title: "HR Consulting",
        text: 'Expert guidance on HR strategies, legal compliance, and management.'
    },
    {
        img: `${images.icon_paint}`,
        title: "Payroll Processing",
        text: 'Comprehensive payroll management services, from salaries to taxes.'
    }
];


// testimonials
const testimonials = [
  {
      name: "Christine Troughton, BPTC Officer",
      text: "Get Appoint’s support has been invaluable. Their recruiters understand our needs and have consistently connected us with top-tier talent, streamlining our hiring process.",
  },
  {
      name: "Michael Hopkins",
      text: "The team at Get Appoint exceeded our expectations. Their innovative approach to recruitment made it easy for us to find the right candidates quickly, and I look forward to partnering with them again."
  },
  {
      name: "Terry Overacker",
      text: "Working with Get Appoint has transformed our hiring process. Their attention to detail and understanding of our industry needs has resulted in fantastic placements that fit our company culture perfectly."
  },
  {
      name: "Tim K. & Kristen H.",
      text: "Choosing Get Appoint means collaborating with true professionals who genuinely care about our success. They not only filled our roles efficiently but also guided us through the entire process."
  }
];



export const Industry = [
  {
    title: 'IT',
    text: 'We connect IT companies with top talent to manage their infrastructure, software development, security, and more, ensuring they achieve their goals with skilled professionals in every area of technology.'
  },
  {
    title: 'Health Care',
    text: 'We provide the healthcare industry with highly qualified professionals for roles in EHR development, patient management, telemedicine platforms, and more to meet evolving demands.'
  },
  {
    title: 'Automotive',
    text: 'Our recruitment solutions help automotive companies hire experts for vehicle control systems, driver assistance, and infotainment to innovate and improve customer experience.'
  },
  {
    title: 'Media & Entertainment',
    text: 'We specialize in sourcing creative and technical talent for media and entertainment companies to develop and deliver cutting-edge content, ensuring an engaged audience and strong revenue.'
  },
  {
    title: 'Logistics',
    text: 'We recruit skilled professionals for logistics companies to manage fleet operations, warehouse tracking, and supply chain optimization, helping reduce costs and enhance efficiency.'
  },
  {
    title: 'Construction',
    text: 'Our recruitment solutions focus on providing construction companies with top talent in project management, CAD, and BIM to improve communication, reduce errors, and enhance safety on-site.'
  },
  {
    title: 'E-Commerce',
    text: 'We connect eCommerce companies with skilled professionals to build and grow their online platforms, streamlining operations from payment processing to CRM and marketing automation.'
  },
  {
    title: 'Real Estate',
    text: 'We help real estate firms hire experts for property management, lead generation, and transaction closing, enhancing service quality and boosting deal closure rates.'
  },
  {
    title: 'Education',
    text: 'We provide educational institutions with skilled professionals for roles in administration, learning management, and performance tracking to improve engagement and streamline operations.'
  },
  {
    title: 'Finance and Banking',
    text: 'We recruit top talent in finance and banking, specializing in roles like financial analysis, risk management, and compliance to help firms meet their regulatory and operational goals.'
  },
  {
    title: 'Manufacturing',
    text: 'We connect manufacturing companies with experts in production management, automation, and quality control, ensuring optimal output and operational efficiency.'
  },
  {
    title: 'Hospitality',
    text: 'We source qualified personnel for hospitality businesses, including roles in management, customer service, and operations, ensuring a seamless guest experience.'
  },
  {
    title: 'Energy and Utilities',
    text: 'We specialize in finding highly skilled professionals for the energy and utilities sector, from engineers to technicians, ensuring effective operations and sustainability.'
  },
  {
    title: 'Pharmaceuticals and Biotechnology',
    text: 'We provide recruitment services for the pharmaceutical and biotech industries, offering specialists in research, development, production, and regulatory compliance to advance medical innovation.'
  },
  {
    title: 'Retail',
    text: 'We recruit professionals for retail companies to manage operations, customer engagement, inventory, and marketing, ensuring businesses meet their sales and growth objectives.'
  }
];



export default {skills, stats, works, services, testimonials, Industry};
