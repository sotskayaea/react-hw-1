import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      {friend.isOnline ? (
        <span
          className={css.status}
          style={{ backgroundColor: '#44f25e' }}
        ></span>
      ) : (
        <span
          className={css.status}
          style={{ backgroundColor: '#f24444' }}
        ></span>
      )}

      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
