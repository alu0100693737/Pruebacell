const TextCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/textcell");
const UnderlinedCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/underlinedcell");
const RTextCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/rtextcell");
const StretchCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/stretchcell");
const DataTable = require("../node_modules/@alu0100693737/oop-ale-ivan/src/Tabla.js");
//const ColorCell = require("../node_modules/@alu0100693737/colorcellplugin/colorCell.js");
const input = require("../inputs/input.json");
const assert = require("assert");

describe("Chapter 6 - The Secret Life of Objects", () => {
  let text = "Hello, World!";
  let textcell = new TextCell(text);
  describe("TextCell", () => {
    it("Expected that TextCell exists", () => {
      assert.notEqual(textcell, null);
    });
    it("Text returns Hello, World!", () => {
      assert.equal(textcell.text, "Hello, World!");
    });
    it("repeat returns Hello, World! 3 times", () => {
      let result = textcell.repeat("Hello, World! ", 3);
      let expected = "Hello, World! Hello, World! Hello, World! ";
      assert.equal(result, expected);
    });
    it("minWidth returns Hello, World!.length", () => {
      assert.equal(textcell.minWidth, text.length);
    });
    it("minHeight returns 1", () => {
      assert.equal(textcell.minHeight, 1);
    });
    it("minHeight returns 1 with Hello, World!\nHello, World!", () => {
      let newText = "Hello, World!,\nHello, World!";
      textcell.text = newText;
      assert.equal(textcell.minHeight, newText.length);
    });
    it("Draw returns and Hello, World!", () => {
      textcell.text = text;
      let result = text.split("");
      assert.deepEqual(textcell.draw(1, text.length), result);
    });
  });
  describe("UnderlinedCell", () => {
    let str = "Hola, Mundo!";
    let underlinedCell = new UnderlinedCell(str);
    let copy = new TextCell(str);
    it("UnderlinedCell is not null", () => {
      assert.notEqual(underlinedCell, null);
    });
    it("Inner cell is a cell", () => {
      let result = underlinedCell instanceof TextCell;
      assert.equal(result, true);
    });
    it("minHeight", () => {
      let expected = copy.minHeight + 1;
      assert.equal(underlinedCell.minHeight, expected);
    });
    it("minWidth", () => {
      let expected = copy.minWidth;
      assert.equal(underlinedCell.minWidth, expected);
    });
    it("drawing UnderlinedCell", () => {
      let expected = ["Hola, Mundo!", "------------"];
      assert.deepEqual(underlinedCell.draw(underlinedCell.minWidth, underlinedCell.minHeight), expected);
    });

  });
  describe("RTextCell", () => {
    let str = "9876543";
    let rtextcelled = new RTextCell(str);
    let copy = new TextCell(str);
    it("UnderlinedCell is not null", () => {
      assert.notEqual(rtextcelled, null);
    });
    it("Inner cell is a cell", () => {
      let result = rtextcelled instanceof TextCell;
      assert.equal(result, true);
    });
    it("minHeight", () => {
      let expected = copy.minHeight;
      assert.equal(rtextcelled.minHeight, expected);
    });
    it("minWidth", () => {
      let expected = copy.minWidth;
      assert.equal(rtextcelled.minWidth, expected);
    });
    it("drawing RTextCell", () => {
      let expected = ["     9876543"];
      assert.deepEqual(rtextcelled.draw(rtextcelled.minWidth + 5, rtextcelled.minHeight), expected);
    });
});

describe("StretchCell", () => {
  let str = "Hola, Mundo. Hello World!";
  let str2 = "Hola Mundo";
  let width = 12; let height = 2;
  let stretchcelled = new StretchCell(str, width, height);
  let stretchcelled2 = new StretchCell(str2, width, height);
  let copy = new TextCell(str);
  it("StretchCell is not null", () => {
    assert.notEqual(stretchcelled, null);
  });
  it("Inner cell is a cell", () => {
    let result = stretchcelled instanceof TextCell;
    assert.equal(result, true);
  });
  it("minHeight", () => {
    let expected = height;
    assert.equal(stretchcelled.minHeight, expected);
  });

  it("minWidth", () => {
    let expected = copy.minWidth;
    assert.equal(stretchcelled.minWidth, expected);
    let expected2 = width;
    assert.equal(stretchcelled2.minWidth, expected2);
  });
  it("drawing StretchCell 1", () => {
    let expected = ["Hola, Mundo. Hello World!", "            ", "            ", "            "];
      assert.deepEqual(stretchcelled.draw(3, 4), expected);
  });
  it("drawing StretchCell 2", () => {
    let expected = ["Hola Mundo  ", "            ", "            ", "            "];
      assert.deepEqual(stretchcelled2.draw(3, 4), expected);
  });

});

  describe("tabla", () => {
      var table = dataTable(input);
      var copytable = dataTable(input);
      var drawing = drawTable(table);
      it("Table is not null", () => {
        assert.notEqual(table, null);
        assert.notEqual(copytable, null);
      });
      it("Table is not null", () => {
        assert.notEqual(table, null);
      });
      it("colWidths", () => {
        let expected = copytable.colWidths;
        assert.equal(table.colWidths, expected);
      });
      it("colHeights", () => {
        let expected = copytable.colHeights;
        assert.equal(table.colHeights, expected);
      });
  });
});
