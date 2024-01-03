// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    console.log('foem submitted')

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    const date = format(event.target.value, 'dd MMMM yyyy, EEEE')
    this.setState({date})
  }

  render() {
    const {title, date, appointmentsList} = this.state
    return (
      <div>
        <h1>Add Appointment</h1>
        <form onSubmit={this.addAppointment}>
          <label htmlFor="name">TITLE</label>
          <input
            type="text"
            id="name"
            value={title}
            onChange={this.onChangeTitle}
          />
          <label htmlFor="date">DATE</label>
          <input type="date" id="date" onChange={this.onChangeDate} />
          <button type="submit">Add</button>
        </form>
        <hr />
        <h1>Appointments</h1>
        <ul>
          {appointmentsList.map(eachItem => (
            <AppointmentItem key={eachItem.id} appointmentDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
