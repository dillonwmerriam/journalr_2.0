import Header from '../Components/Header/Header';
import Entries from '../Components/Entries/Entries';
import './Home.scss';

export default function Home() {
     return (
      <div className="Home">
        <div className="sections">
          <Header />
          <Entries />
        </div>
      </div>
     )
   }