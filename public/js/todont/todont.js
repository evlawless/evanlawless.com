'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDont = function (_React$Component) {
	_inherits(ToDont, _React$Component);

	function ToDont(props) {
		_classCallCheck(this, ToDont);

		var _this = _possibleConstructorReturn(this, (ToDont.__proto__ || Object.getPrototypeOf(ToDont)).call(this, props));

		var savedState = localStorage.getItem('todontState');
		if (savedState) {
			_this.state = JSON.parse(savedState);
		} else {
			_this.state = { items: ["say mean things about my website"] };
		}

		_this.updateListItem = _this.updateListItem.bind(_this);
		_this.deleteListItem = _this.deleteListItem.bind(_this);
		_this.addNewItem = _this.addNewItem.bind(_this);

		return _this;
	}

	_createClass(ToDont, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			localStorage.setItem('todontState', JSON.stringify(this.state));
		}
	}, {
		key: 'updateListItem',
		value: function updateListItem(newValue, idx) {
			this.setState(function (state, props) {
				var updatedItems = state.items;
				updatedItems[idx] = newValue;
				return { items: updatedItems };
			});
		}
	}, {
		key: 'addNewItem',
		value: function addNewItem() {
			this.setState(function (state, props) {
				var updatedItems = state.items;
				updatedItems.push('');
				return { items: updatedItems };
			});
		}
	}, {
		key: 'deleteListItem',
		value: function deleteListItem(idx) {
			console.log(idx);
			this.setState(function (state, props) {
				var updatedItems = state.items;
				updatedItems.splice(idx, 1);
				return { items: updatedItems };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var listElements = this.state.items.map(function (item, idx) {
				return React.createElement(ToDontItem, { key: idx, index: idx, value: item, onChange: _this2.updateListItem, deleteItem: _this2.deleteListItem });
			});

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'app-desc todont-app-desc' },
					React.createElement(
						'h1',
						null,
						'to-don\'t'
					),
					React.createElement(
						'p',
						null,
						'the to-don\'t list is a list of things not to do. it\'s like a to-do list in many ways except for the fact that it is the literal opposite.'
					),
					React.createElement(
						'p',
						null,
						'the list saves as you type, probably',
						React.createElement('br', null),
						'if you do something on the list, you can delete it'
					),
					React.createElement(
						'p',
						null,
						'decide for yourself how ashamed you should be when you do'
					)
				),
				React.createElement(
					'div',
					{ className: 'app-content todont-app-content px-3' },
					React.createElement(
						'h2',
						null,
						'do\xA0not do the\xA0following:'
					),
					listElements,
					React.createElement(
						'div',
						{ className: 'todont-add my-3' },
						React.createElement(
							'button',
							{ className: 'btn btn-secondary todont-add-btn', onClick: this.addNewItem },
							'add new item +'
						)
					)
				)
			);
		}
	}]);

	return ToDont;
}(React.Component);

var ToDontItem = function (_React$Component2) {
	_inherits(ToDontItem, _React$Component2);

	function ToDontItem(props) {
		_classCallCheck(this, ToDontItem);

		var _this3 = _possibleConstructorReturn(this, (ToDontItem.__proto__ || Object.getPrototypeOf(ToDontItem)).call(this, props));

		_this3.updateValue = _this3.updateValue.bind(_this3);
		_this3.deleteItem = _this3.deleteItem.bind(_this3);
		return _this3;
	}

	_createClass(ToDontItem, [{
		key: 'updateValue',
		value: function updateValue(event) {
			this.props.onChange(event.target.value, this.props.index);
		}
	}, {
		key: 'deleteItem',
		value: function deleteItem() {
			this.props.deleteItem(this.props.index);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'todont-item input-group my-2', key: this.props.index },
				React.createElement('input', { type: 'text', className: 'form-control', value: this.props.value, onChange: this.updateValue }),
				React.createElement(
					'div',
					{ className: 'input-group-append' },
					React.createElement(
						'button',
						{ className: 'btn btn-secondary todont-close-btn input-group-btn', onClick: this.deleteItem },
						'\xD7'
					)
				)
			);
		}
	}]);

	return ToDontItem;
}(React.Component);