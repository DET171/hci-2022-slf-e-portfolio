/* eslint-disable no-undef */
import { Component } from 'react';
import Navbar from '../components/navbar';
import styles from '../styles/Index.module.css';
import { Header, Container } from 'semantic-ui-react';
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
					<title>Home</title>
				</Head>
				<Navbar activeItem='home' />
				<Header as='h1' className={styles['main-header']}>My Journey in HCI (so far)</Header>
				<hr className='spacer' />
				<Container text>
					<p className={styles.para1}>It has been a very fulfilling half a year where I have met a lot of people, made a lot of new friends and learnt a lot of new things. </p>
					<p className='center'>(I do not yet have any photos of myself in HCI)</p>
				</Container>
			</>
		);
	}
}
