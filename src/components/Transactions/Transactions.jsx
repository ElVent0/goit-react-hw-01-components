import css from './Transactions.module.css';

const Transactions = props => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.row}>
          <th className={css.column}>Type</th>
          <th className={css.column}>Amount</th>
          <th className={css.column}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {props.items.map(item => {
          return (
            <tr className={css.row} key={item.id}>
              <td className={css.column}>{item.type}</td>
              <td className={css.column}>{item.amount}</td>
              <td className={css.column}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;
