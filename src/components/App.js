import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

let URL= '/api/pets'
let type

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({ pets: json }))
  }

  changeFilter = event => {
    console.log('in change filter');
    type = event.target.value
    this.setState({ ...this.state.filters.type, type: type  }, () => console.log(this.state))
  }

  onFindPetsClick = (event) => {
    console.log(this.state.type);
    type = this.state.type
      fetch(URL + `?type=${type}`)
      .then(res => res.json())
      .then(json => this.setState({ pets: json }))
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header"> React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilter} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets}/>
                </div>
                </div>
        </div>
      </div>
    )
  }
}

export default App
