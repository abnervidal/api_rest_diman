module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('cars_occurrences', [
      {
        id: 1,
        type: 'COLISÃO',
      },
      {
        id: 2,
        type: 'MULTA',
      },
      {
        id: 3,
        type: 'ACIDENTE',
      },
    ], {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
