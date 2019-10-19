import React from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends React.Component {

    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //proceed to next step
    nextStep = () =>{
        //destructuring the step from state and putting into a variable
        //so basically destructuring is taking out the variable from the state so that it can be used in this function
        //think of it as something that has been passed down from "state" of this class
        //and because these are inside function, these are functional destructuring
        const {step} = this.state; 
        this.setState({
            step: step + 1
        });
    }

    //proceed to prev step
    prevStep = () =>{
        const { step } = this.state; //destructuring again
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    //here handleChange will have the value "input" and e is the event handler
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render(){
        // class level destructuring the state
        const { step } = this.state; //destructuring again
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        switch (step){
            case 1:
                return(
                    <FormUserDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 3: 
                return(
                    <Confirm
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 4:
                return <Success />
        }
    }
}

export default UserForm;