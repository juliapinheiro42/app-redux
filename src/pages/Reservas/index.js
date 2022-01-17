import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './reservas.css'
import { MdDelete, MdAddShoppingCart, MdRemoveShoppingCart} from 'react-icons/md'
import {removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions';


export default function Reservas() {
  const reserves = useSelector( state => state.reserve);
 const dispatch = useDispatch();
  
function handleRemove(id){
dispatch(removeReserve(id))
}

function decrementAmount(trip){
  dispatch(updateAmountRequest(trip.id, trip.amount - 1))
}
function incrementAmount(trip){
dispatch(updateAmountRequest(trip.id, trip.amount + 1))
}

 return (
   <div>
    <h1 className='title'>Você solicitou {reserves.length} reservas</h1>
    {reserves.map(reserve => (
   <div className='reserva' key={reserve.id}>
      <img src= {reserve.image}
    alt={reserve.title}/>
    <strong>{reserve.title}</strong>
    <div className='qntd'>
      <button type='button' onClick={()=> decrementAmount(reserve)}>
      <MdRemoveShoppingCart size={22}/>
      </button>
    <input type='text' readOnly value={reserve.amount}/>
    <button type='button' onClick={()=>incrementAmount(reserve)}>
      <MdAddShoppingCart size={22}/>
      </button>
    </div>
     <button type="button" onClick={()=> handleRemove(reserve.id)}>
      <MdDelete size={24}/>
     </button>
  </div>
    ))}
    
    <footer>
      <button type='button'>Solicitar reservas</button>
    </footer>
   </div>
 );
}