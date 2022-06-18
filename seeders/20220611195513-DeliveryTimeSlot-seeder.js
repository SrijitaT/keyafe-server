'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('DeliveryTimeSlots', [
      {
        from: "05:00:00",
        to: "08:00:00",
        delivery_type_id: 4,
        time_format: "24Hrs IST"
      },
    {
      from: "08:00:00",
      to: "11:00:00",
      delivery_type_id: 2,
      time_format: "24Hrs IST"
    },
    {
      from: "11:00:00",
      to: "14:00:00",
      delivery_type_id: 2,
      time_format: "24Hrs IST"
    },
    {
      from: "14:00:00",
      to: "17:00:00",
      delivery_type_id: 2,
      time_format: "24Hrs IST"
    },
    {
      from: "14:00:00",
      to: "17:00:00",
      delivery_type_id: 2,
      time_format: "24Hrs IST"
    },
    {
      from: "17:00:00",
      to: "20:00:00",
      delivery_type_id: 2,
      time_format: "24Hrs IST"
    },
    {
      from: "20:00:00",
      to: "23:00:00",
      delivery_type_id: 2,
      time_format: "24Hrs IST"
    },
    {
      from: "23:00:00",
      to: "23:59:00",
      delivery_type_id: 3,
      time_format: "24Hrs IST"
    },
    {
      from: "00:00:00",
      to: "23:59:59",
      delivery_type_id: 1,
      time_format: "24Hrs IST"
    },
  ],{}) 
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
