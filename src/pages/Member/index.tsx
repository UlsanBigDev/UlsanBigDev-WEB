import { useNavigate, useParams } from 'react-router'
import Header from '../../components/Header'
import './style.css'
import { GoPlus, GoCheckCircleFill, GoXCircleFill } from "react-icons/go"
import { useEffect, useState } from 'react';
import { portfolioForm, portfolio, sort } from '../../interfaces';

/**
 * 
 * @returns issues: + 버튼 오른쪽 밀기, useParams 사용법ㅠㅠ
 */
function Member() {
  const { name, type } = useParams<{ name: string, type: sort }>();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<portfolioForm[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5050/portfolio`)
      .then((res) => res.json())
      .then((data) => {
        try {
          setPortfolio(
            data.reduce((accumulator: any, val: any) => {
              if (val.name === name) {
                const portfolioData = val.portfolioForm.map((value: any) => ({
                  title: value.title,
                  content: value.content,
                  startDate: value.startDate,
                  endDate: value.endDate,
                  headCount: value.headCount,
                  list: value.list,
                }));
                return [...accumulator, ...portfolioData];
              }
              return accumulator;
            }, [])
          );
        } catch (error) {
          console.error("Error processing data:", error);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, [])
  //   fetch(`http://localhost:5050/portfolio`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filteredPortfolio = data
  //         .filter((val: any) => val.name === name)
  //         .flatMap((val: any) =>
  //           val.portfolioForm.map((value: any) => ({
  //             title: value.title,
  //             content: value.content,
  //             startDate: value.startDate,
  //             endDate: value.endDate,
  //             headCount: value.headCount,
  //             list: value.list,
  //           }))
  //         );
  //       setPortfolio(filteredPortfolio);
  //     });
  // }, [])

  console.log(portfolio)
  return (
    <div className='Member'>
      <Header />
      <div className='Member-container'>
        <div className='member-portfolio-container'>
          <div className='member-header'>
            <div className='member-title'>{name}</div>
            <GoPlus className='portfolio-add' title='추가' onClick={() => { navigate(`/portfolio/add/${name}`) }} />
          </div>
          <div className='member-body'>
            {portfolio && portfolio.map((val: portfolioForm, idx: number) => {

              return <PortfolioCon key={idx} {...val} />
            })}
          </div>
        </div>
      </div>
    </div>
  )



  function PortfolioCon(props: portfolioForm, _key: number) {

    function onEditFunc() {
      throw new Error('Function not implemented.');
    }

    function handleDelete() {
      throw new Error('Function not implemented.');
    }

    return (
      <div className='portfolio-container'>
        <div className='point'></div>
        <div className='portfolio-wrapper'>
          <div className='portfolio-header'>
            <div className='portfolio-title'>{props.title}</div>
            <div className='contourline'></div>
            <div className='portfolio-period'>
              <div className='start-date'>{props.startDate.toString()} ~</div>
              <div className='end-date'>{props.endDate.toString()}</div>
            </div>
          </div>
          <div className='portfolio-members'>
            Project by. {props.list.map((val: string, idx: number) => {
              if (props.list.length === idx + 1) {
                return <span>{val}</span>
              }
              else {
                return <span>{`${val}, `}</span>
              }
            })}</div>
          <div className='portfolio-body'>
            <div className='portfolio-content'>
              {props.content}
            </div>
            <div className='portfolio-btn'>
              <GoCheckCircleFill className='check-btn' title='수정'
                onClick={() => {

                  if (window.confirm(`${props}번 째 포트폴리오를 수정하시겠습니까?`)) {
                    // idx 번호를 받아와야 함.
                    navigate(`/portfolio/update/${name}`);
                    onEditFunc();
                  }
                }}

              />
              <GoXCircleFill className='x-btn' title='삭제'
                onClick={() => {

                  if (window.confirm(`${props}번 째 포트폴리오를 삭제하시겠습니까?`)) {
                    // idx 번호를 받아와야 함.
                    handleDelete();
                  }
                }}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }

}
export default Member

