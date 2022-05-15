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
					<title>SIL</title>
				</Head>
				<Navbar activeItem='sil' />
				<Header as='h1' className={styles['main-header']}>
					Student-Initiated Learning
				</Header>
				<hr className='spacer' />
				<Container text>
					<p>Throughout the HBL Periods and weekends, I would usually be finishing up on homework, but being the kind of person I am, I tend to procrastinate and do things I like first.</p>
					<p>I am a coding enthusiast, so I spend a lot of time writing code and learning and familiarizing myself with new frameworks and languages.</p>
					<p>I am also a big fan of the idea of learning by doing, and I am always looking for ways to improve my skills (again only for certain subjects).</p>
					<Header as='h1' className={`${styles['underline']} ${styles['courgette']}`}>
						Languages/Frameworks I&apos;m learning
					</Header>
					<List bulleted>
						<List.Item><Icon name='python' /> Python</List.Item>
						<List.Item>C++</List.Item>
						<List.Item><Icon name='html5' />HTML/ <Icon name='css3 alternate' />CSS/ <Icon name='js' />JavaScript</List.Item>
						<List.Item>TypeScript</List.Item>
						<List.Item><Icon name='react' /> React</List.Item>
						<List.Item>Next.js</List.Item>
						<List.Item><Icon name='vuejs' /> Vue.js</List.Item>
						<List.Item>Rust</List.Item>
					</List>
					<Header as='h1' className={`${styles['underline']} ${styles['courgette']}`}>
						Languages/Frameworks I would like to learn
					</Header>
					<List bulleted>
						<List.Item><Icon name='coffee' /> CoffeeScript</List.Item>
						<List.Item>Go</List.Item>
						<List.Item>Svelte</List.Item>
					</List>
				</Container>
			</>
		);
	}
}