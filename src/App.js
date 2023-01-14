import './App.css';
import { Header } from './components/Header';
import {TimeSpend} from './components/TimeSpend';
import { ProductiveFun } from './components/ProductiveFun';
import { ActivityList } from './components/ActivityList';
import { AddActivity } from './components/AddActivity';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      	<Header />
		<div className='container'>
			<TimeSpend></TimeSpend>
			<ProductiveFun></ProductiveFun>
			<ActivityList></ActivityList>
			<AddActivity></AddActivity>
		</div>
    </GlobalProvider>
  );
}

export default App;