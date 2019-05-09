class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadForm: 1
    }
  }
  // TODO: implement state of forms to appear
  render() {
    return (<div>
      <Checkout visible={this.state}/>
    </div>);
  }
}

const Checkout = (props) => {
  return (
    <div>
      <button type='button'>Checkout</button>
      <F1 visible={this.props.state}/>
      <F2 visible/>
      <F3 />
    </div>
  )
}

const F1 = (props) => {
  // F1 collects name, email, and password for account creation.
  return (
    <div className='form'>
      <form >
      <h2>Create account</h2>
      <div>
        <label htmlFor='name'>Enter name: </label>
        <input type="name" name="name" id="name" placeholder="Enter name"></input>
      </div>
      <div>
        <label htmlFor='email'>Enter email: </label>
        <input type="email" name="email" id="email" placeholder="Enter email"></input>
      </div>
      <div>
        <label htmlFor='password'>Enter password: </label>
        <input type="password" name="password" id="password" placeholder="Enter password"></input>
      </div>
      </form>
      <button type='button'>Next</button>
    </div>
  )
}

const F2 = (props) => {
  // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
  return (
    <div className='form'>
      <form >
      <h2>Shipping Information</h2>
      <div>
        <label htmlFor="address_line_1">Address Line 1: </label>
        <input type="text" name="address_line_1" id="address_line_1" placeholder=""></input>
      </div>
      <div>
        <label htmlFor="address_line_2">Address Line 2: </label>
        <input type="text"  name="address_line_2" id="address_line_2" placeholder=""></input>
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <input type="text"  name="city" id="city" placeholder=""></input>
      </div>
      <div>
        <label htmlFor="state">State: </label>
        <input type="text"  name="state" id="state" placeholder=""></input>
      </div>
      <div>
        <label htmlFor="zip_code">Zip Code: </label>
        <input type="text"  name="zip_code" id="zip_code" placeholder=""></input>
      </div>
      <div>
        <label htmlFor="phone_number">Phone Number: </label>
        <input type="text"  name="phone_number" id="phone_number" placeholder=""></input>
      </div>
      </form>
      <button type='button'>Next</button>
    </div>
  )
}

const F3 = (props) => {
  // F3 collects credit card #, expiry date, CVV, and billing zip code.
  return (
    <div className='form'>
      <form >
        <h2>Payment Information</h2>
        <div>
          <label htmlFor="credict_card_num">Credit Card Number: </label>
          <input type="number"></input>
        </div>
        <div>
          <label htmlFor="expiry_date">Expiration date: </label>
          <input type=""></input>
        </div>
        <div>
          <label>CVV: </label>
          <input type=""></input>
        </div>
        <div>
          <label>Billing Zip Code</label>
          <input type=""></input>
        </div>
      </form>
      <button type='button'>Next</button>
    </div>
  )
  
}

ReactDOM.render(<App />, document.getElementById('app'));

