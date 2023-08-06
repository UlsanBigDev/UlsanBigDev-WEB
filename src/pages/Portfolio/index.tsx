import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import './style.css'
import { GoCheckCircle } from "react-icons/go"
import { useNavigate, useParams } from 'react-router-dom';
import { portfolio } from '../../interfaces';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * 
 * @returns issues : 제목 폰트 수 제한, 크기 재 설정, 날짜picker api정하기, 
 * 멤버(ulsanbigdev 멤버 아닌)추가 법 고민 중, input keyhandler 및 padding,
 * 참여 인원들 추가 이슈 및 처음 멤버 undefined err
 */
function Portfolio() {
  const [id, setID] = useState<number[]>([0]);

  const [member, setMember] = useState<string[]>([]);
  const [addMember, setAddMember] = useState<string>(member[0]);
  const [inputTitle, setInputTitle] = useState<string>();
  const [inputContent, setInputContent] = useState<string>();
  const [inputStartDate, setInputStartDate] = useState<Date>(new Date());
  const [inputEndDate, setInputEndDate] = useState<Date>(new Date());
  const [inputList, setInputList] = useState<string[]>([]);

  // const [portfolio, setPortfolio] = useState<portfolioForm[]>([]);
  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5050/portfolio`)
      .then(res => res.json())
      .then(data => {
        setMember(
          data.map((val: portfolio) => {
            return val.name
          }))
      })
  }, [])
  console.log(addMember, inputList)
  return (
    <div className='Portfolio'>
      <Header />
      <div className='Portfolio-container'>

        <div className='portfolio-input-container'>
          <div className='point'></div>
          <div className='portfolio-wrapper'>
            <div className='portfolio-header'>
              <input className='portfolio-title' placeholder='제목' value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} />
              <div className='contourline'></div>
              <div className='portfolio-period'>
                <div className='portfolio-period-header'>
                  <DatePicker className='start-date'
                    selected={inputStartDate}
                    onChange={(date) => {
                      if (date != null) {
                        setInputStartDate(date);
                      }
                    }}
                    dateFormat="yyyy.MM.dd."
                    selectsStart
                    startDate={inputStartDate}
                    endDate={inputEndDate}
                  />
                  <div>~</div>
                </div>


                <DatePicker className='end-date'
                  selected={inputEndDate}
                  onChange={(date) => {
                    if (date != null) {
                      setInputEndDate(date);
                    }
                  }}
                  dateFormat="yyyy.MM.dd."
                  selectsEnd
                  startDate={inputStartDate}
                  endDate={inputEndDate}
                />
              </div>
            </div>
            <ListComponent />
            <div>{inputList}</div>
            {/* {
              id.map((val, idx) => {
                return <ListComponent />
              })
            } */}


            <div className='portfolio-body'>
              <textarea className='portfolio-content' value={inputContent} onChange={(e) => { setInputContent(e.target.value) }} />
              <div className='portfolio-btn'>
                <GoCheckCircle className='check-btn' onClick={() => {
                  // setInputList(addMember)
                  handleSubmit();
                  window.location.replace(`/portfolio/member/${name}`)
                }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

  function ListComponent() {
    return (
      <div className='portfolio-member-add'>
        <select className='portfolio-members' value={addMember}
          placeholder='팀원 선택'
          onChange={(e) => { setAddMember(e.target.value) }} >
          {member.map((val, idx) => {
            return <option key={idx}>{val}</option>
          })}
        </select>
        <div className='add-btn' onClick={() => { setInputList([...inputList, addMember]) }}>+</div>
      </div>
    )
  }

  function handleSubmit() {

    fetch(`http://localhost:5050/portfolioAdd`, {
      method: "post",
      body: JSON.stringify({
        name: name,
        title: inputTitle,
        content: inputContent,
        startDate: inputStartDate.toLocaleDateString(),
        endDate: inputEndDate.toLocaleDateString(),
        headCount: inputList.length,
        list: inputList
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })




  }
}
export default Portfolio