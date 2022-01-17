<template lang="pug">
    div.container
        h1.myheading Menu

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
          .withdiscount(v-if="!isHidden") With Discount {{ cartItemsCost - cartItemsCost / 100 * 10 }} 

        input.discount(@click="myalter;isHidden = !isHidden" type='checkbox' name="discount") 
        label(for="discount") Click here to avail of a 10% Discount!   
        
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
      myvariable:'haha',
      isHidden: true
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
    },
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
        },
        myalter () {
        return  alert('lol')
        },
    }
}
</script>

<style scoped>

.bold{font-weight: bold;
position:absolute;
bottom: 25px}

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

.withdiscount {
  position:absolute;
  bottom:1px;
}

.discount {
  margin:30px 0px;
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