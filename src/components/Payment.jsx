import React, { useState } from 'react';

const PaymentCardForm = () => {
  // Estados para manejar los valores de los campos del formulario
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      setErrorMessage('Por favor complete todos los campos.');
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setErrorMessage('El CVV debe tener 3 dígitos.');
      return;
    }

    if (!/\d{2}\/\d{2}/.test(expiryDate)) {
      setErrorMessage('La fecha de vencimiento debe tener el formato MM/YY.');
      return;
    }

    // Aquí iría la lógica para procesar el pago, como hacer una llamada API

    setErrorMessage(''); // Limpiar mensaje de error si la validación es exitosa
    alert('¡Pago procesado correctamente!');
  };

  return (
    <div className="payment-card-form">
      <h2>Ingreso de tarjeta de pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardHolder">Nombre del Titular</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Juan Pérez"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Número de Tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9101 1121"
            maxLength="16"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de Vencimiento</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" className="btn-submit">Pagar</button>
      </form>
    </div>
  );
};

export default PaymentCardForm;
