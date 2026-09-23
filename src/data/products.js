const products = [
  {
    id: 1,
    title: "Midnight Bloom",
    category: "Music",
    price: 12.99,

    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85",

    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85",
    ],

    description:
      "A collection of atmospheric sounds for late nights and slow mornings.",

    longDescription:
      "Midnight Bloom is a carefully curated collection created for quiet evenings, late-night thoughts and slow mornings. Combining atmospheric textures with warm instrumentation, the collection creates an immersive listening experience.",

    details: [
      "4 original tracks",
      "Digital album",
      "High-quality audio",
      "Instant download",
    ],

    rating: 4.6,

    reviews: [
      {
        id: 1,
        name: "Arjun",
        rating: 5,
        comment:
          "Beautiful atmosphere. I have been listening to it while working every evening.",
      },
      {
        id: 2,
        name: "Maya",
        rating: 4,
        comment:
          "Really relaxing collection. The production quality is excellent.",
      },
      {
        id: 3,
        name: "Daniel",
        rating: 5,
        comment: "Exactly the kind of music I was looking for.",
      },
    ],
  },

  {
    id: 2,
    title: "After Dark",
    category: "Music",
    price: 14.99,

    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=85",

    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85",
    ],

    description: "An intimate collection of warm, textured sounds.",

    longDescription:
      "After Dark explores warm tones, intimate melodies and subtle electronic textures. It is designed for those moments when the world becomes quiet and music takes centre stage.",

    details: [
      "5 original tracks",
      "Digital album",
      "High-quality audio",
      "Instant download",
    ],

    rating: 4.4,

    reviews: [
      {
        id: 1,
        name: "Rahul",
        rating: 5,
        comment: "Very atmospheric and beautifully produced.",
      },
      {
        id: 2,
        name: "Sophia",
        rating: 4,
        comment: "A great album for relaxing after work.",
      },
    ],
  },

  {
    id: 3,
    title: "Infinite",
    category: "Music",
    price: 9.99,

    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",

    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    ],

    description:
      "Four carefully produced tracks inspired by movement and space.",

    longDescription:
      "Infinite is a compact collection inspired by movement, space and the feeling of being somewhere completely new.",

    details: [
      "4 original tracks",
      "Digital album",
      "High-quality audio",
      "Instant download",
    ],

    rating: 4.8,

    reviews: [
      {
        id: 1,
        name: "Aisha",
        rating: 5,
        comment: "Short but incredibly memorable.",
      },
      {
        id: 2,
        name: "Vikram",
        rating: 5,
        comment: "The production is fantastic.",
      },
    ],
  },

  {
    id: 4,
    title: "Blue Hour",
    category: "Music",
    price: 19.99,

    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",

    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
    ],

    description: "A cinematic listening experience for quiet evenings.",

    longDescription:
      "Blue Hour is an atmospheric collection inspired by the short period between daylight and night.",

    details: [
      "6 original tracks",
      "Digital album",
      "High-quality audio",
      "Instant download",
    ],

    rating: 4.7,

    reviews: [
      {
        id: 1,
        name: "Neha",
        rating: 5,
        comment: "The perfect evening soundtrack.",
      },
      {
        id: 2,
        name: "Chris",
        rating: 4,
        comment: "Very cinematic and immersive.",
      },
    ],
  },

  {
    id: 5,
    title: "Signature Tee",
    category: "Merch",
    price: 29.99,

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=85",
    ],

    description: "Heavyweight cotton tee with a minimal Generics logo.",

    longDescription:
      "Our Signature Tee is made from heavyweight cotton with a relaxed silhouette and minimal branding.",

    details: [
      "100% cotton",
      "Relaxed fit",
      "Machine washable",
      "Unisex design",
    ],

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Aditya",
        rating: 5,
        comment: "The material feels much better than I expected.",
      },
      {
        id: 2,
        name: "Sam",
        rating: 4,
        comment: "Great fit and very comfortable.",
      },
    ],
  },

  {
    id: 6,
    title: "Everyday Mug",
    category: "Merch",
    price: 16.99,

    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=85",

    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    ],

    description: "A simple ceramic mug made for your everyday coffee ritual.",

    longDescription:
      "A minimal ceramic mug designed to become part of your everyday routine. Simple, sturdy and comfortable to hold.",

    details: ["Ceramic", "350ml capacity", "Dishwasher safe", "Microwave safe"],

    rating: 4.6,

    reviews: [
      {
        id: 1,
        name: "Priya",
        rating: 5,
        comment: "Looks beautiful on my desk.",
      },
      {
        id: 2,
        name: "David",
        rating: 4,
        comment: "Simple design and good quality.",
      },
    ],
  },
];

export default products;
