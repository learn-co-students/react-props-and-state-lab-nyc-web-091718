import React from 'react'

class Filters extends React.Component {
  onChange = (event) => {
    this.props.onChangeType(event.target.value)
  }

  onClick = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.onChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
