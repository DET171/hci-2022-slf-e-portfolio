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
					<p>I am also a big fan of the idea of learning by doing, and I am always looking for ways to improve my skills (again only for certain subjects although I am trying to change).</p>
					<Header as='h1' className={`${styles['underline']} ${styles['courgette']}`}>
						Languages/Frameworks I&apos;m learning
					</Header>
					<List bulleted>
						<List.Item><List.Icon name='python' /><List.Content>Python</List.Content></List.Item>
						<List.Item><List.Content>C++</List.Content></List.Item>
						<List.Item><List.Icon name='html5' /><List.Content>HTML</List.Content></List.Item>
						<List.Item><List.Icon name='css3' /><List.Content>CSS</List.Content></List.Item>
						<List.Item><List.Icon name='js' /><List.Content>JavaScript</List.Content></List.Item>
						<List.Item><List.Content>TypeScript</List.Content></List.Item>
						<List.Item><List.Icon name='react' /><List.Content>React</List.Content></List.Item>
						<List.Item>Next.js</List.Item>
						<List.Item><List.Icon name='vuejs' /><List.Content>Vue.js</List.Content></List.Item>
						<List.Item>Rust</List.Item>
					</List>
					<Header as='h1' className={`${styles['underline']} ${styles['courgette']}`}>
						Languages/Frameworks I would like to learn
					</Header>
					<List bulleted>
						<List.Item><List.Icon name='coffee' /><List.Content>CoffeeScript</List.Content></List.Item>
						<List.Item><List.Content>Go</List.Content></List.Item>
						<List.Item><List.Content>Svelte</List.Content></List.Item>
					</List>
					<Header as='h1' className={`${styles['underline']} ${styles['courgette']}`}>
						A few projects that I&apos;ve done with others or by myself during my free time
					</Header>
					<List bulleted>
						<List.Item>
							<List.Content>
								<a className='l' href='https://github.com/HCI-Science-Project/Discord-Bot'>HCI Science Discord Bot</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								And a <a className='l' href='https://github.com/HCI-Science-Project/Teacher-Portal'>teacher&apos;s portal (WIP)</a> and <a className='l' href='https://github.com/HCI-Science-Project/Website'>website</a> for the same project mentioned above.
							</List.Content>
						</List.Item>
					</List>
				</Container>
			</>
		);
	}
}