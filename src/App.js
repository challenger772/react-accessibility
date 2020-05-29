import React from 'react';

class OutsideClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false};
    this.toggleContainer = React.createRef();
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onOutsideClickHandle = this.onOutsideClickHandle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onOutsideClickHandle);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onOutsideClickHandle);
  }

  onOutsideClickHandle(e) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(e.target)) {
      this.setState({ isOpen: false });
    }
  }
  onClickHandle() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }
  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandle}>Select an Option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 1</li>
            <li>Option 1</li>
          </ul>
        )};
      </div>
    )
  }
}

export default OutsideClickExample;