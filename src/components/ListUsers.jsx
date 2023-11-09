import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

function ListUsers({ users }) {
  return (
    <>
      <Container fluid="md">
        <Row >
          {users.map((user) => (
            <Col key={user.id}>
              <Card className="mx-3 my-2">
                <Row>
                  <Col>
                    <Image src={user.avatar} roundedCircle />
                  </Col>
                  <Col>
                    <Card.Body>{user.first_name + ' ' + user.last_name}</Card.Body>
                    <Button onClick={() => alert(user.email)}>Más informacion</Button>
                  </Col>
                </Row>


              </Card>
            </Col>
          ))}

        </Row>
      </Container>

    </>
  )
}

export default ListUsers;