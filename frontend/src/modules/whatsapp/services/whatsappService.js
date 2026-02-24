// WhatsApp Service
const whatsappService = {
  sendMessage: async (message, recipients) => {
    try {
      const response = await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, recipients }),
      });
      return response.json();
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      throw error;
    }
  },
};

export default whatsappService;
