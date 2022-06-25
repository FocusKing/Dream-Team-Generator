const Engineer = require("../utils/engineer");

test("Able to create new employee", () => {
    const engineerTest = new Engineer();
    expect(typeof(engineerTest)).toBe("object");
});

test("Name tester", () => {
    const name = "John"
    const engineerTest = new Engineer(name);
    expect(engineerTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 123
    const engineerTest = new Engineer("John", id);
    expect(engineerTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "John@email.com"
    const engineerTest = new Engineer("John", 123, email);
    expect(engineerTest.email).toBe(email);
});

test("Github tester", () => {
  const email = "clean@gmail.com"
  const engineerTest = new Engineer("Sahil", 2468, email);
})

test("Testing getName()", () => {
    const name = "John"
    const engineerTest = new Engineer(name);
    expect(engineerTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 123
    const engineerTest = new Engineer("John", id);
    expect(engineerTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "John@email.com"
    const engineerTest = new Engineer("John", 123, email);
    expect(engineerTest.getEmail()).toBe(email);
});


test("Testing getRole()", () => {
    const role = "Employee"
    const engineerTest = new Engineer("John", 123, "John@email.com");
    expect(engineerTest.getRole()).toBe(role);
});
test("Testing getGitHub()", () => {
  const github = "Sahil2468"
  const engineerTest = new Engineer("Sahil", 2468, "Sahil@gmail.com", github);
  expect(engineerTest.getGitHub()).tobe(github);
});