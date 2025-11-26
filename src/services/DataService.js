class DataService {
  getProducts() {
    return [
      { _id: 1, name: "Orange Juice", price: 3.99, category: "Beverages", image: "/images/orange62.png" },
      { _id: 2, name: "Fresh Milk", price: 4.99, category: "Dairy & Eggs", image: "/images/milk62.png" },
      { _id: 3, name: "Chocolate Bar", price: 2.49, category: "Beverages", image: "/images/choco62.png" },
      { _id: 4, name: "Strawberry", price: 1.99, category: "Fruit", image: "/images/straw62.png" },
      { _id: 5, name: "Orange", price: 0.99, category: "Fruit", image: "/images/orange62.png" },
      { _id: 6, name: "Hot Chocolate", price: 3.49, category: "Beverages", image: "/images/choco62.png" },
      { _id: 7, name: "Strawberry Milk", price: 5.49, category: "Dairy & Eggs", image: "/images/straw62.png" },
      { _id: 8, name: "Whole Milk", price: 4.49, category: "Dairy & Eggs", image: "/images/milk62.png" },
    ];
  }
}

export default DataService;
