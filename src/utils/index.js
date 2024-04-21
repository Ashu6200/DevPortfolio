import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaBlog } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdAddBox } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { TbChartInfographic } from "react-icons/tb";

export const Navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Project",
    link: "/project",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
export const AdminSections = [
  {
    icons: <ImProfile size={20} />,
    name: "Admin",
    link: "/admin",
  },
  {
    icons: <TbChartInfographic size={20} />,
    name: "All Experience",
    link: "/admin/allexperience",
  },
  {
    icons: <MdAddBox size={20} />,
    name: "Add Experience",
    link: "/admin/addexperience",
  },
  {
    icons: <FaBlog size={20} />,
    name: "All Blogs",
    link: "/admin/allblog",
  },
  {
    icons: <MdAddBox size={20} />,
    name: "Add Blogs",
    link: "/admin/addblog",
  },
  {
    icons: <GoProject size={20} />,
    name: "All Projects",
    link: "/admin/allprojects",
  },
  {
    icons: <MdAddBox size={20} />,
    name: "Add Projects",
    link: "/admin/addproject",
  },
  {
    icons: <RiMessage2Fill size={20} />,
    name: "All Suggestions",
    link: "/admin/allsuggestions",
  },
];

export const socialIcons = [
  {
    id: "Github",
    link: "https://github.com/Ashu6200",
    icon: <FaGithub color='#755BB4' className='w-[40px] h-[40px] ' />,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/ashutosh-kewat-585969167/",
    icon: <FaLinkedinIn color='#755BB4' className='w-[40px] h-[40px] ' />,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/ashuuu_._/",
    icon: <FaInstagram color='#755BB4' className='w-[40px] h-[40px] ' />,
  },
];

