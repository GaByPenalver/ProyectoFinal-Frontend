import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Footer from './Footer';

const NuevoRegistro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleGoogleSignIn = () => {
  };

  return (
    <section>
    <h1 class="title"> Regístrate ¡Es gratis!</h1>
  
    <Form className="form" onSubmit={handleSubmit}>
      <div>
        <Form.Control type="text" id="nombre" name="nombre" placeholder="Nombre" required />
      </div>
  
      <div>
        <Form.Control type="text" id="apellido" name="apellido" placeholder="Apellido" required />
      </div>
  
      <div>
        <Form.Control type="email" id="email" name="email" placeholder="Email" required />
      </div>
  
      <div>
        <Form.Control type="password" id="password" name="password" placeholder="Contraseña" required />
      </div>
  
      <div>
        <Form.Control type="password" id="confirm-password" name="confirm-password" placeholder="Confirma tu contraseña" required />
      </div>
  <br />
      <div>
        <Button type="submit">Crea tu cuenta</Button>
      </div>
  

      <p>¿Ya tienes una cuenta? <Link to="/login"><b>Inicia sesión</b></Link></p>
    </Form>
  
    <Footer />
  </section>
  
  );
};

export default NuevoRegistro;
