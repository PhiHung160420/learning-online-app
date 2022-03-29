import { LoginComponent } from 'components'
import { navigate } from 'navigation/service';
import React, { useState } from 'react'
import screenNames from 'utils/screenName';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    navigate(screenNames.LAYOUT_SCREEN)
  };

  const onPressSignup = () => {
    navigate(screenNames.REGISTER);
  };

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onPressLogin={onPressLogin}
      onPressSignup={onPressSignup}
    />
  )
}

export default LoginScreen