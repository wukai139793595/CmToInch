<template>
  <div>
    <div style="border:2px solid green;">
      <p style="margin: 20px 0;">注：此区域为修改区域</p>
      <size />
    </div>
    <div style="margin: 30px 0;border:2px solid blue;">
      <p style="margin: 20px 0;">注：模板一</p>
      <inch />
    </div>
    <div style="margin: 30px 0;border:2px solid yellow;">
      <p style="margin: 20px 0;">注：模板二</p>
      <inch-two />
    </div>
  </div>
</template>

<script>
import Size from "./size.vue";
import Inch from "./inch.vue";
import inchTwo from "./inchTwo.vue";
import { mapState } from "vuex";
import { mySetLocal } from "@/util/setLocal.js";
export default {
  name: "HelloWorld",
  components: {
    Size,
    Inch,
    inchTwo
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapState({
      sizeArr: state => state.size.sizeArr
    })
  },
  watch: {
    sizeArr: {
      deep: true,
      handler: function(newValue) {
        mySetLocal("sizeArr", newValue);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
