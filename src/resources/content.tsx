import { About, Blog, Gallery, Home, Newsletter, Person,  Social, Tech, Work } from "@/types";
import { GlitchFx, Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kevin",
  lastName: "Valentino",
  name: `Kevin Valentino`,
  role: "Backend Developer",
  avatar: "/images/avatars.jpeg",
  email: "kevin12keval@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NevrCode",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kevin-valentino-87254a1a1/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/valen__no/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@valen__no/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building reliable systems — from <GlitchFx speed="medium"><Text as="span" onBackground="brand-weak" >REST API</Text></GlitchFx>   to <Text as="span" onBackground="danger-medium" >real-time monitoring</Text></>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm {person.firstName}, a Backend developer specializing in scalable APIs, real-time data processing, <br /> and intelligent system integration.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Backend developer with solid experience in building scalable RESTful APIs using Gin (Go lang), 
        Spring Boot (java) and managing relational databases such as MySQL and PostgreSQL. 
        Proficient in designing efficient database schemas, 
        optimizing SQL queries, and applying clean coding principles. Comfortable working in agile teams.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "Personal Projects",
        timeframe: "May 2024 - Present",
        role: "Backend Engineer",
        achievements: [
          <>
            Designed and developed a RESTful backend service using Spring Boot and Spring Data JPA to manage user data and authentication for a web application.
          </>,
          <>
            Implemented JWT-based authentication and authorization with Spring Security (Filter and Provider)
          </>,
          <>
            Built CRUD REST APIs with PostgreSQL database integration, pagination, DTO pattern, global exception handling, and validation.
          </>,
          <>
           Followed layered architecture (Controller, Service, Repository) and clean code principles to ensure maintainability and scalability of the backend service.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Personal Projects",
        timeframe: "August 2023 - 2024",
        role: "Mobile Developer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Studies",
   
    institutions: [
      { 
        grade: 3.88,
        name: "Bunda Mulia University",
        description: <>Studied Informatics Technology.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: (
      //     <>Able to prototype in Figma with Once UI with unnatural speed.</>
      //   ),
      //   tags: [
      //     {
      //       name: "Figma",
      //       icon: "figma",
      //     },
      //   ],
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-02.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //     {
      //       src: "/images/projects/project-01/cover-03.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      {
        title: "Spring Framework",
        description: (
          <>Building RESTful APIs with Spring Boot, including JWT authentication, PostgreSQL integration, and clean code practices.</>),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Spring",
            icon: "spring",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Flutter",
        description: (
          <>Building cross platform Application that Followed Material Design principles and responsive UI patterns.</>),
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          }
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const tech :Tech = [
  {
    name: "Java",
    icon: "java",
  },{
    name: "Go",
    icon: "go",
  },
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "Spring",
    icon: "spring",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
  },
  {
    name: "Figma",
    icon: "figma",
  },
  {
    name: "Flutter",
    icon: "flutter",
  },
  {
    name: "MySQL",
    icon: "mysql",
  },
  
  {
    name: "TensorFlow",
    icon: "tensorflow", 
  },
  {
    name: "Keras",
    icon: "keras",}
]

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};


const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, tech };
