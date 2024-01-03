// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarred} = props
  const {id, title, dateFormat, isStarred} = appointmentDetails

  const onStar = () => {
    toggleStarred(id)
  }
  const starStatus = isStarred ? 'true' : 'false'

  return (
    <div>
      <p>{title}</p>
      <p>{dateFormat}</p>
      <button type="button" onClick={onStar}>
        {starStatus}
      </button>
    </div>
  )
}

export default AppointmentItem
