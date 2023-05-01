import styled from 'styled-components';

export const Wrapp = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
`;
export const Tweet = styled.ul`
  display: flex;
  position: absolute;
  width: 132px;
  height: 24px;
  left: 124px;
  top: 284px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  list-style: none;
  justify-content: flex-start;
  padding: 0px;
`;
export const TweetValue = styled.li`
  margin-right: 10px;
`;
export const TweetTxt = styled.li``;
export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Follower = styled.ul`
  display: flex;
  position: absolute;
  width: 214px;
  height: 24px;
  left: 83px;
  top: 324px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  list-style: none;
  justify-content: center;
  padding: 0px;
`;
export const FollowesValue = styled.span`
  margin-right: 10px;
`;
export const FollowesTxt = styled.li``;

export const Avatar = styled.img`
  display: block;
  max-width: 64px;
  border-radius: 32px;
  justify-content: center;
  left: 150px;
  top: 178px;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
`;
export const BgImg = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
  position: absolute;
  left: 20px;
  top: 20px;
`;
