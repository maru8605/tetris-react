import React from 'react';

import {createStage} from '../gameHelpers';
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

//components
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

const Tetris = () => {

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text='Score'/>
                        <Display text='Row'/>
                        <Display text='Level'/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;