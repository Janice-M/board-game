
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

//board restart to the initial state

handleBoardrestart = () => {
    this.setState({
        boxes: Array(9).fill(null),
        history: [],
        xIsNext: true
    })

}

render() 
{
    // Get winner (if there is any)
    const winner = utilis.findWinner(this.state.boxes)

    //are dem boxes all filled

    const isFilled = utilis.areAllBoxesClicked(this.state.boxes)

    // status message

    let status 
        if (winner ){
            //status message for when there is a winner on the tictactoe game

            status = 'The Winner is : ${winner}!'

            //push data about the winner into the database 
            this.storage.update(['${winner} won !!!!'])
        }
        else if (!winner && isFilled){
           // game drawn 
           status ='Game drawn suckers!'
           //push data about drawn game to data base
           this.storage.update (['game drawn'])
        }
        else {
            // if there is no winner and the game is not drawn ask the next palyer to make a move

            
            status = "It is ${(this.state.xIsnNext ? 'x' : 'o')}'s turn. "

    }

    return (
        
        /*link to score board */
        <link to ="/" className="board-link">Go Back to ScoreBoard habibi</link>

    )


}