interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  hrefPath: string;
  hasDiscount?: boolean;
  discountPercent?: number;
  category: "men" | "women" | "both";
  isFavourited: boolean;
  searchTerms: string[];
  availableSizes: number[];
}

export const products: Product[] = [
  {
    productId: 1,
    productName: "Fall Limited Edition Sneakers",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.",
    productPrice: 125.0,
    productImage: "/images/product-1-images/product-1-image-1.jpg",
    hrefPath: "/products/fall-shoe",
    hasDiscount: true,
    discountPercent: 50,
    category: "both",
    isFavourited: false,
    searchTerms: [
      "fall shoe",
      "fall sneaker",
      "limited edition",
      "fall",
      "casual",
      "unisex",
    ],
    availableSizes: [6, 7, 8, 9, 10, 11],
  },
  {
    productId: 2,
    productName: "EmberStride Classic",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.",
    productPrice: 149.0,
    productImage: "/images/product-4-images/product-4-image-1.webp",
    hrefPath: "/products/emberstrideclassic",
    category: "men",
    isFavourited: false,
    searchTerms: [
      "emberstride classic",
      "emberstride",
      "classic sneaker",
      "ember classic",
      "men",
      "trainer",
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
  },
  {
    productId: 3,
    productName: "EmberStride MAX",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.",
    productPrice: 250.0,
    productImage: "/images/product-2-images/product-2-image-1.webp",
    hrefPath: "/products/emberstridemax",
    category: "men",
    isFavourited: true,
    searchTerms: [
      "EmberStride",
      "Ember",
      "EmberMAX",
      "Ember Max",
      "Ember Stride Max",
      "Mens",
      "Sport",
      "max",
      "sneaker",
      "running",
      "running shoe",
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
  },
  {
    productId: 4,
    productName: "CitrusStride Classic",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.",
    productPrice: 149.0,
    productImage: "/images/product-3-images/product-3-image-1.webp",
    hrefPath: "/products/citrusstrideclassic",
    category: "women",
    isFavourited: true,
    searchTerms: [
      "citrusstride classic",
      "citrusstride",
      "classic citrus",
      "cistrus",
      "Women",
      "womens",
      "yellow",
    ],
    availableSizes: [5, 6, 7, 8, 9],
  },
];
