pragma solidity ^0.4.17;
// backward compatible

contract Inbox {
    // variable declaration (1. local 2. storage)
    string public message;

    // constructor matches the name of the contract
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    // argument type
    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // function doMath(int a, int b) {
    //     a + b;
    //     b - a;
    //     a * b;
    //     a == 0;
    // }
    // function name, function type, return types
    // function getMessage() public view returns (string) {
    //     return  message;
    // }
}