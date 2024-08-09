function greeting(store_name) {
    console.log(`Thank you for visiting ${store_name}, we hope you have a great time shopping with us!`);
  }
  
  function shop() {
    const store_details = {
      items: ['apple', 'banana', 'cherry'],
      sales: 2,
      add_item: function(item) {
        this.items.push(item);
      },
      bought_item: function(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
          this.items.splice(index, 1);
          this.sales += 1;
          console.log(`${item} has been removed from the store.`);
        } else {
          console.log(`${item} does not exist in the store.`);
        }
      }
    };
  
    
    store_details.add_item('blueberry');
    store_details.add_item('elderberry');
    store_details.add_item('raspberry');
    store_details.add_item('grape');
    store_details.add_item('honeydew');
  
    console.log('Items after adding:', store_details.items);
  
    
    store_details.bought_item('banana');  

    store_details.bought_item('kiwi');    
  
    console.log('Items after buying:', store_details.items);
  
    
    console.log('Thank you for shopping at ShawnDe\'s Big Bear\'s shop!');
    console.log(`Today we had ${store_details.sales} sales!`);
  }
  
  function app() {
    const new_store_name = "ShawnDe's Big Bear's shop"; // Change the store name here
    for (let i = 2; i < 5; i++) {
      greeting(new_store_name);
    }
    
    
    shop();
  }
  
  app();