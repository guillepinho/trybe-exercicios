import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import { addClientAction, removeClientAction } from '../redux/actions';

export class ClientsList extends Component {
  state = {
    clientName: '',
    clientAge: '',
    clientEmail: '',
    clientError: false,
    isSorted: false,
  }

  handleInput = ({ target }) => {
    this.setState({
      clientError: false,
    });
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  inputChecker = () => {
    const { createClient } = this.props;
    const { clientName, clientAge, clientEmail } = this.state;
    const values = [clientName, clientAge, clientEmail];
    const checker = values.every((input) => (input.length > 0));
    if (checker) {
      createClient({ clientName, clientAge, clientEmail });
      this.setState({
        clientName: '',
        clientAge: '',
        clientEmail: '',
      })
      return;
    }
    this.setState({
      clientError: true,
    });
  }

  adjustSort = () => {
    const { isSorted } = this.state;
    this.setState({
      isSorted: !isSorted,
    });
  }

  render() {
    const { clientReducer, loggedReducer, removeClient } = this.props;
    const { clientName, clientAge, clientEmail, clientError, isSorted } = this.state;

    let listOfUsers = [...clientReducer];
    if (isSorted) {
      listOfUsers.sort((a, b) => {
        if (a.clientName > b.clientName) {
          return 1;
        }
        if (a.clientName < b.clientName) {
          return -1;
        }
        return 0;;
      });
    }
    listOfUsers = listOfUsers.map((user, index) => {
      const { clientName, clientAge, clientEmail } = user;
      return (<div className='userdata' key={index}>
        <div className='data'>{clientName}</div>
        <div className='data'>{clientAge}</div>
        <div className='data'>{clientEmail}</div>
        <div className='data'>
          <button className="button is-danger is-small" onClick={() => removeClient(user)}>Delete</button>
        </div>
      </div>)
    });

    return (
      <div className="content-add">
        {loggedReducer ?
          (
            <div className="content-add-client">
              <label className="label login">
                Create Client
                {clientError && <p className="error-client">Incorrect input</p>}
              </label>
              <div className="client-add">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="client name" name="clientName" onChange={this.handleInput} value={clientName} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="number" placeholder="client age" name="clientAge" onChange={this.handleInput} value={clientAge} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="email" placeholder="client email" name="clientEmail" onChange={this.handleInput} value={clientEmail} />
                  </div>
                </div>
                <p className="control">
                  <button type="button" className="button is-primary" onClick={() => this.inputChecker()}>
                    Create
                  </button>
                </p>
              </div>
              <button className="button is-info is-small sort" onClick={() => this.adjustSort()}>Sort</button>
              {listOfUsers.length > 0 ?
                (
                  <div className="userlist">
                    <div className="userstitle">
                      <span>Client's Name</span>
                      <span>Client's Age</span>
                      <span>Client's Email</span>
                      <span>Control</span>
                    </div>
                    {listOfUsers}
                  </div>
                ) :
                <p>There's no client in our database.</p>}
            </div>
          )
          : <Navigate to="/notlogged" />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedReducer: state.loggedReducer,
  clientReducer: state.clientReducer,
})

const mapDispatchToProps = (dispatch) => ({
  createClient: (value) => {
    dispatch(addClientAction(value));
  },
  removeClient: (value) => {
    dispatch(removeClientAction(value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);