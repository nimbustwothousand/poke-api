import React, { Component } from 'react';
import Pokemon from './Pokemon';
import axios from 'axios';

class PokemonList extends Component {
	state = {
		url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=60',
		pokemon: null
	};

	componentDidMount() {
		axios.get(this.state.url)
			.then(res => {
				this.setState({ pokemon: res.data.results });
			})
			.catch(err => {
				console.error(err)
			});
	}

	render() {
		return (
			<div className='container'>
				{this.state.pokemon ? (
					<div className='row'>
						{this.state.pokemon.map(poke => (
							<Pokemon key={poke.name} name={poke.name} url={poke.url} />
						))
						}
					</div>
				) : (
					<h1>Loading Pokemon...</h1>
				)}
			</div>
		)
	}
}

export default PokemonList;