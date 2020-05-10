$(document).ready(() => {
    $('#btn-connect').on('click', (e) => {
        document.cookie = `POESESSID=${$('#token').val()}`;
        console.log('connecting');
        $.ajax({
            url: '/api/get-stashRoutes-items',
            type: "GET",
            crossDomain: true,
            accept: '*/*',
            dataType: "json",
            headers: {
                Accept: 'application/json'
            },
            xhrFields: {
                withCredentials: true
            },
            data: {
                accountName: $('#username').val(),
                league: 'Delirium', // TODO: make dynamic
                tabs: 20, // TODO: Better way of doing this
                tabIndex: 0
            },
            success: (response) => {
                console.log(response);
            },
            error: (err) => {
                console.log(err);
            }
        });
    });
});
