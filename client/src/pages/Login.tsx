import { useState } from "react";
import { useLoginMutation } from "../services/api";

import { LoginData } from "../models/coffee";

import Button from "../components/Button";

import '../styles/login.scss';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { mutate } = useLoginMutation();

  const handleLogin = () => {
    if (!username || !password) {
      setError("사용자 이름 또는 비밀번호를 입력하세요.");
      return;
    }
    const data: LoginData = {username,password};
    mutate(data);
  }

  return ( 
    <div className="login">
      <form className="login__form">
        <input 
          type="text" 
          value={username} 
          placeholder="Username"  
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          value={password} 
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="login__error">{error}</p>}
        <button type="button" onClick={handleLogin}>로그인</button>
        <div className="login__signup">
          <p>Don't have an account?</p>
          <Button href="/">Sign up</Button>
        </div>
      </form>
    </div>
  );
}
export default Login;