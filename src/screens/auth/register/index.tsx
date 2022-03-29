import { RegisterComponent } from 'components'
import React, { useState } from 'react'

const RegisterScreen = () => {
  const [accountRole, setAccountRole] = useState('STUDENT');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSelectRole = (role: string) => {
    setAccountRole(role);
  };

  return (
    <RegisterComponent
      username={username}
      email={email}
      password={password}
      setUsername={setUsername}
      setEmail={setEmail}
      setPassword={setPassword}
      accountRole={accountRole}
      onSelectRole={onSelectRole}
    />
  )
}

export default RegisterScreen