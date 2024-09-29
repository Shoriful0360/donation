


const donateBalanceEl3=document.getElementById('donate-balance-3');
const donationeButtonEL3=document.getElementById('donate-btn-3');
const inputFieldEl3= document.getElementById('flood-input-field-3');




// *****addeventlistener donation button3**********



donationeButtonEL3.addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount= getInputFieldByID('flood-input-field-3');
    const mainBalance=getTextValueByID('main-balance');
    const donateBalance=getTextValueByID('donate-balance-3')


    // !isNaN(inputValue) && inputValue.trim() !== ""


    // //  insufficient balance
    if(donationAmount>mainBalance || isNaN(donationAmount) || donationAmount <0 ){
        
        
        return alert('Invalid Amount');
       
     }
      //  calculation part
      const newDonateBalance=donateBalance + donationAmount;
      const newMainBalance= mainBalance-donationAmount;
  
  
      document.getElementById('donate-balance-3').innerText=newDonateBalance;
      document.getElementById('main-balance').innerText= newMainBalance

  
    
   
   historyContainerEl.innerHTML +=`
   <div class="border-2 p-5 rounded-md mt-4">
<p>${donationAmount} taka is Donated for Aid for Injured in the Quota Movement,Bangladesh  </P>
    <p> ${new Date()} </p>
    </div>
       
   
    `

   
    document.getElementById('my_modal_3').showModal()
    document.getElementById('flood-input-field-3').value = "";

    
})