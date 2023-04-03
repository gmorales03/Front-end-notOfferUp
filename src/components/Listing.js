import { useParams, useLocation } from 'react-router-dom'

export default function Listing(props) {
  let params = useParams(); 
  let location = useLocation(); 
  return( 
    <div className='pageDetail'>
      <img src={location.state.image}/>
      <h1>{location.state.item}</h1>
      <h3>{location.state.price}</h3>
      <h3>{location.state.description}</h3>
      <h3>{location.state.posted_at}</h3>
    </div>
  )
}
