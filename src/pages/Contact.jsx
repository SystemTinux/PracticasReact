import { useParams  } from "react-router-dom"

function Contact () {
  const { id } = useParams();

  return (
    <div>Catalags {id} </div>
  )
}
export default Contact