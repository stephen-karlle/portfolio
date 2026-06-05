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
            start: "Apr 2026",
            end: "Present"
          },
          title: "Frontend Developer",
          organization: {
            name: "P&A Grant Thornton",
            logo: "/images/gt.png",
            url: "https://www.grantthornton.com.ph/"
          },
          location: "Makati, National Capital Region, Philippines · Hybrid",
          responsibilities: [
            "Built dynamic and responsive user interfaces using React.js and component-driven architecture.",
            "Developed full pages and routing using Next.js, leveraging SSR and SSG for optimized performance.",
            "Wrote type-safe, scalable frontend code using TypeScript, reducing runtime errors across the codebase.",
            "Styled and themed application layouts using Tailwind CSS, ensuring consistent and responsive design.",
            "Integrated and consumed RESTful APIs documented via Swagger, streamlining frontend-backend communication.",
            "Developed and maintained server-side rendered views using .NET Razor, bridging frontend and backend presentation layers.",
            "Built and consumed backend services using .NET Core, contributing to full-stack feature development.",
            "Managed source control, sprint planning, and work item tracking using Azure DevOps.",
            "Configured and maintained CI/CD pipelines on Azure DevOps, automating build and deployment workflows.",
            "Successfully deployed a production feature end-to-end via Azure DevOps, coordinating pipeline execution and release management.",
            "Revamped an entire project from the ground up, improving maintainability and scalability.",
            "Redesigned the overall UI/UX, delivering a modern look and feel aligned with company branding standards.",
            "Diagnosed and resolved a critical race condition, ensuring reliable data rendering and preventing unpredictable UI behavior.",
          ]
        },
        {
          date: {
            start: "Jul 2025",
            end: "Apr 2026"
          },
          title: "Full Stack Developer",
          organization: {
            name: "AF Impacts LLC",
            logo: null,
            url: "https://www.swayed.io"
          },
          location: "Dallas, Texas, United States · Remote",
          responsibilities: [
            "Built and maintained the entire Next.js frontend, serving as the main client-facing layer of the Swayed.io UGC and productivity SaaS platform.",
            "Developed social media scrapers using FastAPI to gather and process videos from Facebook, Instagram, TikTok, YouTube, LinkedIn, and Twitter.",
            "Implemented background job processing using FastAPI workers with Redis for storing and tracking job IDs across asynchronous workflows.",
            "Managed cloud-based data storage using AWS DynamoDB as the primary database and S3 as the CDN for storing images, files, and system-generated documents.",
            "Implemented secure authentication and user management using Clerk, handling sign-up, login, and user sessions.",
            "Integrated Stripe as the payment gateway, enabling subscription and billing workflows for SaaS users.",
            "Built and delivered branded transactional emails using Resend combined with React Email for polished user communications.",
            "Built an AI-powered chatbot using Claude, Gemini 3, and GPT-5 via OpenRouter, enabling intelligent conversational experiences within the platform.",
            "Implemented vector search and semantic memory using Pinecone to store and retrieve user conversation context for the chatbot.",
            "Built a drag-and-drop node-based interface using React Flow, allowing users to connect file sources, links, and other nodes directly to the chatbot node as context inputs.",
            "Automated UGC video generation workflows using n8n, orchestrating multi-step pipelines for content creation.",
            "Leveraged RunningHub to generate UGC mirror shots, B-rolls, product reviews, face swaps, clothing swaps, motion transfers, storyboards, and HD upscaling for images and videos.",
            "Integrated Replicate AI and Hedra to generate AI videos from user-provided images and scripts.",
            "Implemented application security, rate limiting, and abuse prevention across API endpoints using Arcjet.",
            "Deployed and managed the FastAPI backend on Coolify hosted on VHSCloud for high-performance server requirements, with the Next.js frontend on Railway and Render as a failover backup.",
            "Integrated Alibaba Cloud's Wan model API to convert static images into realistic AI-generated videos.",
          ]
        },
        {
          date: {
            start: "May 2025",
            end: "Jul 2025"
          },
          title: "Web Developer",
          organization: {
            name: "La Rose Noire",
            logo: "/images/larose.jpg",
            url: "https://la-rose-noire.com"
          },
          location: "Clark Freeport and Special Economic Zone, Central Luzon, Philippines · On-site",
          responsibilities: [
            "Built a full-stack QR Code Event System enabling users to track attendance, manage events, and claim prizes seamlessly.",
            "Developed a Google Drive-inspired file management tool for uploading, organizing, and managing forms internally.",
            "Created a PDF Comparison Tool to streamline the QA process, allowing teams to efficiently compare two documents side by side.",
            "Designed and built RESTful APIs using Flask, powering backend logic for internal web applications.",
            "Developed lightweight and performant backend services using Hono.js for fast API routing and middleware handling.",
            "Built responsive and modern user interfaces using React.js and Tailwind CSS.",
            "Automated and manipulated PDF, Excel, and Word files using Python, reducing manual document processing effort.",
            "Designed and managed relational databases using Microsoft SQL Server, ensuring data integrity across systems.",
            "Mapped and managed database entities using TypeORM, streamlining object-relational interactions.",
            "Deployed and managed web applications on IIS (Internet Information Services), handling production releases and server configurations.",
          ]
        },
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
          location: "Marilao, Bulacan, Philippines · Remote",
          responsibilities: [
            "Collaborated with the team and managed tasks using Jira to track progress.",
            "Utilized Bitbucket for version control and contributed changes to the main branch.",
            "Created emulators with Android Studio for mobile application development.",
            "Leveraged TypeScript for type safety, ensuring robust and maintainable code.",
            "Transformed Figma designs into fully functional mobile interfaces using React Native.",
            "Integrated Expo into the development process to streamline building applications.",
            "Implemented form handling and validation using React Hook Form for user input.",
            "Utilized Axios for making HTTP requests, enabling seamless communication with APIs.",
            "Ensured data consistency and validation using Zod for schema-based form and API validation.",
            "Managed application state efficiently with Jotai, simplifying global state logic.",
            "Set up file-based routing in mobile apps using Expo Router to streamline navigation.",
            "Utilized Node.js for package management with npm and yarn.",
          ]
        },
        {
          date: {
            start: "Jan 2024",
            end: "Jan 2025"
          },
          title: "Full Stack Developer",
          organization: {
            name: "Krale Labs",
            logo: null,
            url: null
          },
          location: "Pampanga, Philippines · Freelance",
          responsibilities: [
            "Built reusable components using React to consistent UI across applications.",
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
            "Created wireframes and prototypes using Figma to design user interfaces.",
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
]