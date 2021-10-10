 function setCookie(cname, cvalue, exdays) {

   const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "testie" + cvalue + ";" + expires + ";path=/";
}
 document.cookie = "testie; expires=Sun, 01 Aug 2073 00:00:00 UTC; path=/";
 
