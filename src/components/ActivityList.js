import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Activity } from './Activity';

export const ActivityList = () => {
  
  const {activities} = useContext(GlobalContext);

  return (
    <>
        <h3>Activity List</h3>

        <ul id="list" className="list">

          {activities.map(activity => (<Activity key = {activity.id} activity={activity}/>) )}
        </ul>
    </>     
  )
}
