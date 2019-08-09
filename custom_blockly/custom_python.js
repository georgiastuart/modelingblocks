Blockly.Python['linspace'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  var value_stop = Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_ATOMIC);
  var value_num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var code = 'np.linspace(' + value_start + ', ' + value_stop + ', ' + value_num + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['randn'] = function(block) {
  var value_mean = Blockly.Python.valueToCode(block, 'MEAN', Blockly.Python.ORDER_ATOMIC);
  var value_std = Blockly.Python.valueToCode(block, 'STD', Blockly.Python.ORDER_ATOMIC);
  var code = 'np.random.randn() * ' + value_std + ' + ' + value_mean + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['randint'] = function(block) {
  var value_low = Blockly.Python.valueToCode(block, 'LOW', Blockly.Python.ORDER_ATOMIC);
  var value_high = Blockly.Python.valueToCode(block, 'HIGH', Blockly.Python.ORDER_ATOMIC);
  var code = 'np.random.random_integers(' + value_low + ', ' + value_high + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rand'] = function(block) {
  var code = 'np.random.rand()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
