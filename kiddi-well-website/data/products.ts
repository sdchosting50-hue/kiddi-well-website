export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Rice & Vegetables',
    price: 299,
    category: 'Cereals',
    description: 'Gentle blend of organic rice with mixed vegetables, perfect for your baby\'s first foods.',
    image: '/images/cereal-product.jpg',
    slug: 'organic-rice-vegetables',
  },
  {
    id: '2',
    name: 'Apple & Banana Puree',
    price: 249,
    category: 'Fruits',
    description: 'Natural fruit puree combining the sweetness of apples and bananas with added nutrients.',
    image: '/images/fruit-puree.jpg',
    slug: 'apple-banana-puree',
  },
  {
    id: '3',
    name: 'Sweet Potato & Pumpkin',
    price: 279,
    category: 'Vegetables',
    description: 'Nutritious blend of sweet potato and pumpkin, rich in vitamins and minerals.',
    image: '/images/veggie-mix.jpg',
    slug: 'sweet-potato-pumpkin',
  },
  {
    id: '4',
    name: 'Multi-Grain Cereal',
    price: 319,
    category: 'Cereals',
    description: 'Iron-fortified multi-grain cereal for older babies starting on solid foods.',
    image: '/images/cereal-product.jpg',
    slug: 'multi-grain-cereal',
  },
  {
    id: '5',
    name: 'Carrot & Broccoli Mix',
    price: 269,
    category: 'Vegetables',
    description: 'Delicious vegetable blend introducing your baby to healthy green foods.',
    image: '/images/veggie-mix.jpg',
    slug: 'carrot-broccoli-mix',
  },
  {
    id: '6',
    name: 'Mango & Orange Blend',
    price: 259,
    category: 'Fruits',
    description: 'Tropical fruit blend packed with vitamin C and natural sweetness.',
    image: '/images/fruit-puree.jpg',
    slug: 'mango-orange-blend',
  },
  {
    id: '7',
    name: 'Baby Snack Wafers',
    price: 199,
    category: 'Snacks',
    description: 'Soft, melt-in-mouth wafers perfect for teething babies aged 6+ months.',
    image: '/images/cereal-product.jpg',
    slug: 'baby-snack-wafers',
  },
  {
    id: '8',
    name: 'Pear & Prune Mix',
    price: 249,
    category: 'Fruits',
    description: 'Gentle blend to support healthy digestion with natural fiber.',
    image: '/images/fruit-puree.jpg',
    slug: 'pear-prune-mix',
  },
];

export const categories = ['All', 'Cereals', 'Fruits', 'Vegetables', 'Snacks'];
