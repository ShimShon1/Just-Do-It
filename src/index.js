import {displayProjects,formControl,nameInp,dueInp,PrInput, todoNameInp,displayTodos,openProject} from "./domCtrl.js"
export {currentProjectsList,projects,rmvProject,addProject,addTodo}


//array to hold all project objects and use it to display them on dom 
const projects = []
let currentProjectsList = projects;

//decide which way to display projects, done here cuz of a weird bug
let sortBy = document.querySelector(".sort-by")
sortBy.addEventListener("change",function(){
    if(sortBy.value == "deafult"){
        currentProjectsList = projects;

    }else{
        currentProjectsList = sortedProjects();
    }
    displayProjects(currentProjectsList)
})


export function sortedProjects(){
    let sortedProjects = []

    for(let i in projects){
        if(projects[i].priority == 2){
            sortedProjects.push(projects[i])
        }
    }
    for(let i in projects){
        if(projects[i].priority == 3){
            sortedProjects.unshift(projects[i])
        }else if(projects[i].priority == 1){
            sortedProjects.push(projects[i])
        }
    }
    
    return sortedProjects

}

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

    pushTodo(name, done = false){
        this.todos.push(new Todo(name,done))
    }
}

class Todo{
    constructor(name,done = false){
        this.name = name
        this.done = done
    }
}

function addProject(form){
    projects.push(new Project(nameInp.value,dueInp.value,PrInput.value))
    formControl(form)
    displayProjects(currentProjectsList)
}

function rmvProject(i){
    projects.splice(i,1)
    displayProjects(currentProjectsList)
}

function addTodo(i, form){
    projects[i].todos.push(new Todo(todoNameInp.value))
    displayTodos(i)
    formControl(form)
}


let project1 = new Project("Learn JavaScript","2023-01-10",2,false)
let project2 = new Project("Clean The House","2023-01-10",3,false)

project1.pushTodo("Variable",false)
project1.pushTodo("Functions",false)
project1.pushTodo("For Loops",false)
project1.pushTodo("Classes",false)

project2.pushTodo("Mop and wash the floor",false)
project2.pushTodo("Clean the windows",false)
project2.pushTodo("Clean the oven",false)
project2.pushTodo("Change bed sheets",false)

project1.pushProject()
project2.pushProject()

displayProjects(currentProjectsList)
displayTodos(openProject)





