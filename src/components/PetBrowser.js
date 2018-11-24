import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petCard = (pet, idx) => {
    return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={idx} />
  }

  render() {
    return <div className="ui cards">{this.props.pets.map((pet, idx) => this.petCard(pet, idx))}</div>
  }
}

export default PetBrowser
