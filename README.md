### Installation Guide

Clone repo

Create new etsy account
  

Open an Etsy shop

 - Follow etsy instructions for settings a shop for testing 
   http://www.etsy.com/il-en/legal/policy/api-testing-policy/169130941112
   
Create new app
 - https://www.etsy.com/developers/register
 - etsy apps have two access levels ( default access  or full access ). for my understanding we’re good with default access which allows us to read sellers data. 
 - copy app api key details, from https://www.etsy.com/developers/your-apps, to etsy-consumer.json
   in the following manner
  ```json
  {
    "consumer": {
      "public": KEYSTRING,
      "secret": SHARED SECRET,
      "key": KEYSTRING"
   }
 }
 ```
     
install node app
 - open terminal on cloned project folder
 ```sh
 - $ npm install
 - $ npm start
 ```
 - open browser on http://localhost:3000
