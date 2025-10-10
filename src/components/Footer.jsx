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

export default Footer;

