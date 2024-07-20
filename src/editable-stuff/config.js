// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "何秋谷 Qiugu",
  middleName: "",
  lastName: "He",
  message: ["A experienced full-stack web developer.", "Bachelor's Degree in Computer Science from University of Manitoba. "],
  icons: [
    {
      image: "fa-brands fa-github",
      url: "https://github.com/Qiugu-He",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/qiuguhe/",
    },
    {
      image: "fa fa-envelope",
      url: "mailto: Qiugu.He@outlook.com",
    },
  ],
};

//ABOUT
const about = {
  show: true,
  heading: "Who I am",
  imageLink: require("../editable-stuff/me6.jpg"),
  imageSize: 375,
  message: ["I graduated from the University of Manitoba in 2020 with a degree in Computer Science. I began my professional career as a software developer in Canada, and I have since then amassed three years of robust experience in full-stack development using JavaScript, Java and C#. Embracing the dynamic natural of tech industry, I am dedicated to continues growth, consistently strengthening my foundational skills and enhance my credentials as a software enginner."],
  resume: require("../editable-stuff/Qiugu_He_Software_Developer_Resume.pdf"),
};

// PROJECTS SECTION
// display specfic projects, add the repository names, i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Side Projects",
  gitHubUsername: "Qiugu-He", 
  reposLength: 0,
  specificRepos: ["TravelApp","Blog", "littlelemon", "ReactHome"],
};

//Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    {
      label: "",
      paragraph: ""
    }
  ],
  imageSize: {
    width:"",
    height:""
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skill Sets",
  hardSkills: [
    { name: "Java", value: 75 },
    { name: "C++/C#", value: 65 },
    { name: "Python", value: 65 },

    { name: "JavaScript", value: 80 },
    { name: "SQL", value: 75 },
    { name: "HTML/CSS", value: 65 },
  ],
  skillA: [
    { name: "React", value: 85 },
    { name: "JQuery", value: 90 },
    { name: "MySQL", value: 80 },

    { name: "NodeJS", value: 75 },
    { name: "PostgreSQL", value: 75 },
    { name: "MongoDB", value: 75 }
  ],
  skillB: [
    { name: "AWS", value: 80 },
    { name: "CI/CD", value: 75 },
    { name: "Agile Methodology", value: 75 },
    { name: "Jest", value: 80 },

    { name: "Git/Github", value: 90 },
    { name: "Docker", value: 75 },
    { name: "Object-Oriented Programming", value: 80 },
    { name: "Data Structures & Algorithms", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Let's Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering role! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "Qiugu.He@outlook.com",
  icons: [
    {
      image: "fa-brands fa-github",
      url: "https://github.com/Qiugu-He",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/qiuguhe/",
    }
  ]
};

//EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: " Professional Experiences",
  data: [
    {
      role: 'Software Developer II',
      companylogo: require('../assets/img/MPI.webp'),
      date: 'Jan 2021 - Present',
      skill: 'JavaScript, React, NodeJs, C#, REST APIs, Azure DevOps, Agile Methodologies, Scrum'
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
