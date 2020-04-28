import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export interface MainProps {
    
}
 
export interface MainState {
    
}
 
class Main extends React.Component<MainProps, MainState> {
    render() { 
        let subTitle="Connect with friends and the world around you on Facebook.";
        let photos = "See photos and updates from friends in News Feed."
        let share ="Share what's new in your life on your Timeline."
        let find = "Find more of what you're looking for with Facebook Search."
        let source = "https://images.app.goo.gl/95cp3Bbg2oZFWuJX9"
        return ( 
            <div>
                <h2>{subTitle}</h2>
        <h4>{photos}</h4>
        <h4>{share}</h4>
        <h4>{find}</h4>

            </div>
         );
    }
}
 
export default Main;
