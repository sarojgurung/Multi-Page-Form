import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component{

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
        const {values: {firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                {/* React.Fragment acts as a fake dom element */}
                <React.Fragment>
                    <AppBar title = "Confirm User Data" />

                    <List>
                        <ListItem 
                            primaryText = " First Name "
                            secondaryText = { firstName }
                        />
                        <ListItem 
                            primaryText = " Last Name "
                            secondaryText = { lastName }
                        />
                        <ListItem 
                            primaryText = " Email "
                            secondaryText = { email }
                        />
                        <ListItem 
                            primaryText = " Occupation "
                            secondaryText = { occupation }
                        />
                        <ListItem 
                            primaryText = " City "
                            secondaryText = { city }
                        />
                        <ListItem 
                            primaryText = " Bio "
                            secondaryText = { bio }
                        />
                    </List>

                    {/* primary has to do with the color display */}
                    <RaisedButton 
                        label = "Confirm and Continue"
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

export default Confirm