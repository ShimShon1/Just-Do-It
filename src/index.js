import {displayProjects,formControl} from "./domCtrl.js"
export {projects,formBtn,nameInp,dueInp,projectsCont,formCont,sections}

//array to hold all project objects and use it to display them on dom 
const projects = []

class Project{
    constructor(name,dueDate,priority,done = false){
        this.name = name
        this.dueDate = dueDate
        this.priority = priority
        this.done = done
    }
    pushProject(){
        projects.push(this)
    }

    removeProject(){
        projects.splice(projects.indexOf(this),projects.indexOf(this)+1)
    }
}

function addProject(){
    projects.push(new Project(nameInp.value,dueInp.value,3))
    displayProjects()
    console.log(projects);
}

//dom elements
let formBtn = document.querySelector(".form-btn")
let nameInp = document.querySelector("#name")
let dueInp = document.querySelector("#due-date")
let projectsCont = document.querySelector(".projects-cont")
let formCont = document.querySelector(".form-cont")
let sections = document.querySelectorAll('.section')
let projectsPlus = document.querySelector(".projects-plus")
sections = Array.from(sections)

//listeners
formBtn.addEventListener("click",addProject)
projectsPlus.addEventListener("click", formControl)