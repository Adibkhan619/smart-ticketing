// seat button onclick----------

function getSeatOnClick(elementId){
    let selectedSeat = document.getElementById(elementId);
   const seatName = selectedSeat.innerText;
    console.log(seatName);   
    const seatContainer = document.getElementById('selected-seat-container');
    const p1 = document.createElement('li');
    p1.innerText = seatName;
    seatContainer.appendChild(p1);

// adding button color-------
    selectedSeat.style.background = '#1DD100';
    selectedSeat.style.color = 'white';

// Seat count-----------

    const seatCount = document.getElementById('seat-count');
    const newSeatCount = seatCount.innerText;
    const updatedSeatCount = parseInt(newSeatCount);
    let finalSeatCount =  updatedSeatCount + 1;
    seatCount.innerText = finalSeatCount;

// Seat available button--------

    const availableSeat = document.getElementById('available-seat');
    const newSeatAvailable = availableSeat.innerText;
    const updatedSeatAvailable = parseInt(newSeatAvailable);
    let finalSeatAvailable =  updatedSeatAvailable - 1;
    availableSeat.innerText = finalSeatAvailable;

// Total Price ------

    const totalPrice = document.getElementById('total-price');
    const price = totalPrice.innerText;
    const addedPrice = parseInt(price);
    const finalPrice = addedPrice + 550;
    totalPrice.innerText = finalPrice;
}

// coupon input

function getElementTextById(elementId){
    const noText = document.getElementById('coupon-input');
    const text = noText.value;
    // if(text == 'NEW15' || text == 'Couple 20'){
    //     console.log('good');
    // }
    // else{
    //     console.log('bad');
    // } 

    if(text == ''){
        const button = document.getElementById('apply-button');
        button.style.backgroundColor = 'red';
    }
    else{
        console.log('bad');
    } 
}
