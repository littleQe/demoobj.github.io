var nowtime = new Date();



//格式化时间函数，new Date().format() 使用

Date.prototype.format=function () {

    return `${this.getFullYear()}年${this.getMonth()+1}月${this.getDate()}日`

}





var ob1 =[

    { name: 'X胶液', code: 'X99', nu: 5, endt: '2023-08-29', pic: 'x.jpg' },

    { name: 'Q胶液', code: 'Q90', nu: 6, endt: '2023-08-05', pic: 'k.jpg' },

    { name: 'T润滑脂', code: 'T20', nu: 1, endt: '2023-07-20', pic: 'u.jpg' },

    { name: '7密封脂', code: '705', nu: 20, endt: '2023-11-09', pic: 'y.jpg' },

    { name: '4密封脂', code: '704', nu: 20, endt: '2023-09-13', pic: 'h.jpg' },
    

    

    { name: '玻璃带', nu: 5, endt: '2023-08-09' },

    { name: '高温带', nu: 6, endt: '2023-11-19' },

    { name: '硅基带', nu: 11, endt: '2024-03-20' },

    { name: '绳子', nu: 20, endt: '2023-09-09' },

    { name: '油膏', nu: 5, endt: '2023-08-09' },

    { name: '硅基带', nu: 1, endt: '2024-03-20' },

    { name: '绳子', nu: 20, endt: '2023-09-09' },

    { name: '2BDDD', nu: 6, endt: '2023-08-09' },
    { name: '1BDDD', nu: 9, endt: '2023-08-09' },

    { name: '2BDDD', nu: 6, endt: '2023-08-09' }//数量：20

];







var arr = [

    //[ob1[0],JSON.stringify(ob1[1]),ob1[2],ob1[3],ob1[4],],

    ["油脂类：", ob1[0],ob1[1],ob1[2],],//ob1[3],ob1[4],],

    ["非金属类：", ob1[5],ob1[6],ob1[7],],//ob1[8],ob1[9],],

    //[ob1[10],ob1[11],ob1[12],ob1[13],ob1[14],],

    //[ob1[15],ob1[16],ob1[17],ob1[18],ob1[19],],

];



var str ='';

for (var i =0; i <= arr.length - 1; i++) {

    str += '<tr>';

    str += `<td>第${i + 1}层</td>`;//行号

    for (var j = 0; j <= arr[i].length - 1; j++) {

        //str += `<td>${arr[i][j]}`;//完整数据

        str += `<td>`;

        //str += `<li>${i + 1,j + 1}</li>`;//列号

        /*方法1，再for一次

        //for(var k = 0; k <= 2; k++) {

            str += `<li>${arr[i][j][k]}</li>`;        

        }*/

        //方法2，直接输出3行li

            str += `<li>名称：${arr[i][j].name}</li>`;

            str += `<li>数量：${arr[i][j].nu}</li>`;

            str += `<li>有效期：${new Date(arr[i][j].endt).format()}</li>`;

            str += `<li>${fun(i,j)}</li>`;  

    }

    str += '</td></tr>';

}



function addId() {



}



function fun(i,j) {

    var nowtime = new Date();

    var endt = new Date(arr[i][j].endt);

    var diffDays = Math.abs(Number(((endt - nowtime) / 3600000 - 8 )/ 24).toFixed(1));

    if (endt < nowtime) {

        return "产品已过期 " + diffDays + "天，严禁使用！请尽快清理！";

    } else if (diffDays < 10) {

        return "有效期仅剩：" + diffDays + " 天，使用时请注意核对！";

      } else {

        return "剩余：" + diffDays + "天，可放心使用";

      }

}



//遍历

//var result =ob1.filter(item => {

//    return item.nu === 5;

//})

//console.log(result);



contain.innerHTML = str;
