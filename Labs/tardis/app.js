class App extends React.Component{
  state = {
  tardis: {
  name: 'Time and Relative Dimension in Space',
  caps: false
}
}
changeIt = (text) => {
if (this.state.tardis.caps) {
  this.setState({
    tardis: {
      name: text.toLowerCase(),
      caps: false
    }
  })
} else {
  this.setState({
    tardis: {
      name: text.toUpperCase(),
      caps: true
    }
  })
}
}

  render(){
    console.log("passing props to DivOne");
    console.log(this.state.tardis);
    console.log("passing the changeIt method as a prop below")
    console.log("inside app")
    return(
      <div id="appcomponent">
      <DivOne passingProp1 = {this.state.tardis.name} passingProp2={this.changeIt}/>
      </div>
    )
  }
}//end of class App

ReactDOM.render(
  <App />, document.getElementById('root')
);
