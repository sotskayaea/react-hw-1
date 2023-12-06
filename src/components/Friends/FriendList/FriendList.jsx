import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        friend={friend}
                        key={friend.id}
                    />
                );
            })}
        </ul>
    )
}