export const timeLine = [
  {
    id: 1,
    year: "April 2015 - April 2016",
    position: "Student",
    infoType: "Education",
    location: "Korba, Chhattisgarh, India",
    degree: "10th CBSE",
    locationType: "Day Scholar",
    institutionName: "Jain Public School",
    description:
      "My life in class 10 would be a balance of academic pursuits, extracurricular activities, personal growth, and exploration of future possibilities. It would be an exciting time of discovery and preparation for the opportunities that lie ahead.",
  },
  {
    id: 2,
    year: "April 2017 - April 2018",
    position: "Student",
    infoType: "Education",
    degree: "12th CBSE",
    location: "Korba, Chhattisgarh, India",
    locationType: "Day Scholar",
    institutionName: "DDM Public School",
    description:
      "My life in class 12 with ascience stream would be a blend of academic pursuits, exam preparation, career planning, and personal growth. It would be a challenging yet exciting phase as I prepare to embark on the next chapter of my educational journey and pursue my passion for science.",
  },

  {
    id: 3,
    year: "August 2018 - July 2022",
    position: "Student",
    infoType: "Education",
    location: " Kohka-Kurud, Bhilai, Chhattisgarh, India",
    locationType: "Day Scholar",
    degree: "Bachelor of Engineering - CSE",
    institutionName: "Rungta College of Engineering & Technology",
    description:
      "My life in an engineering college with a CSE branch would be dynamic and fast-paced, filled with opportunities for learning, growth, and exploration in the exciting field of computer science and technology.",
  },
  {
    id: "4",
    year: "March 2022 - July 2022",
    position: "Email Marketing",
    infoType: "job",
    location: "Pune, Maharashtra, India",
    locationType: "Onsite",
    institutionName: "ASP OL Media ",
    description:
      "As an email marketing specialist, my role involved developing and implementing strategies to optimize engagement and drive results for clients. One of my key achievements was increasing open rates by 30% through meticulous research and implementation of best practices. This involved improving spam scores, testing various subject lines to identify the most effective ones, and continuously refining our approach based on data-driven insights.",
    keypoints: [
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
    ],
    skills: ["html", "css"],
  },
  {
    id: 5,
    year: "January 2023 - June 2023",
    position: "Frontend Developer Intern",
    infoType: "Job",
    location: "Mumbai, Maharashtra, India",
    locationType: "Remote",
    institutionName: "Genex Corporate Services Pvt. Ltd",
    description:
      "As a frontend developer, I've spearheaded the creation of three interactive and responsive websites for the company, leveraging the latest technologies such as HTML5, CSS3, and JavaScript. These websites not only boasted visually appealing designs but also provided seamless user experiences across various devices and screen sizes. Integration with Django RESTAPI ensured robust backend support, enabling dynamic content delivery and efficient data management.",
    keypoints: [
      {
        title:
          "Developed and maintained responsive and user-friendly web interfaces.",
      },
      {
        title:
          "Integrated websites with Django RESTAPI for seamless data exchange.",
      },
      {
        title:
          "Collaborated with a team of four to build a Full Stack Tenant Management System.",
      },
      {
        title:
          "Analyzed company needs and implemented functionality accordingly.",
      },
      {
        title:
          "Prioritized tasks and implemented goals effectively to meet deadlines.",
      },
    ],
    skills: [
      "Html",
      "CSS",
      "JavaScript",
      "Reactjs",
      "Mongoose",
      "ExpressJs",
      "Nodejs",
      "styled-components",
      "Tailwind CSS",
    ],
  },
  {
    id: 6,
    year: "March 2023 - june 2023",
    position: "Full-stack Developer Intern",
    infoType: "Job",
    location: "Godhra, Gujarat, India",
    locationType: "Remote",
    institutionName: "Resonate Learning",
    description:
      "In my role as a full stack developer, I've been involved in a range of projects aimed at delivering comprehensive web solutions. One significant endeavor was the revamping of the Dashboard using MERN Stack technologies. Leveraging MongoDB for the database, Express.js for the backend, React.js for the frontend, and Node.js for server-side scripting, we completely overhauled the dashboard experience. Integrating libraries like Recharts.js and Chart.js enhanced data visualization capabilities, while Axios facilitated smooth communication between the frontend and backend. Styled-components and Material UI were instrumental in crafting visually appealing and interactive user interfaces, ensuring an engaging user experience.",
    keypoints: [
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
    ],
    skills: [
      "Html",
      "CSS",
      "JavaScript",
      "Reactjs",
      "Mongoose",
      "ExpresJs",
      "Nodejs",
      "styled-components",
      "Tailwind CSS",
    ],
  },
  {
    id: 7,
    year: "October 2023 - Present",
    position: "React Developer Intern",
    infoType: "Job",
    location: "Delhi, India",
    locationType: "Remote",
    institutionName: "Reverr",
    description:
      "As a React developer, I specialize in leveraging React frameworks to craft engaging and responsive web designs that prioritize user experience.My responsibilities include actively participating in code reviews, feature planning, and design reviews to ensure the quality and integrity of the codebase.Additionally, I am proficient in developing and maintaining automated tests to uphold the highest standards of code quality and reliability.",
    keypoints: [
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
      {
        title: "Lorem ipsum dolor sit amet, consect",
      },
    ],
    skills: [
      "Html",
      "CSS",
      "JavaScript",
      "Reactjs",
      "Mongoose",
      "ExpresJs",
      "Nodejs",
      "styled-components",
      "Tailwind CSS",
    ],
  },
];

export const locationTypeArrays = [
  { value: "Remote", label: "Remote" },
  { value: "On-site", label: "On-site" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "Day Scholar", label: "Day Scholar" },
];

export const workTypeArrays = [
  { value: "Job", label: "Job" },
  { value: "Student", label: "Student" },
  { value: "Internship", label: "Internship" },
];

export const colourStyles = {
  option: (provided) => ({
    ...provided,
    color: "black",
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "pointer",
  }),
  container: (base) => ({
    ...base,
    width: "100%",
    backgroundColor: "transparent",
  }),
  control: (base) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 0,
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
  }),
  dropdownIndicator: (base) => ({
    ...base,
  }),
  indicatorSeparator: (base) => ({
    ...base,
  }),
  placeholder: (base) => ({
    ...base,
    color: "#fff",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  valueContainer: (base) => ({
    ...base,
    color: "#fff",
  }),
  menu: (base) => ({
    ...base,
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: "transparent !important",
    color: "#fff",
  }),
};
