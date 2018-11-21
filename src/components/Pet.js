import React from 'react'

class Pet extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.name} {this.props.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.age}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.adopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
