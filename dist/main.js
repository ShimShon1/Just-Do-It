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


let projectsCont = document.querySelector(".projects-cont")
let projectFormCont = document.querySelector(".project-form-cont")
let TodoFormCont = document.querySelector(".todo-form-cont")



let sections = document.querySelectorAll('.section')
let projectsPlus = document.querySelector(".projects-plus")
// let todosPlus = document.querySelector(".todos-plus")

sections = Array.from(sections)
let todoSection = document.querySelector(".todo-list")

//listeners

projectsPlus.addEventListener("click", function(){
    formControl(projectFormCont)
})

projectFormBtn.addEventListener("click",function(){
    ;(0,___WEBPACK_IMPORTED_MODULE_0__.addProject)(projectFormCont)
})


// todosPlus.addEventListener("click", function(){
//     formControl(TodoFormCont)
// })

todoFormBtn.addEventListener("click",function(){
    ;(0,___WEBPACK_IMPORTED_MODULE_0__.addTodo)(openProject,TodoFormCont)
})




// projectFormCont.style.display = "block"




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

        done.classList.add("icon")
        trash.classList.add("icon")
        trash.classList.add("trash")

        iconsDiv.append(done)
        iconsDiv.append(trash)

        if (___WEBPACK_IMPORTED_MODULE_0__.projects[i].name == ''){
            ___WEBPACK_IMPORTED_MODULE_0__.projects[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        projectName.classList.add("project-name")
        
        projectName.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.projects[i].name}`

        projectsCont.append(projectDiv)
        projectDiv.append(projectName)
        projectDiv.append(iconsDiv)
    }


    
    let allTrash = Array.from(document.querySelectorAll(".trash"))
    for(let i = 0; i < allTrash.length; i++){
        allTrash[i].addEventListener("click",function(){
            (0,___WEBPACK_IMPORTED_MODULE_0__.rmvProject)(i)
        })
    }


    let allProject = Array.from(document.querySelectorAll(".project"))
    for(let i = 0; i < allProject.length; i++){
        allProject[i].addEventListener("click",function(){displayTodos(i)})
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

    todosTitle.classList.add("my-todos-title")
    todosPlus.textContent = "+"
    todosPlus.classList.add("plus","todos-plus")



    projectTitle.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projects[i].name
    todoSection.append(todosTitle)
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
        todoItem.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projects[i].todos[t]
        todosUl.append(todoItem)
        
        icons.classList.add("icons")
        done.classList.add("icon")
        trash.classList.add("icon","todo-trash")

        icons.append(done,trash)
        todoItem.prepend(icons)
        
    }

    let allIconTrash = Array.from(document.querySelectorAll(".todo-trash"))
    
    for(let i in allIconTrash){
        allIconTrash[i].addEventListener("click",___WEBPACK_IMPORTED_MODULE_0__.rmvTodo)
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
/* harmony export */   "rmvProject": () => (/* binding */ rmvProject),
/* harmony export */   "rmvTodo": () => (/* binding */ rmvTodo)
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
    projects.push(new Project(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.nameInp.value,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.dueInp.value,3))
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)(form)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
}

function rmvProject(i){
    projects.splice(i,1)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
}

function addTodo(i, form){
    projects[i].todos.push(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.todoNameInp.value)
    console.log(projects);
    (0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(i)
    console.log(form);
    (0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)(form)

}

function rmvTodo(i){
    projects[_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.openProject].todos.splice(i,1)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.openProject)

}

let release = new Project("Armdilo to garbadge","22.3.2023",3,false)
release.pushTodo("adpot a pet")
release.pushTodo("fuck a duck")

release.pushProject()
release.pushProject()
console.log(release);

(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS8uL3NyYy9kb21DdHJsLmpzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cm12UHJvamVjdCxwcm9qZWN0cyxhZGRQcm9qZWN0LGFkZFRvZG8scm12VG9kb30gZnJvbSBcIi5cIjtcbmV4cG9ydCB7bmFtZUlucCxkdWVJbnAsdG9kb05hbWVJbnAsZGlzcGxheVRvZG9zLG9wZW5Qcm9qZWN0LH1cbmltcG9ydCBkb25lU3ZnIGZyb20gXCIuL2NoZWNrLWJvbGQuc3ZnXCIgXG5pbXBvcnQgdHJhc2hTdmcgZnJvbSBcIi4vdHJhc2gtY2FuLnN2Z1wiXG5cbi8vZG9tIGVsZW1lbnRzXG5sZXQgcHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1idG5cIilcbmxldCB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtLWJ0blwiKVxuXG5sZXQgbmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKVxubGV0IGR1ZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIilcblxubGV0IHRvZG9OYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIilcblxuXG5sZXQgcHJvamVjdHNDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250XCIpXG5sZXQgcHJvamVjdEZvcm1Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tY29udFwiKVxubGV0IFRvZG9Gb3JtQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtLWNvbnRcIilcblxuXG5cbmxldCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJylcbmxldCBwcm9qZWN0c1BsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXBsdXNcIilcbi8vIGxldCB0b2Rvc1BsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLXBsdXNcIilcblxuc2VjdGlvbnMgPSBBcnJheS5mcm9tKHNlY3Rpb25zKVxubGV0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIilcblxuLy9saXN0ZW5lcnNcblxucHJvamVjdHNQbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGZvcm1Db250cm9sKHByb2plY3RGb3JtQ29udClcbn0pXG5cbnByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgYWRkUHJvamVjdChwcm9qZWN0Rm9ybUNvbnQpXG59KVxuXG5cbi8vIHRvZG9zUGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICBmb3JtQ29udHJvbChUb2RvRm9ybUNvbnQpXG4vLyB9KVxuXG50b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgIGFkZFRvZG8ob3BlblByb2plY3QsVG9kb0Zvcm1Db250KVxufSlcblxuXG5cblxuLy8gcHJvamVjdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcblxuXG5cblxubGV0IG9wZW5Qcm9qZWN0ID0gMFxuXG5sZXQgZm9ybVNob3duID0gZmFsc2VcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKXtcbiAgICBwcm9qZWN0c0NvbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGZvcihsZXQgaSBpbiBwcm9qZWN0cyl7XG5cbiAgICAgICAgbGV0IGRvbmUgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBsZXQgdHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBkb25lLnNyYyA9IGRvbmVTdmdcbiAgICAgICAgdHJhc2guc3JjID0gdHJhc2hTdmdcblxuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbGV0IGljb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcbiAgICAgICAgaWNvbnNEaXYuY2xhc3NMaXN0LmFkZChcImljb25zXCIpXG5cbiAgICAgICAgZG9uZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxuICAgICAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxuICAgICAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwidHJhc2hcIilcblxuICAgICAgICBpY29uc0Rpdi5hcHBlbmQoZG9uZSlcbiAgICAgICAgaWNvbnNEaXYuYXBwZW5kKHRyYXNoKVxuXG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5uYW1lID09ICcnKXtcbiAgICAgICAgICAgIHByb2plY3RzW2ldLm5hbWUgPSBcIlNvbWUgUHJvamVjdFwiXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW2ldLm5hbWV9YFxuXG4gICAgICAgIHByb2plY3RzQ29udC5hcHBlbmQocHJvamVjdERpdilcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdE5hbWUpXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKGljb25zRGl2KVxuICAgIH1cblxuXG4gICAgXG4gICAgbGV0IGFsbFRyYXNoID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxUcmFzaC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGFsbFRyYXNoW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBybXZQcm9qZWN0KGkpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBsZXQgYWxsUHJvamVjdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYWxsUHJvamVjdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe2Rpc3BsYXlUb2RvcyhpKX0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbChmb3JtKXtcbiAgICBpZihmb3JtU2hvd24pe1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBmb3JtU2hvd24gPSBmYWxzZVxuICAgICAgICBibHVyT25Gb3JtKClcblxuXG4gICAgfWVsc2V7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICBmb3JtU2hvd24gPSB0cnVlXG4gICAgICAgIGJsdXJPbkZvcm0oKVxuXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJsdXJPbkZvcm0oKXtcbiAgICBpZiAoZm9ybVNob3duKXtcbiAgICAgICAgZm9yKGxldCBpIGluIHNlY3Rpb25zKXtcbiAgICAgICAgICAgIHNlY3Rpb25zW2ldLnN0eWxlLmZpbHRlciA9IFwiYmx1cigycHgpXCJcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBmb3IobGV0IGkgaW4gc2VjdGlvbnMpe1xuICAgICAgICAgICAgc2VjdGlvbnNbaV0uc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIlxuICAgICAgICB9XG4gICAgfVxuICAgXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zKGkpe1xuICAgIG9wZW5Qcm9qZWN0ID0gaVxuICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gJydcbiAgICBsZXQgdG9kb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgbGV0IHRvZG9zUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5cbiAgICB0b2Rvc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJteS10b2Rvcy10aXRsZVwiKVxuICAgIHRvZG9zUGx1cy50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgdG9kb3NQbHVzLmNsYXNzTGlzdC5hZGQoXCJwbHVzXCIsXCJ0b2Rvcy1wbHVzXCIpXG5cblxuXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ubmFtZVxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2Rvc1RpdGxlKVxuICAgIHRvZG9zVGl0bGUuYXBwZW5kKHByb2plY3RUaXRsZSlcbiAgICB0b2Rvc1RpdGxlLmFwcGVuZCh0b2Rvc1BsdXMpXG5cblxuICAgIHRvZG9zUGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvcm1Db250cm9sKFRvZG9Gb3JtQ29udClcbiAgICB9KVxuXG4gICAgbGV0IHRvZG9zVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICB0b2Rvc1VsLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvcy11bFwiKVxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZCh0b2Rvc1VsKVxuXG4gICAgZm9yKGxldCB0IGluIHByb2plY3RzW2ldLnRvZG9zKXtcbiAgICAgICAgbGV0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxldCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbGV0IGRvbmUgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBsZXQgdHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBkb25lLnNyYyA9IGRvbmVTdmdcbiAgICAgICAgdHJhc2guc3JjID0gdHJhc2hTdmdcbiAgICAgICAgXG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIilcbiAgICAgICAgdG9kb0l0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50b2Rvc1t0XVxuICAgICAgICB0b2Rvc1VsLmFwcGVuZCh0b2RvSXRlbSlcbiAgICAgICAgXG4gICAgICAgIGljb25zLmNsYXNzTGlzdC5hZGQoXCJpY29uc1wiKVxuICAgICAgICBkb25lLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXG4gICAgICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsXCJ0b2RvLXRyYXNoXCIpXG5cbiAgICAgICAgaWNvbnMuYXBwZW5kKGRvbmUsdHJhc2gpXG4gICAgICAgIHRvZG9JdGVtLnByZXBlbmQoaWNvbnMpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGxldCBhbGxJY29uVHJhc2ggPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby10cmFzaFwiKSlcbiAgICBcbiAgICBmb3IobGV0IGkgaW4gYWxsSWNvblRyYXNoKXtcbiAgICAgICAgYWxsSWNvblRyYXNoW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJtdlRvZG8pXG4gICAgfVxuXG5cblxufVxuXG4iLCJpbXBvcnQge2Rpc3BsYXlQcm9qZWN0cyxmb3JtQ29udHJvbCxuYW1lSW5wLGR1ZUlucCwgdG9kb05hbWVJbnAsZGlzcGxheVRvZG9zLG9wZW5Qcm9qZWN0fSBmcm9tIFwiLi9kb21DdHJsLmpzXCJcbmV4cG9ydCB7cHJvamVjdHMscm12UHJvamVjdCxhZGRQcm9qZWN0LGFkZFRvZG8scm12VG9kb31cblxuLy9hcnJheSB0byBob2xkIGFsbCBwcm9qZWN0IG9iamVjdHMgYW5kIHVzZSBpdCB0byBkaXNwbGF5IHRoZW0gb24gZG9tIFxuY29uc3QgcHJvamVjdHMgPSBbXVxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZHVlRGF0ZSxwcmlvcml0eSxkb25lID0gZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdXG4gICAgfVxuICAgIHB1c2hQcm9qZWN0KCl7XG4gICAgICAgIHByb2plY3RzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICBwdXNoVG9kbyh0b2RvKXtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gICAgfVxufVxuXG5jbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZGVzYyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzY1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChmb3JtKXtcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWVJbnAudmFsdWUsZHVlSW5wLnZhbHVlLDMpKVxuICAgIGZvcm1Db250cm9sKGZvcm0pXG4gICAgZGlzcGxheVByb2plY3RzKClcbn1cblxuZnVuY3Rpb24gcm12UHJvamVjdChpKXtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaSwxKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8oaSwgZm9ybSl7XG4gICAgcHJvamVjdHNbaV0udG9kb3MucHVzaCh0b2RvTmFtZUlucC52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgZGlzcGxheVRvZG9zKGkpXG4gICAgY29uc29sZS5sb2coZm9ybSk7XG4gICAgZm9ybUNvbnRyb2woZm9ybSlcblxufVxuXG5mdW5jdGlvbiBybXZUb2RvKGkpe1xuICAgIHByb2plY3RzW29wZW5Qcm9qZWN0XS50b2Rvcy5zcGxpY2UoaSwxKVxuICAgIGRpc3BsYXlUb2RvcyhvcGVuUHJvamVjdClcblxufVxuXG5sZXQgcmVsZWFzZSA9IG5ldyBQcm9qZWN0KFwiQXJtZGlsbyB0byBnYXJiYWRnZVwiLFwiMjIuMy4yMDIzXCIsMyxmYWxzZSlcbnJlbGVhc2UucHVzaFRvZG8oXCJhZHBvdCBhIHBldFwiKVxucmVsZWFzZS5wdXNoVG9kbyhcImZ1Y2sgYSBkdWNrXCIpXG5cbnJlbGVhc2UucHVzaFByb2plY3QoKVxucmVsZWFzZS5wdXNoUHJvamVjdCgpXG5jb25zb2xlLmxvZyhyZWxlYXNlKTtcblxuZGlzcGxheVByb2plY3RzKClcbmRpc3BsYXlUb2RvcyhvcGVuUHJvamVjdCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==