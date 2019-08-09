Blockly.Python['text_print'] = function(block) {
  // Print statement.
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
    Blockly.Python.ORDER_NONE) || '\'\'';
  return 'output += (' + msg + ' + \'<br>\')\n';
};
