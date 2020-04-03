// component for individual boxes in the tic tac toe game

import React from 'react';

// THE  BOX COMPONENT

export const Box =(props) => {
    return (
        <button className = "board_box" onClick={props.onClick}>
            {props.value}
        </button>


    )
}