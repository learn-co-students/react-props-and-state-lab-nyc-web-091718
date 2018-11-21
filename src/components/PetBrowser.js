import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {

  PetCards = () => this.props.pets.map(pet => <Pet key={pet.id} id={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} name={pet.name} adopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)

  render() {
    return (
      <div>
        {this.PetCards()}
      </div>
    )
  }
}

export default PetBrowser
