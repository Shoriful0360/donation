


 const mainBalanceEL=document.getElementById('main-balance');
 const donateBalanceEL1=document.getElementById('donate-balance-1');
 const getInputFieldEL1=document.getElementById('flood-input-field');
 const donateButtonEL1=document.getElementById('donate-btn');
 const historyContainerEl=document.getElementById('history-container');
 const donationButtonEL=document.getElementById('donation-btn');
 const historyButtonEL=document.getElementById('history-btn');


//  *******get input field value*********

function getInputFieldByID (id){
    return parseFloat(document.getElementById(id).value);
    
    
}

// *********get  innerText*******


function getTextValueByID(id){
    return parseFloat(document.getElementById(id).innerText)
    
}


// ****addeventlistener on donate button 1*********

let totalDonationAmount=0;
document.getElementById('donate-btn').addEventListener('click' ,function(event){
    // event.preventDefault();
    
    
    
     const donationAmount= getInputFieldByID('flood-input-field');
     if(isNaN(donationAmount) || donationAmount<0 ){
        alert('Invalid Amount');
        return ;
        
     }

     historyContainerEl.innerHTML +=`
    <div class="border-2 p-5 rounded-md mt-4">
     <p>${donationAmount} taka is Donated for Flood Relief in Noakhali,Bangladesh  </P>
     <p> ${new Date()} </p>
     </div>
        
    
     `

     
     totalDonationAmount += donationAmount;
     document.getElementById('donate-balance-1').innerText=totalDonationAmount;
     document.getElementById('flood-input-field').value='';
      const mainBalance= getTextValueByID('main-balance');
      
      const newBlance=mainBalance - donationAmount;
     

        document.getElementById('main-balance').innerText=newBlance;
      document.getElementById('my_modal_1').classList.remove('hidden');
    
})

// ****addeventlistener on donate button 2*********






// **********history addeventlistener************
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('main-section').classList.add('hidden');
    historyButtonEL.classList.add('bg-primary')
    historyButtonEL.classList.remove('border-dark_green')
    donationButtonEL.classList.remove('bg-primary')
    donationButtonEL.classList.add('border-dark_green')
    // donationButtonEL.classList.add('bg-white','border-dark_green','border-2')

})
    

donationButtonEL.addEventListener('click',function(){
    document.getElementById('main-section').classList.remove('hidden');
    donationButtonEL.classList.add('bg-primary')
    donationButtonEL.classList.remove('border-dark_green')
    historyButtonEL.classList.remove('bg-primary')
    historyButtonEL.classList.add('border-dark_green')

})

