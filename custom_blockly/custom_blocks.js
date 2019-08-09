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

Blockly.Blocks['randn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("generate a random normal sample with");
    this.appendValueInput("MEAN")
      .setCheck("Number")
      .appendField("mean");
    this.appendValueInput("STD")
      .setCheck("Number")
      .appendField("standard deviation");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Generates an array of random normal samples.");
    this.setHelpUrl("https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.random.randn.html");
  }
};

Blockly.Blocks['randint'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("generate a random integer");
    this.appendValueInput("LOW")
      .setCheck("Number")
      .appendField("from");
    this.appendValueInput("HIGH")
      .setCheck("Number")
      .appendField("to");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Generates a random integer between the two given numbers, inclusive.");
    this.setHelpUrl("https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.random.random_integers.html#numpy.random.random_integers");
  }
};

Blockly.Blocks['rand'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("generate a uniform random variable");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Generates a uniform random variable between 0 and 1.");
    this.setHelpUrl("https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.random.rand.html#numpy.random.rand");
  }
};
