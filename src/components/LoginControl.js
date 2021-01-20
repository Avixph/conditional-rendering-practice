import { useState } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClicks = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClicks = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClicks} />;
  } else {
    button = <LoginButton onClick={handleLoginClicks} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default LoginControl;
