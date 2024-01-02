import Header from '../Components/Header/Header';
import Entries from '../Components/Entries/Entries';
import './Home.scss';

export default function Home() {
  var date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
     return (
      <div className="Home">
        <div className="sections">
          <Header />
          <div className="date">
            <span>{date}</span>
          </div>
          <Entries />
        </div>
      </div>
     )
   }