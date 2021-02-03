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
                label: "",
                backgroundColor: 'rgba(160,149,217,0.4)',
                borderColor: 'rgba(160,149,217,1)',
                circular: true,
                data: statValues
            }
        ],
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    };

    return (
        <div className={"radar-cont"}>
            <Radar data={data}/>
        </div>
    )
}

export default StatChart;