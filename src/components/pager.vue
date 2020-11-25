<template>
  <nav >
    <span class="pageinfo"
      >共<em>{{ pagesum }}</em
      >页/{{ total }}条</span
    >
    <ul class="pagesumnav">
      <li :class="{ disabled: current == 1 }" @click="setCurrent(1)">首页</li>
      <li :class="{ disabled: current == 1 }" @click="setCurrent(current-1)">上页</li>
      <li
        v-for="(num, id) in grouplist"
        :key="id"
        @click="setCurrent(num)"
        :class="{ actived: current == num }"
      >{{num}}</li>
      <li
        :class="{ disabled: current == pagesum }"
        @click="setCurrent(current + 1)"
      >
        下页
      </li>
      <li
        :class="{ disabled: current == pagesum }"
        @click="setCurrent(pagesum)"
      >
        尾页
      </li>
    </ul>
    <div class="pagesumjump">
      <select class="pageSelect" v-model="currentSize" @change="pageNum" >
        <option v-for="(num, ide) in display" :key="ide" :label="num+'条/页'" :value="num"></option>
      </select>          
      <input type="text" v-model="jumpDefault" @keyup.enter="submit($event)" />
      <span @click="jumpTo">跳转</span>
    </div>
  </nav>
</template>
 
<script >
export default {
  props: {
    total: { type: Number, default: 10 },
    display: {
      type: Array,
      default() {
        return [5, 10, 20, 50];
      },
    },
    pagegroup: {
      type: Number,
      default: 5,
    },

    curPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      current: 1,
      currentSize: this.display[0],
      jumpDefault: 1,
      selectedPageSize: 5,
      pageInfo:{pageSize:5,pageNum:1}
    };
  },

  methods: {
    pageNum() {
      let nums = document.getElementsByClassName("pageSelect")[0].value;
      var num = nums.split("条")[0];
      this.currentSize = num;
      this.jumpDefault = -1;
      this.setCurrent(1);
    },
    setCurrent(idx) {
      if (this.current != idx && idx > 0 && idx < this.pagesum + 1) {
        this.current = idx;
      }
      this.pageInfo.pageSize = this.currentSize
      this.pageInfo.pageNum = this.current
      // console.log(this.pageInfo)
      this.$emit("changePage", this.pageInfo);
      // this.$parent.assetsList()
    },
    jumpTo() {
      this.current = parseInt(this.jumpDefault);
      this.setCurrent(this.current);
    },
    submit($event) {
      this.jumpTo();
    },
  },
  computed: {
    pagesum() {
      return Math.ceil(this.total / this.currentSize) || 1;
    },
    grouplist() {
      var len = this.pagesum;
      var count = Math.floor(this.pagegroup / 2);
      var center = this.current;
      var temp = [];
      if (len < this.pagegroup) {
        while (len--) {
          temp.push(this.pagesum - len);
        }
        return temp;
      }
      while (len--) {
        temp.push(this.pagesum - len);
      }
      var idx = temp.indexOf(center);
      if (idx <= count) {
        center = center + count - idx;
      } else if (idx > this.pagesum - count - 1) {
        center = this.pagesum - count;
      }
      temp = temp.splice(center - count - 1, this.pagegroup);
      return temp;
    },
  },
  watch: {
    jumpDefault() {
      if (this.jumpDefault > this.pagesum) {
        this.jumpDefault = this.pagesum;
      }
    },
  },
};
</script>
 
<style scoped>
.pageinfo em {
  font-style: normal;
  color: #ca0c16;
  padding: 2px;
}
.pagesumjump .pageSelect {
  padding: 4px;
  height: 29px;
  margin-top: 1px;
  border: none;
  outline: none;
  background-color: #ccc;
}
.pagesumjump input {
  text-align: center;
  width: 30px;
  height: 24px;
  margin-left: 3px;
}
.pagesumjump span {
  margin-left: 3px;
  padding: 0 6px;
  background-color: #ccc;
  border-radius: 3px;
  cursor: pointer;
  height: 29px;
  line-height: 29px;
  display: inline-block;
}
.pagesumjump span:hover {
  background-color: #ca0c16;
  color: #fff;
}
.disabled {
  pointer-events: none;
}
.actived {
  background-color: #ca0c16;
  color: #fff;
}
nav {
  margin-top: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.pagesumnav {
  display: flex;
  justify-content: left;
  align-items: left;
}
.pagesumnav li {
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 4px;
  margin: 0 2px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pagesumnav li:hover {
  background-color: #ca0c16;
  color: #fff;
}
</style>