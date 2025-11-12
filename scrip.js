const modal = document.getElementById("newTaskModal");
const notifPanel = document.getElementById("notifPanel");

document.getElementById("newTaskBtn").onclick = () => modal.style.display = "flex";
document.getElementById("notifBtn").onclick = () => notifPanel.style.display = "block";

document.getElementById("closeTaskModal").onclick = () => modal.style.display = "none";
document.getElementById("cancelBtn").onclick = () => modal.style.display = "none";
document.getElementById("closeNotif").onclick = () => notifPanel.style.display = "none";

window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};
