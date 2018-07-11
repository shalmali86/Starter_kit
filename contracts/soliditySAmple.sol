pragma solidity ^0.4.4;

contract SimpleSquareStorage  {

  uint storedData;
    function set(uint x) public {
    storedData = x*x;
    
    }

    function get() constant returns (uint) {
    return storedData;
    }

}



