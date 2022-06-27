const Employee = require("../utils/employee");
const Manager = require("../utils/manager");

test("Able to create new employee", () => {
    const managerTest = new Manager();
    expect(typeof(managerTest)).toBe("object");
});

test("Name tester", () => {
    const name = "Sahil"
    const managerTest = new Manager(name);
    expect(managerTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 123
    const managerTest = new Manager("Sahil", id);
    expect(managerTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "Sahil@gmail.com"
    const managerTest = new Manager("Sahil", 123, email);
    expect(managerTest.email).toBe(email);
});

test("Github tester", () => {
  const email = "Sahil@gmail.com"
  const managerTest = new Manager("Sahil", 2468, email);
})

test("Testing getName()", () => {
    const name = "Sahil"
    const managerTest = new Manager(name);
    expect(managerTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 123
    const managerTest = new Manager("Sahil", id);
    expect(managerTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "Sahil@gmail.com"
    const managerTest = new Manager("Sahil", 123, email);
    expect(managerTest.getEmail()).toBe(email);
});


test("Testing getRole()", () => {
    const role = "Employee"
    const managerTest = new Employee("Sahil", 123, "Sahil@gmail.com");
    expect(managerTest.getRole()).toBe(role);
});
// test("Testing getGitHub()", () => {
//   const github = "Sahil2468"
//   const managerTest = new Manager("Sahil", 2468, "Sahil@gmail.com", github);
//   expect(managerTest()).toBe(github);
// });