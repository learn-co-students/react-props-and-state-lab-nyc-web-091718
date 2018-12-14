import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)
    this.age = props.age
    this.type = props.type
    this.gender = props.gender
    this.weight = props.weight
    this.name = props.name
  this.state = { adopted: false }

  }

  adoptToggle = () => {
    console.log('in toggle');
    return this.state.adopted === false ? this.setState({ adopted: true }) : this.setState({ adopted: false })
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h4>{this.props.name}</h4>
            {this.props.gender}<br/>
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div onClick={this.adoptToggle} className="extra content">
          {this.state.adopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
