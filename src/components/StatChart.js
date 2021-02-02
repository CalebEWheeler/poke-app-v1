import React, {useEffect, useState} from "react";
import {Radar} from "react-chartjs-2";

const StatChart = (statData) => {
    const [chartData, setChartData] = useState({});

    // let chart = document.getElementById("pokeChart");
    let statLabels = [];
    let statValues = [];
    for(let stat of statData.data) {
        statLabels.push(stat[0]);
        statValues.push(stat[1])
    }

    const data = {
        labels: statLabels,
        datasets: [
            {
                label: statData.name + "'s Stats",
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                // pointHoverBackgroundColor: '#fff',
                // pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: statValues
            }
        ]
    };

    return (
        <div className={"radar-cont"}>
            <Radar data={data}/>
        </div>
    )
}

export default StatChart;