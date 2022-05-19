<template lang="pug">
  .container
    CaptionedContent
        p(slot="caption") hellloooo this si a test
      
    CaptionedContent
        template(#content)
          p this is going in instead of image in this instance
        template(#caption)
          p some other text
        h4(slot="heading")  new headfing 
    CaptionedContent     
      p(slot="caption") iyhiuhi

    slot(name="bottomslot")
    CaptionedContent(slot="bottomslot")  

        

         

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
