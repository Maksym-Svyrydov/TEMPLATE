import styled from 'styled-components';

export const LoadMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  gap: 6px;
  position: relative;
  width: 196px;
  height: 50px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  flex: none;
  border: none;
  color: #373737;
  background: #ebd8ff;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 50ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;
