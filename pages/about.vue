<template lang="pug">
  .container
    CaptionedContent
        template(slot="content")
          img(src='https://i.imgur.com/EJOjIMC.jpeg')
        template(slot="caption")
          p hellloooo
      
    CaptionedContent
        template(#content)
          p this is going in instead of image in this instance
        template(#caption)
          p some other text  

         

</template>

<script>
import FoodMenu from '../components/FoodMenu.vue'
import CaptionedContent from '../components/CaptionedContent.vue'

export default {
  name: 'AboutPage',
  components: {
    FoodMenu,
    CaptionedContent,
  },
}
</script>
