import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return this.props.petData.map((pet) => {
      return <Pet age={pet.age} gender={pet.gender} key={pet.id} type={pet.type} weight={pet.weight} name={pet.name}/>
    })
  }
}

export default PetBrowser;
