import css from './Statistics.module.css';

const getrandomColor = () => {
  const color = (Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase();
  return '#' + color;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <li
              className={css.item}
              key={item.id}
              style={{ backgroundColor: getrandomColor() }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
