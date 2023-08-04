/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test ("true", function () {
    var idade= validarIdade(18);
    expect(idade).toBe(true);
})
test("false", function () {
    var idade= validarIdade(17);
    expect(idade).toBe(false);
})