import axios from "axios";

export const LOADING = "LOADING";
export const GET_SMURF_DATA = "GET_SMURF_DATA";
export const POST_SMURF = "POST_SMURF";

export const getSmurfData = () => (dispatch) => {
  dispatch({ type: LOADING });

  setTimeout(function () {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: GET_SMURF_DATA, payload: res.data });
      })
      .catch((err) => {
        console.log("Error Detected:", err);
      });
  }, 2000);
};

export const postSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: LOADING });

  setTimeout(function () {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => dispatch({ type: POST_SMURF, payload: res.data }))
      .catch((err) => {
        console.log("Error Detected", err);
      });
  }, 2000);
};
