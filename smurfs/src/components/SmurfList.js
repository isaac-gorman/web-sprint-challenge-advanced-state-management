import React, { useEffect } from "react";
import { getSmurfData } from "../actions/actions";
import { connect } from "react-redux";
import spinner from "./spinner.gif";
import smurfs from "./smurfs.gif";
import "./smurfs.css";

function SmurfList(props) {
  useEffect(() => {
    return props.getSmurfData();
  }, [props.getSmurfData]);

  return (
    <div>
      <h2>Smurf Village 🏘</h2>
      {props.isFetching ? (
        <img src={smurfs} alt="loading spinner gif" />
      ) : (
        props.smurfData.map((smurf) => {
          return (
            <div className="card">
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getSmurfData })(SmurfList);
