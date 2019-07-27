$(document).ready(function () {

    $('#non-devoured .burgerBtn').on('click', function () {
        var obj = {id: $(this).attr('name')};

        $.ajax({
            method: 'PUT',
            url: '/api/burger/eat',
            data: obj
        }).then(function (data){
            location.reload();
        })


        // $.post('/api/burger/eat', {
        //     id: id
        // }, function (data) {
        //     console.log(data);

        //     location.reload();
        // })
    })

    $('#devoured .burgerBtn').on('click', function () {
        var obj = {id: $(this).attr('name')};

        $.ajax({
            method: 'DELETE',
            url: '/api/burger/remove',
            data: obj
        }).then(function (data){
            location.reload();
        })

        // $.post('/api/burger/remove', {
        //     id: id
        // }, function (data) {
        //     console.log(data);

        //     location.reload();
        // })
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