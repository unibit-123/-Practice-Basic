var Links = {
    setColor:function (color){
    document.querySelector('a').style.color=color;
    document.querySelectorAll('li').forEach(i=>{
    i.style.color=color;
    i.querySelector('a').style.color=color;
    })
  }
}

  var Body = {
    setColor:function (color){
    document.body.style.color=color;
  },
  setBackgroundcolor:function (color){
    document.body.style.backgroundColor=color;
  }
}

  function nightDayHandler(self){
    var target = document.body;
    if(self.value === 'night'){
      self.value = 'day'
      Body.setBackgroundcolor('black');
      Body.setColor('white');
      Links.setColor('white');

    } else {
      self.value = 'night'
      Body.setBackgroundcolor('white');
      Body.setColor('black');
      Links.setColor('black');
    }
  }