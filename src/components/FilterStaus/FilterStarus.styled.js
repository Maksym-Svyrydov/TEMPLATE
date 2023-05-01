import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1400px;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  padding: 8px 0px;
  flex-direction: row;
  align-items: center;
  border-bottom: 8px solid #5736a3;
  background: #ebd8ff;
`;
export const Section = styled.section`
  display: flex;
  width: 1400px;
  padding: 0px;
  margin-bottom: 12px;
  justify-content: space-between;
`;
export const Title = styled.p`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  font-size: 26px;
  padding: 0px 0px 0px 12px;
`;

export const GoBack = styled.div`
  display: flex;
  width: 120px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border: 4px solid #5736a3;
  border-radius: 11px;
  margin: auto 10px;
  padding: 4px;
`;
export const DropDown = styled.select`
  display: flex;
  margin: 8px 8px;
  padding: 14px 28px 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  cursor: pointer;
  background: #5736a3;
  color: #ebd8ff;
`;
