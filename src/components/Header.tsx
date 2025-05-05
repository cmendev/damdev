import { motion } from "framer-motion";
import damdev from "../assets/damdev.png";
import { navItems } from "../data/header";

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={damdev.src} alt="DAMDEV S.A.S" className="h-10" /> 
        </motion.a>

        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <a href={item.href} className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Contacto
        </motion.a>
      </div>
    </header>
  );
}
