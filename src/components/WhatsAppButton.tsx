'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LangContext';

// TODO: Replace with your WhatsApp Business URL once the account is set up.
// Business URL format: https://wa.me/[your-business-number]
// You can also add a pre-filled message: https://wa.me/[number]?text=Hello%2C%20I%27m%20interested%20in%20your%20services
const WHATSAPP_URL = 'https://wa.me/972522424677';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const { lang } = useLang();
  const label = lang === 'he' ? 'כתבו לנו' : 'Chat with us';

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: lang === 'he' ? -8 : 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: lang === 'he' ? -8 : 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold text-white px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'rgba(5,5,8,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.div
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          boxShadow: '0 4px 28px rgba(37,211,102,0.4)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(37,211,102,0.4)' }}
          animate={{ scale: [1, 1.55, 1.55], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.3 }}
        />

        {/* WhatsApp SVG */}
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </motion.div>
    </a>
  );
}
