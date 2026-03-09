import { useState } from "react";
import "./App.css";
import ToDo from "./component/todo/ToDo.jsx";
import Login from "./component/login/Login.jsx";

function App() {
  const [currentView, setCurrentView] = useState("home");

  // Inline styles
  const headingStyle = {
    color: "#61dafb",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    margin: "20px 0",
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const subHeadingStyle = {
    color: "#ffd700",
    margin: "15px 0",
    fontSize: "1.8rem",
    borderBottom: "2px solid #61dafb",
    paddingBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  };

  const welcomeStyle = {
    color: "#ff6b6b",
    fontSize: "3rem",
    margin: "30px 0",
    animation: "fadeIn 2s ease-in",
    textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    marginBottom: "30px",
  };

  const navButtonStyle = {
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <button
          style={{
            ...navButtonStyle,
            backgroundColor: currentView === "home" ? "#4fa8c7" : "#61dafb",
          }}
          onClick={() => setCurrentView("home")}
        >
          🏠 Home
        </button>
        <button
          style={{
            ...navButtonStyle,
            backgroundColor: currentView === "login" ? "#4fa8c7" : "#61dafb",
          }}
          onClick={() => setCurrentView("login")}
        >
          🔑 Login
        </button>
        {/* To-Do List button hidden as per Jira ticket requirement */}
        {/* <button
          style={{
            ...navButtonStyle,
            backgroundColor: currentView === "todo" ? "#4fa8c7" : "#61dafb",
          }}
          onClick={() => setCurrentView("todo")}
        >
          ➡️ To-Do List
        </button> */}
      </nav>

      {/* Conditional Rendering */}
      {currentView === "home" ? (
        <header className="App-header">
          <h1 style={welcomeStyle}>Welcome to My App</h1>
          <h2 style={headingStyle}>Newly Added Heading</h2>
          <h3 style={subHeadingStyle}>Added H3 Heading</h3>

          <p style={{ color: "#e0e0e0", fontSize: "1.2rem", margin: "10px 0" }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", fontSize: "1.2rem" }}
          >
            Learn React
          </a>

          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#4fa8c7")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#61dafb")}
            onClick={() => alert("Button clicked!")}
          >
            Click Me!
          </button>
        </header>
      ) : currentView === "login" ? (
        <Login />
      ) : (
        <ToDo />
      )}
    </div>
  );
}

export default App;
