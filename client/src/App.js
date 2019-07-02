import React, { Component } from 'react';
import Layout from './components/pages/layout';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: '' };
	}
	callAPI() {
		fetch('http://localhost:9000/testAPI')
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }));
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<div>
				<Layout className='App' />
			</div>
		);
	}
}

export default App;
