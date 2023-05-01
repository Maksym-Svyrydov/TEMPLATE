import styled from 'styled-components';

export const Titile = styled.h1`
  padding: 10px 40px;
`;

export const Layout = styled.div`
  max-width: 1400px;
  text-decaration: none;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const NavContainer = styled.header`
  min-height: 64px;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px, auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
  padding-right: auto;
  flex-direction: row;
  border-bottom: 8px solid #5736a3;
  background: #ebd8ff;
`;
export const NavList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  padding-left: 40px;
`;
export const NavItem = styled.div`
  display: flex;
  margin: 5px 10px;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 186px;
  height: 50px;
  &.active {
    border: 2px solid tomato;
  }
`;
