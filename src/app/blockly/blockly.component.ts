import { Component, OnInit } from '@angular/core';

declare var Blockly: any;

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})
export class BlocklyComponent implements OnInit {
  public toolbox = '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">\n' +
    '    <category name="Logic" colour="%{BKY_LOGIC_HUE}">\n' +
    '      <category name="If" colour="%{BKY_LOGIC_HUE}">\n' +
    '        <block type="controls_if"></block>\n' +
    '        <block type="controls_if">\n' +
    '          <mutation else="1"></mutation>\n' +
    '        </block>\n' +
    '        <block type="controls_if">\n' +
    '          <mutation elseif="1" else="1"></mutation>\n' +
    '        </block>\n' +
    '      </category>\n' +
    '      <category name="Boolean" colour="%{BKY_LOGIC_HUE}">\n' +
    '        <block type="logic_compare"></block>\n' +
    '        <block type="logic_operation"></block>\n' +
    '        <block type="logic_negate"></block>\n' +
    '        <block type="logic_boolean"></block>\n' +
    '        <block type="logic_null"></block>\n' +
    '        <block type="logic_ternary"></block>\n' +
    '      </category>\n' +
    '    </category>\n' +
    '    <category name="Loops" colour="%{BKY_LOOPS_HUE}">\n' +
    '      <block type="controls_repeat_ext">\n' +
    '        <value name="TIMES">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">10</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="controls_whileUntil"></block>\n' +
    '      <block type="controls_for">\n' +
    '        <field name="VAR">i</field>\n' +
    '        <value name="FROM">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '        <value name="TO">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">10</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '        <value name="BY">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="controls_forEach"></block>\n' +
    '      <block type="controls_flow_statements"></block>\n' +
    '    </category>\n' +
    '    <category name="Math" colour="%{BKY_MATH_HUE}">\n' +
    '      <block type="math_number">\n' +
    '        <field name="NUM">123</field>\n' +
    '      </block>\n' +
    '      <block type="math_arithmetic"></block>\n' +
    '      <block type="math_single"></block>\n' +
    '      <block type="math_trig"></block>\n' +
    '      <block type="math_constant"></block>\n' +
    '      <block type="math_number_property"></block>\n' +
    '      <block type="math_round"></block>\n' +
    '      <block type="math_on_list"></block>\n' +
    '      <block type="math_modulo"></block>\n' +
    '      <block type="math_constrain">\n' +
    '        <value name="LOW">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '        <value name="HIGH">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">100</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_random_int">\n' +
    '        <value name="FROM">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '        <value name="TO">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">100</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_random_float"></block>\n' +
    '      <block type="math_atan2"></block>\n' +
    '    </category>\n' +
    '    <category name="Lists" colour="%{BKY_LISTS_HUE}">\n' +
    '      <block type="lists_create_empty"></block>\n' +
    '      <block type="lists_create_with"></block>\n' +
    '      <block type="lists_repeat">\n' +
    '        <value name="NUM">\n' +
    '          <block type="math_number">\n' +
    '            <field name="NUM">5</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_length"></block>\n' +
    '      <block type="lists_isEmpty"></block>\n' +
    '      <block type="lists_indexOf"></block>\n' +
    '      <block type="lists_getIndex"></block>\n' +
    '      <block type="lists_setIndex"></block>\n' +
    '    </category>\n' +
    '    <sep></sep>\n' +
    '    <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">\n' +
    '    </category>\n' +
    '    <category name="Functions" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}">\n' +
    '    </category>\n' +
    '    <sep></sep>\n' +
    '  </xml>';
  workspace: any;
  code: any;

  constructor() { }
  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {toolbox: this.toolbox});
  }

  generate_code() {
    this.code =  Blockly.Python.workspaceToCode(this.workspace);
    console.log(this.code);
  }
}
