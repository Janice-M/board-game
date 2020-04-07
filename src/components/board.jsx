
// this is the board that will have all the individual boxes
//src/componentts/ board.jsx


// importations dzaddy 

import React from 'react';
import {link } from 'react-router-dom';

//imporrt storage for all the marked boxes here too

import  { Storage} from ' ./../storage/storage';

// importing the box component

import { Box } from './board-box';

// importing utility functions

import * as utils from '../utils/functions';

//Creaate Board component

export class Board extends React.Component{
    constructor(props){
        super(props)

        //initialize state component 
            this.state={
                boxes:Array(9).fill(null),
                history:[],
                xIsNext: true
            }
        }

}
// Create instance for Storage object 

storage = new Storage()

// Handle click on boxes on the board

handleBoxClick(index)
    {

    // get current state of boxes
    const boxes = this.state.boxes.slice()

    // get history of boxes

    let history = this.state.history

    // stop the game if it contains winning combination

    if(utils.findWinner(boxes)|| boxes[index]){
        return
    }

    //stop the game if all the boxes are filled
    if (utils.areAllBoxesClicked(boxes)===true){
        return
    }

    // Mark the box either as 'x' or 'o'

    boxes[index]=this.state.xIsNext? 'x' : 'o'

    // add move to game history 
    history.push(this.state.xIsNext ? 'x' :'0')

    //update component state with new data

    this.setState({

        boxes: boxes,
        history: history,
        xIsNext: !this.state.xIsNext
    })
}