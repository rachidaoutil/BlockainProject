
let app;
var myEle = document.getElementById("trade");

if (myEle) {
  const Vue = require('vue');
  const moment = require('moment');
  const ApexCharts = require('vue-apexcharts');
  const todoStorage = require('../util/store');
  const animate = require('../util/loading');
  const alerts = require('../util/alerts');
  const updateDate = require('../util/update');

  const LogIn = require('../components/login.js');
  var $ = require('jquery')




  const { toast, snackbar } = require('tailwind-toast')


  // const { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } = require('@headlessui/vue');
  // const { BellIcon, MenuIcon, XIcon } = require('@vue-hero-icons/outline')


  app = {

    // the root element that will be compiled
    el: '#trade',
    components: {
      apexchart: ApexCharts
    },

    // app initial state
    data: {
      testKey:1,
      user: {
        id: '',
        email: '',
        username: '',
      },
      Order : {
        userID: "",
        price: 0,
        qty: 0,
        orderType:""

    },
      newBuyOrder : {
        userID: "",
        price: 0,
        qty: 0,
        orderType:""

    },
    orders : [],
    newSellOrder : {
      userID: "",
      price: 0,
      qty: 0,
      orderType:""

    },

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

      series: [{
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
      
      selection: 'one_year',

      series2: [{
        name: 'Predictions',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
      chartOptions2: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Price Movement',
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      },


      series3: [{
        name: 'buys',
        data: [31,31,31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'sells',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions3: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'numeric',
          categories: [110, 320, 450, 520, 640, 720, 810],
          tickAmount: 'dataPoints'
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },


      }



      },

      mounted() {

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
  
         todoStorage.getPrices(true, (err, data) => {
          if (err) { console.log(err); return };
          if (data) {
            
            data.forEach(element => {
              this.series[0].data.push(
                {
                  x: new Date(element.beginTime),
                  y: [Math.round(element.openPrice),Math.round(element.highPrice), Math.round(element.lowPrice),Math.round(element.closePrice)]
                }

              )
            })
            let finalPrice = this.series[0].data[this.series[0].data.length-1].y[3];
            this.newSellOrder.price =  this.newBuyOrder.price =  finalPrice
          


            this.testKey++;  
          }
          
        });
        todoStorage.fetchOrdersData({userID:this.user.username}, (err, data) => {
          if (err) { console.log(err); return };
          if (data) {
            this.orders = data.orders
          }
          
        });
      
         todoStorage.fetchDash(Dashparams, (err, data) => {
            if (err) { console.log(err); return };
            if (data) {
                this.balance = data.balance
                 this.prices = data.price;    
            }
            
          });

  
       // todoStorage.fetch((err, todos) => {this.todos = todos;});



      },
      activated() {

      },

      watch: {
        series: function () {
          return this.updateChart();
        }
        
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
        NoAccount: function () {
          return this.userCase == 2;

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
        MakeBuyOder: function () {
   
          let newOrder = {
            userID: this.user.username,
            price : this.newBuyOrder.price,
            qty:this.newBuyOrder.qty,
            account: this.user.username,
            wallet: this.user.userID

          }
  
          todoStorage.buy(newOrder, (err, data) => {
            this.showAsk = !this.showAsk;
            if (err) { `console.log(err); return` };
            if (data) {
              this.balance = data.balance
              this.orders.push(data.newOrder)
              this.Done = !this.Done;
  
  
            }
          });
        },
        MakeSellOder: function () {
   
          let newOrder = {
            userID: this.user.username,
            price : this.newSellOrder.price,
            qty:this.newSellOrder.qty,
            account: this.user.username,
            wallet: this.user.userID

          }
  
          todoStorage.sell(newOrder, (err, data) => {
            this.showAsk = !this.showAsk;
            if (err) { `console.log(err); return` };
            if (data) {
                this.balance = data.balance
                this.orders.push(data.newOrder)
                this.Done = !this.Done;
  
            }
          });
        },
        checkOrderForm: function (type,e) {
          e.preventDefault();

          if (type === "buy") {
            if (this.newBuyOrder.qty * this.Order.price <= this.balance.money && this.newBuyOrder.qty > 0) {
              return this.MakeBuyOder();

            }
            alerts.showErorr('Oh!, You dont have enough founds');
            return
          } 

          if (type === "sell") {
            if (this.newSellOrder.qty <= this.balance.coin && this.newSellOrder.qty > 0) {
              return this.MakeSellOder();

            }
            alerts.showErorr('Oh!, You dont have enough founds');
          } 

          
  
  
  
  
        },   
        
        updateData: function (timeline) {
          this.selection = timeline

          switch (timeline) {
            case 'one_month':
              this.$refs.chart.zoomX(
                new Date('28 Jan 2013').getTime(),
                new Date('27 Feb 2013').getTime()
              )
              break
            case 'six_months':
              this.$refs.chart.zoomX(
                new Date('27 Sep 2012').getTime(),
                new Date('27 Feb 2013').getTime()
              )
              break
            case 'one_year':
              this.$refs.chart.zoomX(
                new Date('27 Feb 2012').getTime(),
                new Date('27 Feb 2013').getTime()
              )
              break
            case 'ytd':
              this.$refs.chart.zoomX(
                new Date('01 Jan 2013').getTime(),
                new Date('27 Feb 2013').getTime()
              )
              break
            case 'all':
              this.$refs.chart.zoomX(
                new Date('23 Jan 2012').getTime(),
                new Date('27 Feb 2013').getTime()
              )
              break
            default:
          }
        },
        updateSeriesLine: function() {
          this.$refs.realtimeChart.updateSeries([{
            data: this.series[0].data,
          }])

          this.$refs.realtimeChart.refresh()


        },
        updateChart: function() {
          this.testKey= 1+ this.testKey;
         }
       
      





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
