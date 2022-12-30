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
/* harmony export */   "formControl": () => (/* binding */ formControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _check_bold_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-bold.svg */ "./src/check-bold.svg");
/* harmony import */ var _trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash-can.svg */ "./src/trash-can.svg");

 


let formShown = false

function displayProjects(){
    ___WEBPACK_IMPORTED_MODULE_0__.projectsCont.textContent = ''
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

        ___WEBPACK_IMPORTED_MODULE_0__.projectsCont.append(projectDiv)
        projectDiv.append(projectName)
        projectDiv.append(iconsDiv)
    }


    let allTrash = document.querySelectorAll(".trash")
    allTrash = Array.from(allTrash)
    for(let i = 0; i < allTrash.length; i++){
        allTrash[i].addEventListener("click",function(){(0,___WEBPACK_IMPORTED_MODULE_0__.rmvProject)(i)})
    }

}

function formControl(){
    if(formShown){
        ___WEBPACK_IMPORTED_MODULE_0__.formCont.style.display = "none"
        formShown = false
        blurOnForm()


    }else{
        ___WEBPACK_IMPORTED_MODULE_0__.formCont.style.display = "block"
        formShown = true
        blurOnForm()


    }
}

function blurOnForm(){
    if (formShown){
        for(let i in ___WEBPACK_IMPORTED_MODULE_0__.sections){
            ___WEBPACK_IMPORTED_MODULE_0__.sections[i].style.filter = "blur(2px)"
        }
    }else{
        for(let i in ___WEBPACK_IMPORTED_MODULE_0__.sections){
            ___WEBPACK_IMPORTED_MODULE_0__.sections[i].style.filter = "blur(0px)"
        }
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
/* harmony export */   "dueInp": () => (/* binding */ dueInp),
/* harmony export */   "formBtn": () => (/* binding */ formBtn),
/* harmony export */   "formCont": () => (/* binding */ formCont),
/* harmony export */   "nameInp": () => (/* binding */ nameInp),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "projectsCont": () => (/* binding */ projectsCont),
/* harmony export */   "rmvProject": () => (/* binding */ rmvProject),
/* harmony export */   "sections": () => (/* binding */ sections)
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
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)()
}


function rmvProject(i){
    projects.splice(i,1)
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()

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
projectsPlus.addEventListener("click", _domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.formControl)

let release = new Project("son of god","22.3.2023",3,false)
release.addTodo(new Todo("adpot","adpot a pet"))



addProject(release)
addProject(release)



console.log(projects);

/***/ }),

