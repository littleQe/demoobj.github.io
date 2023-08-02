var nowtime = new Date();

//格式化时间函数，new Date().format() 使用
Date.prototype.format=function () {
    return `${this.getFullYear()}年${this.getMonth()+1}月${this.getDate()}日`
}


var ob1 =[
    { name: 'X胶液', code: 'X99', nu: 5, endt: '2023-08-29', pic: './0001.png' },
    { name: 'Q胶液', code: 'Q90', nu: 6, endt: '2023-08-05', pic: '0009.png' },
    { name: 'T润滑脂', code: '20T20', nu: 1, endt: '2023-11-20', pic: '0003.jpg' },
    { name: '7密封脂', code: '0075', nu: 20, endt: '2023-07-09', pic: '0004.png' },
    { name: '排笔', code: '0074', nu: 20, endt: '2023-08-01', pic: '0005.jpg' },
    { name: '玻璃丝', code: 'bb4', nu: 5, endt: '2023-08-29', pic: '0004.png' },
    { name: '高温带', code: 'gg5', nu: 6, endt: '2023-11-19', pic: '0002.jpg' },
    { name: '基带', nu: 11, endt: '2023-07-20', pic: '0002.jpg' },
    { name: '橡胶', nu: 20, endt: '2024-03-09', pic: 'logo.jpg' },
    { name: '油膏', nu: 5, endt: '2023-08-29', pic: '.jpg' },
    { name: '基带', nu: 1, endt: '2023-08-02', pic: '.jpg' },
    { name: '绳子', nu: 20, endt: '2023-08-21', pic: '.jpg' },
    { name: '橡胶', nu: 6, endt: '2023-08-11' },
    { name: '高温带', code: 'gg5', nu: 6, endt: '2023-11-19', pic: '0009.png' },
    { name: '笔', nu: 9, endt: '2023-08-17' },
    { name: '杯子', nu: 6, endt: '2023-11-19' }//数量：15
];

var arr = [
    [ob1[0],ob1[1],ob1[2],ob1[3],],//ob1[4],],
    [ob1[4],ob1[5],ob1[6],ob1[7],],//ob1[9],],
    [ob1[8],ob1[9],ob1[10],ob1[11],]//ob1[14],],
    //[ob1[12],ob1[13],ob1[14],ob1[15],]
];

var str='';
for (var i =0; i <= arr.length - 1; i++) {
    str += '<tr>';
    str += `<td>第${i +1}层</td>`;//行号
    //str += `<td></td>`;
    for (var j = 0; j <= arr[i].length - 1; j++) {
        //str += `<td>${arr[i][j]}`;//完整数据
        str += `<td class="tdd" id="td-${i+1}${j+1}">`;
        //str += `<li>${i +1,j + 1}</li>`;//列号
        /*方法1，再for一次
        //for(var k = 0; k <= 2; k++) {
            str += `<li>${arr[i][j][k]}</li>`;        
        }*/
        //方法2，直接输出3行li
        str += `<li class="name">名称：${arr[i][j].name}</li>`;
        str += `<li class="nu">数量：${arr[i][j].nu}</li>`;
        str += `<li class="endt">有效期：${new Date(arr[i][j].endt).format()}</li>`;
        str += `<li class="diff">${fun(i,j)}</li>`;
        str += `<div class="pic"><img src="${arr[i][j].pic}" alt="${arr[i][j].name}图片"></div>`;
        
    }
    str += '</td></tr>';
}

function fun(i,j) {
    var nowtime = new Date();
    var endt = new Date(arr[i][j].endt);
    var diffDays = Math.abs(Number(((endt - nowtime) / 3600000 - 8 )/ 24).toFixed(1)) + 1;
    if (endt < nowtime) {
        return "<span class='kill'>产品已过期 " + diffDays + " 天，严禁使用！</span>";
    } else if (diffDays < 10) {
        return "<span class='bad'>有效期仅剩：<b>" + diffDays + "</b>天，请注意！</span>";
      } else {
        return "<span class='good'>剩余：" + diffDays + " 天，可放心使用</span>";
      }
}
contain.innerHTML = str;


var all = i * j;
var kill = document.getElementsByClassName("kill").length;
var bad = document.getElementsByClassName("bad").length;
var good = document.getElementsByClassName("good").length;
//console.log(badd);
document.getElementById("tj0").innerHTML = "货架共有产品：" + all + " 件；";
document.getElementById("tj1").innerHTML = "已过期产品：" + kill + " 件；";
document.getElementById("tj2").innerHTML = "临近过期产品：" + bad + " 件";

if (kill >= 1) {
    document.getElementById("killtool").style.display ="block";
    document.getElementById("alert").style.display ="block";
    document.getElementById("alertt").innerHTML = "<strong>警告！</strong>有 " + kill + " 件产品已过有效期，请立即清理！";
}


//遍历
//var result =ob1.filter(item => {
//    return item.nu === 5;
//})
//console.log(result);

/*
var sty='';
for (var i =0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr[i].length - 1; j++) {
        var nowtime = new Date();
        var endt = new Date(arr[i][j].endt);
        var diffDays = Math.abs(Number(((endt - nowtime) / 3600000 - 8 )/ 24).toFixed(1));
        if (endt < nowtime) {
            document.getElementsByClassName("tdd").style.background = "#f30";
        } else if (diffDays < 10) {
            document.getElementsByClassName("tdd").style.background = "#330";
          } else {
            document.getElementsByClassName("tdd").style.background = "#ff0";
          }
    }
}
contain.innerHTML = sty;
*/
