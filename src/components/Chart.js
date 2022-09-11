import React from 'react'
import './calculator.css';

import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core/styles';



export default function Chart({parentToChild}) {
    const theme = useTheme()

    const yoyReturnObj = {};
    let data = [];

    Object.values(parentToChild).forEach((element, index) => {
        yoyReturnObj['key' + index] = element;
    });
    let years = 0;
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(yoyReturnObj)) {
        years++;
        data.push({
            key: value,
            'years': years
                    });
    }
    
 
    // data.push(yoyReturnObj);

    return (
    <React.Fragment>

      <ResponsiveContainer >
            <LineChart 
            data={data}
            margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
            }}
            >
            <XAxis dataKey="years"  />
            <YAxis stroke={theme.palette.text.secondary}>
                <Label
                angle={270}
                            position="left"
                            font-size="0.7em"
                >
                </Label>
            </YAxis>
            <Line type="monotone" dataKey="key" stroke={theme.palette.primary.main} dot={false} />
            </LineChart>
            </ResponsiveContainer>
    </React.Fragment>
            
  )
}

        