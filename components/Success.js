import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component{

    render(){
        return (
            <MuiThemeProvider>
                {/* React.Fragment acts as a fake dom element */}
                <React.Fragment>
                    <AppBar title = "Success" />
                        <h1>Thank you for your submission</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success