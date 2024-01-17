const container = document.getElementById("react-container")

class ReactContainer extends ReactContainer.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning!`,
      React.createElement(`div`,null, `Let's rock and roll`));
    }
}

ReactDOM.render(React.createElement(ReactContainer),container);