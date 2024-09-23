

const doanateBalanceEl2=document.getElementById('donate-balance-2');
const donationeButtonEL2=document.getElementById('donate-btn-2');
const inputFieldEl2= document.getElementById('flood-input-field-2');


// *****addeventlistener donation button2**********



donationeButtonEL2.addEventListener('click',function(event){
    event.preventDefault();
    
    const donationAmount= getInputFieldByID('flood-input-field-2');
    const mainBalance=getTextValueByID('main-balance');
    const donateBalance=getTextValueByID('donate-balance-2')

    // //  insufficient balance
    if(donationAmount>mainBalance || isNaN(donationAmount) || donationAmount<0){
      return alert('Invalid Amount');
   }
    //  calculation part
    const newDonateBalance=donateBalance + donationAmount;
    const newMainBalance= mainBalance-donationAmount;


    document.getElementById('donate-balance-2').innerText=newDonateBalance;
    document.getElementById('main-balance').innerText= newMainBalance


   
    
   


       historyContainerEl.innerHTML +=`
   <div class="border-2 p-5 rounded-md mt-4">
    <p>${donationAmount} taka is Donated for Flood Relief in Feni,Bangladesh  </P>
    <p> ${new Date()} </p>
    </div>
       
   
    `
    document.getElementById('my_modal_2').classList.remove('hidden');
    document.getElementById('flood-input-field-2').value = "";
})