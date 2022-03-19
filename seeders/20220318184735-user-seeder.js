'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
   let password1 = await bcrypt.hash("srijita123", 10);
   let password2 = await bcrypt.hash("test123", 10);
   let password3 = await bcrypt.hash("chandan123", 10);
     await queryInterface.bulkInsert('users', [{
        name: 'Srijita Thakur',
        username: 'srijita',
        phone:'9339072217',
        email_id:'srijita.thakur@gmail.com',
        address:'21 Banku Behari Ghosh lane Belurmath-Howrah',
        gender:"Female",
        password:password1,
        pincode:'711202',
        country:'India',
        state:'West Bengal',
        city:'Kolkata',
        isRegistered:true,
        role:'admin'
     },
     {
      name: 'Test',
      username: 'test',
      phone:'9439072257',
      email_id:'test@gmail.com',
      address:'95 xyz GT road',
      gender:"Male",
      password:password2,
      pincode:'700202',
      country:'India',
      state:'West Bengal',
      city:'Kolkata',
      isRegistered:true
   },
   {
    name: 'Chandan Bose',
    username: 'chandan',
    phone:'9674979475',
    email_id:'bosechandan21@gmail.com',
    address:'246/180 Sahid Ganesh Dutta Road Ramkrishna Pally Birati',
    gender:"Male",
    password:password3,
    pincode:'700051',
    country:'India',
    state:'West Bengal',
    city:'Kolkata',
    isRegistered:true,
    role:'admin'
 }], {});
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
