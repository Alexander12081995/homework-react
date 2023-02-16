import { Component } from "react"
import { Weather } from "../types/Weather";
import { Input, Info, DropDown } from './common/index';
import { debounce } from "lodash";
import css from './app.module.css';

interface AppState {
    searchCity: string;
    unit: string;
    weather: Weather;
    
}

const myFetch = (url: string) => {
    return fetch(url).then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw Error("oops");
    });
  };

export class App extends Component<{}, AppState> {
    isOffline = true

    state: AppState = {
        searchCity: 'Minsk',
        unit: "metric",
        weather: { main: {
          temp: 0,
          feels_like: 0,
          pressure: 0,
          humidity: 0
        }, 
        weather: [{icon: undefined}],
        name: '' },
    }

  

  fetchWeatherDebounced = debounce(this.componentDidMount, 1_500);

  componentDidMount() {
      if (this.isOffline) {
        return
      }

      myFetch(`https://api.openweathermap.org/data/2.5/weather?q=${ this.state.searchCity }&appid=${ process.env.REACT_APP_OPEN_WEATHER_TOKEN }&units=${ this.state.unit }`)
      .then((weather) => { this.setState({ weather }) })
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<AppState>): void {
    if (prevState.searchCity !== this.state.searchCity) {
      this.fetchWeatherDebounced()
    }

    if (prevState.unit !== this.state.unit) {
      this.componentDidMount()
    }
    
  }

  units = [
    { value: "metric", label: "Metric, °C" },
    { value: "imperial", label: "Imperial, °F" },
    { value: "standard", label: "Standard, K" }
  ];

    render () {
        return (


            <div className = { css.container }>
              <h1 className = { css.title }>Current weather</h1>
              <Input value={ this.state.searchCity } onChange={ (searchCity) => this.setState({ searchCity }) }/>
              <DropDown calassName="" value = { this.state.unit } options = { this.units } onChange = {(e) => this.setState({unit: e.target.value})}/>
              <br></br>
              <div className = { css.groupInfo }>
                <span className = { css.subtitle }>{ this.state.weather.name }</span>
                <span className = { css.tempInfo }>{Math.round(this.state.weather.main.temp)}</span>
                <img src = {`https://openweathermap.org/img/wn/${ this.state.weather.weather[0].icon }@2x.png`}  alt='city'></img>
              </div>
              

              <Info weather={ this.state.weather }/>
            </div>
        )
    }
}
