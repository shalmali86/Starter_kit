pragma solidity ^0.5.16;

contract SI {
    uint public Principal;
    uint public Time;
    uint public Rate;
    uint public Interest;
    
    address public tenant;
   
        constructor() public {
            tenant=msg.sender;
            Principal=0;
        }
        
        function calculate(uint pr,uint ti,uint ra) public returns (bool success)
        {
	
         Principal=pr;
         Time=ti;
         Rate=ra;
        Interest=(Principal*Time*Rate)/100;
	return true;
        }
    
     
 }
