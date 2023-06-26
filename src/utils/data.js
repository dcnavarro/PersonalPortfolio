import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Websites",
    projects: 7,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile Apps",
    projects: 5,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Design & Brand Identity",
    projects: 7,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Applying the experience I have in the corporate world, I can help you find the best solution for your problem.",
  "By incorporating the best of design and customer experience, I can create digital solutions that contribute to the growth of your business.",
];

export const workExp = [
  {
    place: "Freelancer",
    tenure: "Jul 2023 - Present",
    role: "Full Stack Web Developer",
    detail:
      "As a Freelancer, I have worked on various projects that helped my clients achieve their goals. This includes creating visually appealing and brand-aligned websites, developing solutions for patient scheduling, setting up e-commerce platforms, and providing soludions for personalized exercise routines management.",
  },
  {
    place: "No Country - Freelance",
    tenure: "May 2023 - Present",
    role: "Full Stack Developer - Frontend Oriented",
    detail:
      "In a simulated work environment, I collaborate with other developers, UX/UI designers, a project manager, and a product owner with different experience levels and tech stacks. We work with several tech stacks to create a common interest project.",
  },
  {
    place: "soyHenry",
    tenure: "Nov 2022 - May 2023",
    role: "Full Stack Web Developer",
    detail:
      "soyHenry is an intensive programming bootcamp where students can start programming without any prior knowledge and acquire both Frontend and Backend skills that enable them to professionally enter the IT world. Students study and apply knowledge of JavaScript, relational databases like PostgreSQL, NodeJS in the Backend, and frameworks like React Redux in the Frontend.",
  },
];

export const comments = [
  {
    name: "Paula",
    post: "Pastry chef - Business woman",
    comment:
      "For our business, the incorporation of an application generated a sales boom and allowed us to improve production management.",
    img: "./people1.png",
  },
  {
    name: "Paloma",
    post: "Nutritionist",
    comment:
      "It is very important for our work to have a tool for the management of our patients, which includes all the information from their clinical history, as well as the scheduling of their past and future care.",
    img: "./people1.png",
  },
  {
    name: "Jorge",
    post: "Inclusive Tourism Manager",
    comment:
      "It is essential to have a tool to centralize all our activities. It is a space for communication and interaction for the Inclusive Tourism community.",
    img: "./people2.png",
  },
  {
    name: "Ivana",
    post: "Kinesiologist",
    comment:
      "The management of information and activities of patients is essential for the professional. Having a tool that allows us to do it quickly and easily is of great value for our daily work.",
    img: "./people1.png",
  },
  {
    name: "Gonzalo",
    post: "Transportation industry businessman",
    comment:
      "For our company, the incorporation of a management tool has been a leap towards increasing productivity.",
    img: "./people2.png",
  },
  {
    name: "Karina",
    post: "Personal Trainer",
    comment:
      "Having a tool so that all students can have their information and personalized training routines has been essential for our activity.",
    img: "./people1.png",
  },
  {
    name: "Cecilia",
    post: "Lawyer",
    comment:
      "With the incorporation of a management board, the centralization and management of information have become essential for the execution of our task.",
    img: "./people1.png",
  },
  {
    name: "Federico",
    post: "Agricultural Specialist",
    comment:
      "Having a simple tool, which allows agricultural producers to increase their productivity, has been a fundamental step for the growth of our business",
    img: "./people2.png",
  },
  {
    name: "Maria",
    post: "Creator of artistic activities",
    comment:
      "The ease with which I can create and manage different agendas, with various proposals and locations, makes my job much simpler.",
    img: "./people1.png",
  },
  {
    name: "Ezequiel",
    post: "Stenotypist - Businessman",
    comment:
      "From the incorporation of a sales and management tool, the activity of our company has made a quantum leap.",
    img: "./people2.png",
  },
  {
    name: "Paola",
    post: "Cosmiatrist",
    comment:
      "It is simple and easy to organize each work day thanks to the incorporation of an agenda, an activities board, and the centralized information of my clients.",
    img: "./people1.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
