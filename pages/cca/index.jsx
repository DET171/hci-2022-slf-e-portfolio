import { Component } from 'react';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import { Header, Container, List, Icon } from 'semantic-ui-react';
import styles from '../../styles/CCA.module.css';

export default class App extends Component {
	render() {
		return (
			<>
				<Head>
					<title>CCA</title>
				</Head>
				<Navbar activeItem='cca' />
				<Header as='h1' className={styles['main-header']}>
					My CCA: Infocomm (EC<sup>3</sup>)
				</Header>
				<hr className='spacer' />
				<Container text className={styles.container}>
					<Header as='h1' className={`${styles.courgette}  ${styles.underline}`}>
						Great things about EC<sup>3</sup>
					</Header>
					<List bulleted>
						<List.Item>
							<List.Content>
								You get to program to your heart&apos;s content
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								You get to work on your own projects
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								You get to learn new things, languages, algorithms and logic
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								And most importantly, you get to make new friends
							</List.Content>
						</List.Item>
					</List>
				</Container>
			</>
		);
	}
}