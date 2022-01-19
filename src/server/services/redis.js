
const { createClient } = require('redis');


client = {};
(async () => {
   client = createClient({
    url: 'redis://rachidaoutil:U5SZcYr9Q46sfrkcf-Hg6OowDauLYhTkk@redis-15971.c15.us-east-1-2.ec2.cloud.redislabs.com:15971/0'
  });;
  

  client.on('error', (err) => console.log('Redis Client Error', err));
  client.on('connect', (err) => console.log('Redis Client Connected'));

  await client.connect();

  await client.set('rachid', 'aoutil');
  let value = await client.get('6186d21320789d058e34cad6');
  value = JSON.parse(value);
  console.log(value.refresh_token)
})();

module.exports =  client;
 