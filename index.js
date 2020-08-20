"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./SearchList.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchList = function searchList(props) {
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "select-options"
  }, props.list.length === 0 ? /*#__PURE__*/_react["default"].createElement("li", {
    className: 'no-options-list'
  }, "No options") : props.list.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: props.defaultSelectText === option ? 'custom-select-option active' : 'custom-select-option',
      "data-name": option,
      onClick: props.handleOptionClick
    }, option);
  }));
};

var _default = searchList;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchList = _interopRequireDefault(require("./src/components/SearchList.jsx"));

require("./src/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DummyComponent = /*#__PURE__*/function (_Component) {
  _inherits(DummyComponent, _Component);

  var _super = _createSuper(DummyComponent);

  function DummyComponent(props) {
    var _this;

    _classCallCheck(this, DummyComponent);

    _this = _super.call(this, props);

    _this.handleClickOutside = function (e) {
      if (!e.target.classList.contains('custom-select-option') && !e.target.classList.contains('selected-text')) {
        _this.setState({
          showOptionList: false
        });
      }
    };

    _this.handleListDisplay = function () {
      _this.setState(function (prevState) {
        return {
          showOptionList: !prevState.showOptionList
        };
      });
    };

    _this.handleOptionClick = function (e) {
      _this.setState({
        defaultSelectText: e.target.getAttribute('data-name'),
        showOptionList: false,
        value: ''
      });
    };

    _this.handleValueChange = function (e) {
      var optionsList = _this.state.originalList.filter(function (word) {
        return word.toLowerCase().startsWith(e.target.value.toLowerCase());
      });

      _this.setState({
        value: e.target.value,
        optionsList: optionsList
      });
    };

    _this.state = {
      defaultSelectText: 'Select...',
      showOptionList: false,
      originalList: [],
      optionsList: [],
      value: ''
    };
    return _this;
  }

  _createClass(DummyComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Add Event Listner to handle the click that happens outside
      // the Custom Select Container
      document.addEventListener('mousedown', this.handleClickOutside);
      var list = []; // Check if input is Array or Object

      if (Array.isArray(this.props.option)) {
        list = this.props.option;
      } else {
        for (var key in this.props.option) {
          list.push(this.props.option[key]);
        }
      }

      this.setState({
        originalList: list
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Remove the event listner on component unmounting
      document.removeEventListener('mousedown', this.handleClickOutside);
    } // This method handles the click that happens outside the
    // select text and list area

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          originalList = _this$state.originalList,
          optionsList = _this$state.optionsList;
      var _this$state2 = this.state,
          showOptionList = _this$state2.showOptionList,
          defaultSelectText = _this$state2.defaultSelectText;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: document.activeElement.className.split(' ').indexOf('text-box') > -1 ? 'custom-select-container active' : 'custom-select-container'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "selected-text",
        onClick: this.handleListDisplay
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: defaultSelectText === 'Select...' ? 'text-box' : 'text-box active',
        value: this.state.value,
        onChange: this.handleValueChange,
        placeholder: defaultSelectText
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "arrow"
      })), showOptionList && (this.state.value.length === 0 ? /*#__PURE__*/_react["default"].createElement(_SearchList["default"], {
        list: originalList,
        defaultSelectText: defaultSelectText,
        handleOptionClick: this.handleOptionClick
      }) : optionsList.length === 0 ? /*#__PURE__*/_react["default"].createElement(_SearchList["default"], {
        list: [],
        defaultSelectText: defaultSelectText,
        handleOptionClick: this.handleOptionClick
      }) : /*#__PURE__*/_react["default"].createElement(_SearchList["default"], {
        list: optionsList,
        defaultSelectText: defaultSelectText,
        handleOptionClick: this.handleOptionClick
      })));
    }
  }]);

  return DummyComponent;
}(_react.Component);

var _default = DummyComponent;
exports["default"] = _default;
