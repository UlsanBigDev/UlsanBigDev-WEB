import { useState } from 'react';
import Header from '../../components/Header'
import './style.css'
import { GoCheckCircle } from "react-icons/go"

/**
 * 
 * @returns issues : useParams, 제목 폰트 수 제한, 크기 재 설정, 날짜picker api정하기, 멤버(ulsanbigdev 멤버 아닌)추가 법 고민 중, input keyhandler 및 padding
 */
function Portfolio() {
  const memberlist = ["김아무개", "이아무개", "박아무개", "최아무개"];
  const [addMember, setAddMember] = useState<string>("");
  return (
    <div className='Portfolio'>
      <Header />
      <div className='Portfolio-container'>

        <div className='portfolio-input-container'>
          <div className='point'></div>
          <div className='portfolio-wrapper'>
            <div className='portfolio-header'>
              <input className='portfolio-title' placeholder='제목' />
              {/* <div className='portfolio-title'>아무개꺼</div> */}
              <div className='contourline'></div>
              <div className='portfolio-period'>
                <div className='start-date'>{"2023-08-03"} ~</div>
                <div className='end-date'>{"2023-08-20"}</div>
              </div>
            </div>
            <div className='portfolio-member-add'>
              <select className='portfolio-members' value={addMember}
                placeholder='팀원 선택'
                onChange={(e) => { setAddMember(e.target.value) }} >
                {memberlist.map((val, idx) => {
                  return <option key={idx}>{val}</option>
                })}
              </select>
              <div className='add-btn'>+</div>
            </div>

            <div className='portfolio-body'>
              <textarea className='portfolio-content' />
              <div className='portfolio-btn'>
                {/* <GoCheckCircle /> */}
                <GoCheckCircle className='check-btn' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Portfolio