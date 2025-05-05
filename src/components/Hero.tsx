import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Desarrollo de software{" "}
            <span className="text-blue-600">a la medida</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-10 max-w-2xl"
            variants={itemVariants}
          >
            Soluciones tecnológicas personalizadas que impulsan tu negocio.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Habla con nosotros
            </a>
            <a
              href="#services"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-colors"
            >
              Nuestros servicios
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
