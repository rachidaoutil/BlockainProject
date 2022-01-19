

const Vue = require('vue');

let login = Vue.component('login', {
    data: function () {
      return {
        count: 0
      }
    },
    template: ` <div class="w-full md:w-1/2 flex flex-col">


    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p class="text-center text-3xl">Welcome Back.</p>
        <form class="flex flex-col pt-3 md:pt-8" @submit="checkUserloginForm" >
            <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">Email</label>
                <input  v-model="user.email" type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="flex flex-col pt-4">
                <label  for="password" class="text-lg">Password</label>
                <input v-model="password" type="password" id="passwordlog" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <input id="loginbtn" type="submit" value="Log In" class="bg-gray-800 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
        </form>
        <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href=""  v-on:click.prevent="notSignIn" class="underline font-semibold">Register here.</a></p>
        </div>
    </div>

</div>
`
  })

export default login;
