const Intern = require("../utils/intern");

test("Able to create new employee", () => {
    const internTest = new Intern();
    expect(typeof(internTest)).toBe("object");
});

test("Name tester", () => {
    const name = "Sahil"
    const internTest = new Intern(name);
    expect(internTest.name).toBe(name);
});

test("ID tester", () => {
    const id = 123
    const internTest = new Intern("Sahil", id);
    expect(internTest.id).toBe(id);
});

test("Email tester", () => {
    const email = "Sahil@gmail.com"
    const internTest = new Intern("Sahil", 123, email);
    expect(internTest.email).toBe(email);
});

test("Github tester", () => {
  const email = "Sahil@gmail.com"
  const internTest = new Intern("Sahil", 2468, email);
})

test("Testing getName()", () => {
    const name = "Sahil"
    const internTest = new Intern(name);
    expect(internTest.getName()).toBe(name);
});

test("Testing getId", () => {
    const id = 123
    const internTest = new Intern("Sahil", id);
    expect(internTest.getId()).toBe(id);
});

test("Testing getEmail", () => {
    const email = "Sahil@gmail.com"
    const internTest = new Intern("Sahil", 123, email);
    expect(internTest.getEmail()).toBe(email);
});


test("Testing getRole()", () => {
    const role = "Employee"
    const internTest = new Intern("Sahil", 123, "Sahil@gmail.com");
    expect(internTest.getRole()).toBe(role);
});
test("Testing getGitHub()", () => {
  const github = "Sahil2468"
  const internTest = new Intern("Sahil", 2468, "Sahil@gmail.com", github);
  expect(internTest.getGitHub()).tobe(github);
});