import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hablemos de tu <span className="text-blue-600">proyecto</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              ¿Listo para transformar tus ideas en realidad? Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-2xl">📧</div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <a href="mailto:contacto@damdev.com" className="text-gray-600 hover:text-blue-600">
                    contacto@damdev.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-2xl">📱</div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <a href="https://wa.me/573001234567" className="text-gray-600 hover:text-blue-600">
                    +57 300 123 4567
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              // Aquí puedes integrar un servicio como EmailJS, Formspree o tu backend
              alert("Formulario enviado");
            }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
