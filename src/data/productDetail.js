const productDetails = [
    {
      name: "THE HARMONY",
      description: "Inspired by Sauvage Dior",
      image: "/images/men4.jpg",
      category: "men",
      sizes: ["50ml", "100ml"],
      oldPrice: 2390,
      newPrice: 2090,
      reviews: 851,
      rating: 5,
      badges: [
        "🔒 400,000+ Happy customers",
        "📦 Easy Return & Exchange",
        "🚚 Fast delivery all over Pakistan",
        "✅ Product ready to ship",
      ],
      images: [
        "/images/men4.jpg",
      ],
      testers: ["Tester A", "Tester B", "Tester C"],
    },
    {
      name: "Cuban Cocktail",
      description: "Limited Edition",
      image: "/images/men3.jpg",
      category: "men",
      sizes: ["50ml", "100ml"],
      oldPrice: 2499,
      newPrice: 1890,
      reviews: 88,
      rating: 4.5,
      badges: ["Fast selling!", "Cool & Casual"],
      images: ["/images/men3.jpg"],
      testers: ["Cuban Sample"],
    },
    {
      name: "MUSK POWER",
      description: "Long-lasting masculine scent",
      image: "/images/men2.jpg",
      category: "men",
      sizes: ["15ml", "50ml", "100ml"],
      oldPrice: 2290,
      newPrice: 1890,
      reviews: 620,
      rating: 4.7,
      badges: ["Top Rated", "All Day Strength"],
      images: ["/images/men2.jpg"],
      testers: ["Power Tester"],
    },
    {
      name: "MIDNIGHT WARRIOR",
      description: "Bold and intense night perfume",
      image: "/images/men1.jpg",
      category: "men",
      sizes: ["50ml", "100ml"],
      oldPrice: 2590,
      newPrice: 2190,
      reviews: 950,
      rating: 4.8,
      badges: ["🔥 Best for Parties"],
      images: ["/images/men1.jpg"],
      testers: ["Midnight Sample"],
    },
    {
      name: "OUD LEGEND",
      description: "Rich oriental blend with oud",
      image: "/images/men5.jpg",
      category: "men",
      sizes: ["50ml", "100ml"],
      oldPrice: 2790,
      newPrice: 2290,
      reviews: 1120,
      rating: 5,
      badges: ["Luxury Fragrance", "Inspired by Arabian Nights"],
      images: ["/images/men5.jpg"],
      testers: ["Oud Trial"],
    },
    {
      name: "WILD RUSH",
      description: "Energetic citrusy day scent",
      image: "/images/men6.jpg",
      category: "men",
      sizes: ["15ml", "50ml"],
      oldPrice: 1990,
      newPrice: 1690,
      reviews: 470,
      rating: 4.6,
      badges: ["Zesty & Fresh"],
      images: ["/images/men6.jpg"],
      testers: ["Rush Mini"],
    },
    {
      name: "ROYAL EMBRACE",
      description: "Regal mix of musk & spice",
      image: "/images/men7.jpg",
      category: "men",
      sizes: ["50ml", "100ml"],
      oldPrice: 2490,
      newPrice: 2090,
      reviews: 720,
      rating: 4.7,
      badges: ["Elegant & Bold"],
      images: ["/images/men7.jpg"],
      testers: ["Royal Trial"],
    },
    {
      name: "DESERT STORM",
      description: "Fresh & woody blend for strong men",
      image: "/images/men8.jpg",
      category: "men",
      sizes: ["15ml", "50ml", "100ml"],
      oldPrice: 2690,
      newPrice: 2190,
      reviews: 860,
      rating: 4.9,
      badges: ["Strong Performance", "Great Longevity"],
      images: ["/images/men8.jpg"],
      testers: ["Desert Sample"],
    },
  
    {
      name: "THE QUEEN",
      description: "Victoria Secret Bombshell",
      image: "/images/women1.jpg",
      category: "women",
      sizes: ["15ml", "50ml", "100ml"],
      oldPrice: 2290,
      newPrice: 1890,
      reviews: 1136,
      rating: 5,
      badges: ["👑 Best Seller", "Elegant Feminine Touch"],
      images: ["/images/women1.jpg"],
      testers: ["Queen Tester"],
    },
    {
      name: "ROSE VAULT",
      description: "Inspired by Gucci Flora",
      image: "/images/women2.jpg",
      category: "women",
      sizes: ["15ml", "50ml", "100ml"],
      oldPrice: 2290,
      newPrice: 1890,
      reviews: 562,
      rating: 4.5,
      badges: ["🌸 Floral Burst"],
      images: ["/images/women2.jpg"],
      testers: ["Rose Sample"],
    },
    {
      name: "FLORAL BLISS",
      description: "Delicate floral bouquet",
      image: "/images/women3.jpg",
      category: "women",
      sizes: ["50ml", "100ml"],
      oldPrice: 2190,
      newPrice: 1790,
      reviews: 700,
      rating: 4.6,
      badges: ["Fresh & Light", "All Day Wear"],
      images: ["/images/women3.jpg"],
      testers: ["Bliss Tester"],
    },
    {
      name: "GOLDEN GLAM",
      description: "Rich amber and vanilla notes",
      image: "/images/women4.jpg",
      category: "women",
      sizes: ["15ml", "50ml", "100ml"],
      oldPrice: 2490,
      newPrice: 1990,
      reviews: 840,
      rating: 4.8,
      badges: ["Glamorous Scent", "Long Lasting"],
      images: ["/images/women4.jpg"],
      testers: ["Glam Sample"],
    },
    {
      name: "VELVET BLOOM",
      description: "Smooth floral and musky finish",
      image: "/images/women5.jpg",
      category: "women",
      sizes: ["50ml", "100ml"],
      oldPrice: 2390,
      newPrice: 1990,
      reviews: 920,
      rating: 4.7,
      badges: ["Silky Touch", "Romantic Evening"],
      images: ["/images/women5.jpg"],
      testers: ["Velvet Tester"],
    },
    {
      name: "PEACH PARADISE",
      description: "Fresh fruity floral vibe",
      image: "/images/women6.jpg",
      category: "women",
      sizes: ["15ml", "50ml"],
      oldPrice: 2090,
      newPrice: 1690,
      reviews: 610,
      rating: 4.4,
      badges: ["Fruity Freshness"],
      images: ["/images/women6.jpg"],
      testers: ["Peachy Sample"],
    },
    {
      name: "LADY MYSTIQUE",
      description: "Mysterious jasmine and patchouli",
      image: "/images/women7.jpg",
      category: "women",
      sizes: ["50ml", "100ml"],
      oldPrice: 2590,
      newPrice: 2190,
      reviews: 1020,
      rating: 4.9,
      badges: ["Mysterious & Alluring"],
      images: ["/images/women7.jpg"],
      testers: ["Mystique Trial"],
    },
    {
      name: "SUGAR DUST",
      description: "Playful and sweet vanilla",
      image: "/images/women8.png",
      category: "women",
      sizes: ["15ml", "50ml", "100ml"],
      oldPrice: 1990,
      newPrice: 1690,
      reviews: 488,
      rating: 4.3,
      badges: ["🍬 Sweet Scent"],
      images: ["/images/women8.png"],
      testers: ["Sugar Tester"],
    },
  ];
  
  export default productDetails;
  