import React, { Component } from 'react';

import PropTypes from 'prop-types';

// For Better Style handling



// Routing Link Element
import { Link, Redirect } from 'react-router-dom';

import Layout from "../components/Layout"


// Custom Component for Login
export class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    
    // Starting the state object into the variable state
    state = {
        username: "",
        password: "",
    }

    // Submit Function to send the registration info to the backend uri
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };
    
    // Update the components with the state values as the user digits into the textfields
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    
    

    // Rendering JSX component
    render() {

        

        if(this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
    
        // Destructuring the state into the variables needed for the input values
        const { username,  password } = this.state;
        
        return (
            <Layout>
            <div className="container-login-out">
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5" style={{boxShadow: '0px 6px 15px 0px rgba(0,0,0,0.13)', borderRadius: 40, border: '1px solid rgba(0, 0, 0, 0)'}}>
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="username" onChange={this.onChange} value={username}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.onChange} value={password} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" style={{"margin": "5px"}}>OK</button>
                        </div>
                        <p><span style={{fontSize: 11, color: "#c1c1c1"}}>Não tem usuário??</span> <Link to="/register">Registre</Link></p>
                    </form>
                </div>
            </div>
            </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


// Default export of the component
export default Login;
