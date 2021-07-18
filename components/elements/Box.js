import styled from 'styled-components'

const Box = styled.div`
  background: rgba(250, 250, 250, 0.5);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 16px;

  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333; 
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }

  a, a:visited, a:active {
    color: #EEE;
    text-decoration: none;
  }

  input { 
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  .image-input {
    width: 80%;
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px; 
    background-color: #0071BF;
  }

  .randomButton {
    margin-left: 2%;
    padding: 10px 12px;
    width: 18%;
  }
`;

export default Box;