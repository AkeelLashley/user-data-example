import './Avatar.css';
import { User } from '../../types/user.types';

const Avatar = ({ avatar, first_name, last_name }: User) => {
  const name = `${first_name} ${last_name}`;

  return (
    <img
      src={avatar}
      alt={name}
      title={name}
      className="profile-avatar"
      width="128"
      height="128"
    />
  );
};

export default Avatar;
