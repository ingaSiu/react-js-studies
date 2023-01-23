import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 200;
  margin: 10px;
`;
const Simplediv = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const PageName = ({ title, children }) => {
  return (
    <Container>
      <Simplediv>
        <Name>{title}</Name>
      </Simplediv>
      <Simplediv>{children}</Simplediv>
    </Container>
  );
};

export default PageName;
