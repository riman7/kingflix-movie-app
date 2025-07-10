import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#140e1b] text-white border-t border-[#34321f]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col items-center text-center">
          
          {/* Brand Section */}
          <div className="mb-5">
            <img className="w-28 mx-auto mb-4" src={logo} alt="Kingflix Logo" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Your ultimate destination for the latest, top-rated, and most popular movies across all genres. 
              Discover, watch, and enjoy unlimited entertainment with our curated collection of films from around the world.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-20">
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="w-6 h-6 text-amber-400 mb-2" />
              <span className="text-zinc-400 text-sm">rimanmahrjan7@gmail.com</span>
            </div>
            <div className="flex flex-col items-center">
              <PhoneIcon className="w-6 h-6 text-amber-400 mb-2" />
              <span className="text-zinc-400 text-sm">+977 9840511294</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-6 h-6 text-amber-400 mb-2" />
              <span className="text-zinc-400 text-sm">Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#34321f] bg-[#0f0a14]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Kingflix. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
