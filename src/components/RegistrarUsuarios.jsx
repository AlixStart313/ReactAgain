import { useState } from "react";
import { Row,Col,Button,Form,InputGroup } from 'react-bootstrap';
import {addUserToFirestore} from './get-user'


function RegistrarUsuarios() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // Llamar a la función para registrar usuario en Firestore
    addUserToFirestore(formData.firstName, formData.lastName, formData.email);
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setOpen((prev) => !prev)}>Registrar usuario</Button>
      {open ? (
        <div>
          <h3>Registro</h3>

          <Form noValidate>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  onChange={handleInputChange}
                 // defaultValue="Nombre..."
                />
                <Form.Control.Feedback>Correcto</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  onChange={handleInputChange}
                  //defaultValue="."
                />
                <Form.Control.Feedback>Correcto</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" >
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa un correo electronico
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Button type="submit" onClick={handleRegister}>Registrar</Button>
          </Form>

        </div>



      )



        : null}
    </>
  );
}
export default RegistrarUsuarios;
