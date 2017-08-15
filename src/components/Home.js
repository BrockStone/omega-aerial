import React, { Component } from 'react'
import logo from '../logo.svg'
import droneIcon from '../assets/icons/mavic-icon.svg'

// Import semanitc-ui-react elements
import { Container, Grid, Header, Button, Segment, Image } from 'semantic-ui-react'

class Home extends Component {
	render() {
		return (
			<div className="Home-Container">
				<div className="Home-Header">
					<Container>
					<Grid centered>

						<Grid.Row>
							<Grid.Column mobile={16} tablet={5} computer={5}>
								<img src={logo} className="App-logo" alt="logo" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column textAlign="centered">
								<Header as="h1" inverted>
									Your Answer to Aerial Media
									<Header.Subheader>
										We specialize in a wide range of applications
									</Header.Subheader>
								</Header>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row columns={4} mobile={16}>
							
							<Grid.Column textAlign='centered' mobile={16} tablet={8} computer={4}>
								
								<i class="icon"><img src={droneIcon} /></i>
								<Header as='h2' inverted>
									Professional Quality
									<Header.Subheader>
										Manage your account settings and set e-mail preferences.
									</Header.Subheader>
								</Header>

							</Grid.Column>

							<Grid.Column textAlign='centered' mobile={16} tablet={8} computer={4}>
								
								<i class="icon"><img src={droneIcon} /></i>
								<Header as='h2' inverted>
									Professional Quality
									<Header.Subheader>
										Manage your account settings and set e-mail preferences.
									</Header.Subheader>
								</Header>

							</Grid.Column>

							<Grid.Column textAlign='centered' mobile={16} tablet={8} computer={4}>
								
								<i class="icon"><img src={droneIcon} /></i>
								<Header as='h2' inverted>
									Professional Quality
									<Header.Subheader>
										Manage your account settings and set e-mail preferences.
									</Header.Subheader>
								</Header>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column textAlign="centered">
								<Button basic inverted>Learn how we can help you</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					</Container>
				</div>
			</div>
		)
	}
}

export default Home;