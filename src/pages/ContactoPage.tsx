import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, BookOpen, Briefcase, Users, Globe } from 'lucide-react';

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.02 }
};

const ContactoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="dark:bg-gray-900">
      {/* Sección Hero */}
      <section className="relative bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Equipo trabajando"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contáctanos
          </motion.h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Transforma tu carrera con nuestra guía experta. Estamos aquí para ayudarte en cada paso.
          </p>
        </motion.div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Columna de Información */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <motion.img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Equipo de soporte"
                  className="mt-8 rounded-xl shadow-lg h-64 w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative"
            >
              <img
                src="/contact-form.svg"
                alt="Ilustración contacto"
                className="absolute -top-20 -right-10 w-40 opacity-10 hidden lg:block"
              />
              <h2 className="text-3xl font-bold mb-8">Envíanos un Mensaje</h2>
              
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-8 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
                  >
                    ✔️ Mensaje enviado correctamente
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block mb-2 font-medium">Nombre completo</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent"
                      placeholder="Tu nombre"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label className="block mb-2 font-medium">Correo electrónico</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent"
                      placeholder="tu@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block mb-2 font-medium">Asunto</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent"
                    placeholder="¿Cómo podemos ayudarte?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block mb-2 font-medium">Mensaje</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent"
                    placeholder="Describe tu consulta o proyecto..."
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-8 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-primary-100 dark:bg-primary-900/20 p-4 rounded-2xl mb-6">
              <MapPin size={48} className="text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Ubicación</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Visita nuestras modernas instalaciones en el corazón de la ciudad
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-gray-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8882445535416!2d-99.16891198453357!3d19.42702074608173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2e8f1c45e3%3A0x5d1a2dd9091d94c5!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1sen!2smx!4v1717373723059!5m2!1sen!2smx"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <img
              src="/faq-illustration.svg"
              alt="Preguntas frecuentes"
              className="mx-auto mb-8 h-40"
            />
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Respuestas rápidas a tus consultas más comunes
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 gap-6"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 pl-16">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Datos para las secciones
const contactInfo = [
  {
    icon: <MapPin className="text-primary-600 dark:text-primary-400" size={24} />,
    title: 'Oficina Principal',
    content: 'Av. Innovación 456, Torre T3\nPlaza Central, Nivel 12\nCiudad de México, CDMX 03810'
  },
  {
    icon: <Mail className="text-primary-600 dark:text-primary-400" size={24} />,
    title: 'Correo Electrónico',
    content: 'contacto@talenthree.com\nsoporte@talenthree.com'
  },
  {
    icon: <Phone className="text-primary-600 dark:text-primary-400" size={24} />,
    title: 'Teléfono',
    content: '+52 55 1234 5678\nHorario: L-V 9:00 - 18:00'
  }
];

const faqItems = [
  {
    icon: <BookOpen className="text-primary-600 dark:text-primary-400" size={20} />,
    question: '¿Cómo accedo a mis cursos?',
    answer: 'Todos los cursos están disponibles inmediatamente después de la compra en tu área personal. Recibirás un correo con las instrucciones de acceso.'
  },
  {
    icon: <Briefcase className="text-primary-600 dark:text-primary-400" size={20} />,
    question: '¿Ofrecen certificados?',
    answer: 'Sí, todos nuestros cursos incluyen certificado digital válido internacionalmente que puedes descargar al completar el 100% del curso.'
  },
  {
    icon: <Users className="text-primary-600 dark:text-primary-400" size={20} />,
    question: '¿Tienen programas empresariales?',
    answer: 'Ofrecemos planes corporativos con descuentos especiales para equipos de +5 personas. Contáctanos para una cotización personalizada.'
  },
  {
    icon: <Globe className="text-primary-600 dark:text-primary-400" size={20} />,
    question: '¿Disponible en otros países?',
    answer: 'Nuestra plataforma está disponible globalmente con soporte en múltiples idiomas. Todos los precios se muestran en dólares americanos (USD).'
  }
];

export default ContactoPage;