import React, { useEffect, useState } from 'react';
import { Bar as Barras } from 'react-chartjs-2';

export const Bar = ({data}) => {

    const [Data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Votaciones INJU',
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: []
            }
        ]
    })

    useEffect( () => {

        const newData = {
            labels: data.labels,
            datasets: [
                {
                    label: 'Votaciones INJU',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: data.votes
                }
            ]
        }

        setData(newData);
    }, [data] )

    return (
        <Barras
          data={Data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
    )
}
