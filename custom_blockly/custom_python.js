Blockly.Python['linspace'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  var value_stop = Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_ATOMIC);
  var value_num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var code = 'np.linspace(' + value_start + ', ' + value_stop + ', ' + value_num + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
