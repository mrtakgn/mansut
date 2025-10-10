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

export default Bayiliklerimiz;

