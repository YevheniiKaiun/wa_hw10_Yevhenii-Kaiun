/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 338);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Lamp = Lamp;
function Lamp(target) {
   var lamp = document.createElement('div');
   var item = document.createElement('div');
   var btn = document.createElement('button');
   var active_lamp = 'Lamp__active-lamp';
   var active_btn = 'active-btn';

   lamp.classList.add('Lamp');
   item.classList.add('Lamp__item');
   btn.classList.add('Lamp__button');

   btn.textContent = 'on/off';

   target.insertBefore(lamp, target.firstChild);
   lamp.appendChild(item);
   lamp.appendChild(btn);

   btn.addEventListener('click', function () {
      var start = lamp.querySelector('.active-btn');
      if (start === null) {
         turn_on();
      } else {
         turn_off();
      }
   });

   function turn_on() {
      lamp.classList.add('active');
      item.classList.add(active_lamp);
      btn.classList.add(active_btn);
   }

   function turn_off() {
      lamp.classList.remove('active');
      item.classList.remove(active_lamp);
      btn.classList.remove(active_btn);
   }
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(340);

var _Lamp = __webpack_require__(125);

var _addlamp = __webpack_require__(341);

var _togglelamp = __webpack_require__(342);

var target = document.querySelector('.Lamps-page');

for (var i = 0; i < 5; i++) {
    (0, _Lamp.Lamp)(target);
}
(0, _togglelamp.toggle_lamp)(target);
(0, _addlamp.add_lamp)(target);

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add_lamp = add_lamp;

var _Lamp = __webpack_require__(125);

function add_lamp(target) {
    var btn = document.createElement('button');
    btn.classList.add('.add-Lamp');
    btn.innerHTML = 'add-Lamp';

    target.appendChild(btn);
    btn.addEventListener('click', function () {
        (0, _Lamp.Lamp)(target);
    });
}

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggle_lamp = toggle_lamp;
function toggle_lamp(target) {
    var btn = document.createElement('button');
    btn.classList.add('.toggle-all');
    btn.innerHTML = 'Toggle-all';
    var active_btn = 'active-btn';
    var active_lamp = 'Lamp__active-lamp';

    target.appendChild(btn);

    btn.addEventListener('click', function () {
        var turn_on = Array.from(target.querySelectorAll('.active'));
        var lamp = Array.from(target.querySelectorAll('.Lamp'));
        if (turn_on.length === 0) {
            for (var i = 0; i < lamp.length; i++) {
                lamp[i].classList.add('active');
                lamp[i].childNodes[0].classList.add(active_lamp);
                lamp[i].childNodes[1].classList.add(active_btn);
            }
        } else {
            for (var _i = 0; _i < turn_on.length; _i++) {
                turn_on[_i].classList.remove('active');
                turn_on[_i].childNodes[0].classList.remove(active_lamp);
                turn_on[_i].childNodes[1].classList.remove(active_btn);
            }
        }
    });
}

/***/ })

/******/ });