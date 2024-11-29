import styled, { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
  }
`;

// Styled components
const Menu = styled.div`
  width: 100%;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
`;

const MenuBrand = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #ccc; /* Adicionei uma cor de hover para exemplo */
  }
`;

const MenuAreaItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const MenuItem = styled.li`
  list-style: none;
  margin: 0px 10px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
`;
export { GlobalStyle, Menu, Container, MenuBrand, MenuAreaItems, MenuItem, MenuList };
