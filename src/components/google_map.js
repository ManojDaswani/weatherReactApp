import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}


render() {
	return <div ref="map" /> ;
	//this.refs.map = direct reference to this actual html element
	}
}


export default GoogleMap;
