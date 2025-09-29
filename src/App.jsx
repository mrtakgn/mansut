import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import mansutLogo from './assets/mansut.png';

function App() {
  return (
    <Router>
      <div className="header-sticky-wrap">
        <div className="logo-bar">
          {/* Logo görseli veya metni */}
          <img src={mansutLogo} alt="Mansüt Gıda Logo" className="logo-img" />
          <span className="logo-text">Mansüt Gıda</span>
        </div>
        <nav className="navbar">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>Anasayfa</NavLink>
          <NavLink to="/hakkimizda" className={({isActive}) => isActive ? 'active' : ''}>Hakkımızda</NavLink>
          <NavLink to="/lezzet-yolculugu" className={({isActive}) => isActive ? 'active' : ''}>Lezzetin Yolculuğu</NavLink>
          <NavLink to="/bayiliklerimiz" className={({isActive}) => isActive ? 'active' : ''}>Bayiliklerimiz</NavLink>
          <NavLink to="/iletisim" className={({isActive}) => isActive ? 'active' : ''}>İletişim</NavLink>
        </nav>
      </div>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/lezzet-yolculugu" element={<LezzetYolculugu />} />
          <Route path="/bayiliklerimiz" element={<Bayiliklerimiz />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </div>
    </Router>
  )
}

// Sayfa bileşenleri (şimdilik basit placeholder)
function Home() {
  return (
    <div className="page home-page">
      <div className="home-hero">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" alt="Mansüt Gıda Süt Ürünleri" className="hero-img" />
        <div className="hero-content">
          <h1>Doğallığın ve Lezzetin Buluşma Noktası</h1>
          <p>Mansüt Gıda, taptaze süt ve süt ürünleriyle sofralarınıza sağlık ve lezzet getiriyor. Yerel çiftçilerden alınan sütler, modern tesislerimizde özenle işlenir ve Türkiye’nin dört bir yanına ulaştırılır.</p>
          <a href="/lezzet-yolculugu" className="hero-btn">Lezzetin Yolculuğu</a>
        </div>
      </div>
      <div className="home-features">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/organic-food.png" alt="Doğal" />
          <h3>Doğal ve Katkısız</h3>
          <p>Ürünlerimizde doğallık ve katkısızlık ön planda. Sağlığınız için en iyisini sunuyoruz.</p>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/color/96/000000/farmer.png" alt="Çiftçi Destekli" />
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

function Hakkimizda() {
  return (
    <div className="page about-page">
      <div className="about-header">
        <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80" alt="Mansüt Gıda Fabrika" className="about-img" />
        <div className="about-content">
          <h1>Hakkımızda</h1>
          <p>Mansüt Gıda, 1998 yılından bu yana süt ve süt ürünleri sektöründe faaliyet göstermektedir. Amacımız, en taze ve sağlıklı ürünleri, en yüksek kalite standartlarında sizlere sunmaktır. Doğaya ve insana saygılı üretim anlayışımızla, sürdürülebilir tarımı ve yerel çiftçileri destekliyoruz.</p>
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

function LezzetYolculugu() {
  const stages = [
    {
      title: '1. Süt Toplama',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      desc: 'Mansüt Gıda olarak, en taze ve kaliteli sütleri yerel çiftçilerimizden özenle topluyoruz. Sütlerimiz, hijyenik koşullarda ve soğuk zincir bozulmadan fabrikamıza ulaştırılır.'
    },
    {
      title: '2. Analiz ve Kontrol',
      img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
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
      desc: 'Ürünlerimiz, soğuk zincir araçlarımızla Türkiye’nin dört bir yanına tazeliğini koruyarak ulaştırılır.'
    },
  ];
  return (
    <div className="lezzet-yolculugu">
      <h1>Lezzetin Yolculuğu</h1>
      <p className="intro">Mansüt Gıda’da süt ürünlerinin sofranıza ulaşana kadar geçtiği aşamaları keşfedin.</p>
      <div className="stages">
        {stages.map((stage, i) => (
          <div className="stage-card" key={i}>
            <img src={stage.img} alt={stage.title} />
            <div className="stage-info">
              <h2>{stage.title}</h2>
              <p>{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
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
        <div className="bayi-card">
          <h3>Ankara</h3>
          <p>Yetkili: Zeynep Koç<br/>Tel: 0312 234 56 78</p>
        </div>
      </div>
      <div className="bayilik-basvuru">
        <h2>Bayilik Başvurusu</h2>
        <p>Bayilik başvurusu için <a href="mailto:info@mansutgida.com">info@mansutgida.com</a> adresine e-posta gönderebilir veya iletişim formumuzu kullanabilirsiniz.</p>
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
export default App
