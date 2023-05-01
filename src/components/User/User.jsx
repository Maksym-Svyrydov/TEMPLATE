import { useState } from 'react';
import image from '../../img/img2.png';
import logo from '../../img/logo.svg';
import {
  ButtonFollow,
  ButtonFollowing,
} from '../FollowersBtn/Followers.styled';
import {
  Wrapp,
  Tweet,
  BgImg,
  Logo,
  AvatarWrapper,
  Avatar,
  Follower,
  Line,
  TweetValue,
  FollowesValue,
  FollowesTxt,
  TweetTxt,
} from './User.styled';
import { setFollowingStatus, setUnFollowingStatus } from '../../API/AxiosAPI';
const User = ({ id, avatar, followers, tweets, followStatus }) => {
  const [follower, setFollower] = useState(followers);
  const [userStatus, setUserStatus] = useState(followStatus);

  const folValue = new Intl.NumberFormat('en-US').format(follower);
  const tweetValue = new Intl.NumberFormat('en-US').format(tweets);

  const handleChanchgeStatus = (id) => {
    const changeFollow = followStatus ? followers - 1 : followers + 1;
    const changeStatus = followStatus ? false : true;

    if (userStatus) {
      setUnFollowingStatus(id, { changeFollow, changeStatus });
      setFollower(follower - 1);
      setUserStatus(false);
    } else {
      setFollowingStatus(id, { changeFollow, changeStatus });
      setFollower(follower + 1);
      setUserStatus(true);
    }
  };

  return (
    <Wrapp key={id} id={id}>
      <Logo src={logo} />
      <BgImg src={image} />
      <Line />
      <AvatarWrapper>
        <Avatar src={avatar} alt="User"></Avatar>
      </AvatarWrapper>
      <Tweet>
        <TweetValue>{tweetValue}</TweetValue>
        <TweetTxt>TWEETS</TweetTxt>
      </Tweet>
      <Follower>
        <FollowesValue>{folValue}</FollowesValue>
        <FollowesTxt>FOLLOWERS</FollowesTxt>
      </Follower>
      {userStatus ? (
        <ButtonFollowing type="button" onClick={() => handleChanchgeStatus(id)}>
          FOLLOWING
        </ButtonFollowing>
      ) : (
        <ButtonFollow type="button" onClick={() => handleChanchgeStatus(id)}>
          FOLLOW
        </ButtonFollow>
      )}
    </Wrapp>
  );
};

export default User;
