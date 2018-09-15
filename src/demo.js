'use strict';

class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = { clickCount: 0 };
		this.handleClick = this.handleClick.bind(this);	
	}

	handleClick() {
		const self = this;
		this.setState((state, props) => {
			return { clickCount: state.clickCount + 1};
		});
	}

	render() {
		return <button onClick={this.handleClick}>{this.state.clickCount}</button>
	}
}