import React from 'react';

const styles = {
  font: {
    fontSize: "20vh",
    fontWeight: "500"
  }
}

export default class CurrentTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        currentTime : new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', hour12: false})
      })
    },1000)
  }

  render() {
    return(
      <div  style={styles.font}>{this.state.currentTime}</div>
    )
  }
}
