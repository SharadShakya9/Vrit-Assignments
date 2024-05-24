let formElement = document.getElementById("form")

loadData = () => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            let rowReference = document.querySelector(".row");

            data?.products?.map((item, index) => {
                rowReference.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-12">
                                                <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                        <div class="flip-card-front">
                                                            <img src="${item?.images[0]}" class="card-img-top w-full" alt="..." style="width: 100%; height:200px !important">
                                                            <div class="card-body">
                                                                <h5 class="card-title">${item?.title}</h5>
                                                                <p class="card-text card-price">$${item?.price}</p>
                                                            </div>
                                                        </div>
                                                        <div class="flip-card-back">
                                                            <p class="card-text">${item?.description}</p>
                                                            <a href="#" id="${index}addCart" class="btn btn-primary card-button" onclick="handleAddCart()">Add To Cart</a>                                                       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
            });
        })
        .catch((error) => {
            console.log("error: ", error);
        });
};

searchData = () => {
    //alert('search clicked')
    let searchQuery = document.querySelector(".search").value ?? "";
    fetch("https://dummyjson.com/products/search?q=" + searchQuery)
        .then((res) => res.json())
        .then((data) => {
            let rowReference = document.querySelector(".row");

            rowReference.innerHTML = "";
            data?.products?.map((item, index) => {
                rowReference.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-12">
                                                <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                        <div class="flip-card-front">
                                                            <img src="${item?.images[0]}" class="card-img-top w-full" alt="..." style="width: 100%; height:200px !important">
                                                            <div class="card-body">
                                                                <h5 class="card-title">${item?.title}</h5>
                                                                <p class="card-text card-price">$${item?.price}</p>
                                                            </div>
                                                        </div>
                                                        <div class="flip-card-back">
                                                            <p class="card-text">${item?.description}</p>
                                                            <a href="#" id="${index}addCart" class="btn btn-primary card-button" onclick="handleAddCart()">Add To Cart</a>                                                       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
            });
        });
};


formElement.addEventListener("click", (event) => {
    let messages = []
    event.preventDefault()
    
    var title = document.querySelector('.title').value
    var description = document.querySelector('.desc').value
    var price = parseFloat(document.querySelector('.price').value)
    const errorElement = document.getElementById('error')

    if (title === '' || title == null) {
        messages.push('Product Title is required')
    }

    if (price === '' || price == null) {
        messages.push('Price is required')
    }

    if (description.length <=300) {
        messages.push('Description must be longer than 300 characters')
    }

    if (messages.length > 0) {
        event.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price,
        })
    })
        .then(res => res.json())
        .then((data) => {
            let rowReference = document.querySelector('.row')

            rowReference.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-12">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="" class="card-img-top w-full" alt="..." style="width: 100%; height:200px !important">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text card-price">$${data.price}</p>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <p class="card-text">${data.description}</p>
                            <a href="#" class="btn btn-primary card-button" onclick="handleAddCart()">Add To Cart</a>                                                       
                        </div>
                    </div>
                </div>
            </div>`

        })
}
)



/*previewImage = (event) => {
    var reader = new FileReader()
    reader.onload = () => {
        var output = document.getElementById('imagePreview')
        output.src = reader.result
        output.style.display = 'block'
    }
    reader.readAsDataURL(event.target.files[0])
}*/

loadData()