// /Components/Like/Like.js

import React,{Component} from 'react';

class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // ******************************************
	increment(amount) {
		const newValue = this.state.count + amount
    this.setState({ count: newValue })
  }
  // ******************************************
  render(){
    return (
      <div className="Like">
        <button type="button"
					onClick={() => {
						if (this.state.count > this.props.min) { 
							this.increment(-1)
						}
					}}
				>👎</button>
				
				{this.state.count}

				<button type="button"
					onClick={() => { this.increment(1)
					}}
				>👍</button>
      </div>     
    )
  }
}

export default Like