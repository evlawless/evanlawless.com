'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThoughtGarbage = function (_React$Component) {
	_inherits(ThoughtGarbage, _React$Component);

	function ThoughtGarbage(props) {
		_classCallCheck(this, ThoughtGarbage);

		var _this = _possibleConstructorReturn(this, (ThoughtGarbage.__proto__ || Object.getPrototypeOf(ThoughtGarbage)).call(this, props));

		var savedState = localStorage.getItem('thoughtGarbageV1.0');
		if (savedState) {
			_this.state = JSON.parse(savedState);
		} else {
			_this.state = { trashedThoughts: [], currentThought: '' };
		}

		_this.putThoughtInTrash = _this.putThoughtInTrash.bind(_this);
		_this.updateCurrentThought = _this.updateCurrentThought.bind(_this);
		return _this;
	}

	_createClass(ThoughtGarbage, [{
		key: 'putThoughtInTrash',
		value: function putThoughtInTrash(event) {
			var thought = event.target.value;

			this.setState(function (state, props) {
				var thoughts = state.trashedThoughts.slice(0);
				thoughts.push(thought);
				return { trashedThoughts: thoughts, currentThought: "" };
			});
		}
	}, {
		key: 'updateCurrentThought',
		value: function updateCurrentThought(event) {
			var thought = event.target.value;

			this.setState({
				currentThought: thought
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			localStorage.setItem('thoughtGarbageV1.0', JSON.stringify(this.state));
		}
	}, {
		key: 'render',
		value: function render() {
			var thoughtsInGarbage = this.state.trashedThoughts.length;
			var message = "";
			if (thoughtsInGarbage > 0) {
				message = React.createElement(
					'div',
					null,
					React.createElement(
						'p',
						null,
						thoughtsInGarbage,
						' thought',
						thoughtsInGarbage > 1 ? "s are" : ' is',
						' currently in the garbage.'
					)
				);
			}

			return React.createElement(
				'div',
				{ className: 'thoughtgarbage' },
				React.createElement(
					'h1',
					null,
					'thought garbage'
				),
				React.createElement(
					'p',
					null,
					'this is a very little react app for clearing\xA0your\xA0head'
				),
				React.createElement(
					'p',
					null,
					'type in a thought, then click the garbage icon to dispose of it',
					React.createElement('br', null),
					React.createElement(
						'sub',
						null,
						'it\'ll stick around in the garbage for a little while, but things in the garbage tend to spoil'
					)
				),
				React.createElement(
					'p',
					null,
					'now you have a little more space in your head for more positive thoughts'
				),
				React.createElement(
					'div',
					{ className: 'app-content thoughtgarbage-app-content px-3' },
					React.createElement(
						'h3',
						null,
						'make some headroom'
					),
					message,
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement('textarea', { placeholder: 'thoughts go here', className: 'form-control', rows: '3', value: this.state.currentThought, onChange: this.updateCurrentThought })
					),
					React.createElement(
						'div',
						{ className: 'row justify-content-center' },
						React.createElement(
							'button',
							{ className: 'btn btn-secondary', onClick: this.putThoughtInTrash },
							React.createElement('span', { className: 'fas fa-trash-alt garbage-icon' })
						)
					)
				)
			);
		}
	}]);

	return ThoughtGarbage;
}(React.Component);