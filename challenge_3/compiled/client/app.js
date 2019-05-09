var _this = this;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadForm: 1
    };
  }
  // TODO: implement state of forms to appear
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Checkout, { visible: this.state })
    );
  }
}

const Checkout = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { type: 'button' },
      'Checkout'
    ),
    React.createElement(F1, { visible: _this.props.state }),
    React.createElement(F2, { visible: true }),
    React.createElement(F3, null)
  );
};

const F1 = props => {
  // F1 collects name, email, and password for account creation.
  return React.createElement(
    'div',
    { className: 'form' },
    React.createElement(
      'form',
      null,
      React.createElement(
        'h2',
        null,
        'Create account'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'name' },
          'Enter name: '
        ),
        React.createElement('input', { type: 'name', name: 'name', id: 'name', placeholder: 'Enter name' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'email' },
          'Enter email: '
        ),
        React.createElement('input', { type: 'email', name: 'email', id: 'email', placeholder: 'Enter email' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'password' },
          'Enter password: '
        ),
        React.createElement('input', { type: 'password', name: 'password', id: 'password', placeholder: 'Enter password' })
      )
    ),
    React.createElement(
      'button',
      { type: 'button' },
      'Next'
    )
  );
};

const F2 = props => {
  // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
  return React.createElement(
    'div',
    { className: 'form' },
    React.createElement(
      'form',
      null,
      React.createElement(
        'h2',
        null,
        'Shipping Information'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'address_line_1' },
          'Address Line 1: '
        ),
        React.createElement('input', { type: 'text', name: 'address_line_1', id: 'address_line_1', placeholder: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'address_line_2' },
          'Address Line 2: '
        ),
        React.createElement('input', { type: 'text', name: 'address_line_2', id: 'address_line_2', placeholder: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'city' },
          'City: '
        ),
        React.createElement('input', { type: 'text', name: 'city', id: 'city', placeholder: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'state' },
          'State: '
        ),
        React.createElement('input', { type: 'text', name: 'state', id: 'state', placeholder: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'zip_code' },
          'Zip Code: '
        ),
        React.createElement('input', { type: 'text', name: 'zip_code', id: 'zip_code', placeholder: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'phone_number' },
          'Phone Number: '
        ),
        React.createElement('input', { type: 'text', name: 'phone_number', id: 'phone_number', placeholder: '' })
      )
    ),
    React.createElement(
      'button',
      { type: 'button' },
      'Next'
    )
  );
};

