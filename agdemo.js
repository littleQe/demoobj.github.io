//定义表头的列
var columnDefs = [
    { headerName: '名称', field: 'name','pinned': 'left' },
    { headerName: '编号', field: 'no' },
    { headerName: '数量', field: 'number' },
    { headerName: '种类', field: 'cat' },
    { headerName: '有效期', field: 'endtime' },
    { headerName: '剩余天数', field: 'difftime' }
];

var nowtime = new Date();

//格式化时间函数，new Date().format() 使用
Date.prototype.format=function () {
    return `${this.getFullYear()}年年${this.getMonth()+1}月${this.getDate()}`
}

//页脚时间核准
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var hk = new Date();
  var hkM = hk.getMonth() + 1;
  document.getElementById("text").innerHTML = 
  hk.getFullYear() + "-" + hkM + "-" + hk.getDate() + " , " + 
  hk.toLocaleTimeString();
}


//与列对应的数据; 属性名对应上面的field
var data = [
    { name: '钢板尺', no: 'a123000', number: '3', cat: '量具', endtime: '2023-07-25' },
    { name: '卷尺', no: '111000', number: '5', cat: '量具', endtime: '2023-12-10' },
    { name: '卡尺', no: '111bbb', number: '12', cat: '量具', endtime: '2023-09-17' },
    { name: '秒表', no: '111ccc', number: '10', cat: '仪器', endtime: '2023-07-22' },
    { name: '钟表', no: 'a456000', number: '5', cat: '仪器', endtime: '2023-07-10' },
    { name: '三用表', no: 'a789000', number: '5', cat: '仪器', endtime: '2023-09-10' },
    { name: '电表', no: 'b111000', number: '4', cat: '仪器', endtime: '2024-02-18' },
    { name: '压力表', no: 'b222000', number: '9', cat: '仪表', endtime: '2023-11-01' },
    { name: '压力表', no: 'b333000', number: '23', cat: '仪表', endtime: '2023-08-29' },
    { name: '压力表', no: 'c147000', number: '35', cat: '仪表', endtime: '2023-08-23' },
    { name: '力矩扳手', no: 'c258000', number: '6', cat: '扳手', endtime: '2023-09-10' },
    { name: '力矩扳手', no: 'c369000', number: '7', cat: '扳手', endtime: '2023-09-10' },
    { name: '力矩扳手', no: 'x01', number: '5', cat: '扳手', endtime: '2023-08-20' },
    { name: '力矩扳手', no: 'x02', number: '3', cat: '扳手', endtime: '2023-07-24' },
    { name: '力矩扳手', no: 'x03', number: '6', cat: '扳手', endtime: '2023-08-10' }
];



//增加列3-1
//var columnDefss = [
//    { headerName: '剩余', field: 'ppp' }
//];

//给数组对象添加属性，变为新数组
var data = data.map(item=> {
    return {
        name: item.name,
        no: item.no,
        number: item.number,
        cat: item.cat,
        endtime: item.endtime,
        //difftime: Math.abs(Number((new Date(item.endtime) - nowtime)/3600000/24).toFixed(2))
        difftime: fun(item.difftime)
        //ppp: new Date(item.endtime) - nowtime ////增加列3-2
    }
    function fun() {
        if (item.endtime < nowtime) {
        return Math.abs(Number((new Date(item.endtime) - nowtime)/3600000/24).toFixed(2));
    }
    }
});


//增加行
/*var dataadd = [
    { name: data[0].endtime, no: nowtime, number: "2", cat: '扳手', endtime: '2023-08-10' }
];
var dataadd = data[0];
var data = data.concat(dataadd);*/

//将列和数据赋给gridOptions 
var gridOptions = {
    //columnDefs: columnDefs.concat(columnDefss),////增加列3-3
    columnDefs: columnDefs,
    rowData: data,
    onGridReady: function () {
         //表格创建完成后执行的事件
        gridOptions.api.sizeColumnsToFit();//调整表格大小自适应
    },
    defaultColDef: {
        editable: true,//单元表格是否可编辑
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true, //开启排序
        resizable: true,//是否可以调整列大小，就是拖动改变列大小
        filter: true  //开启刷选
    },
    pagination: true,  //开启分页（前端分页）
    paginationAutoPageSize: true, //根据网页高度自动分页（前端分页）
            
};

//在dom加载完成后 初始化agGrid完成
document.addEventListener("DOMContentLoaded", function () {
    var eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);
});



//设置di并统计每行的汇总数据
function count() {
    var pvCount = 0;
    for (var i = 0; i < data.length; i++) {
        pvCount = pvCount + data[i].number;
    }

    var topRows = [
        { name: '合计', no: '1', number: pvCount, cat: '1', endtime: '1', difftime: '1' }
    ];
    gridOptions.api.setPinnedBottomRowData(topRows);

}








