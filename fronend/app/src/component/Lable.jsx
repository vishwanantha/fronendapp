import React from 'react'


export default function Lable() {
    
  const obj=[{
    type:"savings",
    color:"#f9c74f",
    percent:45
  }]

  return (
    <>
   {obj.map((e,i)=><LabelComponent key={i} data={e}></LabelComponent>)}
    </>
  )
}

   


function LabelComponent({ data }){
  if (!data)return<></>
    return (
        <div className="label flex justify-between">
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background: data.color??'#f9c74f'}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h4 className='font-bold'>{data.percent ??0}</h4>
        </div>
    )
}