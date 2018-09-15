const h = React.createElement.bind(React);
const container = document.querySelector('#app-view');


function loadToDont() {
	ReactDOM.render(h(ToDont), container);
}

function loadColorPicker() {
	ReactDOM.render(h(ColorPicker), container);
}