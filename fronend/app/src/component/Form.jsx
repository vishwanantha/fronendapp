
import { useForm } from 'react-hook-form'
import List from './List';


export default function Form() {
    const  {register,handleSubmit,resetField}=useForm()
    
   

  return (
    <div className="form max-w-sm mx-auto w-60">
        
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

        <form id='form' onSubmit={handleSubmit}>
            <div className="grid gap-3">
                <div className="input-group">
                    <input type="text" {...register('name')}  placeholder='SALLARY,
                     HOUSE, EB,RECHARGE,MOVIES,TRAVALING,SPORTS,MEDICAL'  className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-1 text-white bg-indigo-500 w-70'>TOTAL EXPENSIVE</button>
                </div>
            </div>    
        </form>
<List/>
       
    </div>
  )
}