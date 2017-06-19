import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import classnames from 'classnames';
import styles from './static_map_card.module.scss';


function toQueryString(paramsObject) {
  return Object
    .keys(paramsObject)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
    .join('&');
}

function mapUrl(mapOptions) {
  const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap?';

  if (!mapOptions.apiKey) return baseUrl;

  const mapOptionsString = toQueryString(omit(mapOptions, 'apiKey'));
  const mapStringWithKey = `${mapOptionsString}&key=${encodeURIComponent(mapOptions.apiKey)}`;

  return baseUrl + mapStringWithKey;
}

function StaticMapCard(props) {
  const {
    apiKey,
    center,
    zoom,
    size,
    label,
    subheader,
    markers,
    className,
  } = props;

  const mapImageSrc = mapUrl({ apiKey, center, zoom, size, markers });

  return (
    <div className={classnames(styles['static-map-card'], className)}>
      <div className={classnames(styles['head'])}>
        <h3 className={classnames(styles['title'])}>
          <span className={classnames(styles['label'])}>{ label }</span>
          { !!subheader && subheader }
        </h3>
      </div>
      <div className={classnames(styles['map'])} style={{ backgroundImage: `url(${mapImageSrc})` }} />
    </div>
  );
}


StaticMapCard.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * [Google Maps Api](https://developers.google.com/maps/documentation/static-maps/intro#Locations) api key.
   */
  apiKey: PropTypes.string.isRequired,
  /**
   * Location which the static map will be centered around.
- See [Google Maps Api](https://developers.google.com/maps/documentation/static-maps/intro#Locations) for more details
   */
  center: PropTypes.string,
  /**
   *  Zoom level
- 1: World
- 5: Landmass/continent
- 10: City
- 15: Streets (default)
- 20: Buildings
   */
  zoom: PropTypes.number,
  /**
   * widthxheight of the map image which gets applied as a background. (height is set to 200px)
   */
  size: PropTypes.string,
  /**
   * Header label that describes the map.
   */
  label: PropTypes.string,
  /**
   * Any markers (map pins) - see [Google Maps Api](https://developers.google.com/maps/documentation/static-maps/intro#Markers) for formatting instructions
   */
  markers: PropTypes.string,
  /**
   * Text to go beneath the label
   */
  subheader: PropTypes.string,
};

StaticMapCard.defaultProps = {
  // Place any default props here.
  center: '10003',
  size: '400x400',
  zoom: 15,
};

export default StaticMapCard;
