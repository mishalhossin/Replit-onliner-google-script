function fetchWebsite() {
  const url = 'YOUR_REPL_URL_HERE';
  const options = {
    method: 'get',
    timeoutInSeconds: 60
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
  } catch (error) {
  }
}

function createTrigger() {
  ScriptApp.newTrigger('fetchWebsite')
    .timeBased()
    .everyMinutes(1)
    .create();
}
