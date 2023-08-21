import {
   
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    webdeveloper,
    mernstack,
    nodebackend,
    frontend,
    merncertificate,
    wgroup,
    abudhabi,
    deviotech,
    astzz,
    gametrian,
    bootstrap,
    materialui,
    saas,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdeveloper,
    },
    {
      title: "Mern Stack Developer",
      icon: mernstack,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "BackEnd Developer",
      icon: nodebackend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "materialui",
      icon: materialui,
    },
    {
      name: "saas",
      icon: saas,
    }
  ];
  
  const experiences = [
    {
      title: "Mern Stack Traine",
      company_name: "Game Train",
      icon: gametrian,
      iconBg: "#383E56",
      date: "April 2023 - July 2023",
      points: [
        "Developing new User-facing features",
        "Building reuseable features and libraries for future use",
        "Translating Figma/Psd design into intractive and high quality code",
        "Managing state management globally using Redux",
        "Learnt about backend technologies like Node,MongoDb,MySql, and express server"
        ,"Developing Rest API's",
        "Jwt aunthetication"
      ],
      color: "#c5c560",
      dateColor: "#ee3e38"
    },
    {
      title: "Frontend Developer",
      company_name: "Deviotech",
      icon: deviotech,
      iconBg: "#383E56",
      date: "July 2022 - April 2023",
      points: [
        "Developing new User-facing features",
        "Building reuseable features and libraries for future use",
        "Translating Figma/Psd design into intractive and high quality code",
        "Managing state management globally using Redux",
        "Learnt about backend technologies like Node,MongoDb,MySql, and express server"
        ,"Developing Rest API's",
        "Jwt aunthetication"
      ],
      color: "#ee3e38",
      dateColor: "#c5c560"
    },
    {
      title: "Resturant Manager",
      company_name: "AbuDhabi",
      icon: abudhabi,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - april 2022",
      points: [
        "Managing the whole resturenat",
        "Handling staff of 10 members",
        "Responsible for Supply of food",
        "Dealing with teh customers in efficiant manner"
      ],
      color: "#c5c560",
      dateColor: "#ee3e38"
    },
    {
      title: "Android Developer",
      company_name: "Astzz solutions",
      icon: astzz,
      iconBg: "#E6DEDD",
      date: "January 2020 - july 2020",
      points: [
      ],
      color: "#ee3e38",
      dateColor: "#c5c560"
    },
    {
      title: "Android Trainee",
      company_name: "W-Group",
      icon: wgroup,
      iconBg: "#E6DEDD",
      date: "October 2019 - December 2019",
      points: [
      ],
      color: "#c5c560",
      dateColor: "#ee3e38"
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      backGroundColor: "#c5c560"
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      backGroundColor: "#ee3e38"
    },

  ];
  const certifications=[{
    id:1,
    title:"Mern Stack",
    authority:"Certification from pasha",
    detail:"Leart about all the fundamental of Mern Stack development like React.js,Node.js,Express.Js and MongoDb",
    icon:merncertificate
  }

]
  
  export { services, certifications, technologies, experiences, projects };
  