 /**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime (time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}"
    let date
    if (typeof time === "object") {
      date = time
    } else {
      if (typeof time === "string" && /^[0-9]+$/.test(time)) {
        time = parseInt(time)
      }
      if (typeof time === "number" && time.toString().length === 10) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    // eslint-disable-next-line
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === "a") {
        return ["日", "一", "二", "三", "四", "五", "六"][value]
      }
      if (result.length > 0 && value < 10) {
        value = "0" + value
      }
      return value || 0
    })
    // eslint-disable-next-line
    return time_str
  }

  export function parseDate(time){
    if (arguments.length === 0) {
      return null
    }
    let date
    if (typeof time === "object") {
      date = time
    } else {
      if (typeof time === "string" && /^[0-9]+$/.test(time)) {
        time = parseInt(time)
      }
      if (typeof time === "number" && time.toString().length === 10) {
        time = time * 1000
      }
      date = new Date(time)
    }
    console.log(time,date.getFullYear(time),date.getMonth(time)+date.getDay(time))
    const time_str = date.getFullYear(time).toString()+(date.getMonth(time)+1).toString()+date.getDate(time).toString()
    // eslint-disable-next-line
    return time_str



  }
   
  /**
   * Parse the json to excel
   *  tableJson 导出数据 ; filenames导出表的名字; autowidth表格宽度自动 true or false; bookTypes xlsx & csv & txt
   * @param {(Object)} tableJson
   * @param {string} filenames
   * @param {boolean} autowidth
   * @param {string} bookTypes
   */
  export function json2excel (tableJson, filenames, autowidth, bookTypes) {
    import("@/vendor/Export2Excel").then(excel => {
      // var multiHeader = []
      var tHeader = []
      var dataArr = []
      var sheetnames = []
      var merges = ["A1:A2"]
      var autoWidth = true
      var bookType ="xlsx"
      for (var i in tableJson) {
        // multiHeader.push(tableJson[i].multiHeader)          
        tHeader.push(tableJson[i].tHeader)
        // merges.push(tableJson[i].merges)
        dataArr.push(formatJson(tableJson[i].filterVal, tableJson[i].tableDatas))
        sheetnames.push(tableJson[i].sheetName)
        // autoWidth = autoWidth
      }
      excel.export_json_to_excel({
        // multiHeader:multiHeader,
        header: tHeader,
        data: dataArr,
        sheetname: sheetnames,
        filename: filenames,
        merges:merges,
        autoWidth: autowidth,
        bookType: bookTypes
      })
    })
  }

  export function formatJson (filterVal, jsonData) {
    return jsonData.map(v =>
      filterVal.map(j => {
        if (j === "timestamp") {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      })
    )
  }