import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddActivity = () => {
    const [text, setText] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [category, setCategory] = useState('');

    const {addActivity} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newActivity = {
            id : Math.floor(Math.random() * 100000000),
            text,
            hours: +hours,
            minutes: +minutes,
            category
        }

        addActivity(newActivity);
    }

  return (
    <>
        <h3>Add Activity</h3>

        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Activity</label>
                <input type="text" value ={text} onChange = {(e) => setText(e.target.value)} id="text" placeholder="Activity Name..." />
            </div>

            <div className="form-control">

                <label htmlFor="hours"> <div text-color='white'>Hours</div>
                </label>
                <input type="number" value ={hours} onChange = {(e) => setHours(e.target.value)} placeholder="Enter hours..." />

                <label htmlFor="minutes">Minutes
                </label>
                <input type="number" value ={minutes} onChange = {(e) => setMinutes(e.target.value)} placeholder="Enter minutes..." />

                <label htmlFor="category">Category<br />
                    Productive Activity (+) | Fun Activity (-)
                </label>
                <input type="text" value ={category} onChange = {(e) => setCategory(e.target.value)} placeholder="Enter category..." />
            </div>
            <button className="btn">Add Activity</button>
        </form>
    </>
    
  )
}
