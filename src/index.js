import {displayProjects,formControl,nameInp,dueInp, todoNameInp,displayTodos,openProject} from "./domCtrl.js"
export {projects,rmvProject,addProject,addTodo,rmvTodo}

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

    pushTodo(todo){
        this.todos.push(todo)
    }
}

class Todo{
    constructor(name,desc){
        this.name = name
        this.desc = desc
    }
}

function addProject(form){
    projects.push(new Project(nameInp.value,dueInp.value,3))
    formControl(form)
    displayProjects()
}

function rmvProject(i){
    projects.splice(i,1)
    displayProjects()
}

function addTodo(i, form){
    projects[i].todos.push(todoNameInp.value)
    console.log(projects);
    displayTodos(i)
    console.log(form);
    formControl(form)

}

function rmvTodo(i){
    projects[openProject].todos.splice(i,1)
    displayTodos(openProject)

}

let release = new Project("Armdilo to garbadge","22.3.2023",3,false)
release.pushTodo("adpot a pet")
release.pushTodo("fuck a duck")

release.pushProject()
release.pushProject()
console.log(release);

displayProjects()
displayTodos(openProject)