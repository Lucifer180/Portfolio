import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shreyas",
  lastName: "S",
  name: `Shreyas S`,
  role: "Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "shreyas.s.20118@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on frontend engineering, TypeScript, and shipping to production</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Lucifer180",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shreyass180/",
    essential: true,
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
  headline: <>Building interfaces that hold up in production</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong">
        ONCE UI
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my own projects.
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
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.location.split("/")[1]?.replace("_", " ")}-based{" "}
        {person.role.toLowerCase()} with a passion for transforming complex challenges into simple,
        elegant design solutions. Their work spans digital interfaces, interactive experiences, and
        the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DIATOZ Solutions",
        timeframe: "Jul 2025 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Own the frontend of an enterprise RMA platform serving 500+ daily users, built with
            React.js, TypeScript, Tailwind CSS, and Material UI.
          </>,
          <>
            Built a library of 20+ reusable UI components using atomic design principles, cutting
            duplicate component work and improving code reuse by 40%.
          </>,
          <>
            Designed dynamic, schema-driven form validation and workflow automation that cut manual
            processing effort by 25%, directly reducing turnaround time for approvals.
          </>,
          <>
            Architected backend services for a Procurement Management System (Node.js, Express.js,
            MongoDB) spanning requests, approvals, and inventory across 10+ modules.
          </>,
          <>
            Migrated core services to TypeScript, reducing production runtime issues by 30% and
            easing onboarding for new engineers.
          </>,
          <>
            Implemented role-based access control, JWT auth, and Docker-based CI/CD, strengthening
            security and shortening release cycles.
          </>,
          <>
            Integrated React Query for caching, cutting redundant API calls by 35%; partnered with
            PMs and QA across the sprint cycle.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "HashCovet",
        timeframe: "Jan 2025 - May 2025",
        role: "Next.js Developer Intern",
        achievements: [
          <>
            Diagnosed and resolved 15+ critical UI and API defects in a live production Next.js
            environment, improving platform stability by 30%.
          </>,
          <>
            Cut page load times by 20% by introducing React memoization and lazy loading for
            high-traffic components.
          </>,
          <>
            Modernized legacy class-based components into a hooks-based functional architecture,
            reducing technical debt and improving maintainability.
          </>,
          <>
            Delivered production-ready features as part of a 6-member cross-functional Agile team,
            participating in sprint planning and code review.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Christ College",
        description: (
          <>Bachelor of Computer Applications (BCA), 2022 - 2025. CGPA: 9.17/10.</>
        ),
      },
      {
        name: "Eduversity",
        description: <>Full Stack Web Development certification.</>,
      },
      {
        name: "Udemy",
        description: <>React - The Complete Developer Course.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "TypeScript",
        description: (
          <>
            Migrate and maintain production codebases in TypeScript, using strict typing to catch
            regressions before they ship and to make services easier for new engineers to pick up.
          </>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Node.js & APIs",
        description: (
          <>
            Design REST APIs and backend services with Node.js and Express — JWT authentication,
            role-based access control, and middleware architecture for multi-module enterprise
            systems.
          </>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express",
            icon: "express",
          },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            Model and query data across MongoDB (Mongoose, aggregation, full-text search), MySQL,
            and PostgreSQL with Prisma ORM, plus Redis for cache-aside read paths on high-traffic
            endpoints.
          </>
        ),
        tags: [
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Prisma",
            icon: "prisma",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "Styling & UI",
        description: (
          <>
            Translate designs into accessible, cross-browser interfaces with Tailwind CSS and
            Material UI, keeping a consistent component vocabulary across large applications.
          </>
        ),
        tags: [
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Material UI",
            icon: "mui",
          },
        ],
        images: [],
      },
      {
        title: "DevOps & Deployment",
        description: (
          <>
            Ship with Docker and GitHub Actions CI/CD, and run production Linux deployments behind
            Nginx with PM2 — including debugging SELinux, firewalld, and TLS issues when they break.
          </>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "GitHub Actions",
            icon: "githubactions",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and the things I break...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack and frontend projects by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery };
