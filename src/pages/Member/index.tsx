import { useParams } from 'react-router'
import Header from '../../components/Header'
import './style.css'
import { GoPlus, GoCheckCircle, GoCheckCircleFill, GoXCircle, GoXCircleFill } from "react-icons/go"

/**
 * 
 * @returns issues: + 버튼 오른쪽 밀기, useParams 사용법ㅠㅠ
 */
function Member() {
  const { name } = useParams();

  return (
    <div className='Member'>
      <Header />
      <div className='Member-container'>
        <div className='member-portfolio-container'>
          <div className='member-header'>
            <div className='member-title'>{name}</div>
            <GoPlus className='portfolio-add' />
          </div>
          <div className='member-body'>
            <PortfolioCon />
            <PortfolioCon />
            <PortfolioCon />
            <PortfolioCon />
            <PortfolioCon />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Member

function PortfolioCon() {
  const meme = "wfeuhidjfkwjehfkwjhflwkhegloejlfi.jwaelf.ijawilejfweligj;wiejflewijflwiejflweijflw.iejflw.jfl.wijflkwajefl.ajkwl.egfjkwel.gjekljgwklejglw.jkfl.wjkflkwjf.ljkwfkljwfl;wjlf.jkw.lfjkwe.lfjkwl.efjkw.lfjkw.kefjl"
  return (
    <div className='portfolio-container'>
      <div className='point'></div>
      <div className='portfolio-wrapper'>
        <div className='portfolio-header'>
          <div className='portfolio-title'>아무개꺼</div>
          <div className='contourline'></div>
          <div className='portfolio-period'>
            <div className='start-date'>{"2023-08-03"} ~</div>
            <div className='end-date'>{"2023-08-20"}</div>
          </div>
        </div>
        <div className='portfolio-members'>Project by. {"김아무개, 박아무개"}</div>
        <div className='portfolio-body'>
          <div className='portfolio-content'>
            {meme}
            {/* {" 대충 김아무개와 박아무개의 90시간의 활기찬 여정을 테마로 한 프로젝트 설명인 척"} */}
          </div>
          <div className='portfolio-btn'>
            {/* <GoCheckCircle /> */}
            <GoCheckCircleFill className='check-btn' />
            {/* <GoXCircle /> */}
            <GoXCircleFill className='x-btn' />
          </div>
        </div>
      </div>

    </div>
  )
}