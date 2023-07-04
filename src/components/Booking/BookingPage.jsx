import { useReducer } from "react"
import BookingForm from "./BookingForm"
import "./style.css"
import { fetchAPI, submitAPI } from "../../utils/api"
import { useNavigate } from "react-router-dom"

const updateTimes = (availableTimes, date) => {
    const res = fetchAPI(new Date(date));
    return res.length !== 0 ? res : availableTimes;
}

const initializeTimes = () => {
    return fetchAPI(new Date());
}


const BookingPage = () => {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes)
    const nav = useNavigate()

    const submitForm = (formData) => {
        submitAPI(formData) ? nav('success') : alert('Ooops')
    }
    return (
        <section id="bookingSection">
            <div>
                <h1>Table reservation</h1>
            </div>
            <div>
                <BookingForm submitForm={submitForm} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
            </div>
        </section>
    )
}

export default BookingPage