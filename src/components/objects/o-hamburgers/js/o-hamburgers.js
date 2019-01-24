import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../../../../actions/navigation.actions';

class Hamburgers extends Component {
	constructor(props) {
		super(props);

		this.state = { collapsed: false };
	}

	toggleMenu(e) {
		e.preventDefault();
		this.setState({ collapsed: !this.state.collapsed });
		const { collapsed } = this.state;
		const { dispatch } = this.props;

		dispatch(toggleNav(collapsed));
	}

	render() {
		return (
			<button
				onClick={this.toggleMenu.bind(this)}
				className={`o-hamburger o-hamburger--squeeze hidden-lg-up float-right ${
					this.state.collapsed ? 'is--active' : ''
				}`}
				type="button"
			>
				<span className="o-hamburger-box">
					<span className="o-hamburger-inner" />
				</span>
			</button>
		);
	}
}

function mapStateToProps(state) {
	return { collapsed: state.collapsed };
}

export default connect(mapStateToProps)(Hamburgers);
