
<template>
  <div class="inch">
    <div ref="tableDom">
      <table
        style="text-align:center;border-collapse:collapse;width:95%;margin:0 auto;font-size:18px;color:#2c3e50;"
      >
        <caption>
          <p style="margin: 8px 0;">
            1.The size system of different brands is different.
          </p>
          <p style="margin: 8px 0;">
            2.Please refer to the below detail size information before order.
            Thanks!
          </p>
          <p style="margin: 8px 0;">
            3.Measurement difference from 1-3cm,1 cm=0.39 inch
          </p>
        </caption>
        <tr :style="styleOne">
          <td
            v-for="(item, index) in sizeArr[0]"
            :key="index"
            :colspan="index === 0 ? 1 : 2"
          >
            {{ item }}
          </td>
        </tr>
        <tr>
          <template v-for="(ele, ind) in sizeArr[0]">
            <td v-if="ind === 0" colspan="1">
              Cm/Inch
            </td>
            <td colspan="1" v-if="ind !== 0">
              Cm
            </td>
            <td colspan="1" v-if="ind !== 0">
              Inch
            </td>
          </template>
        </tr>
        <tr
          v-for="(e, i) in sizeArr"
          :key="i"
          :style="i % 2 === 1 ? styleOne : styleTwo"
        >
          <template v-if="i !== 0">
            <template v-for="(m, n) in e">
              <td v-if="n === 0">{{ m }}</td>
              <td v-if="n !== 0">{{ m }}</td>
              <td v-if="n !== 0">{{ m | toInch }}</td>
            </template>
          </template>
        </tr>
      </table>
    </div>

    <div style="text-align:center;margin: 20px 0;">
      <input type="color" v-model="color" style="margin-right: 40px;" />
      <el-button type="primary" @click="extractCode">提取代码</el-button>
    </div>
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        :value="textareaValue"
        style="width:80%;height: 500px;"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      textareaValue: "",
      color: "#aaa",
      styleTwo: "background-color: #fff;"
    };
  },
  computed: {
    ...mapState({
      sizeArr: state => state.size.sizeArr
    }),
    styleOne() {
      return `background-color:${this.color};`;
    }
  },
  methods: {
    extractCode() {
      var html = this.$refs["tableDom"].innerHTML;
      this.textareaValue = html;
    }
  },
  filters: {
    toInch(val) {
      if (val.indexOf("-") > -1) {
        var arr = val.split("-");
        var temp = arr.reduce(function(total, item, index) {
          let inch = (Number(item) * 0.39).toFixed(2);
          return total + inch + "-";
        }, "");
        return temp.substr(0, temp.length - 1);
      } else {
        return (Number(val) * 0.39).toFixed(2);
      }
    }
  }
};
</script>

<style >
</style>
