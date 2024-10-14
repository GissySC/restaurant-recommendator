import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// This function returns the maximum price limit based on the restaurant's price bracket (Low, Medium, High).
function getMaxPrice(restPriceBracket:PriceBracket):number{
  if (restPriceBracket === PriceBracket.Low) {
    return 10.0;
  } else if (restPriceBracket === PriceBracket.Medium){
    return 20.0;
  } else {
    return 30.0
  }
};

// This function filters the orders based on the price bracket and returns an array of filtered orders for each restaurant.
function getOrders(price: PriceBracket, orders:Order[][]) {
  let filteredOrders: Order[][] = [];
  orders[0].filter((order: Order) => order.price <= getMaxPrice(price));

  orders.forEach((restaurant: Order[]) => {
    const result = restaurant.filter((order: Order) => order.price <= getMaxPrice(price));

    filteredOrders.push(result);
  });
  return filteredOrders;
}

// This function prints the restaurant name and its eligible orders (filtered by price).
function printOrders(restaurants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    if (orders[index].length > 0 ) {
      console.log(restaurant.name);
      orders[index].forEach((order) => {
        console.log(`- ${order.name}: ${order.price}`);
      });
    }
  });
}

const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);


