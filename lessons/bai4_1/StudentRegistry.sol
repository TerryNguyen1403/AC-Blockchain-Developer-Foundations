// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }

    mapping (address => Student) students;

    function register(string memory _name, uint _age) public {
        Student storage student = students[msg.sender];
        student.name = _name;
        student.age = _age;
        student.isRegistered = true;
    }

    function getStudent(address user) public view returns(string memory, uint, bool) {
        Student storage currentStudent = students[user];

        // Revert if isRegistered = false
        if (!currentStudent.isRegistered) {
            revert();
        }

        return (currentStudent.name, currentStudent.age, currentStudent.isRegistered);
    }

    function isStudentRegistered(address user) public view returns(bool) {
        Student storage currentStudent = students[user];

        return currentStudent.isRegistered;
    }
}