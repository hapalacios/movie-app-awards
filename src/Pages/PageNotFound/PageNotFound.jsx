import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className="pagenotfound__container">
        <div className="pagenotfound">
          <h2 className="pagenotfound__title">Page Not Found</h2> 
          <p className="pagenotfound__text">Click on the Link below to go back to the Home Page</p>
          <p className="pagenotfound__link">
            <Link to="/">The Shoppies: Movie awards for entrepreneurs</Link></p>
        </div>
      </div>
    )
  }
}