<template lang="pug">
    div.container
        h1.myheading Menu

        input.discount(type='checkbox' name="discount") 
        label(for="discount") Click here to avail of a 10% Discount!
        
        
        .item(v-for="(item,index) in MenuItems")
          p {{ `${item.name} - ${item.cost}`}}
            button.inlinebut(@click="addToCart(item)") add item
            //- ${index} might have to include this back in just before the - in between item.name and item.cost
        br
        .your-items
          h2.carthead Your Items
          .item(v-for="item in cartItems")
            p.inlinep {{ item.name }}
            button.inlinebut(@click="removeItem(item)") remove item
          p.bold Total Cost: {{ cartItemsCost }}     
          //-  need to add remove button beside each item that gets added, and it removes the one at that index
</template>

<script>

export default {
    name: "FoodMenu",
  data(){
    return {
      MenuItems:[
        {
          name:"chicken",
          cost:10,
        },
        {
          name:"steak",
          cost:15,
        },
        {
          name:"pork",
          cost:8,
        }
      ],
      myvariable:'haha'
    }
  },
computed: {
    counter () {
      return this.$store.state.counter;
    },
    state () {
      return this.$store.state;
      // this means in the template above I can just type myStore instead of .$store.state.myStore
    },
    cartItems () {
      return this.$store.state.cartItems;
    },
    cartItemsCost () {
      let totalCost = 0;
      this.cartItems.forEach(item => {
        totalCost += item.cost;
      });
      return totalCost;
    }
  },  
methods: {
        // this just connects to the store, tells it which file to commit the increment function to
        removeItem(item){
          this.$store.commit('REMOVEITEM',item)
        },
        addToCart(item){
          this.$store.commit('ADDTOCART',item);
        },
        increment(){
          this.$store.commit('INCREMENT')
        }
    }

}
</script>

<style scoped>

.bold{font-weight: bold;
position:absolute;
bottom: 5px}

.myheading {
  margin: 2rem auto;
  position:relative;
}

.carthead {margin-bottom:15px;}

.your-items {
  display:block;
  height:300px;
  width:300px;
  border:1px solid rgb(61, 61, 61);
  position:relative;
}

.discount {
  margin:90px 0px;
}

h2 {margin: 0 auto;
  padding-top:10px;
  position:relative;
  left:85px;}

.item {
  margin-bottom:15px;
}

button {margin-right:.2rem;}

.inlinebut {
  display:inline-block !important;
  margin-left:1rem;
}

.inlinep {
  display:inline-block !important;
  margin-left:1rem;
}
</style>