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


let formShown = false

function displayProjects(){
    formControl()
    ___WEBPACK_IMPORTED_MODULE_0__.projectsCont.textContent = ''

    for(let i in ___WEBPACK_IMPORTED_MODULE_0__.projects){
        let projectDiv = document.createElement("div")

        if (___WEBPACK_IMPORTED_MODULE_0__.projects[i].name == ''){
            ___WEBPACK_IMPORTED_MODULE_0__.projects[i].name = "Some Project"
        }

        let projectName = document.createElement("p")
        
        projectName.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.projects[i].name}`

        ___WEBPACK_IMPORTED_MODULE_0__.projectsCont.append(projectDiv)
        projectDiv.append(projectName)

        projectDiv.classList.add("project")
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
    }
    pushProject(){
        projects.push(this)
    }

    removeProject(){
        projects.splice(projects.indexOf(this),projects.indexOf(this)+1)
    }
}

function addProject(){
    projects.push(new Project(nameInp.value,dueInp.value,3))
    ;(0,_domCtrl_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
    console.log(projects);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlGOztBQUVqRjs7QUFFTztBQUNQO0FBQ0EsSUFBSSx1REFBd0I7O0FBRTVCLGlCQUFpQix1Q0FBUTtBQUN6Qjs7QUFFQSxZQUFZLHVDQUFRO0FBQ3BCLFlBQVksdUNBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBUSxTQUFTOztBQUV0RCxRQUFRLGtEQUFtQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFFBQVEscURBQXNCO0FBQzlCO0FBQ0E7OztBQUdBLEtBQUs7QUFDTCxRQUFRLHFEQUFzQjtBQUM5QjtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQVE7QUFDN0IsWUFBWSx1Q0FBUTtBQUNwQjtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsdUNBQVE7QUFDN0IsWUFBWSx1Q0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHdEO0FBQ2U7O0FBRXZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNkRBQWU7QUFDbkI7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsb0RBQVc7Ozs7Ozs7OztVQzVDbEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vLi9zcmMvZG9tQ3RybC5qcyIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2p1c3QtZG8taXQtdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vanVzdC1kby1pdC10b2RvLWxpc3QtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qdXN0LWRvLWl0LXRvZG8tbGlzdC0vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvamVjdHMsZm9ybUJ0bixuYW1lSW5wLGR1ZUlucCxwcm9qZWN0c0NvbnQsZm9ybUNvbnQsc2VjdGlvbnN9IGZyb20gXCIuXCI7XG5cbmxldCBmb3JtU2hvd24gPSBmYWxzZVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XG4gICAgZm9ybUNvbnRyb2woKVxuICAgIHByb2plY3RzQ29udC50ZXh0Q29udGVudCA9ICcnXG5cbiAgICBmb3IobGV0IGkgaW4gcHJvamVjdHMpe1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICBpZiAocHJvamVjdHNbaV0ubmFtZSA9PSAnJyl7XG4gICAgICAgICAgICBwcm9qZWN0c1tpXS5uYW1lID0gXCJTb21lIFByb2plY3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbaV0ubmFtZX1gXG5cbiAgICAgICAgcHJvamVjdHNDb250LmFwcGVuZChwcm9qZWN0RGl2KVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSlcblxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNvbnRyb2woKXtcbiAgICBpZihmb3JtU2hvd24pe1xuICAgICAgICBmb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgZm9ybVNob3duID0gZmFsc2VcbiAgICAgICAgYmx1ck9uRm9ybSgpXG5cblxuICAgIH1lbHNle1xuICAgICAgICBmb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIGZvcm1TaG93biA9IHRydWVcbiAgICAgICAgYmx1ck9uRm9ybSgpXG5cblxuICAgIH1cbn1cblxuZnVuY3Rpb24gYmx1ck9uRm9ybSgpe1xuICAgIGlmIChmb3JtU2hvd24pe1xuICAgICAgICBmb3IobGV0IGkgaW4gc2VjdGlvbnMpe1xuICAgICAgICAgICAgc2VjdGlvbnNbaV0uc3R5bGUuZmlsdGVyID0gXCJibHVyKDJweClcIlxuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIGZvcihsZXQgaSBpbiBzZWN0aW9ucyl7XG4gICAgICAgICAgICBzZWN0aW9uc1tpXS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiXG4gICAgICAgIH1cbiAgICB9XG4gICBcbn1cblxuIiwiaW1wb3J0IHtkaXNwbGF5UHJvamVjdHMsZm9ybUNvbnRyb2x9IGZyb20gXCIuL2RvbUN0cmwuanNcIlxuZXhwb3J0IHtwcm9qZWN0cyxmb3JtQnRuLG5hbWVJbnAsZHVlSW5wLHByb2plY3RzQ29udCxmb3JtQ29udCxzZWN0aW9uc31cblxuLy9hcnJheSB0byBob2xkIGFsbCBwcm9qZWN0IG9iamVjdHMgYW5kIHVzZSBpdCB0byBkaXNwbGF5IHRoZW0gb24gZG9tIFxuY29uc3QgcHJvamVjdHMgPSBbXVxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZHVlRGF0ZSxwcmlvcml0eSxkb25lID0gZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICB9XG4gICAgcHVzaFByb2plY3QoKXtcbiAgICAgICAgcHJvamVjdHMucHVzaCh0aGlzKVxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QoKXtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YodGhpcykscHJvamVjdHMuaW5kZXhPZih0aGlzKSsxKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xuICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZUlucC52YWx1ZSxkdWVJbnAudmFsdWUsMykpXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59XG5cblxuXG5cblxuLy9kb20gZWxlbWVudHNcbmxldCBmb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWJ0blwiKVxubGV0IG5hbWVJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIilcbmxldCBkdWVJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpXG5sZXQgcHJvamVjdHNDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250XCIpXG5sZXQgZm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udFwiKVxubGV0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVxubGV0IHByb2plY3RzUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGx1c1wiKVxuc2VjdGlvbnMgPSBBcnJheS5mcm9tKHNlY3Rpb25zKVxuXG4vL2xpc3RlbmVyc1xuZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhZGRQcm9qZWN0KVxucHJvamVjdHNQbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtQ29udHJvbClcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9