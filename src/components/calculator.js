import React, {useRef} from 'react'
import Box from '@mui/material/Box';
import { TextField, Button, Stack } from '@mui/material';
import './calculator.css';
import Lista from './Lista';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import Chart from './Chart';



export default function Calculator() {

        const [data, setData] = useState('');
      

        const valueOfYears = useRef('')
        const valueOfStartCapital = useRef('')
        const valueOfContribution = useRef('')
        const valueOfPercent = useRef('')

        
        const calculateCompoundInterest = () => {
                let years = parseInt(valueOfYears.current.value) - 1
                let startCapital = parseInt(valueOfStartCapital.current.value)
                let contribution = parseInt(valueOfContribution.current.value)
                let percent = parseInt(valueOfPercent.current.value)
                let array = []
                
                
                let summe =Math.round( startCapital + (startCapital * (percent / 100)) + contribution);
                array.push(summe)
                let element = 0;
                for (let index = 0; index < years; index++) {
                        
                        element = Math.round(array[index] + (array[index] * (percent / 100)) + contribution);
                        array.push(element);
                        
                }
                
                
                const parentToChild = (array) => {
                        setData(array);
                }
                parentToChild(array)

        }
        
        const totalInvested = parseInt(valueOfStartCapital.current.value) + ((parseInt(valueOfYears.current.value) - 1) * parseInt(valueOfContribution.current.value));
        console.log(totalInvested);
        console.log(data);
        const lastElement = data[data.length - 1];
    

        return (
        <div id="list">
        <Box class="box" >
                <Container class="container">
                        Investing Calculator
                        <TextField
                        inputRef={valueOfYears}
                        label="Years to calculate"
                        type="text"
                        variant="filled"
                        />
                        <TextField
                        inputRef={valueOfStartCapital}
                        id="filled-search"
                        label="Start Capital"
                        type="search"
                        variant="filled"
                        />
                        <TextField
                        inputRef={valueOfContribution}
                        id="filled-search"
                        label="Yearly contribution"
                        type="search"
                        variant="filled"
                        />
                        <TextField
                        inputRef={valueOfPercent}
                        id="filled-search"
                        label="Yearly return %"
                        type="search"
                        variant="filled"
                        required="true"
                        />
                        <Stack class="stack-btn">
                                <Button    onClick={() => {
                                                        calculateCompoundInterest();
                                                        }}  variant="contained">Calculate</Button>
                        </Stack>
                        </Container>
                        <Container class="container list">
                                <Grid item xs={12} md={6}>
                                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                        Text only
                                        </Typography>
                                        
                                        <Lista class="list" parentToChild={data} />
                        </Grid>
                </Container>
                        
        </Box>
                        <Paper class="chart">
                                <Chart parentToChild={data}></Chart>
                        </Paper>
                        {(lastElement) && (
                        <Container class=" msg">
                        <Paper class="msg">
                                For {parseInt(valueOfYears.current.value) } Years, You have invested {totalInvested} €.
                                At the end of {parseInt(valueOfYears.current.value)} Years you have {lastElement} €,
                                You have made a profit of {lastElement - totalInvested} €.
                        </Paper>
                        </Container>
                        )}
        </div>
     )
}
                        
                      

        
 




















