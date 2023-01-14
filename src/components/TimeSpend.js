import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TimeSpend = () => {

  const {activities} = useContext(GlobalContext);

  const hours = activities.map(activity => activity.hours);
  const minutes = activities.map(activity => activity.minutes);

  let sumHours = hours.reduce((acc, item) => (acc += item), 0);
  let sumMinutes = minutes.reduce((acc, item) => (acc += item), 0);
  
  const carryOverHours = Math.floor(sumMinutes / 60);
  console.log(carryOverHours, sumHours, sumMinutes);
  sumHours += carryOverHours;
  sumMinutes = sumMinutes % 60;

  const productiveActivities = activities.filter(activity => activity.category == '+');
  const funActivities = activities.filter(activity => activity.category == '-');

  let productiveActivitiesHours = productiveActivities.map(activity => activity.hours).reduce((acc, item) => (acc += item), 0);
  let productiveActivitiesMinutes = productiveActivities.map(activity => activity.minutes).reduce((acc, item) => (acc += item), 0);

  productiveActivitiesHours += Math.floor(productiveActivitiesMinutes / 60);
  productiveActivitiesMinutes = productiveActivitiesMinutes % 60;

  const totalMinutes = (sumHours * 60) + sumMinutes;
  const productiveMinutes = (productiveActivitiesHours * 60) + productiveActivitiesMinutes;

  const productivePercentage = ((productiveMinutes / totalMinutes) * 100).toFixed(2);

  return (
    <div>
        <h3>Total Time Utilized</h3>
        <h2>{sumHours}h {sumMinutes}m</h2>
        <h3>Productivity</h3>
        <h2>{productivePercentage}%</h2>
    </div>
  )
}
