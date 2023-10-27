import styled from 'styled-components';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Logo from './Logo';

const getCurrentYear = () => new Date().getFullYear();

const StyledFooter = styled.div`
  bottom: 0;
  padding: 10px;
  background-color: #313131;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Introduce = styled.div`
  font-size: 19px;
  p {
    color: #986C4A;
  }
`;

const IconContainer = styled.div`
  display: flex;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 7px solid #986C4A;
  background-color: white;
  margin-left: 15px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Inner>
        <Introduce>
          <p>CHAN COFFEE - &#169; {getCurrentYear()}</p>
        </Introduce>
        <Logo />
        <IconContainer>
          <IconLink href="/">
            <AiFillFacebook size="40" />
          </IconLink>
          <IconLink href="/">
            <AiFillInstagram size="40" />
          </IconLink>
          <IconLink href="/">
            <AiFillYoutube size="40" />
          </IconLink>
        </IconContainer>
      </Inner>
    </StyledFooter>
  );
};

export default Footer;