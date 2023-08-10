import { useNavigate, useParams } from 'react-router-dom'
import './style.css'

function Header() {
  const navigate = useNavigate();

  return (
    <div className='Header'>
      <div className='Header-left'>
        <div className='Header_main' onClick={() => { navigate('/') }}>Main</div>
        <div className='Header_portfolio' onClick={() => { navigate('/portfolio/memberlist') }}>Members</div>
      </div>
      <div className='Header-right'>
        <div className='Header_login' onClick={() => { navigate('/login') }}>L</div>
      </div>

    </div>
  )
}
export default Header