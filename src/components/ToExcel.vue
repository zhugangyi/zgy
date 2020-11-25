<script>
export default {
  methods: {
    handleDownload() {
      var excelDatas = [
        {
          tHeader: ["公司名称", "方量"],
          filterVal: ["mc", "fl"],
          tableDatas: this.beiruike,
          sheetName: "sheet1"
        }
      ];

      this.json2excel(excelDatas, "数据报表", true, "xlsx");
    },
    // tableJson 导出数据 ; filenames导出表的名字; autowidth表格宽度自动 true or false; bookTypes xlsx & csv & txt
    json2excel(tableJson, filenames, autowidth, bookTypes) {
      var that = this;
      //这个是引用插件
      import("@/vendor/Export2Excel").then(excel => {
        var tHeader = [];
        var dataArr = [];
        var sheetnames = [];
        for (var i in tableJson) {
          tHeader.push(tableJson[i].tHeader);
          dataArr.push(
            that.formatJson(tableJson[i].filterVal, tableJson[i].tableDatas)
          );
          sheetnames.push(tableJson[i].sheetName);
        }
        excel.export_json_to_excel({
          header: tHeader,
          data: dataArr,
          sheetname: sheetnames,
          filename: filenames,
          autoWidth: autowidth,
          bookType: bookTypes
        });
      });
    }
  }
};
</script>
