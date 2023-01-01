import {displayProjects,formControl,nameInp,dueInp,PrInput, todoNameInp,displayTodos,openProject} from "./domCtrl.js"
export {projects,rmvProject,addProject,addTodo}

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
    displayProjects()
}

function rmvProject(i){
    projects.splice(i,1)
    displayProjects()
}

function addTodo(i, form){
    projects[i].todos.push(new Todo(todoNameInp.value))
    displayTodos(i)
    formControl(form)

}


let release = new Project("Armadilo to garbadge","2023-01-10",3,false)
release.pushTodo("adpot a pet",false)
release.pushTodo("aaa a duck",false)

release.pushProject()

displayProjects()
displayTodos(openProject)

