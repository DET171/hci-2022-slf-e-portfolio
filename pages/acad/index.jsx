/* eslint-disable no-undef */
import { Component } from 'react';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import { Header, Container, List, Icon } from 'semantic-ui-react';
import styles from '../../styles/CCA.module.css';

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
				<Header as='h1' className={styles['main-header']}>Academics</Header>
				<hr className='spacer' />
				<Container text className={styles.container}>
					<p>
						My academic progress has been pretty much satisfactory (except for one subject) throughout the first semester of 2022, but I feel that there are still a couple of things I should improve on.
					</p>
					<List bulleted>
						<List.Item>
							<List.Icon name='folder' />
							<List.Content>
								Avoid last minute filing
							</List.Content>
						</List.Item>
					</List>
					<hr className='spacer' />
					<Header as='h1' className={`${styles.courgette}  ${styles.underline}`}>Results that I have accumulated so far throughout the year:</Header>
					<Header as='h2' className={`${styles.courgette}  ${styles.underline}`}>Semester 1:</Header>
					<List>
						<List.Item>
							<List.Icon name='language' />
							<List.Content>
								English:
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='book' />
							<List.Content>
								History:
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								Mathematics:
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								LSS:
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								Higher Chinese:
							</List.Content>
						</List.Item>
					</List>
				</Container>
			</>
		);
	}
}
