import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Moon, Sun, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import Logo from '../../medios/ttlogo.png';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    {
      name: 'Educación continua',
      path: '/cursos',
      subLinks: [
        { name: 'Desarrollo Personal', path: '/cursos?filter=desarrollo-personal' },
        { name: 'Formación Laboral', path: '/cursos?filter=formacion-laboral' },
        { name: 'Talleres y Diplomas', path: '/cursos?filter=talleres-diplomas' },
        { name: 'Diplomados', path: '/cursos?filter=diplomados' },
      ],
    },
    { name: 'Asesoría y Consultoría', path: '/instructores' },
    { name: 'Noticias y eventos', path: '/eventos' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isUserMenuOpen || isThemeMenuOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest('.user-menu') && !target.closest('.theme-menu')) {
          setIsUserMenuOpen(false);
          setIsThemeMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen, isThemeMenuOpen]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-2 border-b border-gray-100 dark:border-gray-800' 
      : 'bg-white/95 dark:bg-gray-900/95 py-3 border-b border-gray-100 dark:border-gray-800'
  }`;

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        delay: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring',
        stiffness: 300
      }
    })
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const mobileItemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    },
    closed: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.2
      }
    }
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    },
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <Link to="/" className="flex items-center">
              <div className="flex items-center text-primary-600 dark:text-primary-400">
                <img 
                  src={Logo}
                  alt="Logo Talenthree" 
                  className="h-8 w-8 object-contain -mt-2" 
                />
                <span className="ml-2 text-2xl font-bold tracking-tight">Talenthree</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Ahora completamente visible */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-700 dark:text-primary-400 font-semibold'
                      : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="activeNavItem"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>

  {/* Submenu */}
  {link.subLinks && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.path}
                        to={subLink.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.search.includes(subLink.path.split('?filter=')[1])
                            ? 'text-primary-700 dark:text-primary-400 font-semibold'
                            : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher - Desktop */}
            <motion.div 
              className="relative theme-menu hidden lg:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                aria-label="Cambiar tema"
              >
                {theme === 'light' ? (
                  <Sun size={20} />
                ) : theme === 'dark' ? (
                  <Moon size={20} />
                ) : (
                  <Laptop size={20} />
                )}
              </button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl py-1 z-50 border border-gray-200 dark:border-gray-700"
                  >
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setTheme('light');
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <Sun size={16} className="mr-2" />
                      Claro
                    </button>
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setTheme('dark');
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <Moon size={16} className="mr-2" />
                      Oscuro
                    </button>
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setTheme('system');
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <Laptop size={16} className="mr-2" />
                      Sistema
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Cart Link - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="hidden lg:block"
            >
              <Link
                to="/carrito"
                className="relative p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                aria-label="Ver carrito"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.10 -right-6 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>
            </motion.div>

            {/* User Menu - Desktop */}
            <motion.div 
              className="relative user-menu hidden lg:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                aria-label="Menú de usuario"
              >
                <User size={20} />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-xl py-1 z-50 border border-gray-200 dark:border-gray-700"
                  >
                    {isAuthenticated ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {user?.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {user?.email}
                          </p>
                        </div>
                        <Link
                          to="/perfil"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Mi Perfil
                        </Link>
                        <Link
                          to="/mis-cursos"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Mis Cursos
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                        >
                          Cerrar Sesión
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/iniciar-sesion"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Iniciar Sesión
                        </Link>
                        <Link
                          to="/registro"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Registrarse
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 shadow-2xl overflow-hidden font-sans"
          >
            <motion.div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={mobileItemVariants}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="mt-2 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className="block px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div variants={mobileItemVariants}>
                <hr className="border-gray-200 dark:border-gray-700 my-2" />
              </motion.div>

              {/* Theme Options in Mobile Menu */}
              <motion.div variants={mobileItemVariants} className="px-3 py-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tema</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === 'light'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Sun size={16} className="mr-2" />
                    Claro
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === 'dark'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Moon size={16} className="mr-2" />
                    Oscuro
                  </button>
                  <button
                    onClick={() => setTheme('system')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === 'system'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Laptop size={16} className="mr-2" />
                    Sistema
                  </button>
                </div>
              </motion.div>

              {/* Cart Link in Mobile Menu */}
              <motion.div variants={mobileItemVariants}>
                <Link
                  to="/carrito"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Carrito
                  {totalItems > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-2 bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              {/* User Options in Mobile Menu */}
              <motion.div variants={mobileItemVariants} className="px-3 py-2">
                {isAuthenticated ? (
                  <>
                    <div className="mb-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </p>
                    </div>
                    <Link
                      to="/perfil"
                      className="block px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Mi Perfil
                    </Link>
                    <Link
                      to="/mis-cursos"
                      className="block px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Mis Cursos
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                    >
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/iniciar-sesion"
                      className="block px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      to="/registro"
                      className="block px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrarse
                    </Link>
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;