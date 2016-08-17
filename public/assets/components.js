class GreetingContainer extends React.component {
  constructor() {
    super();

    this.state = {
      greetings: [];
    };
  }

  componentWillMount() {
    this._getGreetings();
  }

  render() {
    const greetings = this._getGreetings();
    return(
      <div className = "greetings-container">
        <h2>Greetings</h2>
        <div className="greetings-list">{greetings}</div>
      </div>
    );
  }

  _getGreeting() {
    
  }

  _createGreeting() {
    $.ajax({
      method: 'POST',
      url: '/api/greetings/${greeting.id}'
    });
  }


}





class GreetingForm extends React.component {

}
class Greeting extends React.component {

}

jQuery(function() {
  ReactDOM.render(
    <GreetingContainer />,
    document.getElementById('greeting-container')
  );
})
