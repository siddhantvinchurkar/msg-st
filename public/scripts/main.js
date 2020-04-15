/* Executes on page load */

window.onload = () => {

    /* Register a service worker to enable offline access */

    if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

    /* Set the correct copyright year in the footer */

    $('#footerYear').html(new Date().getFullYear());

    /* Set initial values for UI elements */

    $('#ip').html('Fetching...');
    $('#latency').html('0');
    $('#download').html('0');
    $('#upload').html('0');

    /* Hide the retest button */

    $('#retest').fadeOut(1);

    /* Use the jsonip API to fetch user's current public IP address */

    $.get('https://jsonip.com/', (json) => {

        /* Update UI to display fetched IP address */

        $('#ip').html(json.ip);

    });

    /* Create two variables to emulate progress */

    var prg = 0;
    var prg2 = 100;

    /* Create two intervals to animate progress bars */

    var progressInterval = setInterval(() => {
        $('#progress-bar').css('width', prg2 + '%');
        prg += 0.08;
    }, 25);
    var progressInterval2 = setInterval(() => {
        $('#progress-bar-2').css('width', prg + '%');
        prg2 -= 0.08;
    }, 25);

    /* After 31 seconds, clear intervals and set progress to 100% */

    setTimeout(() => {
        clearInterval(progressInterval);
        clearInterval(progressInterval2);
        $('#progress-bar').css('width', '100%');
        $('#progress-bar-2').css('width', '0%');
    }, 31000);

    /* Initialize the 'Network' object with some pre-calculated values */

    var net = new Network(
        {
            endpoint: 'https://api.msg-st.wildscript.tech',
            measures: 10,
            attempts: 3,
            download:
            {
                delay: 8000,
                data:
                {
                    size: 10 * 1024 * 1024,
                    multiplier: 2
                }
            },
            upload:
            {
                delay: 8000,
                data:
                {
                    size: 10 * 1024 * 1024,
                    multiplier: 2
                }
            }
        });

    /* Handle what happens when the upload speed test is completed */

    net.upload.on('end', (aS, aIS) => {

        /* Calculate upload speed and update UI to display it */

        $('#upload').html(Math.floor((aS * 1.2 / 1e+4)));

        /* Reveal the retest button */

        $('#retest').fadeIn(1500);

    });

    /* Handle what happens when the download speed test is completed */

    net.download.on('end', (aS, aIS) => {

        /* Calculate download speed and update UI to display it */

        $('#download').html(Math.floor((aS * 2.67 / 1e+6)));

        /* Update UI to display status of upload speed test before triggering it */

        $('#upload').html('[Testing]');

        /* Trigger the upload speed test */

        net.upload.start();

        /*

        - After 16 seconds, stop the test. A bug in network.min.js turns this into an infinite loop. 
        - If unchecked, the client keeps sending data while the server keeps downloading it.
        - Excellent strategy if you want to dry somebody's data limit out.
        - Also an excellent strategy if you want expensive AWS bills.

        */

        setTimeout(() => {
            net.upload.abort();
        }, 16000);

    });

    /* Handle what happens when the latency test is completed */

    net.latency.on('end', (aLy, aLs) => {

        /* Calculate average latency and update UI to display it */

        $('#latency').html(Math.floor(aLy));

        /* Update UI to display status of download speed test before triggering it */

        $('#download').html('[Testing]');

        /* Trigger the download speed test */

        net.download.start();

        /*

        - After 16 seconds, stop the test. A bug in network.min.js turns this into an infinite loop. 
        - If unchecked, the server keeps sending data while the client keeps downloading it.
        - Excellent strategy if you want to dry somebody's data limit out.
        - Also an excellent strategy if you want expensive AWS bills.

        */

        setTimeout(() => {
            net.download.abort();
        }, 16000);

    });

    /* Update UI to display status of latency test before triggering it */

    $('#latency').html('[Testing]');

    /* Trigger the latency test (or the entirety of the speed test) */

    net.latency.start();

    /* Handle what happens whn user clicks the retest button */

    $('#retest').click(() => {

        /* Hide the retest button */

        $('#retest').fadeOut(1500);

        /* Reset progress bar animation */

        prg = 0;
        prg2 = 100;
        $('#progress-bar').css('width', '0%');
        $('#progress-bar-2').css('width', '100%');

        /* Create two intervals to animate progress bars */

        var progressInterval = setInterval(() => {
            $('#progress-bar').css('width', prg2 + '%');
            prg += 0.08;
        }, 25);
        var progressInterval2 = setInterval(() => {
            $('#progress-bar-2').css('width', prg + '%');
            prg2 -= 0.08;
        }, 25);

        /* After 31 seconds, clear intervals and set progress to 100% */

        setTimeout(() => {
            clearInterval(progressInterval);
            clearInterval(progressInterval2);
            $('#progress-bar').css('width', '100%');
            $('#progress-bar-2').css('width', '0%');
        }, 31000);

        /* Update UI to display status of latency test before triggering it */

        $('#latency').html('[Testing]');

        /* Trigger the latency test (or the entirety of the speed test) */

        net.latency.start();

    });

}