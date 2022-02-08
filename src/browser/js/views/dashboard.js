
let app;
var myEle = document.getElementById("dashboard");

if (typeof (window) !== 'undefined' && myEle) {
  const Vue = require('vue');
  const moment = require('moment');
  const ApexCharts = require('vue-apexcharts');
  const todoStorage = require('../util/store');
  const animate = require('../util/loading');
  const alerts = require('../util/alerts');
  const LogIn = require('../components/login.js');



  const { toast, snackbar } = require('tailwind-toast')


  // const { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } = require('@headlessui/vue');
  // const { BellIcon, MenuIcon, XIcon } = require('@vue-hero-icons/outline')


  app = {

    // the root element that will be compiled
    el: '#dashboard',
    components: {
      apexchart: ApexCharts
    },

    // app initial state
    data: {

      user: {
        id: '',
        email: '',
        username: '',
      },
      orders: [
        {
          type: "SELL",
          qty: 100,
          price: 500,
          liq: 60
        },
        {
          type: "SELL",
          qty: 150,
          price: 500,
          liq: 30
        },
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        },
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        },
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        },
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        },
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        }
        ,
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        }
        ,
        {
          type: "BUY",
          qty: 400,
          price: 500,
          liq: 80
        }
      ],
      transfers: [
        {
          From: "rachidaoutil",
          To: "Adil",
          qty: 500
        },
        {
          From: "Adil",
          To: "rachidaoutil",
          qty: 500
        },
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        },
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        },
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        },
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        },
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        }
        ,
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        }
        ,
        {
          From: "MEme",
          To: "rachidaoutil",
          qty: 500
        }
      ],
      transactions:
        [
          {
            userID: "",
            status: "",
            receiver: "",
            date: "",
            type: "",
            amount: 0,
            price: 0
          }

        ],
      dropdownOpen: false,
      prices: {
        val: 89,
        change: 8.9
      },
      priceIndix: [],
      balance: {
        coin: 22,
        money: 11,
        change: 12.6

      },
      userID: 0,
      userCase: 1,
      errors: [],

      tran: false,
      trad: false,
      dash: true,
      profile: false,
      showmoney: false,
    },

    mounted() {
  
    },

    watch: {

    },


    // Initialize TODOs from database
    created() {

      var localuser = localStorage.getItem('user');
      if (localuser) {
        this.user = JSON.parse(localuser);
      }
 
        let Dashparams = {
          wallet: this.user.userID,
          account: this.user.username,
       
        }

        todoStorage.fetchDash(Dashparams, (err, data) => {
          if (err) { `console.log(err); return` };
          if (data) {
              this.balance = data.balance
               this.prices = data.price;  
               this.transfers = data.Transfers; 

          }
          
        });
      



    },

    // computed properties
    // http://vuejs.org/guide/computed.html
    computed: {
      valid: function () {
        if (this.userID) {
          return true;
        }
        return true;
      },
      HaveAccount: function () {
        return this.userCase == 1;
      },
      mydropdownOpen: function () {
        return this.dropdownOpen;
      }


    },

    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {
      DropdownOpen: function (e) {
        this.dropdownOpen = !this.dropdownOpen;
      },

      showMoney: function (e) {
        this.showmoney = !this.showmoney;
      },
      CreditSign: function (val) {
        return val < 0;
      },
      getDate: function (val) {
        const date =  new Date(val)
        return date.toUTCString()  // "Fri, 30 Dec 2011 02:14:56 GMT"
      },
      


   






    },

    // a custom directive to wait for the DOM to be updated
    // before focusing on the input field.
    // http://vuejs.org/guide/custom-directive.html
    directives: {
      'todo-focus': function (value) {
        if (!value) {
          return;
        }
        let el = this.el;
        Vue.nextTick(function () {
          el.focus();
        });
      }
    }
  }

}










module.exports = app;
