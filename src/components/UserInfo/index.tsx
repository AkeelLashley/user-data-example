import './UserInfo.css';

import { User } from '../../types/user.types';

const UserInfo = (user: User) => {
  const name = `${user.first_name} ${user.last_name}`;

  return (
    <div className="user-info">
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-email">
        <a href={`mailto:${user.email}`}>{name}</a>
      </h3>
    </div>
  );
};

export default UserInfo;
