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
let projectsPlus = document.querySelector(".projects-plus")

sections = Array.from(sections)
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



function displayProjects(){
    projectsCont.textContent = ''
    for(let i in ___WEBPACK_IMPORTED_MODULE_0__.projects){

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

        if (___WEBPACK_IMPORTED_MODULE_0__.projects[i].name == ''){
            ___WEBPACK_IMPORTED_MODULE_0__.projects[i].name = "Some Project"
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


        if(___WEBPACK_IMPORTED_MODULE_0__.projects[i].priority == 1){
            priorityColor.style.color = 'grey' ;
        }else if(___WEBPACK_IMPORTED_MODULE_0__.projects[i].priority == 2){
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
            if(!___WEBPACK_IMPORTED_MODULE_0__.projects[i].done){
                ___WEBPACK_IMPORTED_MODULE_0__.projects[i].done = true

            }else{
                ___WEBPACK_IMPORTED_MODULE_0__.projects[i].done = false
            }
            displayProjects()
        })

        if(___WEBPACK_IMPORTED_MODULE_0__.projects[i].done == true){
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
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "rmvProject": () => (/* binding */ rmvProject)
/* harmony export */ });
/* harmony import */ var _domCtrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCtrl.js */ "./src/domCtrl.js");



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
    projects.push(new Project(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.nameInp.value,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.dueInp.value,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.PrInput.value))
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)(form)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
}

function rmvProject(i){
    projects.splice(i,1)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
}

function addTodo(i, form){
    projects[i].todos.push(new Todo(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.todoNameInp.value))
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(i)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)(form)

}


let release = new Project("Armadilo to garbadge","2023-01-10",3,false)
release.pushTodo("adpot a pet",false)
release.pushTodo("aaa a duck",false)

release.pushProject()

