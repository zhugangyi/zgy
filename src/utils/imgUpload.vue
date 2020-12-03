<template>
 <el-upload
  ref="imgUpload"
  :on-success="imgSuccess"
  :on-remove="imgRemove"
  accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
  :headers="headerMsg"
  :action="upLoadUrl"
  multiple>
  <el-button type="primary">上传图片</el-button>
 </el-upload>
</template>
 
<script>
 import {getAliOSSCreds} from '@/api/common' // 向后端获取 OSS秘钥信息
 import {createId} from '@/utils' // 一个生产唯一的id的方法
 import OSS from 'ali-oss'
 
 export default {
  name: 'imgUpload',
  data () {
   return {
     headerMsg:{Token:'XXXXXX'},
     upLoadUrl:'xxxxxxxxxx'
   }
  },
  methods: {
   // 上传图片成功
   imgSuccess (res, file, fileList) {
    console.log(res)
    console.log(file)
    console.log(fileList)  // 这里可以获得上传成功的相关信息
   }
  }
 }
</script>
