import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Shared stages data for Lezzetin Yolculuğu
const journeyStages = [
  {
    title: '1. Süt Toplama',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    desc: 'Mansüt Gıda olarak, en taze ve kaliteli sütleri yerel çiftçilerimizden özenle topluyoruz. Sütlerimiz, hijyenik koşullarda ve soğuk zincir bozulmadan fabrikamıza ulaştırılır.'
  },
  {
    title: '2. Analiz ve Kontrol',
    img: 'https://media.istockphoto.com/id/1453049364/tr/foto%C4%9Fraf/a-dairy-factory-worker-is-checking-on-milk-processing-machine-and-smiling-at-the-tablet.jpg?s=612x612&w=0&k=20&c=2qYY5E6y_qkbIEBXuM5RFrcqaqpbSynrjelcOxZRqkg=',
    desc: 'Fabrikamıza ulaşan sütler, laboratuvarlarımızda titizlikle analiz edilir. Kalite ve güvenlik standartlarına uygunluğu kontrol edilir.'
  },
  {
    title: '3. Pastörizasyon',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    desc: 'Sütlerimiz, besin değerini koruyacak şekilde modern tesislerimizde pastörize edilir. Böylece hem sağlıklı hem de lezzetli ürünler elde edilir.'
  },
  {
    title: '4. Üretim ve Paketleme',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    desc: 'Yoğurt, peynir, ayran ve diğer süt ürünlerimiz, hijyenik ortamlarda el değmeden üretilir ve özenle paketlenir.'
  },
  {
    title: '5. Dağıtım',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    desc: 'Ürünlerimiz, soğuk zincir araçlarımızla Türkiye\'nin dört bir yanına tazeliğini koruyarak ulaştırılır.'
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        setSlideWidth(width);
      }
    };
    
    // İlk yükleme ve pencere boyutu değiştiğinde genişliği güncelle
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    // Biraz gecikmeyle tekrar kontrol et (layout shift için)
    const timer = setTimeout(updateWidth, 100);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isDragging) return; // Drag sırasında otomatik geçiş yapma
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % journeyStages.length);
    }, 4000); // 4 saniyeye çıkardım
    
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (_e, info) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x < -threshold) {
      // Sağa kaydır
      setCurrentIndex((prev) => (prev + 1) % journeyStages.length);
    } else if (info.offset.x > threshold) {
      // Sola kaydır
      setCurrentIndex((prev) => (prev - 1 + journeyStages.length) % journeyStages.length);
    }
  };

  return (
    <div className="page home-page">
      {/* Lezzetin Yolculuğu Slider */}
      <div className="journey-slider">
        <div className="journey-slider-header">
          <h2>Lezzetin Yolculuğu</h2>
          <p>Çiftlikten sofraya uzanan özenli serüvenimizi kaydırarak keşfedin.</p>
        </div>
        <div className="journey-viewport" ref={sliderRef}>
          <motion.div
            className="journey-track"
            drag="x"
            dragConstraints={{ left: -(slideWidth * (journeyStages.length - 1)), right: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{ 
              x: slideWidth > 0 ? -(currentIndex * slideWidth) : 0 
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30 
            }}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {journeyStages.map((stage, idx) => (
              <div 
                className="journey-card" 
                key={idx}
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : '100%' }}
              >
                <img src={stage.img} alt={stage.title} />
                <div className="journey-info">
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="journey-dots">
          {journeyStages.map((_, i) => (
            <button key={i} className={i === currentIndex ? 'dot active' : 'dot'} onClick={() => setCurrentIndex(i)} aria-label={`Adım ${i+1}`}></button>
          ))}
        </div>
      </div>

      <div className="home-hero">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" alt="Mansüt Gıda Süt Ürünleri" className="hero-img" />
        <div className="hero-content">
          <h1>Doğallığın ve Lezzetin Buluşma Noktası</h1>
          <p>Mansüt Gıda, taptaze süt ve süt ürünleriyle sofralarınıza sağlık ve lezzet getiriyor. Yerel çiftçilerden alınan sütler, modern tesislerimizde özenle işlenir ve Türkiye'nin dört bir yanına ulaştırılır.</p>
          <Link to="/urunlerimiz" className='hero-btn'>Ürünlerimizi Keşfet</Link>
        </div>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/organic-food.png" alt="Doğal" />
          <h3>Doğal ve Katkısız</h3>
          <p>Ürünlerimizde doğallık ve katkısızlık ön planda. Sağlığınız için en iyisini sunuyoruz.</p>
        </div>
        <div className="feature-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2w_7kEI81KS1TrWF7wH-Lnd10PIjHgCrCA&s" alt="Çiftçi Destekli" />
          <h3>Çiftçi Destekli</h3>
          <p>Yerel üreticilerden alınan sütlerle hem kaliteyi hem de sürdürülebilirliği destekliyoruz.</p>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/checked-2--v1.png" alt="Kalite Kontrol" />
          <h3>Yüksek Kalite</h3>
          <p>Her aşamada titiz kalite kontrolü ile güvenilir ve lezzetli ürünler üretiyoruz.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

