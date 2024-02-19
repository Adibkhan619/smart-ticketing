// seat button onclick----------

function getSeatOnClick(elementId) {
    let selectedSeat = document.getElementById(elementId);
    const seatName = selectedSeat.innerText;
    console.log(seatName);
    const seatContainer = document.getElementById('selected-seat-container');
    const p1 = document.createElement('li');
    p1.innerText = seatName;
    seatContainer.appendChild(p1);

    // adding Seat button color-------
    selectedSeat.style.background = '#1DD100';
    selectedSeat.style.color = 'white';

    // Seat count-----------

    const seatCount = document.getElementById('seat-count');
    const newSeatCount = seatCount.innerText;
    const updatedSeatCount = parseInt(newSeatCount);
    let finalSeatCount = updatedSeatCount + 1;
    seatCount.innerText = finalSeatCount;

    // Seat available button--------

    const availableSeat = document.getElementById('available-seat');
    const newSeatAvailable = availableSeat.innerText;
    const updatedSeatAvailable = parseInt(newSeatAvailable);
    let finalSeatAvailable = updatedSeatAvailable - 1;
    availableSeat.innerText = finalSeatAvailable;

    // Total Price ------

    const totalPrice = document.getElementById('total-price');
    const price = totalPrice.innerText;
    const addedPrice = parseInt(price);
    const finalPrice = addedPrice + 550;
    totalPrice.innerText = finalPrice;


    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    let grandTotalValue = parseInt(grandTotalText);
    grandTotalValue = finalPrice;
    grandTotal.innerText = grandTotalValue;
    // console.log(grandTotalValue);
    return grandTotalValue;
}

// console.log(getSeatOnClick('total-price'));
// coupon input

function getElementTextById(elementId) {
    const noText = document.getElementById('coupon-input');
    let button = document.getElementById('apply-button');
    const text = noText.value;

    if (text === 'NEW15') {
        button.style.background = 'red';


        console.log('good');
        button.classList.add('hidden');
        noText.value = '15% Discount Applied';
        const discounted = document.getElementById('grand-total');
        const discountAmount = discounted.innerText;
        const discountedPrice = discountAmount - (discountAmount*0.15);
        // console.log(afterDiscount);    
        discounted.innerText = discountedPrice;



    }
    else if (text === 'Couple 20') {
        button.classList.add('hidden');
        noText.value = '20% Discount Applied';
        const discounted = document.getElementById('grand-total');
        const discountAmount = discounted.innerText;
        const discountedPrice = discountAmount - (discountAmount*0.20);
        // console.log(afterDiscount);    
        discounted.innerText = discountedPrice;

    }
    else {
        console.log('bad');
        button.style.backgroundColor = 'gray';
    }

    // if(text == ''){
    //     const button = document.getElementById('apply-button');
    //     button.style.backgroundColor = 'red';
    // }
    // else{
    //     console.log('bad');
    // } 
}

// function grandTotal(){
//       const grandTotal = document.getElementById('grand-total');
//         const grandTotalText = grandTotal.innerText;
//         const grandTotalValue = parseInt(grandTotalText);
//         grandTotalValue = parseInt(getSeatOnClick(total-price)) ;
//         grandTotal = grandTotalValue;

//         console.log(grandTotalValue);
// }

// console.log(getSeatOnClick('total-price'));
// function couponAdded() {
//     const grandTotal = document.getElementById('grand-total');
//     const grandTotalText = grandTotal.innerText;
//     let grandTotalValue = parseInt(grandTotalText);
//     grandTotalValue = getSeatOnClick('total-price');
//     const total = grandTotalValue.innerText;
//     total = grandTotal.innerText;
//     console.log(total);
//     // return grandTotalValue;
// }


