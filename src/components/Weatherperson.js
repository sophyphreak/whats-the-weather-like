import React from 'react';
import * as axios from 'axios';
import StuffThatLoads from './StuffThatLoads';

export default class Weatherperson extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      weather: null,
      temp: null,
      f: false,
      icon: null
    }
    this.convertToF = this.convertToF.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.cOrF = this.cOrF.bind(this);
  }
  
  componentWillMount() {
    this.getLocation();
    setTimeout(() => {this.getWeather()}, 2000);
  };
  
  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  };
  
  async getWeather() {
    const axiosUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + this.state.lat + "&lon=" + this.state.long;
    
    try {
      const response = await axios.get(axiosUrl);
      const weather = response.data.weather[0].main;
      const temp = response.data.main.temp.toFixed(0);
      const icon = response.data.weather[0].icon;
      this.setState(() => ({ weather, temp, icon }));    
    } catch (error) {
      console.log(error);
    }
  };
  
  clickHandler(e) {
    this.setState({f: !this.state.f});
  };
  
  convertToF() {
    return (this.state.temp * 9/5 + 32).toFixed(0);
  }
  
  cOrF() {
    if (this.state.f) {
      return "C";
    } else {
      return "F";
    }
  }
  
  renderStuffThatLoads() {
    return(
      <StuffThatLoads weather={this.state.weather} icon={this.state.icon} f={this.state.f} temp={this.state.temp} convertToF={this.convertToF} clickHandler={this.clickHandler} cOrF={this.cOrF}/>
    );
  };
  
  render() {
    return (
      <div className="root">
        <h2 className="root__child">What's the Weather Like?</h2><br/>
        <h6 className="root__child">Created by Andrew Horn</h6>
        <br/><br/>
        {this.state.weather ? this.renderStuffThatLoads() : "Loading..."}
      </div>
    );
  }
};