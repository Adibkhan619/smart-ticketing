// seat button onclick----------

function getSeatOnClick(elementId) {
    let selectedSeat = document.getElementById(elementId);
    const seatName = selectedSeat.innerText;
    console.log(seatName);
    const seatContainer = document.getElementById('selected-seat-container');
    const p1 = document.createElement('li');
    p1.innerText = seatName;
    const addedSeat= document.getElementById('added-into-container');
    addedSeat.appendChild(p1);

    const seatClass = document.getElementById('seat-class');
    const class1 = document.createElement('p');
    class1.innerText = 'Economy';  
    seatClass.appendChild(class1);

    const seatPrice = document.getElementById('seat-price');
    const price1 = document.createElement('p');
    price1.innerText = '550';
    seatPrice.appendChild(price1);

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

// GrandTotal -----------
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    let grandTotalValue = parseInt(grandTotalText);
    grandTotalValue = finalPrice;
    grandTotal.innerText = grandTotalValue;
    return grandTotalValue;
}

function getElementTextById(elementId) {
    const noText = document.getElementById('coupon-input');
    let button = document.getElementById('apply-button');
    const text = noText.value;

    if (text === 'NEW15') {

        console.log('good');
        button.classList.add('hidden');
        noText.value = '15% Discount Applied';
        const discounted = document.getElementById('grand-total');
        const discountAmount = discounted.innerText;
        const discountedPrice = discountAmount - (discountAmount*0.15);
  
        discounted.innerText = discountedPrice;

    }
    else if (text === 'Couple 20') {
        button.classList.add('hidden');
        noText.value = '20% Discount Applied';
        const discounted = document.getElementById('grand-total');
        const discountAmount = discounted.innerText;
        const discountedPrice = discountAmount - (discountAmount*0.20);
  
        discounted.innerText = discountedPrice;

    }
    else {
        console.log('bad');
        // button.classList.add('custom-disabled-button')
    }
}

// input field ------------
function checkInputs() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const nextButton = document.getElementById('next-button');

    if (input1.trim() !== '' && input2.trim() !== '' && input3.trim() !== '') {
      nextButton.removeAttribute('disabled');
      nextButton.classList.remove('custom-disabled-button');
    } 
    else {
      nextButton.setAttribute('disabled', 'disabled');
      nextButton.classList.add('custom-disabled-button');
    }
  }

//   NEXT BUTTON-------
function clickNext(){
    document.getElementById('next-button');
    const show = document.getElementById('success-model');
    show.classList.remove('hidden');
}
// continue button-----
function clickContinue(){
    document.getElementById('continue-button');
    const hide = document.getElementById('success-model');
    hide.classList.add('hidden');
}



