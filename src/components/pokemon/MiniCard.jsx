import React, { useState } from "react";
import SelectPoke from "./SelectPoke";
import { Button, Modal } from "react-bootstrap";

const MiniCard = ({ item }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="col col-sm-4 p-1" key={item.name}>
      <div className="card bg-primary text-light" style={{ width: "18rem" }}>
        <img
          src={item.sprites.front_default}
          className="card-img-top"
          alt="Img"
        />
        <div className="card-body">
          <h5 className="card-title text-center ">{item.name.toUpperCase()}</h5>
          <p className="card-title">{item.ability}</p>
        </div>
        <Button className="btn btn-success" onClick={() => setModalShow(true)}>
          More Details
        </Button>

        <SelectPoke show={modalShow} onHide={() => setModalShow(false)} pokemon={item} />
      </div>
    </div>
  );
};

export default MiniCard;
