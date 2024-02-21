// WhatsAppChatWidget.js
import React from 'react';
import { Button } from 'react-bootstrap';

const WhatsAppChatWidget = () => {
  const openWhatsAppChat = () => {
    // Replace '1234567890' with the actual phone number
    const phoneNumber = '1234567890';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={openWhatsAppChat} variant="success">
      <i className="fa fa-whatsapp whatsapp-icon"></i>
      </Button>
    </div>
  );
};

export default WhatsAppChatWidget;
