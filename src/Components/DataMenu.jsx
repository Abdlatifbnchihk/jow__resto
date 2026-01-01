
import imageBurger__1 from '../../public/img/banner__1.webp';

const menuData = [
  {
    id: "tacos",
    title: "Tacos",
    icon: "mdi:taco",
    items: [
      { id: 1, name: "Tacos Poulet", price: 40, img: imageBurger__1, description: "Délicieux tacos au poulet tendre avec légumes frais" },
      { id: 2, name: "Tacos Viande Hachée", price: 45, img: imageBurger__1, description: "Tacos savoureux avec viande hachée épicée et oignons" },
      { id: 3, name: "Tacos Mixte", price: 45, img: imageBurger__1, description: "Mélange délicieux de poulet et viande hachée" }
    ]
  },

  {
    id: "panini",
    title: "Panini",
    icon: "mdi:sandwich",
    items: [
      { id: 1, name: "Panini Fromage", price: 30, img: imageBurger__1, description: "Pain grillé avec fromage fondu et mozzarella" },
      { id: 2, name: "Panini Poulet", price: 35, img: imageBurger__1, description: "Poulet mariné avec fromage et sauce tomate" },
      { id: 3, name: "Panini Viande Hachée", price: 40, img: imageBurger__1, description: "Viande hachée savoreuse avec légumes grillés" },
      { id: 4, name: "Panini Jambon Fromage", price: 45, img: imageBurger__1, description: "Jambon premium avec fromage et sauce spéciale" }
    ]
  },

  {
    id: "pizza",
    title: "Pizza",
    icon: "mdi:pizza",
    items: [
      { id: 1, name: "Pizza Margarita", price: 25, img: imageBurger__1, description: "Tomate, mozzarella et basilic frais classique" },
      { id: 2, name: "Pizza Thon", price: 30, img: imageBurger__1, description: "Thon frais, oignons et sauce tomate délicieuse" },
      { id: 3, name: "Pizza Poulet", price: 30, img: imageBurger__1, description: "Poulet tendre avec poivrons et oignons" },
      { id: 4, name: "Pizza Kefta", price: 30, img: imageBurger__1, description: "Kefta épicée avec légumes et fromage mozzarella" },
      { id: 5, name: "Pizza Mixte", price: 35, img: imageBurger__1, description: "Mélange de viandes et légumes variés" },
      { id: 6, name: "Pizza Fruit de Mer", price: 40, img: imageBurger__1, description: "Fruits de mer frais avec sauce crémeuse" }
    ]
  },

  {
    id: "burgers",
    title: "Burgers",
    icon: "mdi:hamburger",
    items: [
      { id: 1, name: "Hamburger", price: 23, img: imageBurger__1, description: "Burger classique avec viande et légumes" },
      { id: 2, name: "Cheese Burger", price: 25, img: imageBurger__1, description: "Burger avec fromage fondu et bacon croustillant" },
      { id: 3, name: "Chicken Burger", price: 25, img: imageBurger__1, description: "Poulet pané croustillant avec sauce spéciale" },
      { id: 4, name: "Double Chicken", price: 28, img: imageBurger__1, description: "Double portion de poulet avec fromage et salade" },
      { id: 5, name: "Mixte Burger", price: 32, img: imageBurger__1, description: "Mélange de poulet et viande avec garnitures premium" }
    ]
  },

  {
    id: "drinks",
    title: "Jus & Boissons",
    icon: "mdi:cup",
    items: [
      { id: 1, name: "Jus Orange", price: 8, img: imageBurger__1, description: "Jus d'orange frais et naturel riche en vitamine C" },
      { id: 2, name: "Jus Banane", price: 8, img: imageBurger__1, description: "Jus de banane crémeux et énergisant" },
      { id: 3, name: "Jus Avocat", price: 10, img: imageBurger__1, description: "Jus d'avocat onctueux avec miel" },
      { id: 4, name: "Jus Panaché", price: 12, img: imageBurger__1, description: "Mélange savoureux de fruits tropicaux" },
      { id: 5, name: "Coca-Cola 33cl", price: 7, img: imageBurger__1, description: "Boisson gazeuse rafraîchissante classique" },
      { id: 6, name: "Eau Minérale", price: 5, img: imageBurger__1, description: "Eau minérale pure et naturelle" }
    ]
  },

  {
    id: "fast-bites",
    title: "Fast Bites",
    icon: "mdi:food",
    items: [
      { id: 1, name: "Frites", price: 10, img: imageBurger__1, description: "Frites dorées croustillantes et savoureuses" },
      { id: 2, name: "Nuggets", price: 15, img: imageBurger__1, description: "Nuggets de poulet dorés et croustillants" },
      { id: 3, name: "Mini Burger", price: 20, img: imageBurger__1, description: "Mini burger parfait pour un en-cas léger" },
      { id: 4, name: "Hot Dog", price: 15, img: imageBurger__1, description: "Hot dog classique avec sauce et condiments" }
    ]
  }
];

export default menuData;
