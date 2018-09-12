import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Hyperlink } from '@edx/paragon';
import './HeroBanner.scss';


const ViewOrPurchaseButton = props => (
  props.authorized ? (
    <Link to={{ pathname: `/${props.journalAboutId}` }} className="btn btn-success">View Now</Link>
  ) : (
    <Hyperlink destination={props.purchaseUrl} className="btn btn-success" content={`Purchase Access ($${props.price})`} />
  )
);

const HeroBanner = props => (
  <div className="hero" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.bannerImageUrl})` }} >
    <h1>{props.title}</h1>
    {
      props.description &&
        <h2>{props.description}</h2>
    }
    {
      props.showButton &&
        <div>
          <ViewOrPurchaseButton
            authorized={props.authorized}
            journalAboutId={props.journalAboutId}
            purchaseUrl={props.purchaseUrl}
            price={props.price}
          />
        </div>
    }
  </div>
);

ViewOrPurchaseButton.defaultProps = {
  authorized: false,
  journalAboutId: 0,
  purchaseUrl: '',
  price: '',
};

ViewOrPurchaseButton.propTypes = {
  authorized: PropTypes.bool,
  journalAboutId: PropTypes.number,
  purchaseUrl: PropTypes.string,
  price: PropTypes.string,
};


HeroBanner.defaultProps = {
  title: '',
  description: '',
  bannerImageUrl: '',
  showButton: false,
  authorized: false,
  journalAboutId: 0,
  purchaseUrl: '',
  price: '',
};

HeroBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bannerImageUrl: PropTypes.string,
  showButton: PropTypes.bool,
  authorized: PropTypes.bool,
  journalAboutId: PropTypes.number,
  purchaseUrl: PropTypes.string,
  price: PropTypes.string,
};

export default HeroBanner;
