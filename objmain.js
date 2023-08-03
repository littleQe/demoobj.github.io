
//基础数据st
var ob1 =[
    { name: 'X胶液', code: 'X99123456', nu: 5, endt: '2023-08-29', pic: './0002.png' },
    { name: 'Q胶液', code: 'Q90523641', nu: 6, endt: '2023-08-08', pic: '0008.jpg' },
    { name: 'T润滑脂', code: '2012774T20', nu: 1, endt: '2023-11-20', pic: '0004.jpg' },
    { name: '7密封脂', code: 'abcde0075', nu: 20, endt: '2023-09-09', pic: '0004.png' },
    { name: '排笔', code: '0011223374', nu: 20, endt: '2023-08-01', pic: '0005.jpg' },
    { name: '麻绳', code: 'bb455668520', nu: 5, endt: '2023-08-12', pic: '0006.jpg' },
    { name: '高温带', code: 'gg5', nu: 18, endt: '2023-08-21', pic: '0002.jpg' },
    { name: '基带', nu: 11, endt: '2023-08-25', pic: '0002.jpg' },
    { name: '橡胶', nu: 20, endt: '2024-03-09', pic: 'logo.jpg' },
    { name: '油膏', nu: 5, endt: '2023-10-29', pic: '.jpg' },
    { name: '基带', nu: 1, endt: '2023-08-22', pic: '.jpg' },
    { name: '丝绳', nu: 20, endt: '2023-08-15', pic: '.jpg' },
    { name: '橡胶', nu: 6, endt: '2023-08-11' },
    { name: '高温带', code: 'gg5', nu: 6, endt: '2023-11-19', pic: '0009.png' },
    { name: '笔', nu: 9, endt: '2023-08-17' },
    { name: '杯子', nu: 6, endt: '2023-11-19' }//数量：15
];
////基础数据end


//Time
var nowtime = new Date();
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var hk = new Date();
  var hkM = hk.getMonth() + 1;
  document.getElementById("hk").innerHTML = 
  hk.getFullYear() + "-" + hkM + "-" + hk.getDate() + " , " + 
  hk.toLocaleTimeString();
}

//格式化时间函数，new Date().format() 使用
Date.prototype.format=function () {
    return `${this.getFullYear()}年${this.getMonth()+1}月${this.getDate()}日`
}

//新建数组
var arr = [
    [ob1[0],ob1[1],ob1[2],ob1[3],],//ob1[4],],
    [ob1[4],ob1[5],ob1[6],ob1[7],],//ob1[9],],
    [ob1[8],ob1[9],ob1[10],ob1[11],]//ob1[14],],
    //[ob1[12],ob1[13],ob1[14],ob1[15],]
];

//循环输出
var str='';
for (var i =0; i <= arr.length - 1; i++) {
    str += '<tr>';
    str += `<td>第 ${i +1} 层</td>`;

    for (var j = 0; j <= arr[i].length - 1; j++) {

        str += `<td class="tdd" id="td-${i+1}${j+1}">`;
        //str += `<li>${i +1,j + 1}</li>`;//列号

        //输出li
        str += `<li class="name">名称：${arr[i][j].name}</li>`;
        str += `<li class="name">批次：${arr[i][j].code}</li>`;
        str += `<li class="nu">数量：${arr[i][j].nu}</li>`;
        str += `<li class="endt">有效期：${new Date(arr[i][j].endt).format()}</li>`;
        str += `<li class="diff">${fun(i,j)}</li>`;
        str += `<div class="pic"><img src="${arr[i][j].pic}" alt="${arr[i][j].name}图片"></div>`;
        
    }
    str += '</td></tr>';
}

//diff函数
function fun(i,j) {
    var nowtime = new Date();
    var endt = new Date(arr[i][j].endt);
    //var diffDays = Math.abs(Number(((endt - nowtime) / 3600000 - 8 )/ 24).toFixed(1)) + 1;//负数取正
    var diffDays = Number(((endt - nowtime) / 3600000 - 8 )/ 24 + 1).toFixed(1);
    console.log(diffDays);

    var diffTi = Math.abs(Number(endt - nowtime));
    diffTi = diffTi / 1000 + 57600;//24-8小时，转毫秒数
    var y =parseInt(diffTi / 3600 / 24 / 365);
    y = y < 10 ? "0" + y:y;
    var d =parseInt(diffTi / 3600 / 24 % 365);
    d = d < 10 ? " " + d:d;
    var h = parseInt(diffTi / 3600 % 24);
    h = h < 10 ? "0" + h:h;
    var m = parseInt(diffTi / 60 % 60);
    m = m < 10 ? "0" + m:m;

    /*if (endt < nowtime) {
        return "<span class='kill'>已过期 " + (diffDays - 2).toFixed(1) + " 天，严禁使用！</span>";
    } else if (diffDays < 15) {
        return "<span class='bad'><b>请注意！</b>有效期仅剩：<b>" + d + " 天 </b><b>" + h + "时" + m + "分 " + "</b></span>";
    } else {
        return "<span class='good'>剩余：" + diffDays + " 天，放心使用</span>";
    }*/

    switch (true) {
        case diffDays >= 30:
          return "<span class='best'>剩余：" + diffDays + " 天，非常好！</span>";
          break;
        case diffDays >= 10:
          return "<span class='good'>剩余：" + diffDays + " 天，放心使用</span>";
          break;
        case diffDays >= 0:
          return "<span class='bad'><b>请注意！</b>有效期仅剩：<b>" + d + " 天 </b><b>" + h + "时" + m + "分 " + "</b></span>";
          break;
        default:
          return "<span class='kill'>已过期 " + Math.abs(diffDays) + " 天，严禁使用！</span>";
      }
}
contain.innerHTML = str;


var all = i * j;
var kill = document.getElementsByClassName("kill").length;
var bad = document.getElementsByClassName("bad").length;
var good = document.getElementsByClassName("good").length;
//console.log(badd);
document.getElementById("tj0").innerHTML = " 货架共有耗材：" + all + " 件；";
document.getElementById("tj1").innerHTML = " 已过期耗材：" + kill + " 件；";
document.getElementById("tj2").innerHTML = " 临近过期耗材：" + bad + " 件";

if (kill >= 1) {
    document.getElementById("alertkill").style.display ="block";
    document.getElementById("alertk").innerHTML = "<strong>警告！</strong>有 " + kill + " 件耗材已过有效期，请立即清理！";
}

if (bad >= 1) {
    document.getElementById("alertbad").style.display ="block";
    document.getElementById("alertb").innerHTML = "<strong>注意! </strong>有 " + bad + " 件耗材有效期较短，请及时更新！";
}
