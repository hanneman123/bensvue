var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Your page was loaded on' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'Item number one'},
            {text: 'Item number two'},
            {text: 'Item number three'}
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data:{
        message: 'hello vue.js boi'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data:{
        message: 'Hello vuebois'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Good shit'}
        ]
    }
})