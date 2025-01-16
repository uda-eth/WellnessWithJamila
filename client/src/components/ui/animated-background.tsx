import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 animated-bg-gradient">
      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(var(--primary-rgb), ${0.3 - i * 0.05}), transparent)`,
            width: `${400 + i * 100}px`,
            height: `${400 + i * 100}px`,
            filter: 'blur(100px)',
            willChange: 'transform'
          }}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            scale: 0.8,
            opacity: 0.4
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}