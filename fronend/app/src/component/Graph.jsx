import React from 'react'
import { ArcElement, Chart } from 'chart.js'
import {  Doughnut} from 'react-chartjs-2'
import Lable from './Lable';
import Form from './Form';

Chart.register(ArcElement)

    export default function Graph() {

  

 
  const config={
    data:{
        datasets: [{
         
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
             border:19,
             spacing:10
          }]
    },
    Options:{
    
    cutout:100
    }

  }
  
  
  return (
    <div className="flex justify-content mx-auto">
    <div className="item">
        <div className="chart relative">
    <Doughnut {...config}></Doughnut>
        <h3 className='mb-4 font-bold title'>Total
                    <span className='block text-3xl text-blue-800'>0</span>
                </h3>
       </div> 
       <div className="flex flex-col py-9 gap-4">
                {/* Labels */}
            <Lable></Lable>
             <Form></Form>
            </div> 
        
    </div>
</div>
  )
}


