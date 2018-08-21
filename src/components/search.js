import React, { Component } from 'react'


class Search extends Component
{
	constructor(props)
	{
		super(props)
		this.state = { term: '' }
	}

	onInputChange(term)
	{
		this.setState({term})
		this.props.onSearchChange(term)
	}

	render()
	{
		return(
			<nav className='red'>				
				<div className="nav-wrapper">
					<form className='container'>
						<div className="input-field">
							<input 
								type="search" 
								id="search" 
								placeholder='Search'
								value={this.state.term} 
								onChange = {e => this.onInputChange(e.target.value)}
							/>
							<label className="label-icon" htmlFor="search">
								<i className="material-icons">search</i>
							</label>
						</div>
					</form>			
				</div>
			</nav>
		)
	}
}


export default Search