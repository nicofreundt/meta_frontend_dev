import { useState } from "react"

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
    const [occasions] = useState(['Birthday', 'Anniversary'])
    const [date, setDate] = useState(new Date())
    const [number, setNumber] = useState(1)
    const [time, setTime] = useState();
    const [occasion, setOccasion] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const jsonForm = Object.fromEntries(formData.entries());
        submitForm(jsonForm)
    }

    return (
        <form method="POST" onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date" id="dateLabel">Choose date</label>
            <input aria-labelledby="dateLabel" name="date" required value={date} onChange={(e) => { setDate(e.currentTarget.value); setAvailableTimes(e.currentTarget.value) }} type="date" id="res-date" />
            <label htmlFor="res-time" id="timeLabel">Choose time</label>
            <select aria-labelledby="timeLabel" name="time" value={time} onChange={(e) => setTime(e.currentTarget.value)} id="res-time">
                {availableTimes.map((time, index) => <option data-testid="booking-time-option" key={index}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input name="number" required value={number} onChange={(e) => setNumber(e.currentTarget.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" value={occasion} onChange={(e) => setOccasion(e.currentTarget.value)} id="occasion">
                {occasions.map((occ, index) => <option data-testid="booking-occasion-option" key={index}>{occ}</option>)}
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm