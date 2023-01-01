/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domCtrl.js":
/*!************************!*\
  !*** ./src/domCtrl.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrInput": () => (/* binding */ PrInput),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos),
/* harmony export */   "dueInp": () => (/* binding */ dueInp),
/* harmony export */   "formControl": () => (/* binding */ formControl),
/* harmony export */   "nameInp": () => (/* binding */ nameInp),
/* harmony export */   "openProject": () => (/* binding */ openProject),
/* harmony export */   "todoNameInp": () => (/* binding */ todoNameInp)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _check_bold_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-bold.svg */ "./src/check-bold.svg");
/* harmony import */ var _trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash-can.svg */ "./src/trash-can.svg");


; 


//dom elements
let projectFormBtn = document.querySelector(".project-form-btn")
let todoFormBtn = document.querySelector(".todo-form-btn")
let nameInp = document.querySelector("#name")
let dueInp = document.querySelector("#due-date")
let todoNameInp = document.querySelector("#todo-name")
let PrInput = document.querySelector("#priority")
let projectsCont = document.querySelector(".projects-cont")
let projectFormCont = document.querySelector(".project-form-cont")
let TodoFormCont = document.querySelector(".todo-form-cont")
let sections = document.querySelectorAll('.section')
sections = Array.from(sections)
let projectsPlus = document.querySelector(".projects-plus")
let todoSection = document.querySelector(".todo-list")

//listeners
projectsPlus.addEventListener("click", function(){
    formControl(projectFormCont)
})

projectFormBtn.addEventListener("click",function(){
    ;(0,___WEBPACK_IMPORTED_MODULE_0__.addProject)(projectFormCont)
})

todoFormBtn.addEventListener("click",function(){
    ;(0,___WEBPACK_IMPORTED_MODULE_0__.addTodo)(openProject,TodoFormCont)
})

