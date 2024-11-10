import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Clientes = () => {

  // This function will handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic for form submission goes here
  };

  return (
    <section>
      <h1 className="title">Inicio Sesión</h1>

      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <Form.Control 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter email"
            required 
          />
        </div>

        <div>
          <Form.Control 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Password" 
            required 
          />
        </div>
      <br />

        <div>
          <Button type="submit">Iniciar sesión</Button>
        </div>

        <p>¿No tienes una cuenta? <Link to="/login"><b>Crear cuenta</b></Link></p>
      </Form>

      <Footer />
    </section>
  );
};

export default Clientes;
