import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul className={css.friendList}>
      {props.friends.map(item => {
        return (
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
