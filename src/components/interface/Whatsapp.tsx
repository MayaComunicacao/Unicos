import { SiWhatsapp } from 'react-icons/si';

const WhatsApp = () => {
  return (
    <a
      href="https://whatsapp.com"
      className="fixed bottom-6 right-6 z-50"
      aria-label="link para whatsapp"
    >
      <SiWhatsapp size={25} className="text-green-600" />
    </a>
  );
};

export default WhatsApp;
