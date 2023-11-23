import './App.css'
import Graph from './component/Graph';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 

  return (
    <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-400">
      <h1 className="text-4xl py-2 mb-7 bg-slate-500 text-white rounded">PeetyCash </h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-0 gap-3">
          {/* Chart */}
        <Graph></Graph>
      
      </div>
    </div>
  </div>
   
 
  )
}

export default App
