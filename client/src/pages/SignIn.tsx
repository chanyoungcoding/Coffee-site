import React, {useState} from "react";
import { SignInData } from "../models/coffee";
import { useSignInMutation } from "../services/api";

import '../styles/login.scss';

const SignIn:React.FC = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { mutate } = useSignInMutation();
  const handleLogin = () => {
    if (!username || !password) {
      setError("사용자 이름 또는 비밀번호를 입력하세요.");
      return;
    }
    const data: SignInData = {username,password};
    mutate(data);
  }

  return ( 
    <div className="signin">
      <form className="signin__form">
        <input 
          type="text"
          value={username}
          placeholder="이름을 입력하세요."
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="login__error">{error}</p>}
        <button type="button" onClick={handleLogin}>회원가입</button>
      </form>
    </div>
  );
}

export default SignIn;