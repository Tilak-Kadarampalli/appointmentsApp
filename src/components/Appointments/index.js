// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

const masterList = []
class Appointments extends Component {
  state = {
    title: '',
    dateFormat: '',
    appointmentsList: masterList,
    starOption: false,
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, dateFormat} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      dateFormat,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      dateFormat: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    const dateInput = event.target.value
    const newDate = new Date(dateInput)
    const date = format(newDate, 'dd MMMM yyyy, EEEE')
    this.setState({dateFormat: date})
  }

  toggleStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachApp => {
        if (id === eachApp.id) {
          return {...eachApp, isStarred: !prevState.isStarred}
        }
        return eachApp
      }),
    }))
  }

  onStarred = () => {
    this.setState(prevState => ({starOption: !prevState.starOption}))
  }

  render() {
    const {title, dateFormat, starOption} = this.state
    let {appointmentsList} = this.state
    if (starOption === true) {
      appointmentsList = appointmentsList.filter(
        each => each.isStarred === true,
      )
    }

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
          <label htmlFor="dateEl">DATE</label>
          <input type="date" id="dateEl" onChange={this.onChangeDate} />
          <button type="submit">Add</button>
        </form>
        <hr />
        <h1>Appointments</h1>
        <button type="button" onClick={this.onStarred}>
          Starred
        </button>
        <ul>
          {appointmentsList.map(eachItem => (
            <AppointmentItem
              key={eachItem.id}
              toggleStarred={this.toggleStarred}
              appointmentDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments

