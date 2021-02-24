
// import './App.css';
import {Container, Bell,Settings,  CommentDots, User,UserPlus, PermMedia, Items,Title, TitleImg,Decraption, Img, MobileContainer,IconCon,Icon,ImgContainer,ToggleMode} from  './AppStyle'
import img from './img.jpg';
import React, {useState,useContext} from "react";
import {ThemeContext} from './context'
 

function App() {
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)
  const dark={
    icon:'black',
    title:'black',
    background:'white'
  }
  const light={
    icon:'white',
    title:'white',
    background:'black'
  }


  const onChange = ()=>{
    setMode(!mode)
    setTheme(mode ? dark:light)
  }
  return (
    <Container >
      <MobileContainer color={theme.background}>
         <IconCon>
            <Icon.Arrow color={theme.icon}>

            </Icon.Arrow>
            <Icon.Switch color={theme.icon}>

            </Icon.Switch>
            
         </IconCon>
         <ImgContainer>
         <Img src={img} alt='logo'>
            </Img>
            <TitleImg color={theme.title}>
              MMM center
            </TitleImg>
            <Decraption color={theme.title}>
              maths center
            </Decraption>
          </ImgContainer>
          {/* {dark} */}
          <Items>
              <Icon.Dark color={theme.icon} >

              </Icon.Dark>
              <Title color={theme.title}>
                Dark Mode
              </Title>
              <ToggleMode 
              onChange={onChange}
              checked={mode}
               size={80}>

              </ToggleMode>
          </Items>
          {/* {grid} */}
          <Items>
              <Icon.GridAlt>

              </Icon.GridAlt>
              <Title color={theme.title}>
                Store
              </Title>
          </Items>
          {/* {userchat} */}
          <Items>
              <Icon.User>

              </Icon.User>
              <Title color={theme.title}>
                User head
              </Title>
          </Items>
                    {/* {userchat} */}
                    <Items>
              <Icon.UserPlus>

              </Icon.UserPlus>
              <Title color={theme.title}>
                User group
              </Title>
          </Items>
          <hr></hr>
             {/* {userchat} */}
            <Items>
              <Icon.PermMedia>

              </Icon.PermMedia>
              <Title color={theme.title}>
                Media and photo
              </Title>
          </Items>
             
             
             {/* {userchat} */}
            <Items>
              <Icon.Settings>

              </Icon.Settings>
              <Title color={theme.title}>
                Settings and privacy
              </Title>
          </Items>
             
             {/* {userchat} */}
             <Items>
              <Icon.CommentDots>

              </Icon.CommentDots>
              <Title color={theme.title}>
                Help center
              </Title>
          </Items>
          
             {/* {userchat} */}
             <Items>
              <Icon.Bell>

              </Icon.Bell>
              <Title color={theme.title}>
                Notification
              </Title>
          </Items>
      </MobileContainer>
      
    </Container>
  );
}

export default App;
