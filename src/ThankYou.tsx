import { motion } from 'motion/react';
import { Check, Calendar, MapPin, Mail, Phone, Instagram, Facebook, Download, Home, Share2 } from 'lucide-react';
import logoImage from 'figma:asset/9ab779b35ed966d080afa957efd95a8c6f5382a2.png';
import unicefLogo from 'figma:asset/abc4dc601dfb46935d45d2212503d0e77379a25b.png';
import logoWhite from 'figma:asset/653941d440b716d6b2af3def7935b304fe4a2853.png';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Confetti Animation Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#D4A574] to-[#8B3A3A] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              x: [0, (Math.random() - 0.5) * 200],
              rotate: [0, 360],
              opacity: [1, 0.7, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#8B3A3A]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#8B3A3A]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ width: '90px', height: '90px', left: '-5px', top: '-5px' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#8B3A3A]/20 blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '90px', height: '90px', left: '-5px', top: '-5px' }}
                />
                <motion.div
                  className="relative w-20 h-20 rounded-full overflow-hidden"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <img 
                    src={logoImage}
                    alt="L'issd'or Coach Attrail - Festival des Lys d'Or Logo" 
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
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
                >
                  LYS D'OR
                </motion.div>
              </div>
            </motion.div>

            <motion.a
              href="/"
              className="px-6 py-2 border border-[#8B3A3A] rounded-full hover:bg-[#8B3A3A]/10 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-4 h-4" />
              Retour au site
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-4xl w-full">
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4A574] to-[#B8935E] flex items-center justify-center relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-[#D4A574]/20 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Check className="w-16 h-16 text-black relative z-10" strokeWidth={3} />
            </motion.div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#D4A574] via-white to-[#D4A574] bg-clip-text text-transparent tracking-wide">
              Merci pour votre réservation !
            </h1>
            <p className="text-2xl text-gray-300 mb-4">Votre place est confirmée 🎉</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Nous sommes ravis de vous accueillir au Festival des Lys d'Or. Vous allez recevoir un email de confirmation avec tous les détails.
            </p>
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/10 to-transparent border border-[#8B3A3A]/30 backdrop-blur-sm mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl mb-6 text-center bg-gradient-to-r from-[#8B3A3A] to-[#D4A574] bg-clip-text text-transparent">
              Détails de l'Événement
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/5 to-transparent border border-[#8B3A3A]/20"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Calendar className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-1">Date & Heure</h3>
                  <p className="text-gray-400">Jeudi 9 Janvier 2026</p>
                  <p className="text-gray-400">9h00 - 19h00</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/5 to-transparent border border-[#8B3A3A]/20"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <MapPin className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-1">Lieu</h3>
                  <p className="text-gray-400">Palais des Festivals</p>
                  <p className="text-gray-400">1 Bd de la Croisette</p>
                  <p className="text-gray-400">06400 Cannes, France</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/5 to-transparent border border-[#8B3A3A]/20"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Mail className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-1">Email</h3>
                  <p className="text-gray-400">contact@festivaldeslysdor.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#8B3A3A]/5 to-transparent border border-[#8B3A3A]/20"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Phone className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-1">Téléphone</h3>
                  <p className="text-gray-400">+33 (0)4 92 99 84 00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#8B3A3A] to-[#6B2A2A] rounded-full text-lg flex items-center justify-center gap-3 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Télécharger mon billet</span>
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-[#D4A574] rounded-full text-lg flex items-center justify-center gap-3 hover:bg-[#D4A574]/10 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Share2 className="w-5 h-5" />
              <span>Partager avec mes amis</span>
            </motion.button>
          </motion.div>

          {/* Social Media Follow */}
          <motion.div
            className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/5 to-transparent border border-[#8B3A3A]/20 backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl mb-4">Restez Connecté</h3>
            <p className="text-gray-400 mb-6">Suivez-nous pour ne rien manquer des actualités du festival</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/p/DOAzznwiIPU/', label: 'Instagram' },
                { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61582480255699', label: 'Facebook' },
                { icon: TikTokIcon, href: 'https://www.tiktok.com/@festivaldeslysdor', label: 'TikTok' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#8B3A3A]/20 border border-[#8B3A3A]/30 flex items-center justify-center hover:bg-[#8B3A3A]/40 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-sm text-gray-500 mb-6">En partenariat avec</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <motion.img 
                src={unicefLogo}
                alt="UNICEF" 
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img 
                src={logoWhite}
                alt="L'issd'or Coach Attrail" 
                className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-6 bg-black/80 backdrop-blur-lg border-t border-[#8B3A3A]/20 text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <p className="text-sm text-gray-400">
          💖 Merci de soutenir l'UNICEF • 🎫 Votre billet a été envoyé par email • ✨ À très bientôt à Cannes !
        </p>
      </motion.div>
    </div>
  );
}
