function setImage(i, img) {
    console.log(i, img)
    document.getElementById(`image-section-${i}`).innerHTML = `<img src="${img}" width="30%" height="30%">`
}

function setImageALert() {
    alert('works')
}
function onFetchButton() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://dummyjson.com/products/category/smartphones", false)
    xhr.onprogress = function () {
        console.log("on progress")
    } // to get the progress 
    xhr.onreadystatechange = function () {
        console.log(this.readyState);
    }
    //what to do when response is ready
    xhr.onload = function () {
        let response = JSON.parse(this.responseText);
        products = response.products;
        console.log(products)
        let data = ` <tr>
        <th>BRAND</th>
        <th>TITLE</th>
        <th>PRICE</th>
        <th>RATING</th>
        <th>IMAGE</th>
        <th>THUMBNAIL</th>
    </tr>`
        for (i in products) {
            console.log(i, products[i].title)
            data += `  <tr>
            <th>${products[i].brand}</th>
            <th>${products[i].title}</th>
            <th>${products[i].price}</th>
            <th>${products[i].rating}</th>
            <th>
            <div id="image-section-${i}"></div>     
            <div id="button-section-${i}"></div>         
            </th>
            <th><img src="${products[i].thumbnail}" width="30%" height="30%"></th>
        </tr>`
            console.log(data)
        }
        document.getElementById("table_data").innerHTML = data;
        let buttonData;
        for (i in products) {
            console.log(i, products[i].title)
            buttonData = `<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-outline-secondary" onclick="${setImage(i, products[i].images?.[0])}">1</button>
                        <button type="button" class="btn btn-outline-secondary" onclick="${setImage(i, products[i].images?.[1])}">2</button>
                        <button type="button" class="btn btn-outline-secondary" onclick="${setImage(i, products[i].images?.[2])}">3</button>
                        <button type="button" class="btn btn-outline-secondary" onclick="${setImage(i, products[i].images?.[3])}">4</button>        
                                            
                        <button type="button" class="btn btn-outline-secondary" onclick="${() => setImageALert}">5</button>
                    </div>
                </div>`

            console.log(buttonData)
            document.getElementById(`button-section-${i}`).innerHTML = buttonData;
            console.log()

        }

    }
    xhr.send();
    console.log("success")
    xhr.status = function () {
        console.log(this.status)
    }
}

