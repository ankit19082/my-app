import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    padding: "20px",
  };

  const formCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const titleStyle = {
    color: "#61dafb",
    textAlign: "center",
    margin: "0 0 20px 0",
    fontSize: "2rem",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "left",
  };

  const labelStyle = {
    color: "#e0e0e0",
    fontSize: "0.9rem",
    fontWeight: "500",
  };

  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.2)",
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    padding: "14px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#61dafb";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.2)";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    alert(`Logged in as: ${email}`);
  };

  return (
    <div style={containerStyle}>
      <form style={formCardStyle} onSubmit={handleSubmit}>
        <h2 style={titleStyle}>Welcome Back</h2>

        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your email"
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#4fa8c7";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#61dafb";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
