import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/not_found.png';

export const NotFoundPage = ({ location }) => (
   <div>
      <h2>No match found for <code>{location.pathname}</code></h2>
      <img src={PageNotFound} alt="Not Found"  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
   </div>
);