export function getArrCategory() {
    return fetch('https://api-test-fast-food-store.herokuapp.com/getListCategory')
        .then(resp => resp.json())
}

export function getProduct(arr) {  
    let arrProduct = arr.map((item) => {
        return fetch(`https://api-test-fast-food-store.herokuapp.com/getProduct?id=${item}`)
            .then(resp => resp.json())
    })

    return Promise.all(arrProduct)

}


export function executionOrder(order) {
    return fetch('https://api-test-fast-food-store.herokuapp.com/order', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(order)        
    })
        .then(resp => resp.json())
}

