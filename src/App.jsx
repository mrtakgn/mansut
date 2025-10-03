import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import mansutLogo from './assets/mansut.png';
import { Link } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
// Shared stages data for Lezzetin Yolculuğu
const journeyStages = [
  {
    title: '1. Süt Toplama',
    img: 'https://www.avcitarim.com.tr/site/o/86025/2024/01/avci-tarim-06.jpg',
    desc: 'Mansüt Gıda olarak, en taze ve kaliteli sütleri yerel çiftçilerimizden özenle topluyoruz. Sütlerimiz, hijyenik koşullarda ve soğuk zincir bozulmadan fabrikamıza ulaştırılır.'
  },
  {
    title: '2. Analiz ve Kontrol',
    img: 'https://media.istockphoto.com/id/1453049364/tr/foto%C4%9Fraf/a-dairy-factory-worker-is-checking-on-milk-processing-machine-and-smiling-at-the-tablet.jpg?s=612x612&w=0&k=20&c=2qYY5E6y_qkbIEBXuM5RFrcqaqpbSynrjelcOxZRqkg=',
    desc: 'Fabrikamıza ulaşan sütler, laboratuvarlarımızda titizlikle analiz edilir. Kalite ve güvenlik standartlarına uygunluğu kontrol edilir.'
  },
  {
    title: '3. Pastörizasyon',
    img: 'https://media.istockphoto.com/id/183861941/tr/foto%C4%9Fraf/quality-control.jpg?s=612x612&w=0&k=20&c=y5G-OJK_72gYFRaaCAQ_FLsengW0yfN-TMXL6tk2YN8=',
    desc: 'Sütlerimiz, besin değerini koruyacak şekilde modern tesislerimizde pastörize edilir. Böylece hem sağlıklı hem de lezzetli ürünler elde edilir.'
  },
  {
    title: '4. Üretim ve Paketleme',
    img: 'https://atcprocess.com/images/upload/_1738952532.jpg',
    desc: 'Yoğurt, peynir, ayran ve diğer süt ürünlerimiz, hijyenik ortamlarda el değmeden üretilir ve özenle paketlenir.'
  },
  {
    title: '5. Dağıtım',
    img: 'https://img.freepik.com/foto-gratis/close-up-tangan-memegang-kotak_23-2149035949.jpg',
    desc: 'Ürünlerimiz, soğuk zincir araçlarımızla Türkiye’nin dört bir yanına tazeliğini koruyarak ulaştırılır.'
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Dark mode from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-mode', savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="header-sticky-wrap">
        <div className="logo-bar">
          <img src={mansutLogo} alt="Mansüt Gıda Logo" className="logo-img" />
          <span className="logo-text">Mansüt Gıda</span>
        </div>
        <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end onClick={closeMenu}>Anasayfa</NavLink>
          <NavLink to="/hakkimizda" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Hakkımızda</NavLink>
          <NavLink to="/urunlerimiz" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Ürünlerimiz</NavLink>
          
          <NavLink to="/bayiliklerimiz" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Bayiliklerimiz</NavLink>
          <NavLink to="/iletisim" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>İletişim</NavLink>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="page-container">
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  )
}

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 50,
      scale: 0.95
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -50,
      scale: 0.95
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
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

