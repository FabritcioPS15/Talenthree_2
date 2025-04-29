import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, Heart, Zap } from 'lucide-react';

const NosotrosPage: React.FC = () => {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Datos
  const values = [
    { icon: BookOpen, title: "Aprendizaje Continuo", description: "Creemos en la mejora constante y la actualización permanente" },
    { icon: Users, title: "Trabajo en Equipo", description: "Colaboración y diversidad como pilares del éxito" },
    { icon: Award, title: "Excelencia", description: "Buscamos la máxima calidad en todo lo que hacemos" },
    { icon: Target, title: "Enfoque Práctico", description: "Aprendizaje aplicado a situaciones reales" },
    { icon: Heart, title: "Pasión por la Tech", description: "Entusiasmo por la tecnología y su potencial" },
    { icon: Zap, title: "Innovación", description: "Buscamos siempre nuevas formas de resolver problemas" }
  ];

  const timeline = [
    { year: "2019", title: "Fundación", description: "Nacimos como proyecto educativo en Buenos Aires" },
    { year: "2020", title: "Plataforma Online", description: "Lanzamiento de nuestra primera versión digital" },
    { year: "2022", title: "Expansión Regional", description: "Llegamos a 5 países de Latinoamérica" },
    { year: "2023", title: "Reconocimiento", description: "Premio a Mejor Startup EdTech en LatAm" }
  ];

  const team = [
    { name: "María Gómez", role: "CEO & Fundadora", photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
    { name: "Carlos Ríos", role: "CTO", photo: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg" },
    { name: "Ana Lira", role: "Directora Educativa", photo: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg" },
    { name: "Diego Paz", role: "Community Manager", photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" }
  ];

  return (
    <div className="dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Conoce nuestra historia<span className="text-secondary-200"></span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Transformando carreras tecnológicas a través de la educación práctica y la comunidad
          </p>
        </motion.div>
      </section>
      {/* Nueva sección Acerca de Nosotros */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Acerca de TalentThree</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                En TalentThree, somos pioneros en la transformación del desarrollo profesional y 
                organizacional. Desde nuestra fundación en 2019, hemos ayudado a más de 10,000 
                profesionales y 500 empresas a alcanzar su máximo potencial mediante soluciones 
                innovadoras en:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Desarrollo de talento humano</li>
                <li>Capacitación especializada</li>
                <li>Consultoría organizacional</li>
                <li>Tecnologías educativas de vanguardia</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <img 
                src="https://images.pexels.com/photos/7691647/pexels-photo-7691647.jpeg" 
                alt="Equipo TalentThree" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestra Misión</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Impulsar el crecimiento y éxito de las personas y organizaciones mediante soluciones
integrales de gestión del talento humano, desarrollo organizacional y formación profesional.
Ofreciendo servicios de alta calidad, personalizados y orientados a resultados, que permitan
a nuestros clientes alcanzar su máximo potencial y adaptarse.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
                alt="Equipo trabajando" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12 items-center mt-20"
          >
            <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestra Visión</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Ser la plataforma educativa y consultora líder en gestión del talento y desarrollo
              organizacional, reconocida por transformar empresas y profesionales.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/8869369/pexels-photo-8869369.jpeg" 
                alt="Estudiantes colaborando" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestros Valores</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Principios fundamentales que guían cada decisión y acción en TalentThree
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <Icon className="w-8 h-8 text-white dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestra Historia</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              De startup local a referente regional en educación tecnológica
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative border-l-2 border-primary-500 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-8 pb-8"
          >
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[29px] top-4" />
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Conoce al Equipo</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Apasionados por la educación y la tecnología
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 dark:text-white">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;