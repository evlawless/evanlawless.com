'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_React$Component) {
	_inherits(Demo, _React$Component);

	function Demo(props) {
		_classCallCheck(this, Demo);

		var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

		_this.state = { clickCount: 0 };
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Demo, [{
		key: 'handleClick',
		value: function handleClick() {
			this.setState(function (state, props) {
				return { clickCount: state.clickCount + 1 };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ onClick: this.handleClick },
				this.state.clickCount
			);
		}
	}]);

	return Demo;
}(React.Component);