const colorList = [
    {name: 'red', interval: 4000},
    {name: 'yellow', interval: 500},
    {name: 'green', interval: 4000},
    {name: 'yellow', interval: 500}
  ];
  
  let count = 0;
  
  function changeColor() {
    if (count === colorList.length) {
      count = 0;
    }
    console.log(colorList[count].name)
    setTimeout(changeColor, colorList[count].interval)
    count = count + 1;
  }
  
  changeColor()


