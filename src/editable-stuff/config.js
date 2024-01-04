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
  message: ["Experienced full-stack software developer.", "Bachelor's Degree in Computer Science from University of Manitoba. "],
  icons: [
    {
      image: "fa-brands fa-github",
      url: "https://github.com/Qiugu-He",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/qiuguhe/",
    }
  ],
};

//ABOUT
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me6.jpg"),
  imageSize: 375,
  message: ["Hello! My name is Qiugu He. I’m a graduate of 2020 from the University of Manitoba with a degree in Computer Science. I'm passionated about full stack web application and database development. I love learning new software technologies and also interested in developing multi platform application.", "In my spare time, I like to studying, reading, swimming, playing basketball and also give back to community by volunntering local/campus events. In the future, I hope I can create something that is useful to the word."],
  resume: require("../editable-stuff/Qiugu_He_Software_Developer_Resume.pdf"),
};

// PROJECTS SECTION
// display specfic projects, add the repository names, i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Qiugu-He", 
  reposLength: 4,
  specificRepos: [],
};

//Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/me6.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
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
  heading: "Get In Touch",
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

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Developer',
      companylogo: require('../assets/img/MPI.webp'),
      date: 'Jan 2021 - Present',
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