/***/ "./src/check-bold.svg":
/*!****************************!*\
  !*** ./src/check-bold.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bfa746129cbcb2aa35e.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEY7QUFDdEQ7QUFDQTs7QUFFdEM7O0FBRU87QUFDUCxJQUFJLHVEQUF3QjtBQUM1QixpQkFBaUIsdUNBQVE7O0FBRXpCO0FBQ0E7QUFDQSxtQkFBbUIsNENBQU87QUFDMUIsb0JBQW9CLDJDQUFROztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLFlBQVksdUNBQVE7QUFDcEIsWUFBWSx1Q0FBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUNBQVEsU0FBUzs7QUFFdEQsUUFBUSxrREFBbUI7QUFDM0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4Qyx3REFBd0QsNkNBQVUsSUFBSTtBQUN0RTs7QUFFQTs7QUFFTztBQUNQO0FBQ0EsUUFBUSxxREFBc0I7QUFDOUI7QUFDQTs7O0FBR0EsS0FBSztBQUNMLFFBQVEscURBQXNCO0FBQzlCO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix1Q0FBUTtBQUM3QixZQUFZLHVDQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMLHFCQUFxQix1Q0FBUTtBQUM3QixZQUFZLHVDQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0V3RDtBQUMwQjs7QUFFbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDZEQUFlO0FBQ25CLElBQUkseURBQVc7QUFDZjs7O0FBR0E7QUFDQTtBQUNBLElBQUksNkRBQWU7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsb0RBQVc7O0FBRWxEO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtLy4vc3JjL2RvbUN0cmwuanMiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtybXZQcm9qZWN0LHByb2plY3RzLGZvcm1CdG4sbmFtZUlucCxkdWVJbnAscHJvamVjdHNDb250LGZvcm1Db250LHNlY3Rpb25zfSBmcm9tIFwiLlwiO1xuaW1wb3J0IGRvbmVTdmcgZnJvbSBcIi4vY2hlY2stYm9sZC5zdmdcIiBcbmltcG9ydCB0cmFzaFN2ZyBmcm9tIFwiLi90cmFzaC1jYW4uc3ZnXCJcblxubGV0IGZvcm1TaG93biA9IGZhbHNlXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKXtcbiAgICBwcm9qZWN0c0NvbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGZvcihsZXQgaSBpbiBwcm9qZWN0cyl7XG5cbiAgICAgICAgbGV0IGRvbmUgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBsZXQgdHJhc2ggPSBuZXcgSW1hZ2UoKVxuICAgICAgICBkb25lLnNyYyA9IGRvbmVTdmdcbiAgICAgICAgdHJhc2guc3JjID0gdHJhc2hTdmdcblxuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbGV0IGljb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcbiAgICAgICAgaWNvbnNEaXYuY2xhc3NMaXN0LmFkZChcImljb25zXCIpXG5cbiAgICAgICAgZG9uZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxuICAgICAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxuICAgICAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwidHJhc2hcIilcblxuICAgICAgICBpY29uc0Rpdi5hcHBlbmQoZG9uZSlcbiAgICAgICAgaWNvbnNEaXYuYXBwZW5kKHRyYXNoKVxuXG5cbiAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT0gJycpe1xuICAgICAgICAgICAgcHJvamVjdHNbaV0ubmFtZSA9IFwiU29tZSBQcm9qZWN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIilcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbaV0ubmFtZX1gXG5cbiAgICAgICAgcHJvamVjdHNDb250LmFwcGVuZChwcm9qZWN0RGl2KVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQoaWNvbnNEaXYpXG4gICAgfVxuXG5cbiAgICBsZXQgYWxsVHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpXG4gICAgYWxsVHJhc2ggPSBBcnJheS5mcm9tKGFsbFRyYXNoKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxUcmFzaC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGFsbFRyYXNoW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7cm12UHJvamVjdChpKX0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ29udHJvbCgpe1xuICAgIGlmKGZvcm1TaG93bil7XG4gICAgICAgIGZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBmb3JtU2hvd24gPSBmYWxzZVxuICAgICAgICBibHVyT25Gb3JtKClcblxuXG4gICAgfWVsc2V7XG4gICAgICAgIGZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgICAgZm9ybVNob3duID0gdHJ1ZVxuICAgICAgICBibHVyT25Gb3JtKClcblxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBibHVyT25Gb3JtKCl7XG4gICAgaWYgKGZvcm1TaG93bil7XG4gICAgICAgIGZvcihsZXQgaSBpbiBzZWN0aW9ucyl7XG4gICAgICAgICAgICBzZWN0aW9uc1tpXS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMnB4KVwiXG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgZm9yKGxldCBpIGluIHNlY3Rpb25zKXtcbiAgICAgICAgICAgIHNlY3Rpb25zW2ldLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCJcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufVxuXG5cbiIsImltcG9ydCB7ZGlzcGxheVByb2plY3RzLGZvcm1Db250cm9sfSBmcm9tIFwiLi9kb21DdHJsLmpzXCJcbmV4cG9ydCB7cHJvamVjdHMsZm9ybUJ0bixuYW1lSW5wLGR1ZUlucCxwcm9qZWN0c0NvbnQsZm9ybUNvbnQsc2VjdGlvbnMscm12UHJvamVjdH1cblxuLy9hcnJheSB0byBob2xkIGFsbCBwcm9qZWN0IG9iamVjdHMgYW5kIHVzZSBpdCB0byBkaXNwbGF5IHRoZW0gb24gZG9tIFxuY29uc3QgcHJvamVjdHMgPSBbXVxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZHVlRGF0ZSxwcmlvcml0eSxkb25lID0gZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdXG4gICAgfVxuICAgIHB1c2hQcm9qZWN0KCl7XG4gICAgICAgIHByb2plY3RzLnB1c2godGhpcylcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KCl7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHRoaXMpLHByb2plY3RzLmluZGV4T2YodGhpcykrMSlcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pe1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB9XG59XG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IobmFtZSxkZXNjKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKXtcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWVJbnAudmFsdWUsZHVlSW5wLnZhbHVlLDMpKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZm9ybUNvbnRyb2woKVxufVxuXG5cbmZ1bmN0aW9uIHJtdlByb2plY3QoaSl7XG4gICAgcHJvamVjdHMuc3BsaWNlKGksMSlcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuXG59XG4vL2RvbSBlbGVtZW50c1xubGV0IGZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tYnRuXCIpXG5sZXQgbmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKVxubGV0IGR1ZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIilcbmxldCBwcm9qZWN0c0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRcIilcbmxldCBmb3JtQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250XCIpXG5sZXQgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpXG5sZXQgcHJvamVjdHNQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1wbHVzXCIpXG5zZWN0aW9ucyA9IEFycmF5LmZyb20oc2VjdGlvbnMpXG5cbi8vbGlzdGVuZXJzXG5mb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFkZFByb2plY3QpXG5wcm9qZWN0c1BsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZvcm1Db250cm9sKVxuXG5sZXQgcmVsZWFzZSA9IG5ldyBQcm9qZWN0KFwic29uIG9mIGdvZFwiLFwiMjIuMy4yMDIzXCIsMyxmYWxzZSlcbnJlbGVhc2UuYWRkVG9kbyhuZXcgVG9kbyhcImFkcG90XCIsXCJhZHBvdCBhIHBldFwiKSlcblxuXG5cbmFkZFByb2plY3QocmVsZWFzZSlcbmFkZFByb2plY3QocmVsZWFzZSlcblxuXG5cbmNvbnNvbGUubG9nKHByb2plY3RzKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==