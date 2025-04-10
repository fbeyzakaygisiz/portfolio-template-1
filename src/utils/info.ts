const personalInfo = {
  name: "Şimal Sert",
  title: "İngilizce-Türkçe Çevirmen",
  email: "simalsert@gmail.com",
  about: "Diller ve kültürler arasındaki boşluğu kapatarak net, doğru ve bağlamsal olarak uygun çeviriler sunma konusunda uzmanım. İngilizce - Türkçe çeviri alanındaki uzmanlığımla, her projenin orijinal anlamını korurken hedef kitleyle de uyumlu olmasını sağlıyorum. Amacım, mesajınızı ister iş, ister edebi, ister kişisel kullanım için olsun; erişilebilir ve etkileyici hale getirmek. Kalite, hassasiyet ve iletişim sanatı konusunda kararlıyım.",

  socials: [
    {
      type: "linkedIn",
      username: "Şimal Sert",
      link: "https://www.linkedin.com/in/%C5%9Fimal-sert-48665b1b6/"
    },
    {
      type: "instagram",
      username: "ss_translation",
      link: "https://www.instagram.com/ss_translation/"
    },
  ],
};

const aboutSection = [
  {
    title: "Eğitim",
    items: [
      {
        title: "Çeviribilim Lisans Derecesi",
        subtitle: "İstanbul Okan Üniversitesi",
        tag: "2020–2025",
        details:
          "Çeviri kuramı, karşılaştırmalı dilbilim ve hukuk, tıp ve edebiyat alanlarında uzman çeviri eğitimi aldım. Altyazı ve yerelleştirme üzerine seçmeli dersler de aldım."
      },
      {
        title: "Erasmus+ Değişim Programı",
        subtitle: "University of Hildesheim",
        tag: "2023",
        details:
          "Bir dönem boyunca kültürlerarası iletişim, ileri düzey Almanca ve AB çeviri politikalarına odaklandım. Uluslararası akademik iş birliği konusunda pratik deneyim kazandım."
      }
    ]
  },
  {
    title: "Deneyim",
    items: [
      {
        title: "Serbest Çevirmen",
        tag: "2024–Günümüz"
      },
      {
        title: "Satın Alma Stajyeri",
        tag: "2024"
      },
      {
        title: "American Culture İngilizce Öğretmeni",
        tag: "2023"
      }
    ]
  },
  {
    title: "Yetenekler",
    items: [
      {
        title: "Diller",
        subtitle: "Akıcılık & Çalışma Düzeyi",
        tags: ["Türkçe (Ana Dil)", "İngilizce (Akıcı)", "Almanca (Orta)"]
      },
      {
        title: "Çeviri Araçları",
        subtitle: "CAT & Altyazı Yazılımları",
        tags: ["Smart Cat", "SDL Trados", "memoQ", "Aegisub", "Subtitle Edit", "Wordfast"]
      },
      {
        title: "Uzmanlık Alanları",
        subtitle: "Uzmanlık Konuları",
        tags: ["Hukuk", "Tıp", "Teknik", "Pazarlama", "Edebiyat"]
      },
      {
        title: "Kişisel Beceriler",
        subtitle: "Profesyonel Nitelikler",
        tags: ["Detaylara Dikkat", "Zamanında Teslim", "Kültürlerarası İletişim", "Uyum Sağlama"],
        details: "Hassasiyet, tutarlılık ve kısa sürede yüksek kaliteli çeviri teslimiyle tanınırım."
      }
    ]
  }
];

const servicesSection = [
  {
    id: "translation",
    title: "Çeviri",
    details: ["Hukuki belgeler", "Kitaplar", "Reklamlar"],
    imgSrc: "https://images.unsplash.com/photo-1719139931271-04c0284b0603?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    column: "1 / 8",
    row: "1 / 13",
  },
  {
    id: "localization",
    title: "Yerelleştirme",
    details: ["Web siteleri", "Uygulamalar", "Oyunlar"],
    imgSrc: "https://images.unsplash.com/photo-1512660029633-769b8fba8557?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    column: "8 / 13",
    row: "1 / 5",
  },
  {
    id: "proof",
    title: "Düzeltme",
    details: ["Akademik makaleler", "Pazarlama metinleri", "Teknik kılavuzlar"],
    imgSrc: "https://plus.unsplash.com/premium_photo-1668198395296-035ad11ab16b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    column: "8 /11",
    row: "5 / 13",
  },
  {
    id: "other",
    title: "Özel Hizmetler",
    details: ["Danışmanlık", "Seslendirme", "Özel talepler"],
    imgSrc: "https://plus.unsplash.com/premium_photo-1664298863627-cb6771bbbf21?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    column: "11/ 13",
    row: "5 / 13",
  }
];

export {
  personalInfo,
  aboutSection,
  servicesSection
};
