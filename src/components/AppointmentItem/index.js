// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetials} = props
  const {id, title, date, isStarred} = appointmentDetials

  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{isStarred}</p>
    </div>
  )
}

export default AppointmentItem