const F3 = props => {
  // F3 collects credit card #, expiry date, CVV, and billing zip code.
  return React.createElement(
    'div',
    { className: 'form' },
    React.createElement(
      'form',
      null,
      React.createElement(
        'h2',
        null,
        'Payment Information'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'credict_card_num' },
          'Credit Card Number: '
        ),
        React.createElement('input', { type: 'number' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'expiry_date' },
          'Expiration date: '
        ),
        React.createElement('input', { type: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          'CVV: '
        ),
        React.createElement('input', { type: '' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          'Billing Zip Code'
        ),
        React.createElement('input', { type: '' })
      )
    ),
    React.createElement(
      'button',
      { type: 'button' },
      'Next'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibG9hZEZvcm0iLCJyZW5kZXIiLCJDaGVja291dCIsIkYxIiwiRjIiLCJGMyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsS0FBYjtBQUdEO0FBQ0Q7QUFDQUMsV0FBUztBQUNQLFdBQVE7QUFBQTtBQUFBO0FBQ04sMEJBQUMsUUFBRCxJQUFVLFNBQVMsS0FBS0YsS0FBeEI7QUFETSxLQUFSO0FBR0Q7QUFaK0I7O0FBZWxDLE1BQU1HLFdBQVlKLEtBQUQsSUFBVztBQUMxQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsS0FERjtBQUVFLHdCQUFDLEVBQUQsSUFBSSxTQUFTLE1BQUtBLEtBQUwsQ0FBV0MsS0FBeEIsR0FGRjtBQUdFLHdCQUFDLEVBQUQsSUFBSSxhQUFKLEdBSEY7QUFJRSx3QkFBQyxFQUFEO0FBSkYsR0FERjtBQVFELENBVEQ7O0FBV0EsTUFBTUksS0FBTUwsS0FBRCxJQUFXO0FBQ3BCO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREE7QUFFQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLFNBREY7QUFFRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixJQUFHLE1BQWxDLEVBQXlDLGFBQVksWUFBckQ7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QUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLHVDQUFPLE1BQUssRUFBWjtBQUZGO0FBZEYsS0FERjtBQW9CRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBcEJGLEdBREY7QUF5QkQsQ0EzQkQ7O0FBNkJBUSxTQUFTTCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJNLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZEZvcm06IDFcbiAgICB9XG4gIH1cbiAgLy8gVE9ETzogaW1wbGVtZW50IHN0YXRlIG9mIGZvcm1zIHRvIGFwcGVhclxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPENoZWNrb3V0IHZpc2libGU9e3RoaXMuc3RhdGV9Lz5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmNvbnN0IENoZWNrb3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPEYxIHZpc2libGU9e3RoaXMucHJvcHMuc3RhdGV9Lz5cbiAgICAgIDxGMiB2aXNpYmxlLz5cbiAgICAgIDxGMyAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEYxID0gKHByb3BzKSA9PiB7XG4gIC8vIEYxIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0nPlxuICAgICAgPGZvcm0gPlxuICAgICAgPGgyPkNyZWF0ZSBhY2NvdW50PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5FbnRlciBuYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW50ZXIgZW1haWw6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+RW50ZXIgcGFzc3dvcmQ6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRjIgPSAocHJvcHMpID0+IHtcbiAgLy8gRjIgY29sbGVjdHMgc2hpcCB0byBhZGRyZXNzIChsaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyLlxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtJz5cbiAgICAgIDxmb3JtID5cbiAgICAgIDxoMj5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NfbGluZV8xXCI+QWRkcmVzcyBMaW5lIDE6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzX2xpbmVfMVwiIGlkPVwiYWRkcmVzc19saW5lXzFcIiBwbGFjZWhvbGRlcj1cIlwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc19saW5lXzJcIj5BZGRyZXNzIExpbmUgMjogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJhZGRyZXNzX2xpbmVfMlwiIGlkPVwiYWRkcmVzc19saW5lXzJcIiBwbGFjZWhvbGRlcj1cIlwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPkNpdHk6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lPVwiY2l0eVwiIGlkPVwiY2l0eVwiIHBsYWNlaG9sZGVyPVwiXCI+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0ZVwiPlN0YXRlOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZT1cInN0YXRlXCIgaWQ9XCJzdGF0ZVwiIHBsYWNlaG9sZGVyPVwiXCI+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ6aXBfY29kZVwiPlppcCBDb2RlOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZT1cInppcF9jb2RlXCIgaWQ9XCJ6aXBfY29kZVwiIHBsYWNlaG9sZGVyPVwiXCI+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZV9udW1iZXJcIj5QaG9uZSBOdW1iZXI6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lPVwicGhvbmVfbnVtYmVyXCIgaWQ9XCJwaG9uZV9udW1iZXJcIiBwbGFjZWhvbGRlcj1cIlwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRjMgPSAocHJvcHMpID0+IHtcbiAgLy8gRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0nPlxuICAgICAgPGZvcm0gPlxuICAgICAgICA8aDI+UGF5bWVudCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjcmVkaWN0X2NhcmRfbnVtXCI+Q3JlZGl0IENhcmQgTnVtYmVyOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCI+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleHBpcnlfZGF0ZVwiPkV4cGlyYXRpb24gZGF0ZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIlwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5DVlY6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJcIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+QmlsbGluZyBaaXAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJcIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbiAgXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4iXX0=