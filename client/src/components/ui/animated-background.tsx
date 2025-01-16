import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden animated-bg-gradient">
      {/* Floating circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `rgba(var(--primary-rgb), ${0.15 - i * 0.03})`,
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            filter: 'blur(60px)',
            willChange: 'transform'
          }}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            scale: 0.8,
            opacity: 0.3
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Main gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 20%, rgba(var(--primary-rgb), 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 80%, rgba(var(--primary-rgb), 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 20%, rgba(var(--primary-rgb), 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}