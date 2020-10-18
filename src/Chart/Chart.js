import React from 'react';

import { Pie } from "react-chartjs-2";
import Hero from '../Hero/Hero';

const data = {
    title: {
        text: "Chart"
    },
  labels: ["Rent", "Eat Out", "Grocery"],
  datasets: [
    {
      data: [33, 53, 85],
      fill: true,
      backgroundColor: [ '#32a852', '#c4123b', '#1120bf' ]
    }
  ]
};


function Chart() {
    return (
        <div class='Hero'>
             <h1>Chart</h1>
            <div class='chrt'>
       
    <Pie data={data} />
  </div></div>
    );
  }
  
  export default Chart;