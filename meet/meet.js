const room =
  window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)

window.onload = () => {
  const api = new JitsiMeetExternalAPI("meet.jit.si", {
    roomName: room,
    parentNode: document.querySelector('#jaas-container')
  });
}