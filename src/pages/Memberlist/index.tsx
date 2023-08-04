import { useNavigate, useParams } from 'react-router';
import Header from '../../components/Header'
import './style.css'
import { GoPlus } from "react-icons/go";

function Memberlist() {
  const navigate = useNavigate();
  const memberlist = ["김아무개", "이아무개", "박아무개", "최아무개"];
  // const { name } = useParams();

  return (
    <div className='Memberlist'>
      <Header />
      <div className='Memberlist-container'>
        <div className='memberlist-container'>
          <div className='memberlist-wrapper'>
            <div className='memberlist-header'>
              <div className='memberlist-title'>MEMBERS</div>
              <GoPlus className="memberlist-add" />
            </div>
            <div className='memberlist'>
              <ul>

                {memberlist.map((name: string) => {
                  return <li><div className='member' onClick={() => { navigate(`/member/${name}`) }}>{name}</div></li>
                })}

              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Memberlist