// Sayfa bileşenleri (şimdilik basit placeholder)
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef(null);
  const GAP = 0; // full-width slide, no gap

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % journeyStages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleDragEnd = (_e, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % journeyStages.length);
    } else if (info.offset.x > threshold) {
      setCurrentIndex((prev) => (prev - 1 + journeyStages.length) % journeyStages.length);
    }
  };
  return (
    <div className="page home-page">
      <div className="journey-slider">
        <div className="journey-slider-header">
          <h2>Lezzetin Yolculuğu</h2>
          <p>Çiftlikten sofraya uzanan özenli serüvenimizi kaydırarak keşfedin.</p>
        </div>
        <div className="journey-viewport" ref={sliderRef}>
          <motion.div
            className="journey-track"
            drag="x"
            dragConstraints={{ left: -(slideWidth + GAP) * (journeyStages.length - 1), right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * (slideWidth + GAP)) }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            {journeyStages.map((stage, idx) => (
              <div className="journey-card" key={idx}>
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
        <img src="https://media.istockphoto.com/id/1241482623/tr/foto%C4%9Fraf/s%C3%BCt-tereya%C4%9F%C4%B1-peynir-ile-s%C3%BCt-%C3%BCr%C3%BCn%C3%BC-%C3%A7e%C5%9Fitleri.jpg?s=612x612&w=0&k=20&c=j-YLhpGEiLJhyE4LV72ohufhHmWStSae8Qd8Pp4t-r8=" alt="Mansüt Gıda Süt Ürünleri" className="hero-img" />
        <div className="hero-content">
          <h1>Doğallığın ve Lezzetin Buluşma Noktası</h1>
          <p>Mansüt Gıda, taptaze süt ve süt ürünleriyle sofralarınıza sağlık ve lezzet getiriyor. Yerel çiftçilerden alınan sütler, modern tesislerimizde özenle işlenir ve Türkiye’nin dört bir yanına ulaştırılır.</p>
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

      {/* Lezzetin Yolculuğu Slider */}
      
    </div>
  );
}
function Hakkimizda()  {
  return (
    <div className="page about-page">
      <div className="about-header">
        <img src="https://media.istockphoto.com/id/513470606/tr/foto%C4%9Fraf/still-life-with-dairy-product.jpg?s=612x612&w=0&k=20&c=ktaf_2H_L_R54icBHiRcIEOoGETZX0TewrEi3pjvG6w=" alt="Mansüt Gıda Fabrika" className="about-img" />
        <div className="about-content">
          <h1>Hakkımızda</h1>
          <p>Mansüt Gıda, 1999 yılından bu yana süt ve süt ürünleri sektöründe faaliyet göstermektedir. Amacımız, en taze ve sağlıklı ürünleri, en yüksek kalite standartlarında sizlere sunmaktır. Doğaya ve insana saygılı üretim anlayışımızla, sürdürülebilir tarımı ve yerel çiftçileri destekliyoruz.</p>
          <ul>
            <li>25+ yıllık tecrübe</li>
            <li>Modern ve hijyenik üretim tesisleri</li>
            <li>Geniş ürün yelpazesi</li>
            <li>Türkiye genelinde yaygın dağıtım ağı</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
// LezzetYolculugu sayfası kaldırıldı
function Bayiliklerimiz() {
  return (
    <div className="page bayilikler-page">
      <h1>Bayiliklerimiz</h1>
      <p className="bayilikler-intro">Mansüt Gıda ailesine katılmak ve bayimiz olmak ister misiniz? Türkiye genelinde büyüyen dağıtım ağımızla iş ortaklarımıza destek sağlıyoruz.</p>
      <div className="bayi-list">
        <div className="bayi-card">
          <h3>İstanbul Avrupa</h3>
          <p>Yetkili: Ahmet Yılmaz<br/>Tel: 0212 123 45 67</p>
        </div>
        <div className="bayi-card">
          <h3>İzmir</h3>
          <p>Yetkili: Elif Demir<br/>Tel: 0232 987 65 43</p>
        </div>
        <div className="bayi-card">
          <h3>Antalya</h3>
          <p>Yetkili: Mehmet Kaya<br/>Tel: 0242 456 78 90</p>
        </div>
      </div>
      <div className="bayilik-basvuru">
        <h2>Bayilik Başvurusu</h2>
        <p>Bayilik başvurusu için <a href="mailto:info@mansutgida.com">info@mansutgida.com</a> adresine e-posta gönderebilir veya iletişim formumuzu kullanabilirsiniz.</p>
      </div>
    </div>
  );
}
function Urunlerimiz() {
  const productCategories = [
    {
      title: 'Süt Ürünleri',
      products: [
        { name: 'Tam Yağlı Süt', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80' },
        { name: 'Yarım Yağlı Süt', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80' },
        { name: 'Yağsız Süt', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80' },
        { name: 'Organik Süt', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80' },
      ]
    },
    {
      title: 'Yoğurt Çeşitleri',
      products: [
        { name: 'Tam Yağlı Yoğurt', image: 'https://lh6.googleusercontent.com/proxy/uzy16lM9qJz14mR9KBcfyJOpCPHcIZTRq0jjoqk96qd5CXJrJOFilfoomt0tp2Z9kG5sa6wVlZBsOjJgLJvXNa9z4hu_C_fPZCXACi5Tgrh9WAeN1SkTOPCum3CvpvDYK23SGAZlHbB0u7KkOqnLC7rhBRUnSzU' },
        { name: 'Yarım Yağlı Yoğurt', image: 'https://lh6.googleusercontent.com/proxy/uzy16lM9qJz14mR9KBcfyJOpCPHcIZTRq0jjoqk96qd5CXJrJOFilfoomt0tp2Z9kG5sa6wVlZBsOjJgLJvXNa9z4hu_C_fPZCXACi5Tgrh9WAeN1SkTOPCum3CvpvDYK23SGAZlHbB0u7KkOqnLC7rhBRUnSzU' },
        { name: 'Meyveli Yoğurt', image: 'https://lh6.googleusercontent.com/proxy/uzy16lM9qJz14mR9KBcfyJOpCPHcIZTRq0jjoqk96qd5CXJrJOFilfoomt0tp2Z9kG5sa6wVlZBsOjJgLJvXNa9z4hu_C_fPZCXACi5Tgrh9WAeN1SkTOPCum3CvpvDYK23SGAZlHbB0u7KkOqnLC7rhBRUnSzU' },
        { name: 'Organik Yoğurt', image: 'https://lh6.googleusercontent.com/proxy/uzy16lM9qJz14mR9KBcfyJOpCPHcIZTRq0jjoqk96qd5CXJrJOFilfoomt0tp2Z9kG5sa6wVlZBsOjJgLJvXNa9z4hu_C_fPZCXACi5Tgrh9WAeN1SkTOPCum3CvpvDYK23SGAZlHbB0u7KkOqnLC7rhBRUnSzU' },
        
      ]
    },
    {
      title: 'Peynir Çeşitleri',
      products: [
        { name: 'Beyaz Peynir', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80' },
        { name: 'Kaşar Peyniri', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80' },
        { name: 'Tulum Peyniri', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80' },
        { name: 'Lor Peyniri', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80' },
        
      ]
    },
    {
      title: 'İçecekler',
      products: [
        { name: 'Ayran', image: 'https://aygingurme.com/dimg/urun/78834ayran-yeni-cam-sise-.jpg' },
        { name: 'Kefir', image: 'https://aygingurme.com/dimg/urun/78834ayran-yeni-cam-sise-.jpg' },
        { name: 'Sütlü İçecekler', image: 'https://aygingurme.com/dimg/urun/78834ayran-yeni-cam-sise-.jpg' },
        { name: 'Meyveli Ayran', image: 'https://aygingurme.com/dimg/urun/78834ayran-yeni-cam-sise-.jpg' },
     
      ]
    }
  ];

  return (
    <div className="page urunler-page">
      <div className="products-header">
        <h1>Ürünlerimiz</h1>
        <p>Doğal ve katkısız süt ürünlerimizin geniş yelpazesini keşfedin</p>
      </div>
      
      <div className="product-categories">
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="product-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="products-grid">
              {category.products.map((product, productIndex) => (
                <motion.div 
                  key={productIndex} 
                  className="product-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: productIndex * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button className="product-btn">Detay</button>
                    </div>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="quality-badge">
        <h3>Kalite Garantisi</h3>
        <div className="quality-features">
          <div className="quality-item">
            <span className="quality-icon">✅</span>
            <span>Doğal ve Katkısız</span>
          </div>
          <div className="quality-item">
            <span className="quality-icon">🏆</span>
            <span>ISO Kalite Sertifikası</span>
          </div>
          <div className="quality-item">
            <span className="quality-icon">🌱</span>
            <span>Organik Üretim</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Iletisim() {
  return (
    <div className="page iletisim-page">
      <h1>İletişim</h1>
      <div className="contact-info">
        <div>
          <h3>Adres</h3>
          <p>Örnek Mah. Süt Cad. No:12, 34000 İstanbul</p>
        </div>
        <div>
          <h3>Telefon</h3>
          <p>0212 123 45 67</p>
        </div>
        <div>
          <h3>E-posta</h3>
          <p>info@mansutgida.com</p>
        </div>
        <div className="contact-socials">
          <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
            WhatsApp
          </a>
          <a href="https://instagram.com/mansutgida" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram" />
            Instagram
          </a>
        </div>
      </div>
      <form className="contact-form">
        <h2>Bize Ulaşın</h2>
        <input type="text" placeholder="Adınız Soyadınız" required />
        <input type="email" placeholder="E-posta Adresiniz" required />
        <textarea placeholder="Mesajınız" rows="5" required></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mansüt Gıda</h3>
          <p>Doğallığın ve lezzetin buluşma noktası. 25+ yıllık tecrübemizle sizlere en kaliteli süt ürünlerini sunuyoruz.</p>
          <div className="social-links">
            <a href="https://instagram.com/mansutgida" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href="mailto:info@mansutgida.com">📧 E-posta</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/urunlerimiz">Ürünlerimiz</a></li>
            <li><a href="/lezzet-yolculugu">Lezzetin Yolculuğu</a></li>
            <li><a href="/bayiliklerimiz">Bayiliklerimiz</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>İletişim Bilgileri</h4>
          <div className="contact-details">
            <p>📍 Örnek Mah. Süt Cad. No:12, 34000 İstanbul</p>
            <p>📞 0212 123 45 67</p>
            <p>✉️ info@mansutgida.com</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Mansüt Gıda. Tüm hakları saklıdır.</p>
        <p>Doğal, katkısız ve kaliteli süt ürünleri</p>
      </div>
    </footer>
  );
}

export default App
