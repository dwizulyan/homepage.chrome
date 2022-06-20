$.ajax({
    type: "get",
    url: "./data/data.json",
    dataType: "json",
    success: function (response) {
        $.each(response, function (i, data) { 
             const item = data['items']
             const price = data['price']

             $('.shop-list').append(`
             <div class="col">
             <h1>${item}</h1>
             <p>Rp ${price}.000.00</p>
            </div>
            <div class="gap"></div>
             
             `)
        });
    }
});