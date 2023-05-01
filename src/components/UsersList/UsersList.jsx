import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from './UsersList.styled';
import { UserList } from './UsersList.styled';
import User from '../User/User';

const UsersList = ({ users }) => {
  const location = useLocation();
  return (
    <Wrapper>
      <Link to={`/tweets/}`} state={{ from: location }}></Link>
      <UserList>
        {users.map(({ id, avatar, followers, tweets, followStatus }) => (
          <User
            key={id}
            id={id}
            avatar={avatar}
            followers={followers}
            tweets={tweets}
            followStatus={followStatus}
          />
        ))}
      </UserList>
    </Wrapper>
  );
};

export default UsersList;
