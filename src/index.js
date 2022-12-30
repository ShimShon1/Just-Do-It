import {displayProjects,formControl} from "./domCtrl.js"
export {projects,formBtn,nameInp,dueInp,projectsCont,formCont,sections,rmvProject}

//array to hold all project objects and use it to display them on dom 
const projects = []

class Project{
    constructor(name,dueDate,priority,done = false){
        this.name = name
        this.dueDate = dueDate
        this.priority = priority
        this.done = done
        this.todos = []
    }
    pushProject(){
        projects.push(this)
    }

    removeProject(){
        projects.splice(projects.indexOf(this),projects.indexOf(this)+1)
    }

    addTodo(todo){
        this.todos.push(todo)
    }
}

class Todo{
    constructor(name,desc){
        this.name = name
        this.desc = desc
    }
}


function addProject(){
    projects.push(new Project(nameInp.value,dueInp.value,3))
    displayProjects()
    formControl()
}


function rmvProject(i){
    projects.splice(i,1)
    displayProjects()

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

let release = new Project("son of god","22.3.2023",3,false)
release.addTodo(new Todo("adpot","adpot a pet"))



addProject(release)
addProject(release)



console.log(projects);