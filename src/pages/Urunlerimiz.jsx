import { motion } from 'framer-motion';

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
        { name: 'Tam Yağlı Yoğurt', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80' },
        { name: 'Yarım Yağlı Yoğurt', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80' },
        { name: 'Meyveli Yoğurt', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80' },
        { name: 'Organik Yoğurt', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80' },
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
        { name: 'Ayran', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&q=80' },
        { name: 'Kefir', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&q=80' },
        { name: 'Sütlü İçecekler', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&q=80' },
        { name: 'Meyveli Ayran', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&q=80' },
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

export default Urunlerimiz;

