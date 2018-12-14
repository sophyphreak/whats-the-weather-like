import React from 'react';
import { Button } from 'reactstrap';

const StuffThatLoads = (props) => (
  <div>
    <p>{props.weather}</p>
    <img className="root__child" src={props.icon} alt="icon" />
    <p>{props.f ? props.convertToF() + "° F" : props.temp + "° C"} </p>
    <Button color="link" onClick={(e) => props.clickHandler(e)}>{"Change to " + props.cOrF()}</Button>
  </div>
);

export default StuffThatLoads;