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

let release = new Project("Armadilo to garbadge","22.3.2023",3,false)
release.pushTodo("adpot a pet")
release.pushTodo("aaa a duck")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtLy4vc3JjL2RvbUN0cmwuanMiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtybXZQcm9qZWN0LHByb2plY3RzLGFkZFByb2plY3QsYWRkVG9kbyxybXZUb2RvfSBmcm9tIFwiLlwiO1xuZXhwb3J0IHtuYW1lSW5wLGR1ZUlucCx0b2RvTmFtZUlucCxkaXNwbGF5VG9kb3Msb3BlblByb2plY3QsfVxuaW1wb3J0IGRvbmVTdmcgZnJvbSBcIi4vY2hlY2stYm9sZC5zdmdcIiBcbmltcG9ydCB0cmFzaFN2ZyBmcm9tIFwiLi90cmFzaC1jYW4uc3ZnXCJcblxuLy9kb20gZWxlbWVudHNcbmxldCBwcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLWJ0blwiKVxubGV0IHRvZG9Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tYnRuXCIpXG5cbmxldCBuYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpXG5sZXQgZHVlSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKVxuXG5sZXQgdG9kb05hbWVJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbmFtZVwiKVxuXG5cbmxldCBwcm9qZWN0c0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRcIilcbmxldCBwcm9qZWN0Rm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jb250XCIpXG5sZXQgVG9kb0Zvcm1Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tY29udFwiKVxuXG5cblxubGV0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVxubGV0IHByb2plY3RzUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGx1c1wiKVxuXG5zZWN0aW9ucyA9IEFycmF5LmZyb20oc2VjdGlvbnMpXG5sZXQgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKVxuXG4vL2xpc3RlbmVyc1xuXG5wcm9qZWN0c1BsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgZm9ybUNvbnRyb2wocHJvamVjdEZvcm1Db250KVxufSlcblxucHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBhZGRQcm9qZWN0KHByb2plY3RGb3JtQ29udClcbn0pXG5cblxudG9kb0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBhZGRUb2RvKG9wZW5Qcm9qZWN0LFRvZG9Gb3JtQ29udClcbn0pXG5cbmxldCBvcGVuUHJvamVjdCA9IDBcblxubGV0IGZvcm1TaG93biA9IGZhbHNlXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XG4gICAgcHJvamVjdHNDb250LnRleHRDb250ZW50ID0gJydcbiAgICBmb3IobGV0IGkgaW4gcHJvamVjdHMpe1xuXG4gICAgICAgIGxldCBkb25lID0gbmV3IEltYWdlKClcbiAgICAgICAgbGV0IHRyYXNoID0gbmV3IEltYWdlKClcbiAgICAgICAgZG9uZS5zcmMgPSBkb25lU3ZnXG4gICAgICAgIHRyYXNoLnNyYyA9IHRyYXNoU3ZnXG5cbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxldCBpY29uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG4gICAgICAgIGljb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uc1wiKVxuXG4gICAgICAgIGRvbmUuY2xhc3NMaXN0LmFkZChcImljb25cIixcImRvbmVcIilcbiAgICAgICAgdHJhc2guY2xhc3NMaXN0LmFkZChcImljb25cIixcInRyYXNoXCIpXG5cbiAgICAgICAgaWNvbnNEaXYuYXBwZW5kKGRvbmUpXG4gICAgICAgIGljb25zRGl2LmFwcGVuZCh0cmFzaClcblxuICAgICAgICBpZiAocHJvamVjdHNbaV0ubmFtZSA9PSAnJyl7XG4gICAgICAgICAgICBwcm9qZWN0c1tpXS5uYW1lID0gXCJTb21lIFByb2plY3RcIlxuICAgICAgICB9XG5cbiAgICAgIFxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW2ldLm5hbWV9YFxuXG5cbiAgICBcblxuXG4gICAgICAgIHByb2plY3RzQ29udC5hcHBlbmQocHJvamVjdERpdilcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdE5hbWUpXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKGljb25zRGl2KVxuICAgIH1cblxuXG4gICAgXG4gICAgbGV0IGFsbFRyYXNoID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxUcmFzaC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGFsbFRyYXNoW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBybXZQcm9qZWN0KGkpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBsZXQgYWxsUHJvamVjdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpKVxuICAgIGxldCBhbGxEb25lID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvbmVcIikpXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBhbGxQcm9qZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZGlzcGxheVRvZG9zKGkpfSlcblxuICAgICAgICBhbGxEb25lW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighcHJvamVjdHNbaV0uZG9uZSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uZG9uZSA9IHRydWVcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uZG9uZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKHByb2plY3RzW2ldLmRvbmUgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBhbGxQcm9qZWN0W2ldLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNvbnRyb2woZm9ybSl7XG4gICAgaWYoZm9ybVNob3duKXtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgZm9ybVNob3duID0gZmFsc2VcbiAgICAgICAgYmx1ck9uRm9ybSgpXG5cblxuICAgIH1lbHNle1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgZm9ybVNob3duID0gdHJ1ZVxuICAgICAgICBibHVyT25Gb3JtKClcblxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBibHVyT25Gb3JtKCl7XG4gICAgaWYgKGZvcm1TaG93bil7XG4gICAgICAgIGZvcihsZXQgaSBpbiBzZWN0aW9ucyl7XG4gICAgICAgICAgICBzZWN0aW9uc1tpXS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMnB4KVwiXG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgZm9yKGxldCBpIGluIHNlY3Rpb25zKXtcbiAgICAgICAgICAgIHNlY3Rpb25zW2ldLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCJcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcyhpKXtcbiAgICBvcGVuUHJvamVjdCA9IGlcbiAgICB0b2RvU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnXG4gICAgbGV0IHRvZG9zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGxldCB0b2Rvc1BsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuXG4gICAgdG9kb3NUaXRsZS5jbGFzc0xpc3QuYWRkKFwibXktdG9kb3MtdGl0bGVcIilcbiAgICB0b2Rvc1BsdXMudGV4dENvbnRlbnQgPSBcIitcIlxuICAgIHRvZG9zUGx1cy5jbGFzc0xpc3QuYWRkKFwicGx1c1wiLFwidG9kb3MtcGx1c1wiKVxuXG5cblxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWVcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb3NUaXRsZSlcbiAgICB0b2Rvc1RpdGxlLmFwcGVuZChwcm9qZWN0VGl0bGUpXG4gICAgdG9kb3NUaXRsZS5hcHBlbmQodG9kb3NQbHVzKVxuXG5cbiAgICB0b2Rvc1BsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3JtQ29udHJvbChUb2RvRm9ybUNvbnQpXG4gICAgfSlcblxuICAgIGxldCB0b2Rvc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgdG9kb3NVbC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtdWxcIilcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb3NVbClcblxuICAgIGZvcihsZXQgdCBpbiBwcm9qZWN0c1tpXS50b2Rvcyl7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxldCBkb25lID0gbmV3IEltYWdlKClcbiAgICAgICAgbGV0IHRyYXNoID0gbmV3IEltYWdlKClcbiAgICAgICAgZG9uZS5zcmMgPSBkb25lU3ZnXG4gICAgICAgIHRyYXNoLnNyYyA9IHRyYXNoU3ZnXG4gICAgICAgIFxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpXG4gICAgICAgIHRvZG9JdGVtLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udG9kb3NbdF1cbiAgICAgICAgdG9kb3NVbC5hcHBlbmQodG9kb0l0ZW0pXG4gICAgICAgIFxuICAgICAgICBpY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbnNcIilcbiAgICAgICAgZG9uZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxuICAgICAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLFwidG9kby10cmFzaFwiKVxuXG4gICAgICAgIGljb25zLmFwcGVuZChkb25lLHRyYXNoKVxuICAgICAgICB0b2RvSXRlbS5wcmVwZW5kKGljb25zKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBsZXQgYWxsSWNvblRyYXNoID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tdHJhc2hcIikpXG4gICAgXG4gICAgZm9yKGxldCBpIGluIGFsbEljb25UcmFzaCl7XG4gICAgICAgIGFsbEljb25UcmFzaFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixybXZUb2RvKVxuICAgIH1cblxuXG5cbn1cblxuIiwiaW1wb3J0IHtkaXNwbGF5UHJvamVjdHMsZm9ybUNvbnRyb2wsbmFtZUlucCxkdWVJbnAsIHRvZG9OYW1lSW5wLGRpc3BsYXlUb2RvcyxvcGVuUHJvamVjdH0gZnJvbSBcIi4vZG9tQ3RybC5qc1wiXG5leHBvcnQge3Byb2plY3RzLHJtdlByb2plY3QsYWRkUHJvamVjdCxhZGRUb2RvLHJtdlRvZG99XG5cbi8vYXJyYXkgdG8gaG9sZCBhbGwgcHJvamVjdCBvYmplY3RzIGFuZCB1c2UgaXQgdG8gZGlzcGxheSB0aGVtIG9uIGRvbSBcbmNvbnN0IHByb2plY3RzID0gW11cblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUscHJpb3JpdHksZG9uZSA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmRvbmUgPSBkb25lXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXVxuICAgIH1cbiAgICBwdXNoUHJvamVjdCgpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpXG4gICAgfVxuXG4gICAgcHVzaFRvZG8odG9kbyl7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxuICAgIH1cbn1cblxuY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRlc2Mpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2NcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZm9ybSl7XG4gICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lSW5wLnZhbHVlLGR1ZUlucC52YWx1ZSwzKSlcbiAgICBmb3JtQ29udHJvbChmb3JtKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG59XG5cbmZ1bmN0aW9uIHJtdlByb2plY3QoaSl7XG4gICAgcHJvamVjdHMuc3BsaWNlKGksMSlcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvKGksIGZvcm0pe1xuICAgIHByb2plY3RzW2ldLnRvZG9zLnB1c2godG9kb05hbWVJbnAudmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIGRpc3BsYXlUb2RvcyhpKVxuICAgIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgIGZvcm1Db250cm9sKGZvcm0pXG5cbn1cblxuZnVuY3Rpb24gcm12VG9kbyhpKXtcbiAgICBwcm9qZWN0c1tvcGVuUHJvamVjdF0udG9kb3Muc3BsaWNlKGksMSlcbiAgICBkaXNwbGF5VG9kb3Mob3BlblByb2plY3QpXG5cbn1cblxubGV0IHJlbGVhc2UgPSBuZXcgUHJvamVjdChcIkFybWFkaWxvIHRvIGdhcmJhZGdlXCIsXCIyMi4zLjIwMjNcIiwzLGZhbHNlKVxucmVsZWFzZS5wdXNoVG9kbyhcImFkcG90IGEgcGV0XCIpXG5yZWxlYXNlLnB1c2hUb2RvKFwiYWFhIGEgZHVja1wiKVxuXG5yZWxlYXNlLnB1c2hQcm9qZWN0KClcbmNvbnNvbGUubG9nKHJlbGVhc2UpO1xuXG5kaXNwbGF5UHJvamVjdHMoKVxuZGlzcGxheVRvZG9zKG9wZW5Qcm9qZWN0KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9