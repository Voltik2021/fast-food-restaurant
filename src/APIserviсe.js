export function getArrCategory() {
    return fetch('http://localhost:3000/getListCategory')
        .then(resp => resp.json())
}

export function getProduct(arr) {  
    let arrProduct = arr.map((item) => {
        return fetch(`http://localhost:3000/getProduct?id=${item}`)
            .then(resp => resp.json())
    })

    return Promise.all(arrProduct)

}

// export function getArrCategory() {
//     return fetch('http://localhost:3000/getListCategory')
//         .then(resp => resp.json())
// }

