import { useNavigate, useParams } from 'react-router-dom'
import './style.css'

function Header() {
  const navigate = useNavigate();

  return (
    <div className='Header'>
      <div className='Header_main' onClick={() => { navigate('/') }}>메인</div>
      <div className='Header_portfolio' onClick={() => { navigate('/portfolio/memberlist') }}>멤버들</div>
      <div className='Header_portfolio' onClick={() => { navigate(`/portfolio/member/:name`) }}>멤버</div>
      <div className='Header_portfolio' onClick={() => { navigate(`/portfolio/add/:name`) }}>포폴추가</div>
      <div className='Header_login' onClick={() => { navigate('/login') }}>로긴</div>
    </div>
  )
}
export default Header