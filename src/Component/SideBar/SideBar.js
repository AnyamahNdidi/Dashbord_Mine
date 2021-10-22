import React from 'react'
import styled from "styled-components"
import {AiFillHome,AiOutlineUserAdd,AiOutlineMenu} from "react-icons/ai"
import {FaProductHunt} from "react-icons/fa"
import {BiLogIn} from "react-icons/bi"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
// import {AiFillHome} from "react-icons/ai"

function SideBar() {
  const [toggle, seToggle] = React.useState(false)
  const [toggleMenu, seToggleMenu] = React.useState(false)

  const onToggle =()=>{
    seToggle(!toggle)
  }
  const onToggleMenu =()=>{
    seToggleMenu(!toggleMenu)
  }
  return (
    <>

{
  toggle ? (<Container>
    <Wrapper>
      <LogoHolder>
      <Logo/>
        </LogoHolder>
     
      <NavHolder>
        <Navigation>
          <Nav>
            <Icon>
               <AiFillHome/>
            </Icon>
            <span>Home</span>
          </Nav>
          <Nav>
            <Icon>
               <AiOutlineUserAdd/>
            </Icon>
            <span>Profile</span>
          </Nav>
          <Nav>
            <Icon>
               <FaProductHunt/>
            </Icon>
            <span>Product</span>
          </Nav>
          <Nav>
            <Icon>
               <AiFillHome/>
            </Icon>
            <span>Stats</span>
          </Nav>
          <Nav>
            <Icon>
               <AiFillHome/>
            </Icon>
            <span>Home</span>
          </Nav>
        </Navigation>
      </NavHolder>
      <Other>
      <Nav>
            <Icon>
               <BiLogIn/>
            </Icon>
            <span>Log Out</span>
          </Nav>
          <Icons onClick={onToggle}>
          <Icon>
               <BsFillArrowLeftCircleFill/>
            </Icon>
            </Icons>
        </Other>

    </Wrapper>
  </Container>):(
    <InnerMenu>
        <Menu onClick ={onToggleMenu}>
                   <AiOutlineMenu/>
                   </Menu>
      {
        toggleMenu ?
        (   <InnerContainer>
        
               <Wrapper>
               
                 <LogoHolder>
                 <Logo/>
                   </LogoHolder>
                
                 <NavHolder>
                   <Navigation>
                     <Nav>
                       <InnerIcon>
                          <AiFillHome/>
                       </InnerIcon>
                      
                     </Nav>
                     <Nav>
                       <InnerIcon>
                          <AiOutlineUserAdd/>
                       </InnerIcon>
                      
                     </Nav>
                     <Nav>
                       <InnerIcon>
                          <FaProductHunt/>
                       </InnerIcon>
                       
                     </Nav>
                     <Nav>
                       <InnerIcon>
                          <AiFillHome/>
                       </InnerIcon>
                    
                     </Nav>
                     <Nav>
                       <InnerIcon>
                          <AiFillHome/>
                       </InnerIcon>
                     
                     </Nav>
                   </Navigation>
                 </NavHolder>
                 <Other>
                 <Nav>
                       
                         <InnerIcon>
                         <BiLogIn/>
                           </InnerIcon>
                          
                     
                     
                     </Nav>
                     <Icons onClick={onToggle}>
                     <Icon>
                          <BsFillArrowLeftCircleFill/>
                       </Icon>
                       </Icons>
                   </Other>
          
               </Wrapper>
        
          </InnerContainer>):
        null
      }
 
    </InnerMenu>
  )
}
  
   </>
  )
}

export default SideBar

const  InnerMenu =styled.div`

display: flex;

@media screen and (max-width:923px){
  display: flex;
  width: 100%;
 
justify-content: center;
align-items: center;
position: relative;
}
`

const Menu = styled.div`
display: none;

@media screen and (max-width:923px){
  display: flex;
  width: 100%;
font-size:30px;
justify-content: center;
position: absolute;
top: 0;
}
`


const InnerIcon =styled.div`
width: 100%;
display: flex;
justify-content:center;
`

const InnerContainer = styled.div`
width: 100px;
height: 100vh;
background-color: lightgray;

@media screen and (max-width:923px){
  display: flex;
 width: 100px;
 height: 100vh;

}

`

const Icons = styled.div`

width:100%;
display: flex;
justify-content: flex-end;
margin: 20px 0;
padding-left: 10px;
font-size: 20px;

:hover{
  cursor: pointer;
}
@media screen and (max-width:923px){
  display:none;
  width: 100px;
  justify-content:flex-end;
  span{
    display: none;
  }
}
`

const Other = styled.div``

const Logo = styled.img`
width: 200px;
height: 40px;
background-color: red;
object-fit: red;
`
const LogoHolder = styled.div`
display: flex;
justify-content: center;
margin: 60px 0;

@media screen and (max-width:923px){

  width: 100px;


`

const NavHolder = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`
const Nav = styled.div`
height: 50px;
align-items: center;
display: flex;
transition:  all 350ms;

span{
  font-size: 12px;
}
:hover{
  cursor: pointer;
  background-color:#002f5e;
  color: white;
}
@media screen and (max-width:923px){\
  display: flex;
  width: 100px;
  justify-content: center;
  span{
    display: none;
  }
}

`
const Navigation = styled.div ``
const Icon = styled.div `
display: flex;
margin-top: 2px;
margin-left: 10px;
margin-right: 10px;

`

const Container = styled.div`
width: 300px;
height: 100vh;
background-color: lightgray;

@media screen and (max-width:923px){
  display: flex;
 width: 100px;
 height: 100vh;

}
`
const Wrapper = styled.div`

display: flex;
flex-direction: column;
height: 100%;

`
