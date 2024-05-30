const formElement = document.getElementById("product-form")
const addProductButton = document.querySelector("[open-modal-button]")
const modal = document.querySelector(".modal-dialog")
const saveChangesButton = document.getElementById('save-changes')

document.addEventListener("DOMContentLoaded", (event) => {
    if (!localStorage.getItem("token")) {
        window.location.href = "./login.html"
    }
})

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
                                                            <button class="card-button" onclick="handleAddCart()">Add To Cart</button>                                                       
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
                                                            <button id="${index}addCart" class="card-button" onclick="handleAddCart()">Add To Cart</button>                                                       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
            });
        });
};

addProductButton.addEventListener("click", () => {
    modal.showModal()
})

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close()
    }
})

saveChangesButton.addEventListener("click", (event) => {
    event.preventDefault()

    if (!formElement.checkValidity()) {
        formElement.reportValidity()
        return
    }

    modal.close()

    let title = document.querySelector('.title').value
    let description = document.querySelector('.description').value
    let price = document.querySelector('.price').value


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
                            <button class="card-button" onclick="handleAddCart()">Add To Cart</button>                                                       
                        </div>
                    </div>
                </div>
            </div>`

        })

})

logout = () => {
    localStorage.clear()
    window.location.href = "./login.html"
}


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