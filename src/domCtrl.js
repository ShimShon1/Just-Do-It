import {rmvProject,projects,formBtn,nameInp,dueInp,projectsCont,formCont,sections} from ".";
import doneSvg from "./check-bold.svg" 
import trashSvg from "./trash-can.svg"

let formShown = false

export function displayProjects(){
    projectsCont.textContent = ''
    for(let i in projects){

        let done = new Image()
        let trash = new Image()
        done.src = doneSvg
        trash.src = trashSvg

        let projectDiv = document.createElement("div")
        let iconsDiv = document.createElement("div")

        projectDiv.classList.add("project")
        iconsDiv.classList.add("icons")

        done.classList.add("icon")
        trash.classList.add("icon")
        trash.classList.add("trash")

        iconsDiv.append(done)
        iconsDiv.append(trash)


        if (projects[i].name == ''){
            projects[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        projectName.classList.add("project-name")
        
        projectName.textContent = `${projects[i].name}`

        projectsCont.append(projectDiv)
        projectDiv.append(projectName)
        projectDiv.append(iconsDiv)
    }


    let allTrash = document.querySelectorAll(".trash")
    allTrash = Array.from(allTrash)
    for(let i = 0; i < allTrash.length; i++){
        allTrash[i].addEventListener("click",function(){rmvProject(i)})
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


