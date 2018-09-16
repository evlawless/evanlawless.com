'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddingList = function (_React$Component) {
	_inherits(AddingList, _React$Component);

	function AddingList(props) {
		_classCallCheck(this, AddingList);

		var _this = _possibleConstructorReturn(this, (AddingList.__proto__ || Object.getPrototypeOf(AddingList)).call(this, props));

		var savedState = localStorage.getItem('listState');
		if (savedState) {
			_this.state = JSON.parse(savedState);
		} else {
			_this.state = { list: ['first thing'], currentInputVal: '' };
		}

		_this.handleChange = _this.handleChange.bind(_this);
		_this.addListItem = _this.addListItem.bind(_this);
		return _this;
	}

	_createClass(AddingList, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			localStorage.setItem('listState', JSON.stringify(this.state));
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			localStorage.setItem('listState', JSON.stringify(this.state));
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ currentInputVal: event.target.value });
		}
	}, {
		key: 'addListItem',
		value: function addListItem() {
			this.setState(function (state, props) {
				var newList = state.list;
				newList.push(state.currentInputVal);

				return { list: newList, currentInputVal: "" };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var listElements = this.state.list.map(function (item, idx) {
				return React.createElement(
					'li',
					{ key: idx },
					item
				);
			});

			return React.createElement(
				'div',
				null,
				React.createElement(
					'ul',
					null,
					listElements
				),
				React.createElement('input', { type: 'text', onChange: this.handleChange, value: this.state.currentInputVal }),
				React.createElement(
					'button',
					{ onClick: this.addListItem },
					'submit'
				)
			);
		}
	}]);

	return AddingList;
}(React.Component);