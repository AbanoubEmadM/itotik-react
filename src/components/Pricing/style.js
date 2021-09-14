import styled from "styled-components";

export const PriceBox = styled.div `
border:2px solid #fff;
text-align:center;
font-family: "Poppins",sans-serif;
transition: 0.3s;
border-radius: 6px;
margin-bottom:15px;
padding-top:15px;
&:hover{
border:2px solid #FE7E5E;

}
`;
export const Title = styled.h4 `
font-weight:600;
color:#333;
margin-bottom:15px;
font-size:20px;
`;
export const PriceNumber = styled.h2 `
color:#333;
font-size:40px;
font-weight:600;
`;
export const Time = styled.p `
color:#333;
font-size:17px;
font-weight:600;
`;
export const ListItem = styled.li `
color:#777;
text-align:left;
margin-bottom:20px;
margin-left:15px;
`;
export const Icon = styled.i `
color:#5B9DF8;
margin-right:10px;
`;
export const Btn = styled.button `
border: 2px solid #fe8464;
padding: 11px 40px;
border-radius: 53px;
background: #fff;
color: #fe8464;
font-weight: 600;
transition: 0.3s;
&:hover {
  background: #fe8464;
  border: 2px solid #fe8464;
  color: #fff;
}
`;
export const MainHeading = styled.h2 `
color:#333;
font-weight:600;

`;
export const MainP = styled.p `
color:#777;
line-height:1.9;
`;