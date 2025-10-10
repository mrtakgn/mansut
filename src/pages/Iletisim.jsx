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

export default Iletisim;

