import { useNavigate } from "react-router-dom"

const BookingConfirmation = () => {
    const nav = useNavigate();

    return (
        <div id='bookingConf'>
            <h1>
                Booking Successfull!
            </h1>
            <button onClick={() => nav('/')}>← Back Home</button>
        </div>
    )
}

export default BookingConfirmation