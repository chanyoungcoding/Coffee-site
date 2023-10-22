import { useState } from "react";
import { useLoginMutation } from "../services/api";

import { LoginData } from "../models/coffee";

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
      <form>
        <input 
          type="text" 
          value={username} 
          placeholder="이름"  
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          value={password} 
          placeholder="비밀번호"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>로그인</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
export default Login;