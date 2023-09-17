const alertContainer = document.querySelector(".alert-container");
const ws = new WebSocket("ws://localhost:8080");
let alertNum = 0;


ws.addEventListener("message", async (event) => {
  alertNum++;
  const text = await event.data.text();
  let alert = `<div id="alert${alertNum}" class="alert alert-danger alert-dismissible fade show" role="alert">
    伺服器資訊：${text}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  
  alertContainer.innerHTML += alert;
});

