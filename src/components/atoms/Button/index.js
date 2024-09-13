import React from "react"
const Button = ({ title, onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading} style={{ cursor: loading ? "not-allowed" : "pointer" }}>
      {loading ? "Loading..." : title} 
    </button>
  );
};

export default Button;