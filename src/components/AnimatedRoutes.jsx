import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import Hakkimizda from '../pages/Hakkimizda';
import Urunlerimiz from '../pages/Urunlerimiz';
import Bayiliklerimiz from '../pages/Bayiliklerimiz';
import Iletisim from '../pages/Iletisim';

function AnimatedRoutes() {
  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -10
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.2
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ willChange: 'opacity, transform' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/urunlerimiz" element={<Urunlerimiz />} />
          <Route path="/bayiliklerimiz" element={<Bayiliklerimiz />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

