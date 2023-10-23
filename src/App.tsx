import React, { useState } from "react";
import "./App.css";
import { green } from "@mui/material/colors";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function App() {
  const [user, setUser] = useState(0);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setUser(1);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="container">
        {user === 0 ? (
          <>
            <div className="header">
              <div className="text">Login</div>
            </div>
            <div className="inputs-container">
              <div className="input">
                <label>Nom d'utilisateur:</label>
                <input
                  placeholder="Entrer votre nom d'utilisateur"
                  type="text"
                  name="username"
                ></input>
              </div>

              <div className="input">
                <label>Mot de passe:</label>
                <input
                  placeholder="Entrer votre mot de passe"
                  name="password"
                  type="password"
                ></input>
              </div>

              <div className="submit-container">
                <button className="submit" onClick={() => handleSubmit}>
                  Login
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="congrats">
              <div>
                <div className="icon">
                  <CheckCircleOutlineIcon
                    sx={{ color: green[500], fontSize: 160 }}
                  />
                </div>
                <div>Vous êtes maintenant Logger</div>
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

export default App;
