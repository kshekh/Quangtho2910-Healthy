import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function DaughnutChart() {
    const canvas = useRef();
      
      useEffect(() => {
        const ctx:any = canvas.current;
       
    
        let chartStatus = Chart.getChart('daughnutChart');
          if (chartStatus != undefined) {
            chartStatus.destroy();
        }
   
        
        const datasets = [{
          borderWidth: [0,0],
             backgroundColor: ["#fff", "transparent"],
             data: [75,25],
             borderRadius: 1000
        }];
        const chart = new Chart(ctx, {
         type: 'doughnut',
       data: { datasets: datasets },
       options: {
        responsive: true,
         radius:'100%',
         tooltip:false,
         cutoutPercentage: 10,
         cutout:92,
         title: {
           display: true,
           text: 'Predicted world population (millions) in 2050'
         },
         elements: {
          arc: {
            roundCorners: 0,
            borderWidth: 0
          },
          center: {
            maxText: "100%",
            text: `${datasets[0].data[0]}%`,
            fontColor: "#646464",
            fontFamily: "Roboto",
            fontStyle: "normal",
            minFontSize: 20,
            maxFontSize: 90
          },
          centerSub: {
            text: `${datasets[0].data[1]} is the remainder.`,
            fontColor: "#a6a6a6",
            minFontSize: 10,
            maxFontSize: 25
          }
       },
       },
       
        });
      }, []);   
     
   
     
     return (
        <canvas id="daughnutChart" ref={canvas} height="350" width="200" className='max-w-full'></canvas>    
        )
    }
    