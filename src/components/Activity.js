import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Activity = ({activity}) => {

    const {deleteActivity} = useContext(GlobalContext);

    const sign = activity.category;

  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
        {activity.text} 
        <span>{activity.hours}h {activity.minutes}m 
        </span>
        <button onClick={() => deleteActivity(activity.id)} className="delete-btn">x</button>
     </li>
  )
}
