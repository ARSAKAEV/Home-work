function App() {
  //1
  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
  const positive = array.filter(function(item){
    if(item >= 0){
      return true
    }
  })

  //2
  const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

  const messagesError = messages.filter(function(item){
    if(item.error === false){
      return item
    }
  })

  console.log(messagesError);


  //3
  const words = ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];
  const makeAnAsterisk = words.map(function(item){
    if(item.length < 5){
      return "*"
    }
    return item
  })

  console.log(makeAnAsterisk)

  // function sendMessage1(message) {
  //   /*
  //   * тут какой-то большой код для отправки сообщения
  //   */
  // }

  let sendMessage = (message) => {
  console.log('message')
  }
  sendMessage(555)

  // function half(number) {
  //   return number / 2;
  // }
  let half = (number) => {
    return number / 2;
  }
  console.log(half(6))

  // function showConsole() {
  //   console.log('Экспо');
  // }
  let showConsole = () => {
    console.log('Экспо');
  }
  showConsole()

  // function concatWords(first, second) {
  //   return first + second;
  // }
  let concatWords = (first, second) => {
    return first + second;
  }
  console.log(concatWords(2, 7))

  // const justText = () => 'expo';
  function justText(){
    return 'expo'
  } 
  console.log(justText()) 
  

  // const logging = text => console.log(text);
  function logging(text){
    console.log(text)
  } 
  logging("ddd")  


  // const add = (x,y) => {
  //   const z = 3;
  //   return z * x * y;
  // }
  function add(x, y){
    const z = 3;
    return z * x * y;
  }
  console.log(add(3, 3)) 

  // const onlyPositive = (number) => {
  //   if(number < 0) {
  //     return false;
  //   }
  //   return true;
  // }

  function onlyPositive(number){
    if(number < 0) {
      return false;
    }
    return true;
  }
  console.log(onlyPositive(-3)) 



  return (
    <div className="App">
      {positive}
    </div>
  );
}

export default App;