let openProject = 0
let formShown = false
function displayProjects(projectsList){
    if(projectsList != ___WEBPACK_IMPORTED_MODULE_0__.projects){
        projectsList = (0,___WEBPACK_IMPORTED_MODULE_0__.sortedProjects)()
    }
    
    projectsCont.textContent = ''
    for(let i in projectsList){

        let done = new Image()
        let trash = new Image()
        done.src = _check_bold_svg__WEBPACK_IMPORTED_MODULE_1__
        trash.src = _trash_can_svg__WEBPACK_IMPORTED_MODULE_2__

        let projectDiv = document.createElement("div")
        let iconsDiv = document.createElement("div")

        projectDiv.classList.add("project")
        iconsDiv.classList.add("icons")

        done.classList.add("icon","done")
        trash.classList.add("icon","trash")

        iconsDiv.append(done)
        iconsDiv.append(trash)

        if (projectsList[i].name == ''){
            projectsList[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        let priorityColor = document.createElement("span")

        priorityColor.classList.add("priority-color")
        projectName.classList.add("project-name")
        priorityColor.textContent = "|"
        projectName.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.projects[i].name}`
        projectName.prepend(priorityColor)
        projectsCont.append(projectDiv)
        projectDiv.append(projectName)
        projectDiv.append(iconsDiv)

        if(projectsList[i].priority == 1){
            priorityColor.style.color = 'grey' ;
        }else if(projectsList[i].priority == 2){
            priorityColor.style.color = 'white' ;

        }else{
            priorityColor.style.color = 'rgb(241, 76, 76)'  

        }
    }

    let allTrash = Array.from(document.querySelectorAll(".trash"))
    for(let i = 0; i < allTrash.length; i++){
        allTrash[i].addEventListener("click",function(){
            (0,___WEBPACK_IMPORTED_MODULE_0__.rmvProject)(i)
        })
    }

    let allProject = Array.from(document.querySelectorAll(".project"))
    let allDone = Array.from(document.querySelectorAll(".done"))
    for(let i = 0; i < allProject.length; i++){
        allProject[i].addEventListener("click",function(){displayTodos(i)})

        allDone[i].addEventListener("click",function(){
            if(!projectsList[i].done){
                projectsList[i].done = true

            }else{
                projectsList[i].done = false
            }
            displayProjects(___WEBPACK_IMPORTED_MODULE_0__.currentProjectsList)
        })

        if(projectsList[i].done == true){
            allProject[i].style.textDecoration = "line-through"
        }
    }
}

function formControl(form){
    if(formShown){
        form.style.display = "none"
        formShown = false
        blurOnForm()
    }else{
        form.style.display = "block"
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


function displayTodos(i){
    openProject = i
    todoSection.textContent = ''
    let todosTitle = document.createElement("div")
    let projectTitle = document.createElement("h1")
    let todosPlus = document.createElement("span")
    let duedateText = document.createElement("p")

    duedateText.classList.add("due-date")
    todosTitle.classList.add("my-todos-title")
    todosPlus.textContent = "+"
    todosPlus.classList.add("plus","todos-plus")
    duedateText.textContent = `due-date: ${___WEBPACK_IMPORTED_MODULE_0__.projects[i].dueDate} `
    projectTitle.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projects[i].name
    todoSection.append(todosTitle)
    todosTitle.append(duedateText)
    todosTitle.append(projectTitle)
    todosTitle.append(todosPlus)
    
    todosPlus.addEventListener("click", function(){
            formControl(TodoFormCont)
    })

    let todosUl = document.createElement("ul")
    todosUl.classList.add("todos-ul")
    todoSection.append(todosUl)

    for(let t in ___WEBPACK_IMPORTED_MODULE_0__.projects[i].todos){
        let todoItem = document.createElement("li")
        let icons = document.createElement("div")
        let done = new Image()
        let trash = new Image()
        done.src = _check_bold_svg__WEBPACK_IMPORTED_MODULE_1__
        trash.src = _trash_can_svg__WEBPACK_IMPORTED_MODULE_2__
        
        todoItem.classList.add("todo-item")
        todoItem.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projects[i].todos[t].name
        todosUl.append(todoItem)
        icons.classList.add("icons")
        done.classList.add("icon","todo-done")
        trash.classList.add("icon","todo-trash")
        icons.append(done,trash)
        todoItem.prepend(icons)

    }
    let allTodos = Array.from(document.querySelectorAll(".todo-item"))
    for(let i in allTodos){
        if(___WEBPACK_IMPORTED_MODULE_0__.projects[openProject].todos[i].done){
            allTodos[i].style.textDecoration = "line-through"
        }else{
            allTodos[i].style.textDecoration = "auto";
        }
    }
    let allIconTrash = Array.from(document.querySelectorAll(".todo-trash"))
    let allIconDone = Array.from(document.querySelectorAll(".todo-done"))

    for(let i in allIconTrash){
        allIconTrash[i].addEventListener("click",function(){
            ___WEBPACK_IMPORTED_MODULE_0__.projects[openProject].todos.splice(i,1)
            displayTodos(openProject)
        })
    }

    for(let i in allIconDone){
        allIconDone[i].addEventListener("click",function(){
            if(!___WEBPACK_IMPORTED_MODULE_0__.projects[openProject].todos[i].done){
                ___WEBPACK_IMPORTED_MODULE_0__.projects[openProject].todos[i].done = true
                displayTodos(openProject)
            }else{
                ___WEBPACK_IMPORTED_MODULE_0__.projects[openProject].todos[i].done = false
                displayTodos(openProject)

            }
        })
    }


}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "currentProjectsList": () => (/* binding */ currentProjectsList),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "rmvProject": () => (/* binding */ rmvProject),
/* harmony export */   "sortedProjects": () => (/* binding */ sortedProjects)
/* harmony export */ });
/* harmony import */ var _domCtrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCtrl.js */ "./src/domCtrl.js");




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
    (0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(currentProjectsList)
})


function sortedProjects(){
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
    projects.push(new Project(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.nameInp.value,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.dueInp.value,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.PrInput.value))
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)(form)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(currentProjectsList)
}

function rmvProject(i){
    projects.splice(i,1)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(currentProjectsList)
}

function addTodo(i, form){
    projects[i].todos.push(new Todo(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.todoNameInp.value))
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(i)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)(form)
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

;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(currentProjectsList)
;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.openProject)







/***/ }),

/***/ "./src/check-bold.svg":
/*!****************************!*\
  !*** ./src/check-bold.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "734bea1d8ce5d3d011aa.svg";

/***/ }),

/***/ "./src/trash-can.svg":
/*!***************************!*\
  !*** ./src/trash-can.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f8dac09110a8eff5ef7.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxzREFBYTtBQUN0RSxJQUFJLHlEQUFXO0FBQ2YsSUFBSSw2REFBZTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2REFBZTtBQUNuQjs7QUFFQTtBQUNBLG9DQUFvQywwREFBaUI7QUFDckQsSUFBSSwwREFBWTtBQUNoQixJQUFJLHlEQUFXO0FBQ2Y7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2REFBZTtBQUNmLDBEQUFZLENBQUMsb0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEd4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS8uL3NyYy9kb21DdHJsLmpzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VycmVudFByb2plY3RzTGlzdCxybXZQcm9qZWN0LHByb2plY3RzLGFkZFByb2plY3QsYWRkVG9kbyxzb3J0ZWRQcm9qZWN0c30gZnJvbSBcIi5cIjtcbmV4cG9ydCB7bmFtZUlucCxkdWVJbnAsdG9kb05hbWVJbnAsZGlzcGxheVRvZG9zLG9wZW5Qcm9qZWN0LFBySW5wdXR9XG5pbXBvcnQgZG9uZVN2ZyBmcm9tIFwiLi9jaGVjay1ib2xkLnN2Z1wiIFxuaW1wb3J0IHRyYXNoU3ZnIGZyb20gXCIuL3RyYXNoLWNhbi5zdmdcIlxuXG4vL2RvbSBlbGVtZW50c1xubGV0IHByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tYnRuXCIpXG5sZXQgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybS1idG5cIilcbmxldCBuYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpXG5sZXQgZHVlSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKVxubGV0IHRvZG9OYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIilcbmxldCBQcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKVxubGV0IHByb2plY3RzQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udFwiKVxubGV0IHByb2plY3RGb3JtQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLWNvbnRcIilcbmxldCBUb2RvRm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybS1jb250XCIpXG5sZXQgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpXG5zZWN0aW9ucyA9IEFycmF5LmZyb20oc2VjdGlvbnMpXG5sZXQgcHJvamVjdHNQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1wbHVzXCIpXG5sZXQgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKVxuXG4vL2xpc3RlbmVyc1xucHJvamVjdHNQbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGZvcm1Db250cm9sKHByb2plY3RGb3JtQ29udClcbn0pXG5cbnByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgYWRkUHJvamVjdChwcm9qZWN0Rm9ybUNvbnQpXG59KVxuXG50b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgIGFkZFRvZG8ob3BlblByb2plY3QsVG9kb0Zvcm1Db250KVxufSlcblxubGV0IG9wZW5Qcm9qZWN0ID0gMFxubGV0IGZvcm1TaG93biA9IGZhbHNlXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHByb2plY3RzTGlzdCl7XG4gICAgaWYocHJvamVjdHNMaXN0ICE9IHByb2plY3RzKXtcbiAgICAgICAgcHJvamVjdHNMaXN0ID0gc29ydGVkUHJvamVjdHMoKVxuICAgIH1cbiAgICBcbiAgICBwcm9qZWN0c0NvbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGZvcihsZXQgaSBpbiBwcm9qZWN0c0xpc3Qpe1xuXG4gICAgICAgIGxldCBkb25lID0gbmV3IEltYWdlKClcbiAgICAgICAgbGV0IHRyYXNoID0gbmV3IEltYWdlKClcbiAgICAgICAgZG9uZS5zcmMgPSBkb25lU3ZnXG4gICAgICAgIHRyYXNoLnNyYyA9IHRyYXNoU3ZnXG5cbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxldCBpY29uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG4gICAgICAgIGljb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uc1wiKVxuXG4gICAgICAgIGRvbmUuY2xhc3NMaXN0LmFkZChcImljb25cIixcImRvbmVcIilcbiAgICAgICAgdHJhc2guY2xhc3NMaXN0LmFkZChcImljb25cIixcInRyYXNoXCIpXG5cbiAgICAgICAgaWNvbnNEaXYuYXBwZW5kKGRvbmUpXG4gICAgICAgIGljb25zRGl2LmFwcGVuZCh0cmFzaClcblxuICAgICAgICBpZiAocHJvamVjdHNMaXN0W2ldLm5hbWUgPT0gJycpe1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0W2ldLm5hbWUgPSBcIlNvbWUgUHJvamVjdFwiXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBsZXQgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5cbiAgICAgICAgcHJpb3JpdHlDb2xvci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktY29sb3JcIilcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKVxuICAgICAgICBwcmlvcml0eUNvbG9yLnRleHRDb250ZW50ID0gXCJ8XCJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1tpXS5uYW1lfWBcbiAgICAgICAgcHJvamVjdE5hbWUucHJlcGVuZChwcmlvcml0eUNvbG9yKVxuICAgICAgICBwcm9qZWN0c0NvbnQuYXBwZW5kKHByb2plY3REaXYpXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3ROYW1lKVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChpY29uc0RpdilcblxuICAgICAgICBpZihwcm9qZWN0c0xpc3RbaV0ucHJpb3JpdHkgPT0gMSl7XG4gICAgICAgICAgICBwcmlvcml0eUNvbG9yLnN0eWxlLmNvbG9yID0gJ2dyZXknIDtcbiAgICAgICAgfWVsc2UgaWYocHJvamVjdHNMaXN0W2ldLnByaW9yaXR5ID09IDIpe1xuICAgICAgICAgICAgcHJpb3JpdHlDb2xvci5zdHlsZS5jb2xvciA9ICd3aGl0ZScgO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcHJpb3JpdHlDb2xvci5zdHlsZS5jb2xvciA9ICdyZ2IoMjQxLCA3NiwgNzYpJyAgXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhbGxUcmFzaCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKSlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsVHJhc2gubGVuZ3RoOyBpKyspe1xuICAgICAgICBhbGxUcmFzaFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgcm12UHJvamVjdChpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxldCBhbGxQcm9qZWN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIikpXG4gICAgbGV0IGFsbERvbmUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG9uZVwiKSlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGFsbFByb2plY3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtkaXNwbGF5VG9kb3MoaSl9KVxuXG4gICAgICAgIGFsbERvbmVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCFwcm9qZWN0c0xpc3RbaV0uZG9uZSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0W2ldLmRvbmUgPSB0cnVlXG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdFtpXS5kb25lID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cyhjdXJyZW50UHJvamVjdHNMaXN0KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKHByb2plY3RzTGlzdFtpXS5kb25lID09IHRydWUpe1xuICAgICAgICAgICAgYWxsUHJvamVjdFtpXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Db250cm9sKGZvcm0pe1xuICAgIGlmKGZvcm1TaG93bil7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGZvcm1TaG93biA9IGZhbHNlXG4gICAgICAgIGJsdXJPbkZvcm0oKVxuICAgIH1lbHNle1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgZm9ybVNob3duID0gdHJ1ZVxuICAgICAgICBibHVyT25Gb3JtKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJsdXJPbkZvcm0oKXtcbiAgICBpZiAoZm9ybVNob3duKXtcbiAgICAgICAgZm9yKGxldCBpIGluIHNlY3Rpb25zKXtcbiAgICAgICAgICAgIHNlY3Rpb25zW2ldLnN0eWxlLmZpbHRlciA9IFwiYmx1cigycHgpXCJcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBmb3IobGV0IGkgaW4gc2VjdGlvbnMpe1xuICAgICAgICAgICAgc2VjdGlvbnNbaV0uc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIlxuICAgICAgICB9XG4gICAgfVxuICAgXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zKGkpe1xuICAgIG9wZW5Qcm9qZWN0ID0gaVxuICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gJydcbiAgICBsZXQgdG9kb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgbGV0IHRvZG9zUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgbGV0IGR1ZWRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICAgIGR1ZWRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKVxuICAgIHRvZG9zVGl0bGUuY2xhc3NMaXN0LmFkZChcIm15LXRvZG9zLXRpdGxlXCIpXG4gICAgdG9kb3NQbHVzLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICB0b2Rvc1BsdXMuY2xhc3NMaXN0LmFkZChcInBsdXNcIixcInRvZG9zLXBsdXNcIilcbiAgICBkdWVkYXRlVGV4dC50ZXh0Q29udGVudCA9IGBkdWUtZGF0ZTogJHtwcm9qZWN0c1tpXS5kdWVEYXRlfSBgXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ubmFtZVxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2Rvc1RpdGxlKVxuICAgIHRvZG9zVGl0bGUuYXBwZW5kKGR1ZWRhdGVUZXh0KVxuICAgIHRvZG9zVGl0bGUuYXBwZW5kKHByb2plY3RUaXRsZSlcbiAgICB0b2Rvc1RpdGxlLmFwcGVuZCh0b2Rvc1BsdXMpXG4gICAgXG4gICAgdG9kb3NQbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9ybUNvbnRyb2woVG9kb0Zvcm1Db250KVxuICAgIH0pXG5cbiAgICBsZXQgdG9kb3NVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIHRvZG9zVWwuY2xhc3NMaXN0LmFkZChcInRvZG9zLXVsXCIpXG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kKHRvZG9zVWwpXG5cbiAgICBmb3IobGV0IHQgaW4gcHJvamVjdHNbaV0udG9kb3Mpe1xuICAgICAgICBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGV0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBsZXQgZG9uZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGxldCB0cmFzaCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGRvbmUuc3JjID0gZG9uZVN2Z1xuICAgICAgICB0cmFzaC5zcmMgPSB0cmFzaFN2Z1xuICAgICAgICBcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKVxuICAgICAgICB0b2RvSXRlbS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnRvZG9zW3RdLm5hbWVcbiAgICAgICAgdG9kb3NVbC5hcHBlbmQodG9kb0l0ZW0pXG4gICAgICAgIGljb25zLmNsYXNzTGlzdC5hZGQoXCJpY29uc1wiKVxuICAgICAgICBkb25lLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsXCJ0b2RvLWRvbmVcIilcbiAgICAgICAgdHJhc2guY2xhc3NMaXN0LmFkZChcImljb25cIixcInRvZG8tdHJhc2hcIilcbiAgICAgICAgaWNvbnMuYXBwZW5kKGRvbmUsdHJhc2gpXG4gICAgICAgIHRvZG9JdGVtLnByZXBlbmQoaWNvbnMpXG5cbiAgICB9XG4gICAgbGV0IGFsbFRvZG9zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8taXRlbVwiKSlcbiAgICBmb3IobGV0IGkgaW4gYWxsVG9kb3Mpe1xuICAgICAgICBpZihwcm9qZWN0c1tvcGVuUHJvamVjdF0udG9kb3NbaV0uZG9uZSl7XG4gICAgICAgICAgICBhbGxUb2Rvc1tpXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGxUb2Rvc1tpXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiYXV0b1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBhbGxJY29uVHJhc2ggPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby10cmFzaFwiKSlcbiAgICBsZXQgYWxsSWNvbkRvbmUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kb25lXCIpKVxuXG4gICAgZm9yKGxldCBpIGluIGFsbEljb25UcmFzaCl7XG4gICAgICAgIGFsbEljb25UcmFzaFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdHNbb3BlblByb2plY3RdLnRvZG9zLnNwbGljZShpLDEpXG4gICAgICAgICAgICBkaXNwbGF5VG9kb3Mob3BlblByb2plY3QpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZm9yKGxldCBpIGluIGFsbEljb25Eb25lKXtcbiAgICAgICAgYWxsSWNvbkRvbmVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCFwcm9qZWN0c1tvcGVuUHJvamVjdF0udG9kb3NbaV0uZG9uZSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbb3BlblByb2plY3RdLnRvZG9zW2ldLmRvbmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKG9wZW5Qcm9qZWN0KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbb3BlblByb2plY3RdLnRvZG9zW2ldLmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvcyhvcGVuUHJvamVjdClcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG59XG5cbiIsImltcG9ydCB7ZGlzcGxheVByb2plY3RzLGZvcm1Db250cm9sLG5hbWVJbnAsZHVlSW5wLFBySW5wdXQsIHRvZG9OYW1lSW5wLGRpc3BsYXlUb2RvcyxvcGVuUHJvamVjdH0gZnJvbSBcIi4vZG9tQ3RybC5qc1wiXG5leHBvcnQge2N1cnJlbnRQcm9qZWN0c0xpc3QscHJvamVjdHMscm12UHJvamVjdCxhZGRQcm9qZWN0LGFkZFRvZG99XG5cblxuLy9hcnJheSB0byBob2xkIGFsbCBwcm9qZWN0IG9iamVjdHMgYW5kIHVzZSBpdCB0byBkaXNwbGF5IHRoZW0gb24gZG9tIFxuY29uc3QgcHJvamVjdHMgPSBbXVxubGV0IGN1cnJlbnRQcm9qZWN0c0xpc3QgPSBwcm9qZWN0cztcblxuLy9kZWNpZGUgd2hpY2ggd2F5IHRvIGRpc3BsYXkgcHJvamVjdHMsIGRvbmUgaGVyZSBjdXogb2YgYSB3ZWlyZCBidWdcbmxldCBzb3J0QnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnQtYnlcIilcbnNvcnRCeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtcbiAgICBpZihzb3J0QnkudmFsdWUgPT0gXCJkZWFmdWx0XCIpe1xuICAgICAgICBjdXJyZW50UHJvamVjdHNMaXN0ID0gcHJvamVjdHM7XG5cbiAgICB9ZWxzZXtcbiAgICAgICAgY3VycmVudFByb2plY3RzTGlzdCA9IHNvcnRlZFByb2plY3RzKCk7XG4gICAgfVxuICAgIGRpc3BsYXlQcm9qZWN0cyhjdXJyZW50UHJvamVjdHNMaXN0KVxufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkUHJvamVjdHMoKXtcbiAgICBsZXQgc29ydGVkUHJvamVjdHMgPSBbXVxuXG4gICAgZm9yKGxldCBpIGluIHByb2plY3RzKXtcbiAgICAgICAgaWYocHJvamVjdHNbaV0ucHJpb3JpdHkgPT0gMil7XG4gICAgICAgICAgICBzb3J0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3RzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaSBpbiBwcm9qZWN0cyl7XG4gICAgICAgIGlmKHByb2plY3RzW2ldLnByaW9yaXR5ID09IDMpe1xuICAgICAgICAgICAgc29ydGVkUHJvamVjdHMudW5zaGlmdChwcm9qZWN0c1tpXSlcbiAgICAgICAgfWVsc2UgaWYocHJvamVjdHNbaV0ucHJpb3JpdHkgPT0gMSl7XG4gICAgICAgICAgICBzb3J0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3RzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzb3J0ZWRQcm9qZWN0c1xuXG59XG5cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSxkdWVEYXRlLHByaW9yaXR5LGRvbmUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZVxuICAgICAgICB0aGlzLnRvZG9zID0gW11cbiAgICB9XG4gICAgcHVzaFByb2plY3QoKXtcbiAgICAgICAgcHJvamVjdHMucHVzaCh0aGlzKVxuICAgIH1cblxuICAgIHB1c2hUb2RvKG5hbWUsIGRvbmUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kbyhuYW1lLGRvbmUpKVxuICAgIH1cbn1cblxuY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRvbmUgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChmb3JtKXtcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWVJbnAudmFsdWUsZHVlSW5wLnZhbHVlLFBySW5wdXQudmFsdWUpKVxuICAgIGZvcm1Db250cm9sKGZvcm0pXG4gICAgZGlzcGxheVByb2plY3RzKGN1cnJlbnRQcm9qZWN0c0xpc3QpXG59XG5cbmZ1bmN0aW9uIHJtdlByb2plY3QoaSl7XG4gICAgcHJvamVjdHMuc3BsaWNlKGksMSlcbiAgICBkaXNwbGF5UHJvamVjdHMoY3VycmVudFByb2plY3RzTGlzdClcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyhpLCBmb3JtKXtcbiAgICBwcm9qZWN0c1tpXS50b2Rvcy5wdXNoKG5ldyBUb2RvKHRvZG9OYW1lSW5wLnZhbHVlKSlcbiAgICBkaXNwbGF5VG9kb3MoaSlcbiAgICBmb3JtQ29udHJvbChmb3JtKVxufVxuXG5cbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiTGVhcm4gSmF2YVNjcmlwdFwiLFwiMjAyMy0wMS0xMFwiLDIsZmFsc2UpXG5sZXQgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIkNsZWFuIFRoZSBIb3VzZVwiLFwiMjAyMy0wMS0xMFwiLDMsZmFsc2UpXG5cbnByb2plY3QxLnB1c2hUb2RvKFwiVmFyaWFibGVcIixmYWxzZSlcbnByb2plY3QxLnB1c2hUb2RvKFwiRnVuY3Rpb25zXCIsZmFsc2UpXG5wcm9qZWN0MS5wdXNoVG9kbyhcIkZvciBMb29wc1wiLGZhbHNlKVxucHJvamVjdDEucHVzaFRvZG8oXCJDbGFzc2VzXCIsZmFsc2UpXG5cbnByb2plY3QyLnB1c2hUb2RvKFwiTW9wIGFuZCB3YXNoIHRoZSBmbG9vclwiLGZhbHNlKVxucHJvamVjdDIucHVzaFRvZG8oXCJDbGVhbiB0aGUgd2luZG93c1wiLGZhbHNlKVxucHJvamVjdDIucHVzaFRvZG8oXCJDbGVhbiB0aGUgb3ZlblwiLGZhbHNlKVxucHJvamVjdDIucHVzaFRvZG8oXCJDaGFuZ2UgYmVkIHNoZWV0c1wiLGZhbHNlKVxuXG5wcm9qZWN0MS5wdXNoUHJvamVjdCgpXG5wcm9qZWN0Mi5wdXNoUHJvamVjdCgpXG5cbmRpc3BsYXlQcm9qZWN0cyhjdXJyZW50UHJvamVjdHNMaXN0KVxuZGlzcGxheVRvZG9zKG9wZW5Qcm9qZWN0KVxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9