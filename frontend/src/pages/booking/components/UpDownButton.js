import React from "react";
import {Button, ButtonGroup} from '@mui/material';

class UpDownButton extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
        <Button >{this.state.counter}</Button>
        <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default UpDownButton;