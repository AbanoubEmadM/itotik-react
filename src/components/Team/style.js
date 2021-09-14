import styled from "styled-components";
export const TeamSection = styled.div `
margin-top:80px;
`;
export const TeamBox = styled.div `
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;`;
export const TeamSocial = styled.div `
position:absolute;
bottom:25px;
margin-left: 60px;
background:rgba(255, 255, 255, 0.23);
border-radius: 40px;
transition:0.3s;
padding: 15px 36px 15px 0;
`;
export const Icon = styled.i `
color:#fff;

margin-left:30px;
`;
export const ImageMain = styled.div `
position:relative;
&:hover {
    ${TeamSocial}{
    background: linear-gradient(to right, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
    }
}
`;
export const Name = styled.h4 `
font-weight:600;
text-align:center;
padding:5px;
`;
export const Job = styled.p `
color:#777;
padding-bottom:20px;
text-align:center;
`;
export const Img = styled.img `
border-radius:8px;
`;
export const MainHeading = styled.h2 `
font-weight:600;
color:#333;
text-align:center;
`;
export const MainDesc = styled.p `
color:#777;
line-height:1.9;
text-align:center;
margin-bottom:50px;
`;