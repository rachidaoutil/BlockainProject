
let app;
var myEle = document.getElementById("wallet");

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
    el: '#wallet',
    components: {
    },

    data: {
      // app initial state
      showAsk:false,
      Done:false,
      SendCoin:true,
      SendMoney:false,


      dropdownOpen: false,
      showmoney: false,
      user: {
        id: '',
        email: '',
        username: '',
      },
      //End
      TransferOrder:{
        To:"",
        qty:0.0

      }
      ,
      prices: {
        val: 89,
        change: 8.9
      },
      balance: {
        coin: 22,
        money: 11,
        change: 12.6

      },


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
          if (err) { console.log(err); return };
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
      },
      AskMe: function () {
        return this.showAsk;
      },
      transferDone: function () {
        return this.Done;
      }




    },

    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {
      DropdownOpen: function (e) {
        this.dropdownOpen = !this.dropdownOpen;
      },
      qtyUpdate: function (Qty) {
        this.TransferOrder.qty = Qty;
      },

      showMoney: function (e) {
        this.showmoney = !this.showmoney;
      },
      askMe: function (e) {
        e.preventDefault();
        this.showAsk = !this.showAsk;
      },
      okDone: function (e) {
        e.preventDefault();

        this.Done = !this.Done;
      },
      swicthCase: function (Case) {
        if(Case == 1){
          this.SendMoney = false
          this.SendCoin = true

          return
        }
        this.SendCoin = false
        this.SendMoney = true


      },
      sendMoney: function () {
 
        let newTransferOrder = {
          userID: this.user.userID,
          From: this.user.username,
          To : this.TransferOrder.To,
          qty:this.TransferOrder.qty
        }

        todoStorage.send(newTransferOrder, (err, data) => {
          this.showAsk = !this.showAsk;
          if (err) { `console.log(err); return` };
          if (data) {
              this.balance = data
               this.Done = !this.Done;


          }
        });
      },
      checkOrderForm: function (e) {
        e.preventDefault();
        if (!this.TransferOrder.To) {
          alerts.showErorr('Please entre an adresse');
          return
        }
        if (this.TransferOrder.qty > this.balance.money && this.TransferOrder.qty > 0) {
          alerts.showErorr('Oh!, You dont have enough founds');
          return
        }

        if (this.TransferOrder.qty && this.TransferOrder.To) {
          this.errors = [];
          console.log('All good!')
          return this.sendMoney();
        }



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
