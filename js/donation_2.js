

const doanateBalanceEl2=document.getElementById('donate-balance-2');
const donationeButtonEL2=document.getElementById('donate-btn-2');
const inputFieldEl2= document.getElementById('flood-input-field-2');


// *****addeventlistener donation button2**********

donationeButtonEL2.addEventListener('click',function(event){
    event.preventDefault();
    
    const donationAmount= getInputFieldByID('flood-input-field-2');
    if(isNaN(donationAmount) || donationAmount<0 ){
      document.getElementById('my_modal_2').classList.add('hidden')
       alert('Invalid Amount');
       return ;
       
    }
   historyContainerEl.innerHTML +=`
   <div class="border-2 p-5 rounded-md mt-4">
    <p>${inputFieldEl2} taka is Donated for famine-2024 at Feni,Bangladesh  </P>
    <p> ${new Date()} </p>
    </div>
       
   
    `

    totalDonationAmount +=donationAmount;
    document.getElementById('donate-balance-2').innerText=totalDonationAmount;
    document.getElementById('flood-input-field-2').value='';
     const mainBalance= getTextValueByID('main-balance');
     
     const newBlance=mainBalance - donationAmount;

     
        document.getElementById('main-balance').innerText=newBlance;
      document.getElementById('my_modal_2').classList.remove('hidden');
    
})