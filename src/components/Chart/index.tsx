import IData from "../../types/data.interface";
import "./chart.css";

interface Props {
  data: IData[];
};

const Chart = ({data}: Props) => {
  const total = data.reduce((acc, el) => {
    return acc + el.time
  }, 0)

  let margin = 0;

  return (
    <ul className="chart-list">
      {data.map(el => {
        const width = el.time * 100 / total;
        margin = width + margin;
        
        return (
          <li key={el.name} className="chart-item">
            <div className="chart-name">{el.name}</div>
            <div className="chart-time"><div style={{width: `${width}%`, marginLeft: `${margin - width}%`}} className="time-container">{el.time}</div></div>
          </li>
        )
      })}
    </ul>
  )
};

export default Chart;