import { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			activeItem: this.props.activeItem,
		};
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		return (
			<>
				<Menu pointing secondary>
					<Menu.Item>SLF</Menu.Item>
					<Menu.Menu position='right'>
						<Link href='/' passHref>
							<Menu.Item
								active={this.state.activeItem === 'home'}
								onClick={this.handleItemClick}
							>Home</Menu.Item>
						</Link>
						<Link href='/acad' passHref>
							<Menu.Item
								active={this.state.activeItem === 'academic'}
								onClick={this.handleItemClick}
							>Academic</Menu.Item>
						</Link>
					</Menu.Menu>
				</Menu>
			</>
		);
	}
}