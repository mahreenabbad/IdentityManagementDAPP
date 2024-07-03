// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DigitalIdentityManagement {
    struct Person {
        string name;
        bool hasDigitalIdentity;
    }

    mapping(address => Person) private people;
    address private owner;
    
    event IdentityAssigned(address indexed user, string name);
    

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function assignDigitalIdentity(address _user, string memory _name) public onlyOwner {
        require(!people[_user].hasDigitalIdentity,"You already have digital identity");
        people[_user] = Person(_name, true);
        emit IdentityAssigned(_user, _name);
    }

    function checkAccess(address _user) public view returns (bool) {
        return people[_user].hasDigitalIdentity;
    }

    function prohibitedArea(address _user) public view returns(string memory){
        require(checkAccess(_user) ==true,"You re not allowed to enter");
        require(msg.sender != address(0),"invalid address");
        return "You are ready to enter XYZ area";
       
    }

    function getPersonInfo(address _user) public view returns (string memory name, bool hasDigitalIdentity) {
        Person memory person = people[_user];
        return (person.name, person.hasDigitalIdentity);
    }
}
//contract address 0xdE672F6D6c92E92EBC1df1Bf44AE1D296ad26C17