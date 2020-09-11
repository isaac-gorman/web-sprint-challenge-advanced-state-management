import React, { useState } from "react";
import { postSmurf } from "../actions/actions";
import { connect } from "react-redux";

// Create a from to "Add Smurf"
// Inputs are
// - Names
// - Age
// - Height
// - It needs to have a unique id
// Then I need to set the input values to the reducer via an action function called postSmurf()

const smurfValues = {
  id: new Date().getMilliseconds,
  name: "",
  age: "",
  height: "",
};

function AddSmurfForm(props) {
  const [values, setValues] = useState(smurfValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurf(values);
    setValues(smurfValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Smurf to Village</h2>

        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          name="age"
          value={values.age}
          onChange={handleChange}
          placeholder="age"
        />
        <br />
        <input
          type="text"
          name="height"
          value={values.height}
          onChange={handleChange}
          placeholder="height"
        />
        <br />
        <button>Add Smurf</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { postSmurf })(AddSmurfForm);

// export default AddSmurfForm;
