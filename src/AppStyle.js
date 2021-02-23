import styled,{css} from 'styled-components';
import {ChevronLeft} from '@styled-icons/boxicons-regular/ChevronLeft'
import {Switch} from '@styled-icons/icomoon/Switch';
import {MoonOutline} from '@styled-icons/evaicons-outline/MoonOutline'
import {GridAlt} from '@styled-icons/boxicons-regular/GridAlt'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-solid/CommentDots'
import {Bell} from '@styled-icons/boxicons-solid/Bell'
import {Settings} from '@styled-icons/feather/Settings'
import Toggle from 'react-dark-mode-toggle'

export const ToggleMode=styled(Toggle)`
margin-left:auto;
outline:none;
`

export const Container=styled.div`
display:flex;
flex-direction:column;
width:100wh;
height:fit-content;
padding:10px 300px;
box-sizing:border-box;
justify-content:center;
align-items:center;



`


export const MobileContainer=styled.div`
width:400px;
height:auto;
background-color:${({color})=>color};
box-shadow:5px 5px 12px 6px rgba(0,0,0,0.25);
box-sizing:border-box;


`


export const IconCon=styled.div`
width:100%;
padding:20px;
display:flex;
justify-content: space-between;

/* justify-content:space-around; */
box-sizing:border-box;
`


export const Icon=styled.div`

`
Icon.Arrow=styled(ChevronLeft)`
color:${({color})=>color};
width:30px;
height: 30px;
cursor: pointer;
`

Icon.Switch=styled(Switch)`
color:${({color})=>color};
width:20px;
height: 20px;
cursor: pointer;

`
Icon.Dark=styled(MoonOutline)`
color:${({color})=>color};
width:30px;
height: 30px;
cursor: pointer;
`
Icon.GridAlt=styled(GridAlt)`
color:#FBB65C;
width:30px;
height: 30px;
cursor: pointer;
`
Icon.User=styled(UserCheck)`
color:#FF7EB0;
width:30px;
height: 30px;
cursor: pointer;
`
Icon.UserPlus=styled(UserPlus)`
color:#36E3ff;
width:30px;
height: 30px;
cursor: pointer;
`
Icon.PermMedia=styled(PermMedia)`
color:#5476ff;
width:30px;
height: 30px;
cursor: pointer;
`
Icon.CommentDots=styled(CommentDots)`
color:#0BC630;
width:30px;
height: 30px;
cursor: pointer;
`


Icon.Bell=styled(Bell)`
color:#A394C2;
width:30px;
height: 30px;
cursor: pointer;
`

Icon.Settings=styled(Settings)`
color:#5476ff;
width:30px;
height: 30px;
cursor: pointer;
`
export const ImgContainer=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`

export const Img=styled.img`
width:100px;
height:100px;
border-radius:50%;
border: 1px solid red;
`


export const TitleImg=styled.div`
font-size:22px;
font-style:bold;
font-family:Arial, Helvetica, sans-serif;
color:${({color})=>color};
`


export const Decraption=styled.div`
font-size:12px;
font-style:bold;
font-family:Arial, Helvetica, sans-serif;
color:${({color})=>color};
`

export const Items=styled.div`
display:flex;
padding: 10px 30px;
align-items:center;

`

export const Title=styled.div`
font-size:18px;
font-style:bold;
font-family:Arial, Helvetica, sans-serif;
margin-left:20px;
color:${({color})=>color};
`