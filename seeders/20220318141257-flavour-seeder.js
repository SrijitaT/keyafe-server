'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('flavours', [{
          variety: 'Vanilla',
          desc:'Soft eggless and moist vanilla sponge filled with layers of delicious vanilla whipped cream',
          speciality: false 
        },
        {
          variety: 'Vanilla Custard',
          desc:'Eggless vanilla sponge filled with very delicious and Smooth eggless vanilla custard.A must try!',
          speciality: true 
        },
        {
        variety: 'Strawberry',
        desc:'Delicious strawberry flavoured cream filled in layers of eggless and moist cake',
        speciality: false
      },
      {
        variety: 'Blueberry',
        desc:'Delicious blueberry flavoured cream filled in layers of eggless and moist cake',
        speciality: false
      },
      {
        variety: 'Butterscotch',
        desc:'Soft eggless and moist vanilla sponge filled with layers of delicious butterscotch whipped cream and praline/butterscotch crunch',
        speciality: false 
      },
      {
        variety: 'Pineapple',
        desc:'Soft eggless and moist vanilla sponge filled with layers of pineapple whipped cream and goodness of real pinepple in the layers',
        speciality: false 
      },
      {
        variety: 'Rasmalai',
        desc:'Rich and Delicious Indian Sweet Rasmalai cream and pista filled in layers of eggless and moist cake',
        speciality: false 
      },
      {
        variety: 'Red velvet cheesecake',
        desc:'Eggless Red velvet sponge with rich cream cheese frosting',
        speciality: false 
      },
      {
        variety: 'Lotus biscoff',
        desc:'This is a German biscuit which is caramelized and deliciously crunchy and pairs perfectly with tea, coffee and milk and also makes great very tasty cakes.',
        speciality: false 
      },
      {
        variety: 'Black Forest',
        desc:'Black Forest gateau consists of several layers of chocolate sponge cake sandwiched with whipped cream,dark chocolate shavings and cherries',
        speciality: false 
      },
      {
        variety: 'White Forest',
        desc:'White Forest gateau consists of several layers of vanilla sponge cake sandwiched with whipped cream,white chocolate shavings and cherries',
        speciality: false 
      },
      {
        variety: 'Chocolate custard',
        desc:'Eggless chocolate sponge filled with very delicious and Smooth and rich eggless chocolate custard.A must try!' ,
        speciality:true
      },
      {
        variety: 'Chocolate truffle or ganache',
        desc:'Chocolate ganache is a mixture of chocolate and warm cream.Its quite versatile and delicious and can be a filling, dip, spread, frosting, topping, or layer in a cake.',
        speciality: false 
      },
      {
        variety: 'Excess chocolate',
        desc:'Consists of several layers of chocolate sponge and loads of chocolate added to the cream in the layers to give you the ultimate chocolaty taste.',
        speciality: false 
      },
      {
        variety: 'Chocolate cheesecake',
        desc:'Consists of several layers of chocolate sponge and cream cheese frosting.',
        speciality: false 
      },
      {
        variety: 'Chocolate oreo',
        desc:'Consists of several layers of chocolate sponge and loads of oreo crushed in whipped cream.',
        speciality: false 
      },
      {
        variety: 'Cookies and cream',
        desc:'Why choose between cookies and cake when you can enjoy both together?! This Cookies and Cream Cake has ultra-moist layers of devil’s food cake and buttercream with lots of crushed cookies mixed right in.',
        speciality: false 
      },
      {
        variety: 'Choco vanilla',
        desc:'Confused between chocolate and vanilla? You may not need to choose,just go for choco vanilla',
        speciality: false 
      },
      {
        variety: 'Chocolate praline',
        desc:'Consists of several layers of chocolate sponge and rich chocolate cream wth praline.Praline is caramelized nuts.',
        speciality: false 
      },
      {
        variety: 'Chococlate ganache with Crunchy Granola and sesame',
        desc:'Consists of several layers of chocolate sponge and rich chocolate ganache with crunchy granola and goodness and nuttyness of sesame' ,
        speciality:true
      },
      {
        variety: 'Nutella ferroro rocher',
        desc:'Are you a nutella or a ferroro rocher lover?Then this cake is just made for you.Chocolate sponge sandwiched with rich nutella cream.',
        speciality: false 
      },
      {
        variety: 'Thandai',
        desc:'Consists of several layers of vanilla sponge and thandai whipped cream',
        speciality:true 
      },
      {
        variety: 'Coffee caramel',
        desc:'Consists of several layers of chocolate sponge and coffee and rich caramel sauce',
        speciality: false 
      },
      {
        variety: 'Orange',
        desc:'Orange flavoured whipped cream in between layers of vanilla sponge,turns out to be super delicious!',
        speciality: false 
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
