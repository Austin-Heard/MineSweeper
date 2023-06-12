import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'

const MineSweeper = () => {

    const [mineTracker, setmineTracker] = useState([]);
    
    const gridCreator = () => {

        return (
            <>
            {mineTracker.map((rows => {
                return(
                    rows.map((columns => {
                        if (columns.isMine === true){
                            return(
                                <Grid item xs={1}>1</Grid>
                            );
                        } else {
                            return(
                                <Grid item xs={1}>0</Grid>
                            );
                        };
                    }))
                )
            }))}
            </>
        );
    };

    //Sets the mines on page load
    useEffect(() => {
        let tempMatrix = [];
        let row = 0;
        let mines = 10;
        let counter = 0;

        while(counter < 100){
            let mineObject = {
                wasClicked: false,
                isMine: false,
                isFlagged: false,
                adjacentMineCount: 0
            }

            if (counter % 10 === 0) {
                row += 1;
                tempMatrix.push([]);
            };

            tempMatrix[row-1].push(mineObject);
            counter++;
        }

        while(mines > 0){
            let getRandomNoMine = Math.floor(Math.random() * 10);
            let getRandomRow = Math.floor(Math.random() * 10);
            if(tempMatrix[getRandomRow][getRandomNoMine].isMine === false){
                tempMatrix[getRandomRow][getRandomNoMine].isMine = true;
                mines = mines - 1;
            }
        };

        setmineTracker(tempMatrix);
    }, [])

    useEffect(() => {
        gridCreator();
    },[mineTracker])

    return (
        <>
            <Grid container>
                {console.log(mineTracker)}
                {gridCreator()}
            </Grid>
        </>
    );
};

export default MineSweeper;