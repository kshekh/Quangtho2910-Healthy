'use strict';
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function LineChart() {
    const canvas = useRef();
      
      useEffect(() => {
        const ctx = canvas.current;
       
    
        let chartStatus = Chart.getChart('lineCharts');
          if (chartStatus != undefined) {
            chartStatus.destroy();
        }
   
        
        
   
        const chart = new Chart(ctx, {
         type: 'line',
         data:{
            // x-axis label values
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
            datasets: [
              {
                label: "Chart 1",
                // y-axis data plotting values
                data: [200, 300, 1300, 520, 2000, 350,150],
                fill: false,
                borderWidth:2,
                backgroundColor: "#FFCC21",
                borderColor:'#FFCC21',
                responsive:true
              },
              {
                label: "Chart 2",
                // y-axis data plotting values
                data: [300, 500, 1500, 2220, 500, 850,2050],
                fill: false,
                borderWidth:2,
                backgroundColor: "#8FE9D0",
                borderColor:'#8FE9D0',
                responsive:true
              },
            ],
          },
       options: {
        legend: {
          display: false
      },
         responsive: true,
          
         stacked: false,
        
         scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: false,
            position: 'right',
    
            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
         
       },
       
        });
      }, []);   
     
   
     
     return (
        <canvas id="lineCharts" ref={canvas} height="300" width="550" className='max-w-full w-full' ></canvas>    
        )
    }
    