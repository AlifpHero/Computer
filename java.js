//8GB memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateExtraCostValue('memory-cost', 0)
})

//16GB memory
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateExtraCostValue('memory-cost', 180)
})

//256GB SSD storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 0)
})

//512GB SSD storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 100)
})

//1TB SSD storage
document.getElementById('storage-1tb').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 180)
})

//Free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    updateExtraCostValue('delivery-cost', 0)
})

//Paid delivery
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateExtraCostValue('delivery-cost', 20)
})


//Function for updating extra-cost amount
function updateExtraCostValue(id, value) {
    const costElement = document.getElementById(id)
    costElement.innerText = value;
    updateTotal() //calling the totalAmount function
}


//Function for updating total Amount
function updateTotal() {
    const bestPriceElement = document.getElementById('best-price')
    const bestPrice = parseFloat(bestPriceElement.innerText)

    const extraMemoryElement = document.getElementById('memory-cost')
    const extraMemoryCost = parseFloat(extraMemoryElement.innerText)

    const extraStorageElement = document.getElementById('storage-cost')
    const extraStorageCost = parseFloat(extraStorageElement.innerText)

    const extraDeliveryElement = document.getElementById('delivery-cost')
    const extraDeliveryCost = parseFloat(extraDeliveryElement.innerText)

    const extraTotalCost = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;

    const extraTotalElement = document.getElementById('extra-total-cost')
    const inTotalElement = document.getElementById('in-total')

    extraTotalElement.innerText = extraTotalCost;
    inTotalElement.innerText = extraTotalCost;
}