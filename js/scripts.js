//business logic
function BankAccount (fullName){
  this.fullName = fullName;
  this.funds = 0;
}

BankAccount.prototype.depositFunds = function(number) {
  this.funds += number;
}

BankAccount.prototype.withdrawFunds = function(number) {
  this.funds -= number;
}





 //interface logic

 $(document).ready(function() {
   $("form#new-account").submit(function(event) {
     event.preventDefault();

     var inputtedFullName = $("input[name='fullName']").val();
     var inputtedDeposit = parseInt($("input[name='initialDeposit']").val());

     var newBankAccount = new BankAccount(inputtedFullName);

     newBankAccount.depositFunds(inputtedDeposit);

     $("form#funds").submit(function() {

       var inputtedDeposit = 0;
       var inputtedWithdrawal = 0;

       inputtedDeposit = parseInt($("input[name='deposit']").val());
       inputtedWithdrawal = $("input[name='withdrawal']").val();
       alert (newBankAccount.funds + " " + inputtedWithdrawal);

       if (inputtedDeposit === 0) {
         newBankAccount.withdrawFunds(inputtedWithdrawal);
       } else {
         newBankAccount.depositFunds(inputtedDeposit);
       }



     });

   });


 });
