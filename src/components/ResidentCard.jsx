import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/ResidentCard.css";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState();

  useEffect(() => {
    axios
      .get(residentUrl)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="residentCard__container">
      <div>
        <img src={residentInfo?.image} alt="resident image" />
      </div>
      <section>
        <h3 className="residentCard__name">{residentInfo?.name} </h3>
        <ul>
          <li>
            <div className="ResidentCard__status">
              <div className={`status__circle ${residentInfo?.status}`}></div>
              <div className="status">
                <span className="ResidentCard__status__status">
                  {residentInfo?.status}</span><span className="ResidentCard__status__specie">- {residentInfo?.species}</span>
                
              </div>
            </div>
          </li>
          <li>
            <span className="ResidentCard__status__status">Last known location </span>
            <span className="ResidentCard__status__specie">{residentInfo?.location.name}</span>
          </li>
          <li>
            <span className="ResidentCard__status__status">Episodes where appears: </span>
            <span className="ResidentCard__status__specie">{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
