import { useNavigate, useParams } from 'react-router';
import Header from '../../components/Header'
import './style.css'
import { GoPlus } from "react-icons/go";
import { useEffect, useRef, useState } from 'react';
import { portfolio, portfolioForm } from '../../interfaces';

function Memberlist() {
  const navigate = useNavigate();
  // const { name } = useParams();
  const [member, setMember] = useState<String[]>([]);
  const [portfolio, setPortfolio] = useState<portfolioForm[]>([]);
  const { name } = useParams<{ name: string }>();
  const [toggle, setToggle] = useState<boolean>(false)
  const [newMember, setNewMember] = useState<string>("")

  useEffect(() => {
    fetch(`http://localhost:5050/portfolio`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const members = data.map((val: portfolio) => {
          return val.name;
        });
        setMember(members);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [member]);


  return (
    <div className='Memberlist'>
      <Header />
      {
        toggle && <AddMember closeEvent={() => { setToggle(false) }} member={member} setMember={setMember} newMember={newMember} ></AddMember>
      }
      <div className='Memberlist-container'>
        <div className='memberlist-container'>
          <div className='memberlist-wrapper'>
            <div className='memberlist-header'>
              <div className='memberlist-title'>MEMBERS</div>
              <GoPlus className="memberlist-add" onClick={() => { handleSubmit() }} />
            </div>
            <div className='memberlist'>
              <ul>
                {
                  member && member.map((name: any) => {
                    return <li><div className='member' onClick={() => { navigate(`/portfolio/member/${name}`) }}>{name}</div></li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function handleSubmit() {
    setToggle(true)
  }
}

/**
 * 
 * @param props 
 * @returns 모달창을 띄우는 컴포넌트
 */
function AddMember(props: any) {

  const inputRef = useRef<HTMLInputElement>(null)
  const [newMember, setNewMember] = useState<string>("")

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className='AddMember' tabIndex={0} autoFocus onKeyUp={(e) => {
      if (e.key === "Escape") {
        props.closeEvent()
      }
    }}>
      <div className='overlay'></div>
      <div className='modal-body'>
        <div className='modal-header'>
          <div className='title-wrapper'>
            <div className='title'>사람 추가</div>
          </div>
          <div className='close' onClick={() => { props.closeEvent() }}>X</div>
        </div>
        <div className='modal-lower'>
          <div className='input-member'>
            <input type='text' value={newMember}
              placeholder="이름을 입력하세요"
              onChange={(e) => { setNewMember(e.target.value) }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  addMember()
                }
              }}
              ref={inputRef}
            />
          </div>
          <div className='addmember-btn' onClick={() => { addMember() }}>저장</div>
        </div>
      </div>
    </div>
  )

  function addMember() {
    // if (props.member) {
    //   if (newMember !== "") {
    //     for (let i = 0; i < props.member.length; i++) {
    //       if (props.member[i].name === newMember) {

    //       }
    //     }
    //   }
    // }
    if (newMember !== "") {
      fetch(`http://localhost:5050/portfolio/addMember?name=${newMember}`)
      setNewMember("")
      props.closeEvent()
    }
    if (newMember === "") {
      alert("이름을 입력하지 않았습니다.")
    }
  }
}
export default Memberlist