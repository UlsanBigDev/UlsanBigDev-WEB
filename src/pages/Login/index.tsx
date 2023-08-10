import { useNavigate } from 'react-router';
import Header from '../../components/Header';
import './style.css'
import { useEffect, useRef, useState } from 'react';
import { GoPerson, GoKey } from "react-icons/go";
/**
 * 
 * @issues : 로그인 확인 메시지 추가, 공백 확인 메시지 추가, 로그인(admin) 시 헤더(L->A) 수정, 
 * 로그인 정보 post로 넘겨서 비교하기, admin인지도 비교하기, 비회원 읽기 모드 퍼블리싱 수정,
 * login ID 처리(cookies || localstorage)
 */
function Login() {
  const IDRef = useRef<HTMLInputElement>(null);
  const PWRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  useEffect(() => {
    IDRef.current?.focus();

    // fetch('http://localhost:5050/admin')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     data.map((val: any) => {
    //       setID(val.userId), setPW(val.userPw)
    //     })

    //   })

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
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  PWRef.current?.focus()
                }
                if (e.key == "ArrowDown") {
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

        <div className='line-container'>
          <div className='line'></div>
          <div className='line-or'>또는</div>
          <div className='line'></div>
        </div>
        <div className='not-member'>비회원 이런거 대충 넣기</div>
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