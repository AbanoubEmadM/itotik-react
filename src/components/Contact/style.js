import styled from "styled-components";
export const ContactSection  = styled.div `
margin-top:80px;
font-family:"Poppins",sans-serif;
`;
export const ContactBox = styled.div `
margin-bottom: 80px;
`;
export const MainDesc = styled.p `
margin-bottom:20px;
line-height:1.9;
`;
export const MainHeading = styled.h2 `
margin-bottom:20px;
`;
export const Address = styled.p `
text-align: left;
margin-left: 36px;
margin-top: 10px;
font-family: "poppins" , sans-serif;
margin-bottom: 0;

`;
export const Icon = styled.i `
float:left;
background:linear-gradient(to right,#fe8464 0%,#fe6e9a 50%,#fe8464 100%);
padding:20px;
border-radius:50%;
color:#fff;
font-size:20px;
margin-right:30px;
`;
export const Form = styled.form `
margin-top: 1%;
`;
export const InpText = styled.input `
width: 100%;
font-size:14px;
padding: 15px;
margin-bottom: 20px;
border: 1px solid #c5c5c5;
border-radius:5px;
outline: none;
transition:0.3s;
&:focus{
border: 1px solid red;
}
`;
export const InpEmail = styled(InpText) `
width:45%;
margin-right:20px;
float:left;
`;
export const InpNumber = styled(InpEmail) `
float:right;
margin: 0;
`;
export const TextArea = styled(InpText) `
height: 210px;
`;
export const Btn = styled.button `
border: 2px solid #fe8464;
margin-bottom:15px;
padding: 11px 35px;
border-radius: 53px;
background:linear-gradient(to right,#fe8464 0%,#fe6e9a 50%,#fe8464 100%);
color: #fff;
font-weight: 600;
transition: 0.3s;
&:hover{
    background:transparent;
    border: 2px solid #fe8464;
}
`;