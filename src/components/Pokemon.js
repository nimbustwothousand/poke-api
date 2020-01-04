import React, { Component } from 'react';
import axios from 'axios'

class Pokemon extends Component {
	state = {
		types: [],
		abilities: [],
		sprite: '',
		stats: [],
	}

	componentDidMount() {
		axios.get(this.props.url)
			.then(res => {
				this.setState({
					types: res.data.types,
					abilities: res.data.abilities,
					sprite: res.data.sprites.front_default,
					stats: res.data.stats
				})
			})
	}

	render() {
		const { name } = this.props;


		return (
			<div className='col-4'>
				<div className='card'>
					<div className='top'>
						<img src={this.state.sprite} alt={name} />
						<div>
							{this.state.types.map(type => (
								<span className={`type type-${type.type.name}`}>{type.type.name}</span>
							)
							)}
						</div>
						<div>{name}</div>
					</div>
					<div className='bottom'>
						<div className='stat-container'>
							<table>
								{this.state.stats.map(stat => (
									<tr>
										<td>{stat.stat.name}: </td>
										<td>{stat.base_stat}</td>
									</tr>
								))}
							</table>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default Pokemon
