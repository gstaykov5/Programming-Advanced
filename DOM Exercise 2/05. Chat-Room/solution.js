function solve() {
   document.getElementById('send').addEventListener('click', send);
   const chatRoom = document.getElementById('chat_messages');
   
   function send() {
      const newDiv = document.createElement('div');
      newDiv.className = "message my-message";
      const inputArea = document.getElementById('chat_input');
      const inputAreaValue = inputArea.value;
      newDiv.innerText = inputAreaValue;
      chatRoom.appendChild(newDiv);
      inputArea.value = '';
     
   }
}


