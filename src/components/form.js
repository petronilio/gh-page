import React, { Component } from 'react';


class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        })
    };

    render(){
        return (
            <form>
                <input name="firstName" placeholder='first Name' value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })} />
                <br />

                <input name="lastName" placeholder='last Name' value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} />
                <br />

                <input name="userName" placeholder='user Name' value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />
                <br />

                <input placeholder='email' value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                <br />

                <input placeholder='password' type='text-field' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>

            


        );



    }




}

export default Form;