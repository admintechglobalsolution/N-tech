import { FaWhatsapp } from 'react-icons/fa6';
//contact details
import { contactDetails } from '@/utils/contact';

const ContactButtons = () => {
  const { whatsapp } = contactDetails;
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-12 items-center justify-center rounded-full bg-[#29a71a] text-white shadow-lg transition-all duration-300 hover:bg-green-400"
      >
        <FaWhatsapp strokeWidth={15} className="size-7" />
      </a>
    </div>
  );
};

export default ContactButtons;
