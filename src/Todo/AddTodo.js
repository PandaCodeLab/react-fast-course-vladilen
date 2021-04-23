import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default AddTodo;
