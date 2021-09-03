import { useState, useEffect } from "react";
import Popup from "../../components/Popup";

function Login() {
  const [click, setclick] = useState(false);
  const [hintTimer, setTimmer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimmer(true);
    }, 5000);
  }, []);

  return (
    <div className="Login">
      <div>
        <section>
          <button onClick={() => setclick(true)}>Hint</button>
          <Popup trigger={click} setclick={setclick}>
            <h3>Hints</h3>
            <p>this is a login popup information </p>
          </Popup>
          <Popup trigger={click} setclick={setclick}>
            <h3>Hints</h3>
            <hr />
            <ul className="nav justify-content-center|justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  If you are a current user, simply<b> 'login</b> using your
                  email address and password associated with your account
                </a>
              </li>
              <li className="nav-item">
                <b className="nav-link" href="#">
                  Click sign in.
                </b>
              </li>
            </ul>
          </Popup>
        </section>
      </div>
    </div>
  );
}

export default Login;
