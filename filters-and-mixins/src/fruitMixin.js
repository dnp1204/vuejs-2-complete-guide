// mixin will go first then component will go after
export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.toLowerCase().match(this.filterText);
      });
    }
  },
  created() {
    console.log('Created on mixins');
  }
};
