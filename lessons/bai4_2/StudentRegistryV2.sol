// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {
    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }

    event RegistrySuccessfully(string);

    address owner;

    constructor () {
        owner = msg.sender;
    }

    mapping (address => Student) students;

    function register(address _new, string memory _name, uint _age) public {
        require(msg.sender == owner, "Only owner can registry new students");

        Student storage student = students[_new];
        student.name = _name;
        student.age = _age;
        student.isRegistered = true;

        emit RegistrySuccessfully("Registry successfully");
    }

    function getStudent(address user) public view returns (string memory, uint){
        Student storage currentStudent = students[user];
        return (currentStudent.name, currentStudent.age);
    }

    function isStudentRegistered(address user) public view returns(bool){
        return students[user].isRegistered;
    }
}