class ParentDashboard extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.parent.name}'s dashboard</h1>
        <InitialSetup />
      </div>
    )
  }
}
