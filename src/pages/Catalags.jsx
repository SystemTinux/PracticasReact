import { useParams } from 'react-router-dom'

function Catalags() {
  const { id } = useParams();
  
  return (
    <div>Catalags {id}</div>
  )
}

export default Catalags