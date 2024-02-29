/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhtasim Fuad Rafid",
  title: "Hello, I am Fuad",
  subTitle: emoji(
    "Results-driven Software Engineer with a passion for leveraging cutting-edge technologies to drive innovation. Full stack engineer experienced in Java, Python, C#, JavaScript, SQL and No-SQL databases."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YPhUx4hZZXE7eI_8wdOhM9CDSkt5REog/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fuadrafid",
  linkedin: "https://www.linkedin.com/in/fuadrafid/",
  gmail: "fuadrafid3@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/8812200/fuad-rafid",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "I love to learn new things and adapt!",
  skills: [
    emoji(
      "⚡ Developing optimized backends with REST APIs using Java, Python, C#"
    ),
    emoji("⚡ Ensuring code quality by following best practices and unit testing"),
    emoji(
      "⚡ Deploying and managing services on cloud services like AWS and AZURE"
    ),
    emoji(
        "⚡ Interactive frontend development using React.js"
    )
    ,
    emoji(
        "⚡ Experience with a wide range of databases like SQL, MongoDB, GraphDB and Neo4j"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "Neo4j",
      fontAwesomeClassname: "cil-graph"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Alberta",
      logo: require("./assets/images/ualberta_shield.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - September 2024",
    },
    {
      schoolName: "Military Institute of Science and Technology",
      logo: require("./assets/images/mist.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "September 2013 - April 2017",
      // desc: "CGPA - 3.68 / 4",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud ",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research and Teaching Assistant",
      company: "University of Alberta",
      companylogo: require("./assets/images/ualberta_shield.png"),
      date: "September 2022 – Present",
      descBullets: [
        "Conducting lab lectures, grading assignments and projects for CMPUT 201 – Practical Programming Methodology and CMPUT 402 – Software Quality",
        "Conducting research on construction simulation and scheduling under the supervision of Prof. Eleni Stroulia. Worked on developing microservices using ASP .Net Core(C#), FastAPI (Python) and React.js deployed on Azure."
      ]
    },
    {
      role: "Software Engineer II",
      company: "Infolytx",
      companylogo: require("./assets/images/infolytx.png"),
      date: "March 2019 – July 2022",
      desc: "",
      descBullets: [
        "Serving as team lead of a large-scale healthcare AI project",
        "Writing and reviewing code from multiple stacks (Java, Python, JavaScript) and multiple microservices ensuring best practices deployed on AWS\n" +
        "Conduct scrum meetings and retrospectives to ensure project follows agile methodologies to ensure sprint success" ,
        "Make software design decisions by collaborating with team members and product manager" ,
        "Mentoring trainee engineers on unit testing and Git." ,
        "Worked on multiple AI projects to build optimized backend systems",
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "Large scale projects I have worked on",
  projects: [
    {
      image: require("./assets/images/rafOptimizer.webp"),
      projectName: "RAF Optimizer™ – An AI-Powered Solution for Enhanced Healthcare Coding",
      projectDesc: "The Hierarchical Condition Categories (HCC) system and Risk Adjustment Factor (RAF) scores are integral metrics developed by the Center for Medicare and Medicaid Services (CMS) to measure patients’ health conditions, estimate associated long-term treatment risks, and adjust reimbursement payments for healthcare providers." +
          " RAF Optimizer™ is an AI-powered application designed to streamline and optimize the coding process in healthcare. RAF Optimizer™ assists healthcare providers in selecting the most appropriate diagnostic codes and HCC classifications for patients based on a sophisticated analysis of electronic medical records (EMR).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.infolytx.com/case-study/raf-optimizer/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bestfit.jpg"),
      projectName: "BestFit AI Resume Screening & Shortlist Solution",
      projectDesc: "Eliminate the costly, time-consuming, error-prone manual resume review and keyword search process. With BestFit recruiters have an easy-to-use solution that quickly evaluates thousands of technical resumes and CVs and generates a set of applicants that best match the open position.\n" +
          "\n" +
          "Candidates are then scored and ranked based on their skills, certifications, career histories, and how well they match specific position and employer criteria. Within seconds recruiters have a shortlist of the most desirable candidates to contact.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.infolytx.com/products/bestfit-ai-solution/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "Rising Star Award",
      subtitle:
        "Recognition of outstanding performance as a Junior Software Engineer at Infolytx.",
      image: require("./assets/images/risingStar.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Award",
          url: "https://www.linkedin.com/posts/fuadrafid_thanks-to-infolytx-for-this-recognition-activity-6606904995021447168-0Pjc/?utm_source=share&utm_medium=member_desktop"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "As I learn new things, I love to write and share the knowledge.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/fuadrafid/fastapi-the-good-the-bad-and-the-ugly-20ob",
      title: "FastAPI - The Good, the bad and the ugly",
      description:
        "An analysis of FastAPI showing it's pros and cons compared to Flask and Django"
    },
    {
      url: "https://dev.to/fuadrafid/mircoservices-a-beginner-s-perspective-53jg",
      title: "Microservices - A beginner's perspective",
      description:
        "Sharing my experience of working on a microservice based project"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+587-921-5622",
  email_address: "fuadrafid3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "fuadrafid", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
