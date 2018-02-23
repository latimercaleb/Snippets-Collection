var test = new Vue({ // this is a vue instance, it's core to how vue works we can assign iit to a var as well, var foo = new Vue(...), vue does not do binding at run-time, it makes a template, stores it internally and makes modifications to it. The page that is rendered is the virtual dom presented in the page dom
      el: '#app',
      data: { // data stored in here can be output directly into the virtual dom with {{title}} as an example, {{}} cannot bind properties without v-bind, this data is rendered only as a plain string
            title: "Tacocat",
            stableTitle: "Special Title",
            help: "https://stackoverflow.com/",
            hString: '<b>I am an html string</b>',
            count: 0,
            mms: "",
            x: 0,
            y: 0
      },
      methods: {
            changeText: function(ev) {
                  this.title = ev.target.value;
            },
            sayHello: function() {
                  return "Hello!"; // return value must be a string and can be called above with () on it, it is a function afterall
                  // return title; will NOT work not without specifying data
            },
            presentTitle: function() {
                  return this.title; // changing title will change it in both places unless you bind one with v-once directive
            },
            newTitle: function() {
                  return this.stableTitle;
            },
            update: function() {
                  this.count++;
                  if (this.count == 1) {
                        this.mms = "You poked me!"
                  } else {
                        this.mms = `You poked me ${this.count}x!`;
                  }
            },
            changePostion: function(e) {
                  this.x = e.clientX;
                  this.y = e.clientY;
            }
      }
});
// I should make a vue snippet, because boilerplate sucks
var ex1 = new Vue({
      el: '#exercise1',
      data: {
            name: "Caleb",
            age: 25,
            link: 'http://www.1999.co.jp/itbig37/10376993.jpg'
      },
      methods: {
            Intro: function() {
                  return `My name is ${this.name} and my age is ${this.age}`;
            },
            GetAge: function() {
                  return this.age;
            },
            Rand: function() {
                  return Math.floor(Math.random() * (100 - 1) + 1);
            }
      }
});
var ex2 = new Vue({
      el: '#exercise2',
      data: {
            value: ""
      },
      methods: {
            popUp: function() {
                  alert("click");
            },
            storeValue: function(e) {
                  this.value = e.target.value;
            },
            storeValue2: function(e) {
                  this.value = e.target.value;
            }
      }
});