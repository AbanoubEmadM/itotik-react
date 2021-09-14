import styled from "styled-components";

export const ClientsSection = styled.div `
background-image: url(/images/testimonial_bg.jpg);
background-size:cover;
width:100%;
position:relative;
height:60vh;
background-attachment:fixed;
`;
export const Overlay = styled.div `
position: absolute;
background-color: #003994e0;
width: 100%;
z-index: 2;
height: 100%;
`;
export const ClientBox = styled.div `
background-color:#FFF;
margin-bottom:15px;
padding:25px;
border-radius:8px;
`;
export const Icon = styled.i `
color:#FE806D;
font-size: 18px;
float:right;
`;
export const IconQ = styled.i `
float:left;
color:#1A9FD4;
font-size: 18px;
`;
export const Desc = styled.p `
font-size: 16px;
font-weight: 300;
color: #333333;
margin-top: 45px;
margin-bottom: 35px;
line-height: 1.9;
`;
export const Flex = styled.div `
display:flex;
`;
export const Image = styled.img `
width:70px;
border-radius:50%;
margin-right:15px;
`;
export const Name = styled.h4 `
font-weight:bold;
font-size:16px;
`;
export const Job = styled.span `
padding-top:5px;
font-weight:normal;
display:block;
`;
export const MainHeading = styled.h2 `
color:#fff;
text-align:center;
font-weight:600;
margin-bottom:25px;
margin-top:50px;
`;
export const MainP = styled.p `
color:#fff;
text-align:center;
font-family:"Poppins" , sans-serif;
line-height:1.8;
margin-bottom:25px;
`;
export const Swiper = styled.div `
width:auto;
`;
export const Paginagition = styled.span `
width: 12px;
height: 12px;
position:absolute;
border-radius: 50%;
border: 0;
left:48%;
font-size: 0;
opacity: 0.5;
transition: all 0.3s ease-out 0s;
margin-top:50px;
&:first-of-type{
margin-left:20px;
}
&:nth-of-type(2){
margin-left:40px;
}
&:last-of-type{
margin-left:60px;
}
`;