import React from 'react'
import './CardGroup.css'

class CardGroup extends React.Component {
  render() {
    return (
      <div className="CardGroup">
        {this.props.children}
      </div>
    )
  }
}

export default CardGroup
