import React from 'react'



export default function List() {
   const obj =[{
    name:"saving",
    color:"#f9c74f"
   }]
    
    

    //if(isFetching){
       // Transactions = <div>Fetching</div>;
    //}else if(isSuccess){
    //}else if(isError){
       // Transactions = <div>Error</div>
    //}

   

  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className='py-4 font-bold text-xl'>History</h1>
        {obj.map((v, i) => <Transaction key={i} data={v} ></Transaction>)}
    </div>
  )
  }

function Transaction({ category }){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight : `8px solid ${category.color ??  "#e5e5e5"}`}}>
            <button className='px-3' ></button>            
            <span className='block w-full'>{category.type ?? ''}</span>
        </div>
        
    )
}
