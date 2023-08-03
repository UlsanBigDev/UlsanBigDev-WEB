import Header from '../../components/Header';
import './style.css'
import { useEffect, useRef, useState } from 'react';
import { GoPerson, GoKey } from "react-icons/go";

function Login() {
  const IDRef = useRef<HTMLInputElement>(null);
  const PWRef = useRef<HTMLInputElement>(null);

  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  useEffect(() => {
    IDRef.current?.focus();
  }, [])

  const admin =
  {
    userId: "admin",
    userPw: "1234",
  }


  function handleSubmit() {

  }

  function LoginForm() {
    return (
      <div className="Login-form">
        <div className='Login-title'>Ulsan Big Dev</div>
        <form onSubmit={handleSubmit}>
          <div className="Login-input-container">
            <GoPerson style={{ position: 'absolute', color: "gray", fontSize: "18px", paddingLeft: "8px" }} />
            <input className="Login-input" type="text"
              placeholder="아이디" name="uname" required ref={IDRef}
              onChange={(e) => { setID(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key == "Enter" || "ArrowDown") {
                  PWRef.current?.focus()
                }
              }}
            />
          </div>
          <div className="Login-input-container">
            <GoKey style={{ position: 'absolute', color: "gray", fontSize: "18px", paddingLeft: "8px" }} />
            <input className="Login-input" type="password"
              placeholder="패스워드" name="pass" required ref={PWRef}
              onChange={(e) => { setPW(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key == "ArrowUp") {
                  IDRef.current?.focus()
                }
                else if (e.key == "Enter") {
                  handleSubmit()
                }
              }}
            />
          </div>
          <div className="Login-btn-container">
            <div className='Login-btn'>로그인</div>
          </div>
        </form>
      </div>
    )
  }


  return (
    <div className='Login'>
      <Header />
      <div className='Login-container'>
        <div className='Login-form-container'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
export default Login