// src/components/scoreboard.jsx
///
import React from 'react';
import { Link } from 'react-router-dom';

// Import Storage object
import { Storage } from './../storage/storage';

// create scoreboard component 

export class Scoreboard component extends Reach.component {
        state = {
            scoreboard:[]
        }

        //load data from our local storage to upgrade scores
            let storage = await new Storage ().getData()
            this.setState({
                scoreboard: storage
            })
}
