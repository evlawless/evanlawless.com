'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_React$Component) {
	_inherits(ColorPicker, _React$Component);

	function ColorPicker(props) {
		_classCallCheck(this, ColorPicker);

		return _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));
	}

	_createClass(ColorPicker, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "colorpicker" },
				React.createElement(
					"div",
					{ className: "app-desc colorpicker-app-desc" },
					React.createElement(
						"div",
						{ className: "row align-items-center" },
						React.createElement(
							"h1",
							{ className: "mx-4" },
							"colo",
							React.createElement(
								"sup",
								null,
								"u"
							),
							"rpicker"
						),
						React.createElement(
							"a",
							{ className: "btn btn-secondary btn-sm btn-github", href: "https://github.com/evlawless/colorpicker" },
							React.createElement("img", { src: "./images/GitHub-Mark-32px.png", height: "16px" }),
							" view on github"
						)
					),
					React.createElement(
						"p",
						null,
						"this is a thing to make a computer tell you what colors look\xA0good\xA0together."
					),
					React.createElement(
						"p",
						null,
						"you'll notice i changed the background on this app to white. this is to keep my own beautiful color scheme from confusing the eye"
					),
					React.createElement(
						"p",
						null,
						"i included a u in the title just because i feel bad when i don't"
					)
				),
				React.createElement(
					"div",
					{ className: "app-content colorpicker-app-content" },
					React.createElement(
						"div",
						{ "class": "form-group input-group col-md-6" },
						React.createElement(
							"div",
							{ className: "input-group-prepend" },
							React.createElement(
								"div",
								{ className: "input-group-text" },
								"#"
							)
						),
						React.createElement("input", { type: "text", className: "form-control" }),
						React.createElement(
							"div",
							{ className: "input-group-append" },
							React.createElement(
								"button",
								{ className: "btn btn-secondary input-group-btn" },
								"generate"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col" },
							"###"
						),
						React.createElement(
							"div",
							{ className: "col" },
							"###"
						),
						React.createElement(
							"div",
							{ className: "col" },
							"###"
						),
						React.createElement(
							"div",
							{ className: "col" },
							"###"
						),
						React.createElement(
							"div",
							{ className: "col" },
							"###"
						)
					)
				)
			);
		}
	}]);

	return ColorPicker;
}(React.Component);