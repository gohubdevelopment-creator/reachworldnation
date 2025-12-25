import { useEffect } from 'react';

/**
 * StarryBackground - Sky Canvas Component
 * Creates a starry night sky background with vignette effect
 * to give the feeling that "the website is built on the sky itself"
 */
const StarryBackground = ({ children, className = '' }) => {
  // Inject twinkling animation keyframes
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      @keyframes twinkle-medium {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes twinkle-bright {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
    `;

    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
      // Animations already exist
    }
  }, []);

  // Base starry gradient
  const starryGradient = {
    background: 'linear-gradient(135deg, #0a1a3f 0%, #1D4ED8 50%, #2563eb 100%)',
  };

  // Vignette overlay - darker at edges, lighter at center (sky canvas effect)
  const vignetteOverlay = {
    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 26, 63, 0.4) 50%, rgba(10, 26, 63, 0.8) 100%)',
    pointerEvents: 'none',
  };

  // Star Layer 1 - Small distant stars
  const starPattern1 = {
    backgroundImage: `
      radial-gradient(2px 2px at 20px 30px, white, transparent),
      radial-gradient(2px 2px at 60px 70px, white, transparent),
      radial-gradient(1px 1px at 50px 50px, white, transparent),
      radial-gradient(1px 1px at 130px 80px, white, transparent),
      radial-gradient(2px 2px at 90px 10px, white, transparent),
      radial-gradient(1px 1px at 40px 60px, white, transparent),
      radial-gradient(1px 1px at 110px 90px, white, transparent),
      radial-gradient(2px 2px at 150px 30px, white, transparent),
      radial-gradient(1px 1px at 70px 100px, white, transparent),
      radial-gradient(2px 2px at 10px 120px, white, transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    animation: 'twinkle 4s ease-in-out infinite',
    opacity: 0.5,
    pointerEvents: 'none',
  };

  // Star Layer 2 - Medium stars
  const starPattern2 = {
    backgroundImage: `
      radial-gradient(3px 3px at 100px 50px, rgba(255, 255, 255, 0.9), transparent),
      radial-gradient(2px 2px at 200px 100px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(3px 3px at 50px 150px, rgba(255, 255, 255, 0.9), transparent),
      radial-gradient(2px 2px at 150px 20px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(2px 2px at 30px 80px, rgba(255, 255, 255, 0.8), transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '250px 250px',
    animation: 'twinkle-medium 5s ease-in-out infinite 1s',
    opacity: 0.6,
    pointerEvents: 'none',
  };

  // Star Layer 3 - Large bright stars
  const starPattern3 = {
    backgroundImage: `
      radial-gradient(4px 4px at 80px 80px, rgba(255, 255, 255, 1), transparent),
      radial-gradient(3px 3px at 180px 60px, rgba(255, 255, 255, 0.9), transparent),
      radial-gradient(4px 4px at 120px 140px, rgba(255, 255, 255, 1), transparent),
      radial-gradient(3px 3px at 40px 30px, rgba(251, 191, 36, 0.8), transparent),
      radial-gradient(4px 4px at 220px 120px, rgba(255, 255, 255, 0.95), transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '300px 300px',
    animation: 'twinkle-bright 6s ease-in-out infinite 2s',
    opacity: 0.8,
    pointerEvents: 'none',
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={starryGradient}>
      {/* Vignette Overlay - Creates "sky canvas" effect (darker edges) */}
      <div className="absolute inset-0" style={vignetteOverlay} />

      {/* Star Layer 1 - Small distant stars */}
      <div className="absolute inset-0" style={starPattern1} />

      {/* Star Layer 2 - Medium stars */}
      <div className="absolute inset-0" style={starPattern2} />

      {/* Star Layer 3 - Large bright stars */}
      <div className="absolute inset-0" style={starPattern3} />

      {/* Content wrapper with proper z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarryBackground;
