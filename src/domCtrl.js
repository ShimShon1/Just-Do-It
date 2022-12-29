import {projects,formBtn,nameInp,dueInp,projectsCont,formCont,sections} from ".";

let formShown = false

export function displayProjects(){
    formControl()
    projectsCont.textContent = ''

    for(let i in projects){
        let projectDiv = document.createElement("div")

        if (projects[i].name == ''){
            projects[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        
        projectName.textContent = `${projects[i].name}`

        projectsCont.append(projectDiv)
        projectDiv.append(projectName)

        projectDiv.classList.add("project")
    }
}

export function formControl(){
    if(formShown){
        formCont.style.display = "none"
        formShown = false
        blurOnForm()


    }else{
        formCont.style.display = "block"
        formShown = true
        blurOnForm()


    }
}

function blurOnForm(){
    if (formShown){
        for(let i in sections){
            sections[i].style.filter = "blur(2px)"
        }
    }else{
        for(let i in sections){
            sections[i].style.filter = "blur(0px)"
        }
    }
   
}

