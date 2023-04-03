import { useParams, useLocation } from 'react-router-dom'

function Appliances( props) {
  let location =useLocation()
  let params = useParams()
  console.log(location.state.item); 
  return (
    <div className='applicances'>
      <h1>Appliances</h1>
      </div>
  )
}

export default Appliances