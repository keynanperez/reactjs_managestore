import React from 'react'
import { useSelector } from 'react-redux';

const Purchases=()=> {
  const storeData = useSelector(state => state)

  return (
    <div>Purchases</div>
  )
}
export default Purchases;
