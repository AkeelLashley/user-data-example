import { User } from '../../types/user.types';

import './ProfileCard.css';

import Avatar from '../Avatar';
import UserInfo from '../UserInfo';

const ProfileCard = (user: User) => {
  return (
    <section id={`user-${user.id}`} className="profile-card">
      <Avatar {...user} />
      <UserInfo {...user} />
    </section>
  );
};

export default ProfileCard;
