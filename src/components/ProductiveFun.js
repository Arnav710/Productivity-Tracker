import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const ProductiveFun = () => {

  const {activities} = useContext(GlobalContext);

  const productiveActivities = activities.filter(activity => activity.category == '+');
  const funActivities = activities.filter(activity => activity.category == '-');

  let productiveActivitiesHours = productiveActivities.map(activity => activity.hours).reduce((acc, item) => (acc += item), 0);
  let productiveActivitiesMinutes = productiveActivities.map(activity => activity.minutes).reduce((acc, item) => (acc += item), 0);

  productiveActivitiesHours += Math.floor(productiveActivitiesMinutes / 60);
  productiveActivitiesMinutes = productiveActivitiesMinutes % 60;

  let funActivitiesHours = funActivities.map(activity => activity.hours).reduce((acc, item) => (acc += item), 0);
  let funActivitiesMinutes = funActivities.map(activity => activity.minutes).reduce((acc, item) => (acc += item), 0);

  funActivitiesHours += Math.floor(funActivitiesMinutes / 60);
  funActivitiesMinutes = funActivitiesMinutes % 60;

  return (
    <div className="fun-pro-container">
        <div>
            <h4>Productive Time</h4>
            <p className="money plus">{productiveActivitiesHours}h {productiveActivitiesMinutes}m</p>
        </div>
        <div>
            <h4>Fun Time</h4>
            <p className="money minus">{funActivitiesHours}h {funActivitiesMinutes}m</p>
        </div>
      </div>
  )
}
