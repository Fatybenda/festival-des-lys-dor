import { useState, useEffect, useRef } from 'react';
// Ila tla3 error f 'motion/react', reddiha 'framer-motion'
import { motion, useScroll, useTransform, useInView } from 'motion/react'; 
import { Menu, X, Star, Clock, MapPin, Calendar, Users, Award, TrendingUp, Heart, Mail, Phone, Instagram, Facebook, Linkedin, ChevronDown, Sparkles, Crown, Target, Zap, Gift, Trophy, Check, ArrowRight, MousePointer2 } from 'lucide-react';

// ---------------------------------------------------------
// ✅ TAS7I7 L-IMAGES (ALL ONLINE URLS)
// ---------------------------------------------------------

// Logo (Crown Gold)
const logoImage = "https://cdn-icons-png.flaticon.com/512/5968/5968863.png"; 
// Logo UNICEF (Online)
const unicefLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Unicef_logo.png/800px-Unicef_logo.png"; 
// Logo White (Crown)
const logoWhite = "https://cdn-icons-png.flaticon.com/512/5968/5968863.png"; 
// Background Hero (Luxe Dark Red)
const heroBackground = "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1920&auto=format&fit=crop"; 

// ---------------------------------------------------------

// TikTok Icon Component
function TikTokIcon({ className }: { className?: string; }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

// Simple Image Component (Robust)
const SimpleImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
  <img src={src} alt={alt} className={className} onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400?text=Image+Introuvable"; }} />
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const artists = [
    {
      name: "Dr. Sophie Martin",
      role: "Conférencière",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      quote: "Le leadership commence par soi-même",
      achievements: ["TEDx Speaker", "Best-Seller Author", "Coach Certifiée"],
      social: { instagram: "https://www.instagram.com/", linkedin: "https://www.linkedin.com/" }
    },
    {
      name: "Jean-Claude Dubois",
      role: "Conférencier",
      category: "Développement Personnel",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      quote: "L'excellence est un voyage, pas une destination",
      achievements: ["CEO Fortune 500", "Mentor International", "Prix Excellence"],
      social: { instagram: "https://www.instagram.com/", linkedin: "https://www.linkedin.com/" }
    },
    {
      name: "Aïcha Kamara",
      role: "Conférencière",
      category: "Entrepreneuriat",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      quote: "Osez créer votre propre chemin",
      achievements: ["Forbes 30 Under 30", "Startup Founder", "Investisseuse"],
      social: { instagram: "https://www.instagram.com/", linkedin: "https://www.linkedin.com/" }
    },
    {
      name: "Chorale des Anges d'Or",
      role: "Performance Chorale",
      category: "Musique",
      // ✅ BDDLT HNA (Image Chorale)
      image: "https://images.unsplash.com/photo-1525926477800-7a3be5800d1c?q=80&w=1080&auto=format&fit=crop",
      quote: "La musique élève l'âme et inspire l'action",
      achievements: ["Prix Chorale 2024", "Tournée Internationale", "50+ Concerts"],
      social: { instagram: "https://www.instagram.com/", facebook: "https://web.facebook.com/" }
    },
    {
      name: "Marc Lefebvre",
      role: "Conférencier",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      quote: "Innover c'est oser repenser l'impossible",
      achievements: ["Tech Pioneer", "Patent Holder", "Keynote Speaker"],
      social: { instagram: "https://www.instagram.com/", linkedin: "https://www.linkedin.com/" }
    },
    {
      name: "Ensemble Harmonia",
      role: "Performance Chorale",
      category: "Musique",
      // ✅ BDDLT HNA (Image Orchestre)
      image: "https://images.unsplash.com/photo-1465847899078-b29edd5b714b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      quote: "Ensemble, créons une symphonie d'inspiration",
      achievements: ["Grammy Nominated", "World Tour", "Platinum Album"],
      social: { instagram: "https://www.instagram.com/", facebook: "https://web.facebook.com/" }
    }
  ];

  const tickets = [
    {
      id: 'general',
      name: 'Billet Général',
      price: 80,
      features: ['Accès à toutes les conférences', 'Performances chorales', 'Cocktail de bienvenue', 'Certificat de participation'],
      icon: Star,
      popular: false
    },
    {
      id: 'vip',
      name: 'Billet VIP',
      price: 100,
      features: ['Tous les avantages Général', 'Places réservées au premier rang', 'Meet & Greet avec les conférenciers', 'Dîner de gala inclus', 'Goodie bag exclusif'],
      icon: Crown,
      popular: true
    },
    {
      id: 'platine',
      name: 'Expérience Platine',
      price: 150,
      features: ['Tous les avantages VIP', 'Accès backstage exclusif', 'Session privée avec un conférencier', 'Photo officielle dédicacée', 'Reconnaissance sur le programme', 'Reçu fiscal pour don UNICEF'],
      icon: Trophy,
      popular: false
    }
  ];

  const sponsorPackages = [
    {
      level: 'Bronze',
      price: '5 000€',
      color: 'from-amber-600 to-amber-800',
      benefits: ['Logo sur le site web', 'Mention sur les réseaux sociaux', '2 billets VIP inclus', 'Reçu fiscal 66%']
    },
    {
      level: 'Argent',
      price: '10 000€',
      color: 'from-gray-400 to-gray-600',
      benefits: ['Tous avantages Bronze', 'Logo sur le programme', 'Stand au cocktail', '5 billets VIP inclus', 'Post dédié sur nos réseaux']
    },
    {
      level: 'Or',
      price: '25 000€',
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['Tous avantages Argent', 'Logo sur scène', 'Intervention de 5 min', '10 billets Platine', 'Article de presse dédié', 'Plaque de reconnaissance']
    },
    {
      level: 'Platine',
      price: '50 000€+',
      color: 'from-purple-400 to-purple-600',
      benefits: ['Tous avantages Or', 'Naming du festival', 'Table VIP dédiée (10 pers.)', 'Visibilité premium partout', 'Partenariat annuel', 'Impact social majeur']
    }
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&q=80",
      quote: "Une expérience transformatrice ! Les Lys d'Or m'ont permis de révéler mon potentiel et de rencontrer des leaders inspirants.",
      rating: 5
    },
    {
      name: "Thomas Bernard",
      role: "Directeur Commercial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
      quote: "Un événement d'exception dans un cadre somptueux. Les conférences sont de haute qualité et le networking exceptionnel.",
      rating: 5
    },
    {
      name: "Isabelle Moreau",
      role: "Coach Professionnelle",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=800&q=80",
      quote: "Le plus bel événement de développement personnel auquel j'ai assisté. L'énergie positive et l'engagement pour l'UNICEF sont remarquables.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header avec Logo Animé */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#8B3A3A]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Animé Sophistiqué */}
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                {/* Anneaux rotatifs */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#8B3A3A]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ width: '90px', height: '90px', left: '-5px', top: '-5px' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#D4A574]/50"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{ width: '90px', height: '90px', left: '-5px', top: '-5px' }}
                />
                
                {/* Glow pulsant */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#8B3A3A]/20 blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '90px', height: '90px', left: '-5px', top: '-5px' }}
                />
                
                {/* Particules flottantes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: '40px',
                      top: '40px',
                    }}
                    animate={{
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                {/* Logo image avec effet */}
                <motion.div
                  className="relative w-20 h-20 rounded-full overflow-hidden bg-white/5"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <img 
                    src={logoWhite}
                    alt="Festival des Lys d'Or Logo" 
                    className="w-full h-full object-contain p-2"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>
                
                {/* Crown icon animé */}
                <motion.div
                  className="absolute -top-1 -right-1 w-6 h-6 bg-[#D4A574] rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Crown className="w-3 h-3 text-black" />
                </motion.div>
              </div>
              
              <div className="flex flex-col">
                <motion.div 
                  className="text-xs tracking-[0.3em] bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  FESTIVAL DES
                </motion.div>
                <motion.div 
                  className="text-2xl tracking-[0.2em] bg-gradient-to-r from-[#8B3A3A] to-[#D4A574] bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(139, 58, 58, 0.5)',
                      '0 0 20px rgba(139, 58, 58, 0.8)',
                      '0 0 10px rgba(139, 58, 58, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LYS D'OR
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {['Accueil', 'À propos', 'Artistes', 'Programme', 'Billetterie', 'Sponsoring', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                  className="text-sm tracking-wider hover:text-[#8B3A3A] transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B3A3A] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="#billetterie"
                className="px-6 py-2 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full hover:shadow-lg hover:shadow-[#8B3A3A]/50 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10">Billets</span>
              </motion.a>
              <motion.a
                href="#sponsoring"
                className="px-6 py-2 border border-[#8B3A3A] rounded-full hover:bg-[#8B3A3A]/10 transition-all"
                whileHover={{ scale: 1.05, borderColor: '#D4A574' }}
                whileTap={{ scale: 0.95 }}
              >
                Devenir Sponsor
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg border border-[#8B3A3A] hover:bg-[#8B3A3A]/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {['Accueil', 'À propos', 'Artistes', 'Programme', 'Billetterie', 'Sponsoring', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                  className="block py-2 hover:text-[#8B3A3A] transition-colors"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#billetterie"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full text-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Acheter des Billets
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section Spectaculaire */}
      <section id="accueil" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background animé */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#8B3A3A]/30 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Particules flottantes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4A574] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Blob lumineux qui suit la souris */}
        <motion.div
          className="absolute w-96 h-96 bg-[#8B3A3A]/30 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {/* Contenu Hero */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-[#D4A574]" />
              </motion.div>
              <span className="text-sm tracking-[0.3em] text-[#D4A574]">9 JANVIER 2026 • PALAIS DES FESTIVALS • CANNES</span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-[#D4A574]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-white via-[#D4A574] to-white bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ letterSpacing: '0.1em' }}
          >
            RÉVEILLEZ LE
            <br />
            <span className="text-7xl md:text-9xl bg-gradient-to-r from-[#8B3A3A] via-[#D4A574] to-[#8B3A3A] bg-clip-text text-transparent">
              LEADER
            </span>
            <br />
            EN VOUS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Joignez-vous à nous pour célébrer l'accomplissement humain et soutenir l'UNICEF
            lors d'un événement exclusif au cœur de la French Riviera
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#billetterie"
              className="px-12 py-5 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full text-xl relative overflow-hidden group"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(139, 58, 58, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Réserver Ma Place
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>

            <motion.a
              href="#sponsoring"
              className="px-12 py-5 border-2 border-[#D4A574] rounded-full text-xl hover:bg-[#D4A574]/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, borderColor: '#8B3A3A' }}
              whileTap={{ scale: 0.95 }}
            >
              Devenir Sponsor
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { number: '500+', label: 'Participants attendus' },
              { number: '10+', label: 'Conférenciers d\'exception' },
              { number: '100%', label: 'Pour l\'UNICEF' },
              { number: '1', label: 'Expérience unique' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl bg-gradient-to-r from-[#8B3A3A] to-[#D4A574] bg-clip-text text-transparent mb-2"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(139, 58, 58, 0.3)',
                      '0 0 20px rgba(139, 58, 58, 0.6)',
                      '0 0 10px rgba(139, 58, 58, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#D4A574]" />
        </motion.div>
      </section>

      {/* À Propos Section */}
      <section id="a-propos" className="relative py-32 px-4 overflow-hidden">
        {/* Background Pattern Animé */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #8B3A3A 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbes flottants */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#8B3A3A]/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Crown className="w-5 h-5 text-[#D4A574]" />
                </motion.div>
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">À PROPOS</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
                Un Événement d'Exception
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Le Festival des Lys d'Or réunit leadership, développement personnel et philanthropie
                dans le cadre prestigieux du Palais des Festivals de Cannes
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: Target, 
                title: 'Notre Mission', 
                desc: 'Inspirer et équiper les leaders de demain tout en contribuant à l\'action humanitaire de l\'UNICEF',
                color: 'from-[#8B3A3A] to-[#6B2A2A]'
              },
              { 
                icon: Heart, 
                title: 'Impact Social', 
                desc: '100% des bénéfices reversés à l\'UNICEF pour soutenir les enfants dans le besoin à travers le monde',
                color: 'from-[#D4A574] to-[#B8935E]'
              },
              { 
                icon: Zap, 
                title: 'Excellence', 
                desc: 'Une programmation soigneusement sélectionnée avec les meilleurs conférenciers et artistes internationaux',
                color: 'from-[#9B4A4A] to-[#8B3A3A]'
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/5 to-transparent border border-[#8B3A3A]/20 backdrop-blur-sm group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(139, 58, 58, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Particules qui sortent */}
                  {[...Array(3)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute w-2 h-2 bg-[#D4A574] rounded-full"
                      style={{ top: '50%', left: '50%' }}
                      animate={{
                        x: [0, (j - 1) * 40],
                        y: [0, -60],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: j * 0.3
                      }}
                    />
                  ))}

                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ 
                        background: [
                          'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                          'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                          'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <item.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                  <h3 className="text-2xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>

                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Stats avec compteurs animés */}
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#8B3A3A]/5 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              {[
                { value: 500, suffix: '+', label: 'Leaders Réunis', icon: Users },
                { value: 10, suffix: '+', label: 'Conférenciers', icon: Award },
                { value: 100, suffix: '%', label: 'Pour l\'UNICEF', icon: Heart },
                { value: 1, suffix: '', label: 'Journée Inoubliable', icon: Trophy }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div className="flex justify-center mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <stat.icon className="w-8 h-8 text-[#D4A574]" />
                    </motion.div>
                  </motion.div>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-gray-400 tracking-wider mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Artistes Spectaculaire */}
      <section id="artistes" className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-black via-[#8B3A3A]/5 to-black">
        {/* Background animé */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #8B3A3A 25%, transparent 25%, transparent 75%, #8B3A3A 75%, #8B3A3A), linear-gradient(45deg, #8B3A3A 25%, transparent 25%, transparent 75%, #8B3A3A 75%, #8B3A3A)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
          animate={{ backgroundPosition: ['0 0, 30px 30px', '60px 60px, 90px 90px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbes géants */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8B3A3A]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4A574]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-5 h-5 text-[#D4A574]" />
                </motion.div>
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">NOS ARTISTES</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-[#D4A574] to-white bg-clip-text text-transparent tracking-wide">
                Conférenciers & Artistes
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Des personnalités inspirantes qui ont marqué le monde du leadership et de la performance
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, i) => (
              <ArtistCard key={i} artist={artist} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Programme Section */}
      <section id="programme" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">PROGRAMME</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
                Une Journée d'Exception
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { time: '09:00', title: 'Accueil & Cocktail de Bienvenue', desc: 'Networking dans le lobby du Palais des Festivals', icon: Users },
              { time: '10:00', title: 'Conférence d\'Ouverture', desc: 'Dr. Sophie Martin - "Le Leadership Authentique"', icon: Award },
              { time: '11:30', title: 'Performance Chorale', desc: 'Chorale des Anges d\'Or - Répertoire Inspirant', icon: Star },
              { time: '12:30', title: 'Déjeuner de Gala', desc: 'Menu gastronomique & Networking Premium', icon: Gift },
              { time: '14:00', title: 'Panel d\'Experts', desc: 'Entrepreneuriat & Innovation - Discussion Interactive', icon: TrendingUp },
              { time: '15:30', title: 'Masterclass', desc: 'Jean-Claude Dubois - "L\'Excellence au Quotidien"', icon: Target },
              { time: '17:00', title: 'Performance Finale', desc: 'Ensemble Harmonia - Célébration Musicale', icon: Star },
              { time: '18:30', title: 'Clôture & Remise des Certificats', desc: 'Cocktail de Clôture & Photos Officielles', icon: Trophy }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/20 backdrop-blur-sm group hover:border-[#D4A574]/50 transition-all"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B3A3A] to-[#6B2A2A] flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl text-[#D4A574] mb-2">{item.time}</div>
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                  <motion.div
                    className="flex-shrink-0 self-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Billetterie Section */}
      <section id="billetterie" className="relative py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Crown className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">BILLETTERIE</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
                Réservez Votre Place
              </h2>
              <p className="text-xl text-gray-400">Choisissez l'expérience qui vous correspond</p>
            </div>
          </AnimatedSection>

          {/* Tickets Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tickets.map((ticket, i) => (
              <AnimatedSection key={ticket.id}>
                <motion.div
                  className={`relative p-8 rounded-3xl border-2 backdrop-blur-sm ${
                    selectedTicket === ticket.id 
                      ? 'border-[#D4A574] bg-gradient-to-br from-[#8B3A3A]/20 to-[#D4A574]/10' 
                      : 'border-[#8B3A3A]/30 bg-gradient-to-br from-[#8B3A3A]/5 to-transparent'
                  } ${ticket.popular ? 'scale-105 shadow-2xl shadow-[#8B3A3A]/30' : ''}`}
                  whileHover={{ y: -10, scale: ticket.popular ? 1.08 : 1.05 }}
                  onClick={() => setSelectedTicket(ticket.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {ticket.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#D4A574] to-[#B8935E] rounded-full text-sm"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐ POPULAIRE
                    </motion.div>
                  )}

                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B3A3A] to-[#6B2A2A] flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ticket.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-2">{ticket.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <motion.span
                      className="text-5xl bg-gradient-to-r from-[#8B3A3A] to-[#D4A574] bg-clip-text text-transparent"
                      key={ticketQuantity}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      {ticket.price * ticketQuantity}€
                    </motion.span>
                    <span className="text-gray-400">/ billet</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: j * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://my.weezevent.com/festival-international-des-lys-dor-coach-transformation-awards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 rounded-full bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] text-white text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Réserver Maintenant
                  </motion.a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Call to Action pour Weezevent */}
          <AnimatedSection>
            <motion.div
              className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4A574] to-[#B8935E] flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Trophy className="w-10 h-10 text-black" />
              </motion.div>
              <h3 className="text-4xl mb-4">Prêt à Rejoindre l'Aventure ?</h3>
              <p className="text-xl text-gray-300 mb-8">Sécurisez votre place dès maintenant pour cet événement unique au Palais des Festivals de Cannes</p>
              <motion.a
                href="https://my.weezevent.com/festival-international-des-lys-dor-coach-transformation-awards"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-16 py-5 bg-gradient-to-r from-[#D4A574] to-[#B8935E] rounded-full text-2xl text-black relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Acheter Mes Billets
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.a>
              <p className="text-sm text-gray-400 mt-6">
                🔒 Paiement 100% sécurisé via Weezevent • 🎁 Reçu fiscal automatique • ✉️ Confirmation immédiate
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sponsoring Section */}
      <section id="sponsoring" className="relative py-32 px-4 bg-gradient-to-b from-black via-[#8B3A3A]/5 to-black">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Gift className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">SPONSORING</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
                Devenez Partenaire
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Associez votre marque à l'excellence et bénéficiez d'avantages fiscaux exceptionnels
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sponsorPackages.map((pkg, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  className="p-8 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className={`w-full h-2 rounded-full bg-gradient-to-r ${pkg.color} mb-6`}
                    animate={{ scaleX: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <h3 className="text-3xl mb-2">{pkg.level}</h3>
                  <div className="text-4xl text-[#D4A574] mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: j * 0.1 }}
                      >
                        <Check className="w-4 h-4 text-[#D4A574] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Formulaire Contact Sponsor */}
          <AnimatedSection>
            <motion.div
              className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              <h3 className="text-3xl mb-6 text-center">Demande de Partenariat</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Entreprise</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Secteur d'activité</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Contact</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-2 text-gray-300">Package souhaité</label>
                <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none">
                  <option>Bronze - 5 000€</option>
                  <option>Argent - 10 000€</option>
                  <option>Or - 25 000€</option>
                  <option>Platine - 50 000€+</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-2 text-gray-300">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
              </div>
              <motion.button
                className="w-full py-4 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full text-xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Envoyer la Demande 🤝</span>
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="temoignages" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">TÉMOIGNAGES</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
                Ce Qu'ils Disent de Nous
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  className="p-8 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <motion.div
                        key={j}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, delay: j * 0.2, repeat: Infinity, repeatDelay: 5 }}
                      >
                        <Star className="w-5 h-5 fill-[#D4A574] text-[#D4A574]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <SimpleImage src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 bg-gradient-to-b from-black via-[#8B3A3A]/5 to-black">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#8B3A3A]/10 border border-[#8B3A3A]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm tracking-[0.3em] text-[#D4A574]">CONTACT</span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
                Contactez-Nous
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-8">
                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30"
                  whileHover={{ x: 10 }}
                >
                  <MapPin className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Lieu</h3>
                    <p className="text-gray-400">Palais des Festivals et des Congrès<br />1 Boulevard de la Croisette<br />06400 Cannes, France</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Téléphone</h3>
                    <p className="text-gray-400">+33 (0)4 92 99 84 00</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-gray-400">contact@festivaldeslysdor.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30"
                  whileHover={{ x: 10 }}
                >
                  <Calendar className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Date</h3>
                    <p className="text-gray-400">Jeudi 9 Janvier 2026<br />9h00 - 19h00</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                className="p-8 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
              >
                <h3 className="text-2xl mb-6">Envoyez-nous un Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Nom complet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Sujet</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none">
                      <option>Question générale</option>
                      <option>Billetterie</option>
                      <option>Sponsoring</option>
                      <option>Presse & Média</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                  </div>
                  <motion.button
                    className="w-full py-4 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full text-xl relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Envoyer ✉️</span>
                  </motion.button>
                </div>

                {/* Newsletter */}
                <div className="mt-8 pt-8 border-t border-[#8B3A3A]/30">
                  <h4 className="text-xl mb-4">Newsletter</h4>
                  <p className="text-sm text-gray-400 mb-4">Recevez nos actualités et offres exclusives</p>
                  <div className="flex gap-2">
                    <input type="email" placeholder="Votre email" className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-[#8B3A3A]/30 focus:border-[#D4A574] outline-none" />
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-[#D4A574] to-[#B8935E] rounded-lg text-black"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      S'inscrire
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-[#8B3A3A]/30 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl mb-4 bg-gradient-to-r from-[#8B3A3A] to-[#D4A574] bg-clip-text text-transparent">Festival des Lys d'Or</h3>
              <p className="text-sm text-gray-400 mb-4">
                Un événement d'exception dédié au leadership et au développement personnel, au profit de l'UNICEF.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/p/DOAzznwiIPU/' },
                  { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61582480255699' },
                  { icon: TikTokIcon, href: 'https://www.tiktok.com/@festivaldeslysdor' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#8B3A3A]/20 border border-[#8B3A3A]/30 flex items-center justify-center hover:bg-[#8B3A3A]/40 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Accueil', 'À propos', 'Artistes', 'Programme', 'Billetterie', 'Sponsoring', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`} className="hover:text-[#D4A574] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Informations</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#D4A574] transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors">CGV</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors">Presse</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Partenaires</h4>
              <div className="space-y-4">
                <motion.div
                  className="flex flex-col gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={unicefLogo}
                    alt="UNICEF" 
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src={logoWhite}
                    alt="L'issd'or Coach Attrail" 
                    className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <p className="text-xs text-gray-500">
                  En partenariat avec l'UNICEF France pour soutenir les enfants dans le besoin.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#8B3A3A]/30 text-center text-sm text-gray-500">
            <p>&copy; 2025 Festival des Lys d'Or. Tous droits réservés.</p>
            <p className="mt-2">9 Janvier 2026 • Palais des Festivals • Cannes, France</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Composant pour les sections animées au scroll
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Composant Counter animé
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl bg-gradient-to-r from-[#8B3A3A] to-[#D4A574] bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
}

// Composant Artist Card avec tous les effets
function ArtistCard({ artist, index }: { artist: any; index: number }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="relative group cursor-pointer"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setShowModal(true)}
      >
        <div className="relative h-96 rounded-3xl overflow-hidden">
          {/* Image avec zoom parallax */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <SimpleImage 
              src={artist.image} 
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay gradient animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            whileHover={{ opacity: 0.8 }}
          />

          {/* Effet de scan qui traverse l'image */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B3A3A]/50 to-transparent h-32"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Particules qui montent */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#8B3A3A] rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                bottom: '0'
              }}
              animate={{
                y: [0, -400],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Badge catégorie animé */}
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-[#8B3A3A]/80 backdrop-blur-sm rounded-full flex items-center gap-2 border border-[#D4A574]/30"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-[#D4A574]" />
            </motion.div>
            <span className="text-xs">{artist.category}</span>
          </motion.div>

          {/* Contenu */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm px-3 py-1 bg-[#D4A574]/20 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
                {artist.role}
              </span>
            </div>
            <h3 className="text-2xl mb-2">{artist.name}</h3>
            <p className="text-sm text-gray-300 italic mb-3">"{artist.quote}"</p>
            
            {/* Achievements Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {artist.achievements.map((achievement: string, i: number) => (
                <motion.span
                  key={i}
                  className="text-xs px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-[#8B3A3A]/30"
                  whileHover={{ scale: 1.1, borderColor: '#D4A574' }}
                >
                  {achievement}
                </motion.span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {Object.entries(artist.social).map(([platform, link]) => {
                const Icon = platform === 'instagram' ? Instagram : platform === 'linkedin' ? Linkedin : Facebook;
                return (
                  <motion.a
                    key={platform}
                    href={link as string}
                    className="w-8 h-8 rounded-full bg-[#8B3A3A]/30 backdrop-blur-sm flex items-center justify-center border border-[#8B3A3A]/50 hover:border-[#D4A574]"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Bouton "En savoir plus" pulsant */}
          <motion.div
            className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B3A3A] to-[#D4A574] flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MousePointer2 className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="max-w-2xl w-full bg-gradient-to-br from-[#8B3A3A]/20 to-black border border-[#8B3A3A]/30 rounded-3xl p-8 backdrop-blur-sm"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                <SimpleImage src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm px-3 py-1 bg-[#D4A574]/20 rounded-full border border-[#D4A574]/30">
                    {artist.role}
                  </span>
                  <span className="text-sm px-3 py-1 bg-[#8B3A3A]/20 rounded-full border border-[#8B3A3A]/30">
                    {artist.category}
                  </span>
                </div>
                <h2 className="text-3xl mb-2">{artist.name}</h2>
                <p className="text-gray-300 italic mb-4">"{artist.quote}"</p>
                <div className="space-y-2">
                  {artist.achievements.map((achievement: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#D4A574]" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              className="mt-6 w-full py-3 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowModal(false)}
            >
              Fermer
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
