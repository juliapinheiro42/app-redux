export function addReserveRequest(id){
  return  {
        type: 'ADD_RESERVE_REQUEST',
        id
    }

} 

export function addReserveSucess(trip){
    return  {
          type: 'ADD_RESERVE_SUCCESS',
          trip
      }
  
  } 

export function removeReserve(id){
    return {
        type:'RESERVE_REMOVE',
        id
      
      }
}

export function updateAmountRequest(id, amount){
 return{
    type: 'UPDATE_AMOUNT_REQUEST',
  id,
  amount
}}
export function updateAmountSucess(id, amount){
  return{
     type: 'UPDATE_AMOUNT_SUCCESS',
   id,
   amount
 }}