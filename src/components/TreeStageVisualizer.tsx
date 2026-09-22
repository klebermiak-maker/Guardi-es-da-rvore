import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, Sun, Sparkles, Award } from 'lucide-react';

interface TreeStageVisualizerProps {
  stage: number; // 0 to 5
  waterDrops: number;
  sunEnergy: number;
  streak: number;
}

const STAGE_NAMES = [
  'Semente Adubada na Terra',
  'Primeiro Brotinho Verde',
  'Muda Jovem em Crescimento',
  'Arbusto Frondoso',
  'Ipê Dourado Florescendo',
  'Grande Árvore da Vida e Fauna'
];

export const TreeStageVisualizer: React.FC<TreeStageVisualizerProps> = ({
  stage,
  waterDrops,
  sunEnergy,
  streak
}) => {
  const normalizedStage = Math.min(Math.max(stage, 0), 5);
  const progressPercent = Math.round((normalizedStage / 5) * 100);

  return (
    <div
      id="tree-visualizer-container"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-300 via-emerald-100 to-amber-100/70 p-5 shadow-lg border-2 border-emerald-300/60"
    >
      {/* Sun & Cloud Atmosphere */}
      <div className="absolute top-3 right-4 flex items-center gap-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="relative text-amber-400 drop-shadow-md"
        >
          <Sun className="w-12 h-12 fill-amber-300 stroke-amber-500" />
        </motion.div>
      </div>

      {/* Floating Cloud */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        className="absolute top-6 left-6 text-white/80 pointer-events-none text-2xl"
      >
        ☁️
      </motion.div>

      {/* Top Indicators: Water & Sun energy */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-900/80 backdrop-blur-sm text-emerald-100 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Fase {normalizedStage} de 5</span>
          </div>
          <h3 className="text-emerald-950 font-fun font-bold text-lg mt-1 tracking-tight">
            {STAGE_NAMES[normalizedStage]}
          </h3>
        </div>

        {/* Resources Stats */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-sky-100 border border-sky-300 text-sky-900 px-2.5 py-1 rounded-xl text-xs font-bold shadow-sm">
            <Droplet className="w-4 h-4 text-sky-600 fill-sky-500" />
            <span>{waterDrops} gotas</span>
          </div>
          <div className="flex items-center gap-1 bg-amber-100 border border-amber-300 text-amber-950 px-2.5 py-1 rounded-xl text-xs font-bold shadow-sm">
            <Sun className="w-4 h-4 text-amber-600 fill-amber-400" />
            <span>{sunEnergy} sol</span>
          </div>
          {streak >= 2 && (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center gap-1 bg-rose-500 text-white px-2 py-1 rounded-xl text-xs font-bold shadow-sm"
            >
              🔥 {streak}x Combo!
            </motion.div>
          )}
        </div>
      </div>

      {/* Interactive Tree SVG Canvas */}
      <div className="relative h-56 sm:h-64 w-full flex items-end justify-center">
        {/* Animated Fauna & Flora based on stage */}
        <AnimatePresence>
          {normalizedStage >= 4 && (
            <>
              {/* Butterflies */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                  x: [0, 8, -8, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-10 left-12 text-2xl pointer-events-none select-none"
              >
                🦋
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: [0, -15, 0],
                  x: [0, -10, 5, 0]
                }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute top-16 right-16 text-xl pointer-events-none select-none"
              >
                🦋
              </motion.div>
            </>
          )}
          {normalizedStage >= 5 && (
            <>
              {/* Tucano / Passarinho */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-12 left-1/2 -translate-x-16 text-3xl pointer-events-none select-none drop-shadow"
              >
                🦜
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }}
                className="absolute top-8 right-1/2 translate-x-20 text-2xl pointer-events-none select-none drop-shadow"
              >
                🐦
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Tree SVG */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full max-h-60 select-none overflow-visible"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="25%" stopColor="#22c55e" />
              <stop offset="60%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
            <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="45%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#5c2409" />
            </linearGradient>
            <linearGradient id="foliageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="ipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>

          {/* Rolling Soil and Grass */}
          <path
            d="M 0 260 Q 100 245 200 255 Q 300 245 400 260 L 400 300 L 0 300 Z"
            fill="url(#groundGrad)"
          />

          {/* Flowers on grass */}
          <circle cx="60" cy="255" r="4" fill="#fbbf24" />
          <circle cx="90" cy="260" r="3.5" fill="#f43f5e" />
          <circle cx="310" cy="258" r="4" fill="#38bdf8" />
          <circle cx="340" cy="254" r="3.5" fill="#fbbf24" />

          {/* STAGE 0: Semente na terra */}
          {normalizedStage === 0 && (
            <g id="tree-stage-0">
              <ellipse cx="200" cy="254" rx="14" ry="8" fill="#713f12" />
              <motion.circle
                animate={{ r: [6, 7.5, 6] }}
                transition={{ repeat: Infinity, duration: 2 }}
                cx="200"
                cy="252"
                fill="#fbbf24"
              />
              <text x="200" y="235" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">
                Regue com sabedoria! 🌱
              </text>
            </g>
          )}

          {/* STAGE 1: Primeiro broto */}
          {normalizedStage === 1 && (
            <g id="tree-stage-1">
              <path d="M 200 255 Q 200 230 198 220" stroke="#713f12" strokeWidth="4" strokeLinecap="round" fill="none" />
              <motion.path
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                d="M 198 220 Q 185 210 180 215 Q 185 228 198 220 Z"
                fill="#4ade80"
              />
              <motion.path
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                d="M 198 220 Q 212 210 218 215 Q 212 228 198 220 Z"
                fill="#22c55e"
              />
            </g>
          )}

          {/* STAGE 2: Muda jovem crescendo */}
          {normalizedStage === 2 && (
            <g id="tree-stage-2">
              <path d="M 197 255 Q 202 210 200 180" stroke="url(#trunkGrad)" strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M 200 205 Q 180 195 170 190" stroke="url(#trunkGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 200 195 Q 220 185 230 180" stroke="url(#trunkGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Leaves */}
              <circle cx="170" cy="188" r="16" fill="#22c55e" />
              <circle cx="230" cy="178" r="16" fill="#4ade80" />
              <circle cx="200" cy="170" r="22" fill="#15803d" />
            </g>
          )}

          {/* STAGE 3: Arbusto frondoso */}
          {normalizedStage === 3 && (
            <g id="tree-stage-3">
              {/* Trunk */}
              <path d="M 192 258 L 195 160 L 205 160 L 208 258 Z" fill="url(#trunkGrad)" />
              <path d="M 196 190 Q 165 170 150 160" stroke="url(#trunkGrad)" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M 204 185 Q 235 165 250 155" stroke="url(#trunkGrad)" strokeWidth="7" strokeLinecap="round" fill="none" />
              {/* Large Foliage Clusters */}
              <circle cx="150" cy="155" r="32" fill="#22c55e" opacity="0.95" />
              <circle cx="250" cy="150" r="32" fill="#22c55e" opacity="0.95" />
              <circle cx="200" cy="135" r="44" fill="url(#foliageGrad)" />
              <circle cx="175" cy="115" r="30" fill="#4ade80" />
              <circle cx="225" cy="115" r="30" fill="#86efac" />
            </g>
          )}

          {/* STAGE 4: Ipê Dourado Florescendo */}
          {normalizedStage === 4 && (
            <g id="tree-stage-4">
              {/* Mighty Trunk */}
              <path d="M 188 258 C 190 200 192 150 196 130 L 204 130 C 208 150 210 200 212 258 Z" fill="url(#trunkGrad)" />
              <path d="M 195 170 Q 140 145 125 125" stroke="url(#trunkGrad)" strokeWidth="9" strokeLinecap="round" fill="none" />
              <path d="M 205 165 Q 260 140 275 120" stroke="url(#trunkGrad)" strokeWidth="9" strokeLinecap="round" fill="none" />
              {/* Golden Ipê Blossoms */}
              <circle cx="125" cy="120" r="38" fill="url(#ipeGrad)" />
              <circle cx="275" cy="115" r="38" fill="url(#ipeGrad)" />
              <circle cx="200" cy="100" r="54" fill="url(#ipeGrad)" />
              <circle cx="160" cy="75" r="40" fill="#fef08a" />
              <circle cx="240" cy="75" r="40" fill="#fde047" />
              <circle cx="200" cy="55" r="36" fill="#facc15" />
              {/* Golden sparkles and falling petals */}
              <circle cx="140" cy="180" r="3" fill="#facc15" opacity="0.8" />
              <circle cx="260" cy="190" r="3" fill="#facc15" opacity="0.8" />
              <circle cx="180" cy="220" r="3" fill="#facc15" opacity="0.8" />
              <circle cx="220" cy="230" r="3" fill="#facc15" opacity="0.8" />
            </g>
          )}

          {/* STAGE 5: Grande Árvore da Vida Frondosa e Completa */}
          {normalizedStage === 5 && (
            <g id="tree-stage-5">
              {/* Giant Trunk with roots */}
              <path
                d="M 175 258 C 185 230 192 140 196 110 L 204 110 C 208 140 215 230 225 258 Z"
                fill="url(#trunkGrad)"
              />
              <path d="M 180 258 Q 165 262 145 264" stroke="#5c2409" strokeWidth="9" strokeLinecap="round" fill="none" />
              <path d="M 220 258 Q 235 262 255 264" stroke="#5c2409" strokeWidth="9" strokeLinecap="round" fill="none" />
              {/* Great Canopy with Fruits and Flowers */}
              <circle cx="115" cy="105" r="48" fill="#15803d" />
              <circle cx="285" cy="100" r="48" fill="#15803d" />
              <circle cx="198" cy="85" r="68" fill="url(#foliageGrad)" />
              <circle cx="150" cy="55" r="48" fill="#4ade80" />
              <circle cx="250" cy="55" r="48" fill="#86efac" />
              <circle cx="200" cy="35" r="42" fill="#22c55e" />

              {/* Fruits */}
              <circle cx="140" cy="70" r="5" fill="#f43f5e" />
              <circle cx="170" cy="50" r="5.5" fill="#f43f5e" />
              <circle cx="225" cy="45" r="5.5" fill="#f43f5e" />
              <circle cx="260" cy="75" r="5" fill="#f43f5e" />
              <circle cx="190" cy="100" r="5" fill="#f43f5e" />
              <circle cx="110" cy="120" r="5" fill="#f43f5e" />
              <circle cx="290" cy="115" r="5" fill="#f43f5e" />
            </g>
          )}
        </svg>
      </div>

      {/* Growth Progress Bar */}
      <div className="relative z-10 mt-3">
        <div className="flex items-center justify-between text-xs font-bold text-emerald-950 mb-1">
          <span>Progresso do Crescimento da Árvore</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full h-3 bg-emerald-900/20 rounded-full overflow-hidden p-0.5 backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};
