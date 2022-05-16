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
					<title>Milestones</title>
				</Head>
				<Navbar activeItem='milestones' />
				<Header as='h1' className={styles['main-header']}>
					Milestones (so far)
				</Header>
				<hr className='spacer' />
				<Container text>
					<p>There has been many milestones this year, other than test and examinations.</p>
					<Header as='h2' className={`${styles['courgette']} ${styles['underline']}`}>
						A few of the notable milestones so far:
					</Header>
					<List bulleted>
						<List.Item>
							<List.Content>
								Secondary One Orientation 2022 (T1 W1)
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								Secondary One Annual Camp 2022 (T1 W10)
							</List.Content>
						</List.Item>
					</List>
				</Container>
			</>
		);
	}
}