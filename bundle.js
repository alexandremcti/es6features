"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Alexandre';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }, {
    key: "usaMap",
    value: function usaMap(arr) {
      var novoArray = arr.map(function (numero) {
        return numero * 2;
      });
      return novoArray;
    }
  }, {
    key: "usaForEach",
    value: function usaForEach(arr) {
      arr.forEach(function (numero) {
        return console.log(numero);
      });
    }
  }, {
    key: "usaFilter",
    value: function usaFilter(arr) {
      var novoArray;
      novoArray = arr.filter(function (numero) {
        return numero > 2;
      });
      return novoArray;
    }
  }, {
    key: "usaFind",
    value: function usaFind(arr) {
      var novoArray;
      novoArray = arr.find(function (numero) {
        return numero === 2;
      });
      return novoArray;
    }
  }, {
    key: "usaEvery",
    value: function usaEvery(arr) {
      var isAllGraterThanZero;
      isAllGraterThanZero = arr.every(function (numero) {
        return numero > 0;
      });
      return isAllGraterThanZero;
    }
  }, {
    key: "usaSome",
    value: function usaSome(arr) {
      var someMinorThanZero;
      someMinorThanZero = arr.some(function (numero) {
        return numero < 0;
      });
      return someMinorThanZero;
    }
  }, {
    key: "usaReduce",
    value: function usaReduce(arr) {
      var soma;
      soma = arr.reduce(function (total, numero) {
        return total += numero;
      });
      return soma;
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  var arr = [1, 2, 3];
  console.log("Usando o foreach");
  MinhaLista.usaForEach(arr);
  console.log("Usando o map - " + MinhaLista.usaMap(arr));
  console.log("usando o filter - " + MinhaLista.usaFilter(arr));
  console.log("usando o find - " + MinhaLista.usaFind(arr));
  console.log("usando o every - " + MinhaLista.usaEvery(arr));
  console.log("usando o some - " + MinhaLista.usaSome(arr));
  console.log("usando o reduce - " + MinhaLista.usaReduce(arr));
};