;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDVztBQUNwRSxDQUFzQztBQUNBOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSw4Q0FBVTtBQUNkLENBQUM7OztBQUdEO0FBQ0EsSUFBSSwyQ0FBTztBQUNYLENBQUM7O0FBRUQ7QUFDQTs7OztBQUlPO0FBQ1A7QUFDQSxpQkFBaUIsdUNBQVE7O0FBRXpCO0FBQ0E7QUFDQSxtQkFBbUIsNENBQU87QUFDMUIsb0JBQW9CLDJDQUFROztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksdUNBQVE7QUFDcEIsWUFBWSx1Q0FBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBUSxTQUFTOzs7QUFHdEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFdBQVcsdUNBQVE7QUFDbkI7QUFDQSxTQUFTLFFBQVEsdUNBQVE7QUFDekI7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0EsWUFBWSw2Q0FBVTtBQUN0QixTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDLDBEQUEwRCxnQkFBZ0I7O0FBRTFFO0FBQ0EsZ0JBQWdCLHVDQUFRO0FBQ3hCLGdCQUFnQix1Q0FBUTs7QUFFeEIsYUFBYTtBQUNiLGdCQUFnQix1Q0FBUTtBQUN4QjtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxXQUFXLHVDQUFRO0FBQ25CO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsdUNBQVEsYUFBYTtBQUNoRSwrQkFBK0IsdUNBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1Q0FBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBTztBQUMxQixvQkFBb0IsMkNBQVE7QUFDNUI7QUFDQTtBQUNBLCtCQUErQix1Q0FBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUNBQVE7QUFDbkI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1Q0FBUTtBQUNwQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUFRO0FBQ3hCLGdCQUFnQix1Q0FBUTtBQUN4QjtBQUNBLGFBQWE7QUFDYixnQkFBZ0IsdUNBQVE7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNQcUg7QUFDdEU7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsc0RBQWEsQ0FBQyxxREFBWSxDQUFDLHNEQUFhO0FBQ3RFLElBQUkseURBQVc7QUFDZixJQUFJLDZEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZEQUFlO0FBQ25COztBQUVBO0FBQ0Esb0NBQW9DLDBEQUFpQjtBQUNyRCxJQUFJLDBEQUFZO0FBQ2hCLElBQUkseURBQVc7O0FBRWY7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2REFBZTtBQUNmLDBEQUFZLENBQUMsb0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtLy4vc3JjL2RvbUN0cmwuanMiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtybXZQcm9qZWN0LHByb2plY3RzLGFkZFByb2plY3QsYWRkVG9kb30gZnJvbSBcIi5cIjtcbmV4cG9ydCB7bmFtZUlucCxkdWVJbnAsdG9kb05hbWVJbnAsZGlzcGxheVRvZG9zLG9wZW5Qcm9qZWN0LFBySW5wdXR9XG5pbXBvcnQgZG9uZVN2ZyBmcm9tIFwiLi9jaGVjay1ib2xkLnN2Z1wiIFxuaW1wb3J0IHRyYXNoU3ZnIGZyb20gXCIuL3RyYXNoLWNhbi5zdmdcIlxuXG4vL2RvbSBlbGVtZW50c1xubGV0IHByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tYnRuXCIpXG5sZXQgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybS1idG5cIilcblxubGV0IG5hbWVJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIilcbmxldCBkdWVJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpXG5cbmxldCB0b2RvTmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1uYW1lXCIpXG5sZXQgUHJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIilcbmxldCBwcm9qZWN0c0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRcIilcbmxldCBwcm9qZWN0Rm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jb250XCIpXG5sZXQgVG9kb0Zvcm1Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tY29udFwiKVxuXG5cblxubGV0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVxubGV0IHByb2plY3RzUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGx1c1wiKVxuXG5zZWN0aW9ucyA9IEFycmF5LmZyb20oc2VjdGlvbnMpXG5sZXQgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKVxuXG4vL2xpc3RlbmVyc1xuXG5wcm9qZWN0c1BsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgZm9ybUNvbnRyb2wocHJvamVjdEZvcm1Db250KVxufSlcblxucHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBhZGRQcm9qZWN0KHByb2plY3RGb3JtQ29udClcbn0pXG5cblxudG9kb0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBhZGRUb2RvKG9wZW5Qcm9qZWN0LFRvZG9Gb3JtQ29udClcbn0pXG5cbmxldCBvcGVuUHJvamVjdCA9IDBcbmxldCBmb3JtU2hvd24gPSBmYWxzZVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpe1xuICAgIHByb2plY3RzQ29udC50ZXh0Q29udGVudCA9ICcnXG4gICAgZm9yKGxldCBpIGluIHByb2plY3RzKXtcblxuICAgICAgICBsZXQgZG9uZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGxldCB0cmFzaCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGRvbmUuc3JjID0gZG9uZVN2Z1xuICAgICAgICB0cmFzaC5zcmMgPSB0cmFzaFN2Z1xuXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBsZXQgaWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxuICAgICAgICBpY29uc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaWNvbnNcIilcblxuICAgICAgICBkb25lLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsXCJkb25lXCIpXG4gICAgICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsXCJ0cmFzaFwiKVxuXG4gICAgICAgIGljb25zRGl2LmFwcGVuZChkb25lKVxuICAgICAgICBpY29uc0Rpdi5hcHBlbmQodHJhc2gpXG5cbiAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT0gJycpe1xuICAgICAgICAgICAgcHJvamVjdHNbaV0ubmFtZSA9IFwiU29tZSBQcm9qZWN0XCJcbiAgICAgICAgfVxuXG4gICAgICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgbGV0IHByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuXG4gICAgICAgIHByaW9yaXR5Q29sb3IuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWNvbG9yXCIpXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIilcbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5Q29sb3IudGV4dENvbnRlbnQgPSBcInxcIlxuICAgICAgICBcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1tpXS5uYW1lfWBcblxuXG4gICAgICAgIHByb2plY3ROYW1lLnByZXBlbmQocHJpb3JpdHlDb2xvcilcbiAgICAgICAgcHJvamVjdHNDb250LmFwcGVuZChwcm9qZWN0RGl2KVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQoaWNvbnNEaXYpXG5cblxuICAgICAgICBpZihwcm9qZWN0c1tpXS5wcmlvcml0eSA9PSAxKXtcbiAgICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuY29sb3IgPSAnZ3JleScgO1xuICAgICAgICB9ZWxzZSBpZihwcm9qZWN0c1tpXS5wcmlvcml0eSA9PSAyKXtcbiAgICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuY29sb3IgPSAnd2hpdGUnIDtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuY29sb3IgPSAncmdiKDI0MSwgNzYsIDc2KScgIFxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuICAgIGxldCBhbGxUcmFzaCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKSlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsVHJhc2gubGVuZ3RoOyBpKyspe1xuICAgICAgICBhbGxUcmFzaFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgcm12UHJvamVjdChpKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgbGV0IGFsbFByb2plY3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKSlcbiAgICBsZXQgYWxsRG9uZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kb25lXCIpKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYWxsUHJvamVjdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe2Rpc3BsYXlUb2RvcyhpKX0pXG5cbiAgICAgICAgYWxsRG9uZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoIXByb2plY3RzW2ldLmRvbmUpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLmRvbmUgPSB0cnVlXG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZihwcm9qZWN0c1tpXS5kb25lID09IHRydWUpe1xuICAgICAgICAgICAgYWxsUHJvamVjdFtpXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Db250cm9sKGZvcm0pe1xuICAgIGlmKGZvcm1TaG93bil7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGZvcm1TaG93biA9IGZhbHNlXG4gICAgICAgIGJsdXJPbkZvcm0oKVxuXG5cbiAgICB9ZWxzZXtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIGZvcm1TaG93biA9IHRydWVcbiAgICAgICAgYmx1ck9uRm9ybSgpXG5cblxuICAgIH1cbn1cblxuZnVuY3Rpb24gYmx1ck9uRm9ybSgpe1xuICAgIGlmIChmb3JtU2hvd24pe1xuICAgICAgICBmb3IobGV0IGkgaW4gc2VjdGlvbnMpe1xuICAgICAgICAgICAgc2VjdGlvbnNbaV0uc3R5bGUuZmlsdGVyID0gXCJibHVyKDJweClcIlxuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIGZvcihsZXQgaSBpbiBzZWN0aW9ucyl7XG4gICAgICAgICAgICBzZWN0aW9uc1tpXS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiXG4gICAgICAgIH1cbiAgICB9XG4gICBcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3MoaSl7XG4gICAgb3BlblByb2plY3QgPSBpXG4gICAgdG9kb1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJ1xuICAgIGxldCB0b2Rvc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBsZXQgdG9kb3NQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBsZXQgZHVlZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gICAgZHVlZGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpXG4gICAgdG9kb3NUaXRsZS5jbGFzc0xpc3QuYWRkKFwibXktdG9kb3MtdGl0bGVcIilcbiAgICB0b2Rvc1BsdXMudGV4dENvbnRlbnQgPSBcIitcIlxuICAgIHRvZG9zUGx1cy5jbGFzc0xpc3QuYWRkKFwicGx1c1wiLFwidG9kb3MtcGx1c1wiKVxuXG4gICAgZHVlZGF0ZVRleHQudGV4dENvbnRlbnQgPSBgZHVlLWRhdGU6ICR7cHJvamVjdHNbaV0uZHVlRGF0ZX0gYFxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWVcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb3NUaXRsZSlcbiAgICB0b2Rvc1RpdGxlLmFwcGVuZChkdWVkYXRlVGV4dClcbiAgICB0b2Rvc1RpdGxlLmFwcGVuZChwcm9qZWN0VGl0bGUpXG4gICAgdG9kb3NUaXRsZS5hcHBlbmQodG9kb3NQbHVzKVxuICAgIFxuXG5cbiAgICB0b2Rvc1BsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3JtQ29udHJvbChUb2RvRm9ybUNvbnQpXG4gICAgfSlcblxuICAgIGxldCB0b2Rvc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgdG9kb3NVbC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtdWxcIilcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb3NVbClcblxuICAgIGZvcihsZXQgdCBpbiBwcm9qZWN0c1tpXS50b2Rvcyl7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxldCBkb25lID0gbmV3IEltYWdlKClcbiAgICAgICAgbGV0IHRyYXNoID0gbmV3IEltYWdlKClcbiAgICAgICAgZG9uZS5zcmMgPSBkb25lU3ZnXG4gICAgICAgIHRyYXNoLnNyYyA9IHRyYXNoU3ZnXG4gICAgICAgIFxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpXG4gICAgICAgIHRvZG9JdGVtLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udG9kb3NbdF0ubmFtZVxuICAgICAgICB0b2Rvc1VsLmFwcGVuZCh0b2RvSXRlbSlcbiAgICAgICAgXG4gICAgICAgIGljb25zLmNsYXNzTGlzdC5hZGQoXCJpY29uc1wiKVxuICAgICAgICBkb25lLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsXCJ0b2RvLWRvbmVcIilcbiAgICAgICAgdHJhc2guY2xhc3NMaXN0LmFkZChcImljb25cIixcInRvZG8tdHJhc2hcIilcblxuICAgICAgICBpY29ucy5hcHBlbmQoZG9uZSx0cmFzaClcbiAgICAgICAgdG9kb0l0ZW0ucHJlcGVuZChpY29ucylcblxuXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGxldCBhbGxUb2RvcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWl0ZW1cIikpXG4gICAgZm9yKGxldCBpIGluIGFsbFRvZG9zKXtcbiAgICAgICAgaWYocHJvamVjdHNbb3BlblByb2plY3RdLnRvZG9zW2ldLmRvbmUpe1xuICAgICAgICAgICAgYWxsVG9kb3NbaV0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxsVG9kb3NbaV0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcImF1dG9cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgYWxsSWNvblRyYXNoID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tdHJhc2hcIikpXG4gICAgbGV0IGFsbEljb25Eb25lID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tZG9uZVwiKSlcblxuICAgIGZvcihsZXQgaSBpbiBhbGxJY29uVHJhc2gpe1xuICAgICAgICBhbGxJY29uVHJhc2hbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3RzW29wZW5Qcm9qZWN0XS50b2Rvcy5zcGxpY2UoaSwxKVxuICAgICAgICAgICAgZGlzcGxheVRvZG9zKG9wZW5Qcm9qZWN0KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZvcihsZXQgaSBpbiBhbGxJY29uRG9uZSl7XG4gICAgICAgIGFsbEljb25Eb25lW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighcHJvamVjdHNbb3BlblByb2plY3RdLnRvZG9zW2ldLmRvbmUpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW29wZW5Qcm9qZWN0XS50b2Rvc1tpXS5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvcyhvcGVuUHJvamVjdClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb2plY3RzW29wZW5Qcm9qZWN0XS50b2Rvc1tpXS5kb25lID0gZmFsc2VcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3Mob3BlblByb2plY3QpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG5cbiAgICAgICAgfSlcbiAgICB9XG5cblxufVxuXG4iLCJpbXBvcnQge2Rpc3BsYXlQcm9qZWN0cyxmb3JtQ29udHJvbCxuYW1lSW5wLGR1ZUlucCxQcklucHV0LCB0b2RvTmFtZUlucCxkaXNwbGF5VG9kb3Msb3BlblByb2plY3R9IGZyb20gXCIuL2RvbUN0cmwuanNcIlxuZXhwb3J0IHtwcm9qZWN0cyxybXZQcm9qZWN0LGFkZFByb2plY3QsYWRkVG9kb31cblxuLy9hcnJheSB0byBob2xkIGFsbCBwcm9qZWN0IG9iamVjdHMgYW5kIHVzZSBpdCB0byBkaXNwbGF5IHRoZW0gb24gZG9tIFxuY29uc3QgcHJvamVjdHMgPSBbXVxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZHVlRGF0ZSxwcmlvcml0eSxkb25lID0gZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdXG4gICAgfVxuICAgIHB1c2hQcm9qZWN0KCl7XG4gICAgICAgIHByb2plY3RzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBwdXNoVG9kbyhuYW1lLCBkb25lID0gZmFsc2Upe1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8obmFtZSxkb25lKSlcbiAgICB9XG59XG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IobmFtZSxkb25lID0gZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZm9ybSl7XG4gICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lSW5wLnZhbHVlLGR1ZUlucC52YWx1ZSxQcklucHV0LnZhbHVlKSlcbiAgICBmb3JtQ29udHJvbChmb3JtKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG59XG5cbmZ1bmN0aW9uIHJtdlByb2plY3QoaSl7XG4gICAgcHJvamVjdHMuc3BsaWNlKGksMSlcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvKGksIGZvcm0pe1xuICAgIHByb2plY3RzW2ldLnRvZG9zLnB1c2gobmV3IFRvZG8odG9kb05hbWVJbnAudmFsdWUpKVxuICAgIGRpc3BsYXlUb2RvcyhpKVxuICAgIGZvcm1Db250cm9sKGZvcm0pXG5cbn1cblxuXG5sZXQgcmVsZWFzZSA9IG5ldyBQcm9qZWN0KFwiQXJtYWRpbG8gdG8gZ2FyYmFkZ2VcIixcIjIwMjMtMDEtMTBcIiwzLGZhbHNlKVxucmVsZWFzZS5wdXNoVG9kbyhcImFkcG90IGEgcGV0XCIsZmFsc2UpXG5yZWxlYXNlLnB1c2hUb2RvKFwiYWFhIGEgZHVja1wiLGZhbHNlKVxuXG5yZWxlYXNlLnB1c2hQcm9qZWN0KClcblxuZGlzcGxheVByb2plY3RzKClcbmRpc3BsYXlUb2RvcyhvcGVuUHJvamVjdClcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=