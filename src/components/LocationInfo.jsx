import React from "react";
import "./Styles/locationInfo.css";

const LocationInfo = ({ location }) => {
  return (
    <section className="container__localInfo">
      <div className="container__localInfo_">
        <h2>Nombre:</h2>
        <h4 className="localinfo__title"> {location?.name}</h4>
      </div>

      <div className="container__localInfo_">
        <li className="localinfo__li">
          <h2> Type:</h2>
          <h4 className="localinfo__p">{location?.type}</h4>
        </li>
      </div>
      <div className="container__localInfo_">
        <li className="localinfo__li">
          <h2>Dimension:</h2>
          <h4>{location?.dimension}</h4>
        </li>
      </div>
      <div className="container__localInfo_">
        <li className="localinfo__li">
          <h2>Population:</h2>
          <h4>{location?.residents.length}</h4>
        </li>
      </div>
    </section>
  );
};

export default LocationInfo;
