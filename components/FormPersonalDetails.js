import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component{

    continue = e =>{
        e.preventDefault();
        //we have passed the props from the render of userfrom.js
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        //we have passed the props from the render of userfrom.js
        this.props.prevStep();
    }

    render(){
        const {values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                {/* React.Fragment acts as a fake dom element */}
                <React.Fragment>
                    <AppBar title = "Enter Personal Details" />

                    {/* handleChange looks input on which TextField has been changed */}
                    <TextField hintText = "Enter Your Occupation" 
                        floatingLabelText = "Occupation" 
                        onChange = { handleChange('occupation') } 
                        defaultValue = {values.occupation}/>
                    <br/>

                    <TextField 
                        hintText = "Enter Your City" 
                        floatingLabelText = "City" 
                        onChange = { handleChange('city') } 
                        defaultValue = {values.city}
                    />

                    <br/>
                    <TextField 
                        hintText = "Enter Your Bio" 
                        floatingLabelText = "Bio" 
                        onChange = { handleChange('bio') } 
                        defaultValue = {values.bio}
                    />
                    <br/>

                    {/* primary has to do with the color display */}
                    <RaisedButton 
                        label = "Continue"
                        primary = { true }
                        styles = { styles.button }
                        onClick = { this.continue }
                    />

                    <RaisedButton 
                        label = "Back"
                        primary = { false }
                        styles = { styles.button }
                        onClick = { this.back }
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails