import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import './style.css'
import { useEffect, useRef, useState } from 'react';
import { GoPerson, GoKey } from "react-icons/go";
/**
 * 
 * @returns issues : 렌더링 문제, form 사용 미숙, 로그인 확인 메시지 추가, 공백 확인 메시지 추가
 */
function Login() {
  const IDRef = useRef<HTMLInputElement>(null);
  const PWRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    IDRef.current?.focus();
  }, [])

  const admin =
  {
    userId: "admin",
    userPw: "1234",
  }


  function handleSubmit(ID: string, PW: string) {
    if (admin.userId === ID && admin.userPw === PW) {
      navigate('/portfolio/memberlist')
    }
    else {
      alert("다시 입력해주세요.")
      window.location.reload()
    }
  }

  function LoginForm() {
    return (
      <div className="Login-form">
        <div className='Login-title'>Ulsan Big Dev</div>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formElement = e.target as HTMLFormElement;

          handleSubmit(formElement.inputID.value, formElement.inputPW.value)
          // setID(formElement.inputID.value);
          // setPW(formElement.inputPW.value);
        }}>
          <div className="Login-input-container">
            <GoPerson style={{ position: 'absolute', color: "gray", fontSize: "18px", paddingLeft: "8px" }} />
            <input className="Login-input" type="text"
              placeholder="아이디" ref={IDRef} required
              name='inputID'
              //렌더링 이슈
              // onChange={(e) => { setID(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  PWRef.current?.focus()
                }
                else if (e.key == "ArrowDown") {
                  PWRef.current?.focus()
                }
              }}
            />
          </div>
          <div className="Login-input-container">
            <GoKey style={{ position: 'absolute', color: "gray", fontSize: "18px", paddingLeft: "8px" }} />
            <input className="Login-input" type="password"
              placeholder="패스워드" ref={PWRef} required
              name='inputPW'
              // onChange={(e) => { setPW(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key == "ArrowUp") {
                  IDRef.current?.focus()
                }
              }}
            />
          </div>
          <div className="Login-btn-container">
            <button type='submit' className='Login-btn'>로그인</button>
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