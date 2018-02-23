var app = new Vue({
      el: '#exercise',
      data: {
            showP1: false,
            custArray: [12, "tacos", 8, "cats", 1, "tacocat"],
            array: ['Max', 'Anna', 'Chris', 'Manu'],
            myObject: {
                  title: 'Lord of the Rings',
                  author: 'J.R.R. Tolkiens',
                  books: '3'
            },
            testData: {
                  name: 'TESTOBJECT',
                  id: 10,
                  data: [1.67, 1.33, 0.98, 2.21]
            }
      }
});