import React from "react"
import HTML from "../../../public/assests/html.png";
import Css from "../../../public/assests/css.png"
import javascript from "../../../public/assests/javascript.png"
import jest from "../../../public/assests/jest.png"
import mongodb from "../../../public/assests/mongo.png"
import next from "../../../public/assests/nextjs.png"
import node from "../../../public/assests/node.png"
import react from "../../../public/assests/react.png"
import tailwind from "../../../public/assests/tailwind.png"
import docker from "../../../public/assests/Docker.png"
import typescript from "../../../public/assests/typescript.png"
import mySql from "../../../public/assests/mysql.png"
import oumflavor from "../../../public/assests/oumflavor.png"
import techInnovate from "../../../public/assests/techInnovate.png"
import chatApp from "../../../public/assests/ChatApp.png"
import Todolist from "../../../public/assests/Todolist.png"



export const skillsData =[
    {
        title: "HTML", 
        image :HTML
    },
    {
        title : "CSS",
        image : Css
    },
    {
        title : "JavaScript",
        image : javascript
    },
    {
        title : "Next.Js",
        image : next
    },
    {
        title : "React.Js",
        image : react
    },
    {
        title : "Node",
        image : node
    },
    {

        title : "Jest",
        image : jest
    }, 
    {
        title : "MongoDb",
        image : mongodb
    },
    {
        title : "Tailwind",
        image : tailwind
    },
    {
        title : "Docker",
        image : docker
    },

    {
        title : "TypeScript",
        image : typescript
    },
    {
        title : "My Sql",
        image : mySql
    }
    

] as const



export const projectsData = [
    {
      title: "OumFlavor",
      description:
        "Creating a platform with the goal of simplifying the online booking process for customers,while also offering a comprehensive solution for managing contacts, reviews, reservations, and menu.",
      tags: ["TypeScript", "Next.js", "MongoDB", "Jest", "Tailwind", "Redux Toolkit"],
      imageUrl: oumflavor,
      href:"https://github.com/EzaroualiOumaima/oum-flavor.git"
    },
    {
      title: "ChatApplication",
      description:"Crafting a live communication interface for instantaneous message sharing via websockets. Facilitating real-time interactions, fostering seamless user engagement and connectivity.",
      tags: ["TypeScript", "Next.js", "MongoDB", "Tailwind", "Express.Js" , "Socket.io"],
      imageUrl: chatApp,
      href:"https://github.com/EzaroualiOumaima/chat-app-socket.git"
    },
    {
      title: "TechInnovate",
      description:"Developing an informative website for a company, showcasing its services, projects, and teams, with each page offering detailed insights into the company's expertise and skilled individuals driving its success. ",
      tags: ["TypeScript", "Next.js", "Tailwind Css", "Vercel"],
      imageUrl: techInnovate,
      href:"https://github.com/EzaroualiOumaima/tech_innovate_next.git"
    },
    {
      title: "To Do List",
      description: "Development of a responsive (ToDoList) application, adaptable to all types of devices, allowing users to create tasks, following an MVC architecture and organized in a monorepo for centralized management of the source code.",
      tags: ["React.Js", "Express.Js", "MongoDB", "Tailwind", "Joi", "Axios" ,"Jest"],
      imageUrl: Todolist,
      href:"https://github.com/EzaroualiOumaima/ToDoList-MERN.git"
    },
   
] as const 