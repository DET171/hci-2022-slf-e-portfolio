/* eslint-disable no-undef */
import { Component } from 'react';
import Navbar from '../../components/navbar';
import Head from 'next/head';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		return (
			<>
				<Head>
					<title>Academics</title>
				</Head>
				<Navbar activeItem='academic' />
			</>
		);
	}
}
