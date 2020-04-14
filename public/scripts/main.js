/* Executes on page load */
window.onload = function () {

    if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

    $('#ip').html('Fetching...');
    $('#latency').html('0');
    $('#download').html('0');
    $('#upload').html('0');
    $.get('https://jsonip.com/', (json) => {
        $('#ip').html(json.ip);
    });

    var prg = 0;
    var prg2 = 100;
    var progressInterval = setInterval(() => { $('#progress-bar').css('width', prg2 + '%'); prg += 0.08; }, 25);
    var progressInterval2 = setInterval(() => { $('#progress-bar-2').css('width', prg + '%'); prg2 -= 0.08; }, 25);
    setTimeout(() => { clearInterval(progressInterval); clearInterval(progressInterval2); $('#progress-bar').css('width', '100%'); $('#progress-bar-2').css('width', '0%'); }, 31000);
    var net = new Network({ endpoint: 'https://api.msg-st.wildscript.tech', measures: 10, attempts: 3, download: { delay: 8000, data: { size: 10 * 1024 * 1024, multiplier: 2 } }, upload: { delay: 8000, data: { size: 10 * 1024 * 1024, multiplier: 2 } } });
    net.upload.on('end', function (averageSpeed, allInstantSpeeds) { $('#upload').html(Math.floor((averageSpeed * 1.2 / 1e+4))); });
    net.download.on('end', function (averageSpeed, allInstantSpeeds) { $('#download').html(Math.floor((averageSpeed * 2.67 / 1e+6))); $('#upload').html('[Testing]'); net.upload.start(); setTimeout(() => { net.upload.abort(); }, 16000); });
    net.latency.on('end', function (averageLatency, allLatencies) { $('#latency').html(Math.floor(averageLatency)); $('#download').html('[Testing]'); net.download.start(); setTimeout(() => { net.download.abort(); }, 16000); });
    $('#latency').html('[Testing]');
    net.latency.start();

}