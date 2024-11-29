import styled from 'styled-components';

const SideMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding-top: 20px;
  z-index: 100;

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li{
    padding: 15px 20px;
    border-bottom: 1px solid #444;
  }

  ul li .active{
    background-color: #444;
  }

  ul li a{
    color: #fff;
    text-decoration: none;
  }

  ul li a:hover{
    color: #f00;
  }
  .disabled{
    display:none;
  }
`;

const SideMenuTitle = styled.div`
  padding: 20px;
  margin: 0;
  font-size: 1.5em;
  background-color: #444;
`;

const SideMenuClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
  background-color: red;
  border: none;
`;

const SideMenuNewTag = styled.div`
  position: absolute;
  bottom: 20px;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
  background-color: green;
  border: none;
  padding: 10px 20px;
  width: 100%;,

  button{
    background-color: green;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover{
    background-color: #0a0;
  }
`;

const AgendaList = styled.div`
  margin-left: 250px;
  margin-right: 0px;
  padding: 20px;
  width: 100vw;
  height: auto;

  h2{
  margin: 0;
  }
  `;

const AgendaArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  `;

const AgendaItem = styled.div`
width: 100%;
padding: 20px;
border-bottom: 1px solid #ddd;
h3{
  margin: 0;
}
`;

const AgendaItemTag = styled.div`
  font-size: 0.8em;
  color: #999;
`;

const AgendaItemDescription = styled.div`
margin: 10px 0;
`;

const AgendaItemNumber = styled.div`
  font-size: 0.8em;
  color: #999;
`;

const AgendaItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button{
    background-color: #f00;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }
`;
export {
  SideMenu,
  SideMenuTitle,
  SideMenuClose,
  SideMenuNewTag,
  AgendaList,
  AgendaArea,
  AgendaItem,
  AgendaItemDescription,
  AgendaItemNumber,
  AgendaItemActions,
  AgendaItemTag
};
