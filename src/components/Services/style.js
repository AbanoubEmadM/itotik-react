import styled from "styled-components";

export const ServicesSection = styled.div`
margin-top:80px;
`;
export const SrvBox = styled.div`
margin-bottom:15px;
padding: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:6px;
border:2px solid #fff;
transition:0.3s;
&:hover{
    border:2px solid #FE7C5B;
}
`;
export const IconBox = styled.div`
display:flex;
margin-bottom:20px;
margin-top:20px;
`;
export const Icon = styled.div`
background: linear-gradient(to right, #1668ec 0%, #685ac5 100%) !important;
font-size: 25px;
padding: 19px;
border-radius: 50%;
color: #fff;
`;
export const Title = styled.h4`
margin: 12px;
`;
export const Desc = styled.p`
font-size: 16px;
line-height: 26px;
margin-top: 10px;
color:#777;
`;
export const Link = styled.a`
text-decoration:none;
font-weight:bold;
`;