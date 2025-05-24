import { BriefcaseIcon, EducationIcon } from "@icons/index";
import { PanelProps } from "@modules/about/panel";

export const informationsData:PanelProps<"timeline" | "list">[] = [
    {
      name: "Experience",
      title: "Professional History",
      description: "A summary of my professional experience, highlighting the roles I've held and the skills I've developed. Each position has contributed to my growth as a software engineer.",
      highlights: ["professional experience,"],
      icon: BriefcaseIcon,
      color: "violet",
      type: "timeline",
      data: [
        {
          date: {
            start: "Feb 2025",
            end: "May 2025"
          },
          title: "Software Engineer",
          organization: {
            name: "Hooli Software",
            logo: "/images/hooli.jpg",
            url: "https://hoolisoftware.com"
          },
          location: "Marilao, Bulacan - Remote",
          responsibilities: [
            "Collaborated with the team using Jira to manage tasks and track progress.",
            "Used Bitbucket for version control and contributed to the main branch.",
            "Developed mobile apps using Android Studio emulators for testing.",
            "Wrote robust, maintainable code with TypeScript for type safety.",
            "Translated Figma designs into functional interfaces using React Native.",
            "Integrated Expo to streamline the mobile development workflow.",
            "Handled and validated forms using React Hook Form.",
            "Performed HTTP requests with Axios to enable seamless API integration.",
            "Applied Zod for schema-based validation of forms and API data.",
            "Managed global app state effectively using Jotai.",
            "Implemented file-based routing with Expo Router for intuitive navigation.",
            "Managed dependencies with npm and yarn in a Node.js environment.",
          ]
        },
        {
          date: {
            start: "Jan 2024",
            end: "Feb 2025"
          },
          title: "Fullstack Web Developer",
          organization: {
            name: "Self-Employed",
            logo: null,
            url: null
          },
          location: "Remote",
          responsibilities: [
            "Built reusable components using React to ensure consistent UI across applications.",
            "Developed a machine learning chatbot using Cohere LLM with RAG.",
            "Implemented a real-time messaging app with Socket.IO for websockets.",
            "Designed responsive UI/UX with TailwindCSS to enhance user experience.",
            "Created SEO-friendly web apps with Next.js using SSR and static generation.",
            "Improved code quality and type safety with TypeScript and modular architecture.",
            "Managed data with MongoDB and PostgreSQL for flexible storage solutions.",
            "Used Redis for efficient key-value storage and caching to enhance security.",
            "Deployed production apps on Vercel and Render, ensuring CI/CD and high availability.",
            "Integrated PayMongo as a payment gateway for online transactions.",
            "Enhanced user interactions with smooth animations using Framer Motion.",
            "Utilized Vite for faster build times and optimized development workflow.",
            "Built and integrated RESTful and third-party APIs using Express.js and Hono.js.",
            "Implemented Lottie animations for optimized, high-quality motion graphics.",
            "Developed customizable reports and auto-generated documents using React PDF.",
            "Used Git and GitHub for version control, collaboration, and seamless code contribution.",
            "Integrated Google Maps API for auto-complete route functionality.",
            "Designed visually appealing and professional emails using React Email.",
            "Implemented Redux and Zustand for global state management.",
            "Secured APIs and user authentication using JSON Web Tokens.",
            "Integrated Cloudinary for image and file upload and delivery optimization.",
            "Created wireframes and prototypes using Figma to design user interfaces."
          ]
        },
      ]
  },
  {
    name: "Education",
    title: "Academic Journey",
    description: "A glimpse into my academic journey, showcasing the institutions I've attended and the knowledge I've gained. Each stage has been a stepping stone towards my goal of becoming a proficient software engineer.",
    highlights: ["stepping stone"],
    icon: EducationIcon,
    color: "indigo",
    type: "timeline",
    data: [
      {
        date: {
          start: "Sep 2021",
          end: "Aug 2025"
        },
        title: "Bachelor of Science in Information Technology",
        organization: {
          name: "Don Honorio Ventura State University",
          logo: "/images/dhvsu.png",
          url: "https://dhvsu.edu.ph"
        },
        location: "Bacolor, Pampanga",
        responsibilities: [
         "Gained hands-on experience with Amazon Web Service to deploy applications remotely.",
         "Simulated network infrastructure using CISCO, enhancing connectivity and security.",
         "Practiced MySQL, Postgres and MongoDB to store and retrieve data efficiently.",
         "Analyzed algorithms and applied design principles in Python to solve logical problems.",
         "Developed mobile applications using React-Native, B4A and MIT App Inventor.",
         "Explored multimedia animation in Adobe Animate to create engaging digital content.",
         "Developed web applications using Node.js, PHP and Laravel frameworks.",
         "Studied OOP concepts, particularly in Java for  software development.",
         "Designed user interfaces and mock up designs using Figma",
         "Improved programming skills with intermediate C++ for system-level applications.",
         "Used Blender 3D to create 3D models and animations.",
        ]
      },
      {
        date: {
          start: "June 2019",
          end: "Aug 2021"
        },
        title: "Information Communication and Technology",
        organization: {
          name: "Emigdio A. Bondoc - Senior High School",
          logo: "/images/eabshs.png",
          url: "https://www.facebook.com/p/Emigdio-A-Bondoc-Senior-High-School-61560701675079/"
        },
        location: "Santo Tomas, Pampanga",
        responsibilities: [
          "Created and edited images and graphics using Adobe Photoshop.",
          "Produced and edited videos using Adobe Premiere Pro.",
          "Designed animations and motion graphics with Adobe After Effects.",
          "Created vector illustrations using Adobe Illustrator.",
          "Designed layouts and print materials with Adobe InDesign.",
          "Prepared and formatted documents using Microsoft Word.",
          "Created and managed spreadsheets using Microsoft Excel.",
          "Developed presentations using Microsoft PowerPoint.",
          "Managed databases and performed queries using Microsoft Access.",
          "Developed desktop applications using Visual Basic .NET.",
          "Modeled and simulated establishments using SketchUp."
        ]
      },
    ]
  },
  // {
  //   name: "Technologies",
  //   title: "Favorite Tools",
  //   description: "A collection of the tools and technologies I use in my software development journey. Each tool is part of my toolkit, enabling me to build efficient and effective solutions.",
  //   icon: ContainerIcon,
  //   color: "red",
  //   type: "list",
  //   data: [
  //     {
  //       header: "Programming Languages",
  //       description: "The languages I use to bring my ideas to life. Each language has its own strengths and applications, and I enjoy exploring their unique features.",
  //       items: [
  //         "C++",
  //         "JavaScript",
  //         "TypeScript",
  //         "PHP",
  //         "Python",
  //       ]
  //     },
  //     {
  //       header: "Frameworks and Libraries",
  //       description: "The frameworks and libraries that help me build applications efficiently. Each one has its own strengths, and I enjoy leveraging them to create powerful solutions.",
  //       items: [
  //         "React",
  //         "Next.js",
  //         // "React Native",
  //         // "Express.js",
  //         // "Hono.js",
  //         "Tailwind",
  //         // "Framer Motion",
  //         // "Expo",
  //       ]
  //     },
  //     {
  //       header: "Tools and Platforms",
  //       description: "The tools and platforms I use to streamline my development process. Each one plays a crucial role in my workflow, helping me stay organized and productive.",
  //       items: [
  //         // "GitHub",
  //         // "Vercel",
  //         "Render",
  //         // "Postman",
  //         // "Docker",
  //         "Redis",
  //         "MongoDB",
  //       ]
  //     },
  //     {
  //       header: "Softwares",
  //       description: "The software I rely on to enhance my development experience. Each one adds value to my workflow, making it easier to create and manage applications.",
  //       items: [
  //         // "Adobe Photoshop",
  //         // "Adobe Illustrator",
  //         // "Adobe After Effects",
  //         // "Adobe Premiere Pro",
  //         // "Microsoft Word",
  //         // "Microsoft Excel",
  //         // "Microsoft Powerpoint",
  //         // "Blender 3D",
  //         "Figma",
  //       ]
  //     }
  //   ],
  // },
  // {
  //   name: "Interests",
  //   title: "Beyond Work",
  //   description: "Sometimes I like to take a break from coding and explore other interests. These pursuits help me recharge and bring fresh perspectives to my work.",
  //   icon: SparklesIcon,
  //   color: "amber",
  //   type: "list",
  //   data: [],
  // },

]
