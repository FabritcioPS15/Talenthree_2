import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ShoppingCart, Monitor, Tag } from 'lucide-react'; // Importar icono para categoría
import { useCart } from '../../contexts/CartContext';

export interface CourseProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  students: number;
  rating: number;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  modality: 'Virtual' | 'Presencial' | 'Hibtido'; // Nueva propiedad
  category: 'Desarrollo Personal' | 'Formación Laboral' | 'Talleres y Diplomas' | 'Diplomados'; // Nueva propiedad
}

interface CourseCardProps {
  course: CourseProps;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: course.id,
      name: course.title,
      price: course.price,
      image: course.image,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-2 w-full max-w-[400px] min-h-[600px]">
      <Link to={`/cursos/${course.id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white rounded ${
            course.level === 'Principiante' ? 'bg-green-500' :
            course.level === 'Intermedio' ? 'bg-yellow-500' : 'bg-red-500'
          }`}>
            {course.level}
          </div>
        </div>
      </Link>
      
      <div className="p-8 flex flex-col h-[calc(100%-224px)]">
        <Link to={`/cursos/${course.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {course.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 flex-wrap gap-2">
          <div className="flex items-center mr-2">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center mr-4">
            <Users size={16} className="mr-1" />
            <span>{course.students} estudiantes</span>
          </div>
          <div className="flex items-center">
            <Monitor size={16} className="mr-1" />
            <span>{course.modality}</span>
          </div>
        </div>

        {/* Nueva sección para la categoría */}
        <div className="flex items-center mb-4">
          <Tag size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{course.category}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${i < Math.round(course.rating) 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
            ({course.rating.toFixed(1)})
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <Link 
              to={`/instructores/${course.instructor.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {course.instructor}
            </Link>
          </div>
          <div className="text-primary-700 dark:text-primary-400 font-bold">
            S/ {course.price.toFixed(2)}
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-md transition-colors"
        >
          <ShoppingCart size={18} className="mr-2" />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CourseCard;