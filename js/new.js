//将时间过滤成好看的格式
window.$(function () {
  template.defauts.imports.timeName = (strtime) => {
    let date = new Date();
    let year = data.getfullyear();
    let month = date.getMonth();
    let day = get.getDate();
    return `{$year}--{$month}--{$day}`;
    // 在运行完毕后会将数据传到strtime然后给$value.time赋值
  };
});

window.$(function () {
  function getdata () {
    // 这个接口也是坏的，不能用
    $.get('http://www.liulongbin.top:3006/api/news', (res) => {
      if (res.status === 200) {
        console.log(res.data);
      } else {
        return alert('获取数据失败');
      }
      for (i = 0; i < res.data.length; i++) {
        // 将每个targs转化为以逗号分割的数组
        res.data[i].tags = res.data[i].targs.split(',');
        
      }
      //导入模板字符串
      let str = template('news-item', res);
      $('.news-list').html(str);
    })
  }
  
  getdata();
})
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  let files = document.querySelector('#file1').files;//这个后面的files就是文件的数组。
  if (files.length <= 0) {
    return alert('用户上传图片失败');
  } else {
    console.log('成功');

  }
  let fd = new FormData();
  // 将用户所选择的文件添加到formData中'choose'是一个属性名，上传文件后你的文件的属性名就变成这个，属性值就是你添加的文件
  fd.append('choose', files[0]);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar');
  xhr.send(fd);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      if (data.status === 200) {
        //上传成
        let img = document.querySelector('#img');
        img.src = "http://www.liulongbin.top:3006" + data.url;
      } else {
        //上传失败
        console.log('上传失败' + data.message);
      }
    }
  }
})
function fn1(){
  console.log('nihao')
  function fn3(){
  
  }
}

console.log('niaho')
