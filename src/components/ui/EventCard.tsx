import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';

export interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  isFeatured?: boolean;
}

interface EventCardProps {
  event: EventProps;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Function to format date from ISO string to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-2">
      <Link to={`/eventos/${event.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {event.isFeatured && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
              Destacado
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/eventos/${event.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
            {event.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <Link
          to={`/eventos/${event.id}`}
          className="inline-block w-full text-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default EventCard;