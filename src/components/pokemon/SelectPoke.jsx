import React from 'react';
import { Button, Modal } from "react-bootstrap";

 const SelectPoke = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton className='bg-success text-light'>
      <Modal.Title id="contained-modal-title-vcenter" >
        Pokemon Detail:
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-warning'>
      <div className="text-center bg-info">
        <img src={props.pokemon.sprites.front_default} alt="Image" />
        <hr />
        <h3>{props.pokemon.name.toUpperCase()}</h3>
       <span className='text-light fw-bold'>Abilities:</span> {props.pokemon.abilities.map(poke=>{return(<span className='badge bg-danger' style={{margin:"0.5rem 0.5rem"}}>{poke.ability.name}</span>)})}
      </div>
      <div className="text-center bg-info">
        {props.pokemon.stats.map(poke=>{
          return(
            <div className=' text-light'>
            <p style={{margin:0,padding:0}}>{poke.stat.name.toUpperCase()} : {poke.base_stat}</p>
            </div>
          )
        })}
      </div>
    </Modal.Body>
    <Modal.Footer >
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
export default SelectPoke;
