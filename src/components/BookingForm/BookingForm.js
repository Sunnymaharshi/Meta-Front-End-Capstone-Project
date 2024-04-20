import { useState } from 'react';
function BookingForm() {
    const [data, setData] = useState({
        res_date:"",
        res_time:'',
        number:'',
        occasion:''
    });
    const [availableTimes,setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(data);
    }
    return (
        <form style="display: grid; max-width: 200px; gap: 20px" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res_date" name='date' value={data.res_date} onChange={handleChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " name='res_time' value={data.res_time} onChange={handleChange}>
                {availableTimes.map((time) => {<li key={time}>{time}</li>})}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={data.number} onChange={handleChange} placeholder="1" min="1" max="10" id="guests" name='number'/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={data.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
     </form>
    );
  }
export default BookingForm;