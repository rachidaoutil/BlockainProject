
let app;
if (typeof (window) !== 'undefined') {
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
    el: '#todoapp',
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
      orders: {},
      transactions:
        [
          {
            status: "Active",
            date: "2020-08-26T12:36:04.3464706Z",
            type: "buy",
            amount: 98,
            price: 21
          },
          {
            status: "Canceled",
            date: "2020-08-26T12:36:04.3464706Z",
            type: "sell",
            amount: 98,
            price: 21
          }, {
            status: "Completed",
            date: "2020-08-26T12:36:04.3464706Z",
            type: "buy",
            amount: 98,
            price: 21
          },

        ],
      dropdownOpen: false


      ,
      prices: {
        sell: 89,
        buy: 10
      },
      pricelist: [],
      size: {
        ask: 88,
        bid: 9
      },
      balance: {
        coin: 22,
        money: 11

      },

      userId: 0,
      userCase: 1,
      errors: [],
      showmoney: false,
      signedIn: true,
      password: '',
      passwordConfirm: '',
      userID: 1,

      tran: false,
      trad: false,
      dash: true,
      profile: false,


        series: [{
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.00],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.10],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.10],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.40],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.70],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.40],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.20],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.60],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.70],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.20],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.40],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.10],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.80],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.50],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.90],
            [1348610400000, 32.53],
            [1348696800000, 32.80],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.60],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.40],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.90],
            [1352674800000, 32.70],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.40],
            [1353884400000, 33.30],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.70],
            [1354575600000, 35.30],
            [1354662000000, 35.40],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.30],
            [1356649200000, 36.90],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.10],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.10],
            [1360018800000, 38.51],
            [1360105200000, 38.40],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.60],
          ]
        }],
        chartOptions: {
          chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
              autoScaleYaxis: true
            }
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "#fff",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }]
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },

        selection: 'one_year',

        series2: [{
          name: 'XYZ MOTORS',
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
            text: 'Stock Price Movement',
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
          data: [31, 40, 28, 51, 42, 109, 100]
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


        },




      },

      mounted() {
        if (localStorage.userID) {
          this.userID = localStorage.userID;
        }
      },
      watch: {
        userID(newid) {
          localStorage.userID = newid;
        }
      },


      // Initialize TODOs from database
      created() {


        this.socket = io();
        this.socket.on('todoAdded', async (todo) => {
          console.log(todo);
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve('resolved');
            }, 2000);
          });
          var found = false;
          for (const { id } of this.todos) {
            console.log(id, todo.id);
            if (id == todo.id) {
              found = true;
              console.log('item alredy in');
              break;
            }
          }
          if (!found) {
            this.todos.push(todo);
            console.log('item added', todo);
          }

        });
        this.socket.on('delete', (todoid) => {
          console.log("this todo has been removed ", todoid);
          this.todos = this.todos.filter((todo) => todo.id != todoid);
          // this.todos.$remove(todo);

        });
        this.socket.on('update', (todo) => {
          console.log("this todo has been updated ", todo);
          this.todos.forEach((Todo) => {
            if (Todo.id == todo.id) {
              Todo.completed = todo.completed;
              Todo.title = todo.title;
              Todo.updatedAt = todo.updatedAt;
            };
          });

        });

        todoStorage.fetch((err, todos) => {
          this.todos = todos;
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
        NoAccount: function () {
          return this.userCase == 2;

        },
        transaction: function () {
          return this.tran;
        },
        trads: function () {
          return this.trad;
        },
        dashb: function () {
          return this.dash;
        },
        prof: function () {
          return this.profile;
        },
        showLogin: function () {
          return this.id;
        },
        showSignup: function () {
          return !this.signedIn;
        }

      },

      // methods that implement data logic.
      // note there's no DOM manipulation here at all.
      methods: {
        DropdownOpen: function (e) {
          this.dropdownOpen = !this.dropdownOpen;
        },

        placeBuyOrder: function () {
          this.order = {
            status: "active",
            type: "buy",
            id: "",
            status: "active",
            order_time: "2020-08-26T12:36:04.3464706Z",
            asks: [
              {
                order_id: "",
                price: this.price.buy,
                size: this.size.ask,
                update_type: "ADD"
              }]

          }
          todoStorage.save(this.order, (err, myorder) => {
            if (err) console.log(err);
            if (myorder.id) { orders.push(myorder) }
          });
        },

        placeSellOrder: function () {
          let order = {
            status: "active",
            type: "sell",
            id: "",
            order_time: "2020-08-26T12:36:04.3464706Z",
            bids: [
              {
                order_id: "",
                price: this.price.sell,
                size: this.amount.bid,
                update_type: "ADD"
              }]

          }
          todoStorage.save(order, (err, myorder) => {
            if (err) console.log(err);
            if (myorder.id) { orders.push(myorder) }
          });
        },
        CancelBuyOrder: function (OrderID) {
          let order = {
            id: OrderID,
            type: "buy"


          }
          todoStorage.save(order, (err, myorder) => {
            if (err) console.log(err);
            if (myorder.id) { orders.push(myorder) }
          });
        },
        CancelSellOrder: function (OrderID) {
          let order = {
            id: OrderID,
            type: "sell"


          }
          todoStorage.save(order, (err, myorder) => {
            if (err) console.log(err);
            if (myorder.id) { orders.push(myorder) }
          });
        },
        addUser: function () {
          this.user = {
            username: this.user.username,
            email: this.user.email,
            password: this.password
          }

          todoStorage.AddUser(this.user, (err, id) => {
            if (err) console.log(err);
            if (id) {
              this.userID = id
              window.location.href = '/dashboard';


            }
          });
        },
        getUser: function () {
          this.authUser = {
            username: this.user.username,
            password: this.password
          }

          todoStorage.getUser(this.authUser, (err, id) => {
            if (err) { console.log(err); return };
            if (id) {
              this.userID = id
              window.location.href = '/dashboard';

            }
          });
        },

        complete: function (todo) {
          todo.modified = true;
          todoStorage.save(this.todos, function (err) {
            if (err) console.log(err);
          });
        },
        notSignIn: function (e) {
          this.userCase = 2;
        },
        showMoney: function (e) {
          this.showmoney = !this.showmoney;
        },
        switchCase: function (n) {
          switch (n) {
            case "trans":
              this.trad = false;
              this.dash = false;
              this.tran = true;
              this.profile = false;

              break;
            case "trade":
              this.trad = true;
              this.dash = false;
              this.tran = false;
              this.profile = false;

              break;
            case "dash":
              this.trad = false;
              this.dash = true;
              this.tran = false;
              this.profile = false;
              break;
            case "profile":
              this.trad = false;
              this.dash = false;
              this.tran = false;
              this.profile = true;
              break;

          }
        },
        SignedIn: function (e) {
          this.userCase = 1;

        },
        checkForm: function (e) {



          e.preventDefault();

          return this.addTodo();
        },
        checkUserAddForm: function (e) {
          e.preventDefault();
          if (this.user.username && this.user.email && this.password && this.passwordConfirm && (this.password === this.passwordConfirm)) {
            this.errors = [];
            console.log("Looks good");

            return this.addUser();
          }

          this.errors = [];

          if (!this.user.username) {
            alerts.showErorr('Username error');
          }
          if (!this.user.email) {
            alerts.showErorr('Email error');
          }
          if (this.password !== this.passwordConfirm) {
            alerts.showErorr('Password error');
          }

          if (!this.password) {
            alerts.showErorr('Password error');
          }
          if (!this.passwordConfirm) {
            alerts.showErorr('Password error');
          }

        },

        checkUserloginForm: function (e) {
          e.preventDefault();

          if (this.user.username && this.password) {
            this.errors = [];
            console.log('All good!')
            return this.getUser();
          }

          this.errors = [];

          if (!this.user.email) {
            alerts.showErorr('email error');
          }
          if (!this.password) {
            alerts.showErorr('password error');
          }



        },
        logOut: function (e) {
          e.preventDefault();
          this.userID = "";


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
