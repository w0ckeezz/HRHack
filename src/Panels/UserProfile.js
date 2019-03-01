import React from 'react';
import { arrayCards } from './ArrayCards';
import { getHistory, newEmployee } from './Functions';

class UserProfile extends React.Component {

	componentDidMount() {
        getHistory().then(x => console.log(x));
    }

	render() {
		return (
			<div id="UserProfile">
				<div className="title">Tensegrity</div>
				<div className="container">
					<div className="sidebar">
						<button onClick={() => { this.props.onUpdatePanel('CardList')}} className="btn">Назад</button>
						<div className="content-profile">
							<img src={arrayCards[this.props.idUser].image} className="card-image"/>
							<div className="card-info">
								<div className="card-name">{arrayCards[this.props.idUser].name + ' ' + arrayCards[this.props.idUser].surname}</div>
								<div className="card-phone">{arrayCards[this.props.idUser].phone}</div>
								<div className="card-mail">{arrayCards[this.props.idUser].mail}</div>
							</div>
							<button className="btn">Связаться</button>
						</div>
					</div>
					<div className="content">
						Леддеры
					</div>
				</div>
			</div>
		);
	}
}


export default UserProfile;
