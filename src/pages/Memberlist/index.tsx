import { useNavigate, useParams } from 'react-router';
import Header from '../../components/Header'
import './style.css'
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from 'react';
import { portfolio, portfolioForm } from '../../interfaces';

function Memberlist() {
  const navigate = useNavigate();
  // const memberlist = ["김아무개", "이아무개", "박아무개", "최아무개"];
  // const { name } = useParams();
  const [member, setMember] = useState<String[]>([]);
  const [portfolio, setPortfolio] = useState<portfolioForm[]>([]);
  const { name } = useParams<{ name: string }>();
  useEffect(() => {
    fetch(`http://localhost:5050/portfolio`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        // console.log(JSON.stringify(data))
        // console.log(JSON.parse(JSON.stringify(data)).name)
        // console.log(member)
        setMember(
          data.map((val: portfolio) => {
            // console.log(val.name)
            return val.name

          }))

      })
  }, [])
  // console.log(portfolio)
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

                {member && member.map((name: any) => {
                  // console.log(member)
                  return <li><div className='member' onClick={() => { navigate(`/portfolio/member/${name}`) }}>{name}</div></li>
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