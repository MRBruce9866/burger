$(document).ready(function () {

    $('#non-devoured .burgerBtn').on('click', function () {
        var id = $(this).attr('name');

        $.post('/api/burger/eat', {
            id: id
        }, function (data) {
            console.log(data);

            location.reload();
        })
    })

    $('#devoured .burgerBtn').on('click', function () {
        var id = $(this).attr('name');

        $.post('/api/burger/remove', {
            id: id
        }, function (data) {
            console.log(data);

            location.reload();
        })
    })

});