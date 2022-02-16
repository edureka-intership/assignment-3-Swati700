/* Creating Managerclass with properties 
 -> restaurantList
 -> printAllRestaurantNames
 -> filterRestaurantByCity */

 class restaurantManager{  

    restaurantList = [{ 
        id: 1,
        restaurantName: 'Pizza Hut',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'McDonald',
        address: 'Ashok Nagar',
        city: 'Bangalore'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Royapettah',
        city: 'Chennai'
    },
    {
        id: 4,
        restaurantName: 'Starbucks',
        address: 'Bandra West',
        city: 'Mumbai'
    }];

      printAllRestaurantNames = () => { 
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
      }

      filterRestaurantsByCity = (cityname) => { 
        return this.restaurantList.filter(restaurant => restaurant.city == cityname)
      }
}

const restautantObject = new restaurantManager();

const output1 = restautantObject.printAllRestaurantNames();
console.log(output1);

// Order details for Punjabi Tadka restaurant in Delhi

console.log(restautantObject.filterRestaurantsByCity("Delhi"));

orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

// Total number of orders placed for the restaurant.

const total = Object.values(orderData).reduce((prev, next) => prev + next );
console.log(total);

// Number of order proportion options.

const headers = Object.keys(orderData);
console.log(headers);

// Percentage of each proportion.

let arr = [];
const response = headers.map((item, index) => {
      const obj = {
          'id' : index + 1,
          'order': item,
          'orderpercentage' : ((orderData[item]/total )*100).toFixed(2), 
          'restaurant': 'Punjabi Tadka'
      }
      arr.push(obj);
})
console.log(arr);
