<template>
  <div class="contain">
    <div class="wrap">
      <div class="descrip">
        <p>1.The size system of different brands is different.</p>
        <p>
          2.Please refer to the below detail size information before order.
          Thanks!
        </p>
        <p>3.Measurement difference from 1-3cm,1 cm=0.39 inch</p>
      </div>
      <div class="row" v-for="(item, index) in sizeArr" :key="index">
        <div class="column" v-for="(ele, ind) in item" :key="ind">
          <input
            type="text"
            :value="ele"
            @input="inputChange($event, ind, index)"
          />
          <span
            class="circle add-row"
            v-if="index === 0"
            @click="addRow($event, ind)"
            >+</span
          >
          <span
            class="circle add-column"
            v-if="ind === 0"
            @click="addColumn($event, index)"
            >+</span
          >
          <span
            class="circle delete-row"
            v-if="index === 0 && ind !== 0"
            @click="deleteRow($event, ind)"
            >-</span
          >
          <span
            class="circle delete-column"
            v-if="index !== 0 && ind === 0"
            @click="deleteColumn($event, index)"
            >-</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      sizeArr: state => state.size.sizeArr
    })
  },
  created() {},
  methods: {
    inputChange(event, ind, index) {
      this.sizeArr[index][ind] = event.target.value;
      this.$store.commit(
        "size/set_size",
        JSON.parse(JSON.stringify(this.sizeArr))
      );
      // window.localStorage.setItem("sizeArr", JSON.stringify(this.sizeArr));
      // console.log(this.sizeArr);
    },
    addRow(event, ind) {
      var realInd = ind + 1;
      var temp = JSON.parse(JSON.stringify(this.sizeArr));
      temp.forEach(function(e, i) {
        e.splice(realInd, 0, "");
      });
      this.$store.commit("size/set_size", JSON.parse(JSON.stringify(temp)));
    },
    addColumn(event, index) {
      var realIndex = index + 1;
      var len = this.sizeArr[0].length;
      var childArr = new Array(len);
      var temp = JSON.parse(JSON.stringify(this.sizeArr));
      temp.splice(realIndex, 0, childArr);
      this.$store.commit("size/set_size", JSON.parse(JSON.stringify(temp)));
    },
    deleteRow(event, ind) {
      var realInd = ind;
      var temp = JSON.parse(JSON.stringify(this.sizeArr));
      temp.forEach(function(e, i) {
        e.splice(realInd, 1);
      });
      this.$store.commit("size/set_size", JSON.parse(JSON.stringify(temp)));
    },
    deleteColumn(event, index) {
      var realIndex = index;
      var temp = JSON.parse(JSON.stringify(this.sizeArr));
      temp.splice(realIndex, 1);
      this.$store.commit("size/set_size", JSON.parse(JSON.stringify(temp)));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.wrap {
  font-size: 0;
  width: 96%;
  display: flex;
  flex-direction: column;
}
.descrip {
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  border-top: 1px solid #aaa;
  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;
}
.descrip p {
  width: 100%;
  text-align: left;
  margin: 10px 0;
}
.row {
  font-size: 0;
  width: 100%;
  display: flex;
}
.row:last-child .column {
  border-bottom: 3px solid #aaa;
}
.contain {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 130px;
  height: 40px;
  display: inline-block;
  border-top: 1px solid #aaa;
  border-left: 1px solid #aaa;
  vertical-align: middle;
}
input {
  font-size: 18px;
  color: #414141;
}
.column:last-child {
  border-right: 1px solid #aaa;
}
.column .circle {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  border-radius: 50%;
  z-index: 200;
  font-size: 16px;
  text-align: center;
  font-weight: bolder;
  line-height: 16px;
  color: #666;
  display: none;
}

.circle::after {
  position: absolute;
  content: "";
  background-color: transparent;
  width: 24px;
  height: 22px;
  top: 0px;
  left: -2px;
}

.column:hover .circle {
  display: inline-block;
  cursor: pointer;
}

.column .add-row {
  right: -9px;
  top: -21px;
}

.column .delete-row {
  right: 50px;
  top: -21px;
}

.column .add-column {
  left: -21px;
  bottom: -9px;
}

.column .delete-column {
  left: -21px;
  bottom: 12px;
}

.column input {
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  outline: none;
}
</style>
