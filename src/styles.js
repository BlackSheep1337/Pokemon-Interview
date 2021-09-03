import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 500px;
  }
  h3 {
    margin-top: 30px;
  }
  button {
    margin-top: 60px;
  }
  article {
    margin-top: 30px;
    width: 300px;
    height: 400px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-weight: 900;
      font-size: 35px;
    }
    img {
      width: 200px;
      object-fit: cover;
    }
    .info {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: 12px;

    }
    span {
      margin-right: 30px;
      font-size: 20px;
      font-weight: 600;
      color: gray;
    }
    &:hover {
        cursor: pointer;
      }
  }
`;