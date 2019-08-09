Blockly.Blocks['linspace'] = {
  init: function() {
    this.appendValueInput("START")
      .setCheck("Number")
      .appendField("create an array from");
    this.appendValueInput("STOP")
      .setCheck("Number")
      .appendField("to");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("with");
    this.appendDummyInput()
      .appendField("equally spaced numbers");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Creates an array of equally spaced values.");
    this.setHelpUrl("https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html");
  }
};
