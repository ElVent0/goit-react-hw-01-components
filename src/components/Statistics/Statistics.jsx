import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(item => {
          return (
            <li className="item">
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
