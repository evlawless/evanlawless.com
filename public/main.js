
const h = React.createElement.bind(React);

class DemoOne extends React.Component {

	render() {
		return h('h2', {},
			"Demo One"
		);
	}
}

class DemoTwo extends React.Component {

	render() {
		return h('h2', {},
			"Demo two"
		);
	}
}
const container = document.querySelector('#app-view');

function testAppOne() {
	ReactDOM.render(h(DemoOne), container);
}

function testAppTwo() {
	ReactDOM.render(h(DemoTwo), container);
}