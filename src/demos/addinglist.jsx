'use strict';

class AddingList extends React.Component {
	constructor(props) {
		super(props);

		let savedState = localStorage.getItem('listState');
		if(savedState) {
			this.state = JSON.parse(savedState);
		} else {
			this.state = { list: ['first thing'], currentInputVal: '' };
		}

		this.handleChange = this.handleChange.bind(this);
		this.addListItem = this.addListItem.bind(this);
	}

	componentWillUnmount() {
		localStorage.setItem('listState', JSON.stringify(this.state));
	}

	componentDidUpdate() {
		localStorage.setItem('listState', JSON.stringify(this.state));
	}

	handleChange(event) {
		this.setState({ currentInputVal: event.target.value });
	}

	addListItem() {
		this.setState((state, props)=>{
			let newList = state.list;
			newList.push(state.currentInputVal);
			
			return { list: newList, currentInputVal: "" };
		});
	}

	render() {
		let listElements = this.state.list.map((item, idx) => <li key={idx}>{item}</li>)

		return (
			<div>
				<ul>{listElements}</ul>
				<input type="text" onChange={this.handleChange} value={this.state.currentInputVal}/>
				<button onClick={this.addListItem}>submit</button>
			</div>
		);
	}
}