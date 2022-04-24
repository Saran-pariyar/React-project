import React,{useState} from "react";
import SelectPoke from "./SelectPoke";
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Minicard from "./MiniCard";

const Card = ({ pokemon, loading }) => {
    return (
      <section className='d-flex justify-content-center'>
        {/* <div className="row row-cols-1 row-cols-md-2 g-4 "> */}
        <div className="row container ">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokemon.map((item) => {
              return (
                <Minicard item={item} key={item.id}/>
              );
            })
          )}
        </div>
      </section>
    );
};
export default Card;
