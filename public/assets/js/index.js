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

    $('#createBurger').on('click', function (event){
        event.preventDefault();

        var name = $('#burgerName').val();

        if(name){
            $.post('/api/burger/add', {
                name: name
            }, function (data) {
                console.log(data);
    
                location.reload();
            })
        }

        
    })

});