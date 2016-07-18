import React from 'react';


class ButtonPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    this.setState({ clicked: true });
  }

  render() {
    const { clicked } = this.state;

    return (
      <div>
        {clicked ?
          <div>
            You clicked me!
          </div>
          :
          <input type="button" value="Click me!" onClick={this.onClickMe} />
        }
      </div>
    );
  }
}

export default ButtonPage;
