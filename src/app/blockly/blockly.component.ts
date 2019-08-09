import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-python';
declare var Blockly: any;
declare var languagePluginLoader: Promise<any>;
declare var pyodide: any;


@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})
export class BlocklyComponent implements OnInit {

  public toolbox = '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">\n' +
    '    <category name="Logic" colour="%{BKY_LOGIC_HUE}">\n' +
    '      <block type="controls_if"></block>\n' +
    '      <block type="logic_compare"></block>\n' +
    '      <block type="logic_operation"></block>\n' +
    '      <block type="logic_negate"></block>\n' +
    '      <block type="logic_boolean"></block>\n' +
    '      <block type="logic_null"></block>\n' +
    '      <block type="logic_ternary"></block>\n' +
    '    </category>\n' +
    '    <category name="Loops" colour="%{BKY_LOOPS_HUE}">\n' +
    '      <block type="controls_repeat_ext">\n' +
    '        <value name="TIMES">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">10</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="controls_whileUntil"></block>\n' +
    '      <block type="controls_for">\n' +
    '        <value name="FROM">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="TO">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">10</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="BY">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="controls_forEach"></block>\n' +
    '      <block type="controls_flow_statements"></block>\n' +
    '    </category>\n' +
    '    <category name="Math" colour="%{BKY_MATH_HUE}">\n' +
    '      <block type="math_number">\n' +
    '        <field name="NUM">123</field>\n' +
    '      </block>\n' +
    '      <block type="math_arithmetic">\n' +
    '        <value name="A">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="B">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_single">\n' +
    '        <value name="NUM">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">9</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_trig">\n' +
    '        <value name="NUM">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">45</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_constant"></block>\n' +
    '      <block type="math_number_property">\n' +
    '        <value name="NUMBER_TO_CHECK">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">0</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_round">\n' +
    '        <value name="NUM">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">3.1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_on_list"></block>\n' +
    '      <block type="math_modulo">\n' +
    '        <value name="DIVIDEND">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">64</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="DIVISOR">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">10</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_constrain">\n' +
    '        <value name="VALUE">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">50</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="LOW">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="HIGH">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">100</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_random_int">\n' +
    '        <value name="FROM">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="TO">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">100</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="math_random_float"></block>\n' +
    '      <block type="math_atan2">\n' +
    '        <value name="X">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="Y">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">1</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '    </category>\n' +
    '    <category name="Text" colour="%{BKY_TEXTS_HUE}">\n' +
    '      <block type="text"></block>\n' +
    '      <block type="text_join"></block>\n' +
    '      <block type="text_append">\n' +
    '        <value name="TEXT">\n' +
    '          <shadow type="text"></shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_length">\n' +
    '        <value name="VALUE">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">abc</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_isEmpty">\n' +
    '        <value name="VALUE">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT"></field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_indexOf">\n' +
    '        <value name="VALUE">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{textVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '        <value name="FIND">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">abc</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_charAt">\n' +
    '        <value name="VALUE">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{textVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_getSubstring">\n' +
    '        <value name="STRING">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{textVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_changeCase">\n' +
    '        <value name="TEXT">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">abc</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_trim">\n' +
    '        <value name="TEXT">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">abc</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_print">\n' +
    '        <value name="TEXT">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">abc</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="text_prompt_ext">\n' +
    '        <value name="TEXT">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">abc</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '    </category>\n' +
    '    <category name="Lists" colour="%{BKY_LISTS_HUE}">\n' +
    '      <block type="lists_create_with">\n' +
    '        <mutation items="0"></mutation>\n' +
    '      </block>\n' +
    '      <block type="lists_create_with"></block>\n' +
    '      <block type="lists_repeat">\n' +
    '        <value name="NUM">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">5</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_length"></block>\n' +
    '      <block type="lists_isEmpty"></block>\n' +
    '      <block type="lists_indexOf">\n' +
    '        <value name="VALUE">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{listVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_getIndex">\n' +
    '        <value name="VALUE">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{listVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_setIndex">\n' +
    '        <value name="LIST">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{listVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_getSublist">\n' +
    '        <value name="LIST">\n' +
    '          <block type="variables_get">\n' +
    '            <field name="VAR">{listVariable}</field>\n' +
    '          </block>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_split">\n' +
    '        <value name="DELIM">\n' +
    '          <shadow type="text">\n' +
    '            <field name="TEXT">,</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="lists_sort"></block>\n' +
    '    </category>\n' +
    '    <category name="Color" colour="%{BKY_COLOUR_HUE}">\n' +
    '      <block type="colour_picker"></block>\n' +
    '      <block type="colour_random"></block>\n' +
    '      <block type="colour_rgb">\n' +
    '        <value name="RED">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">100</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="GREEN">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">50</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="BLUE">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">0</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '      <block type="colour_blend">\n' +
    '        <value name="COLOUR1">\n' +
    '          <shadow type="colour_picker">\n' +
    '            <field name="COLOUR">#ff0000</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="COLOUR2">\n' +
    '          <shadow type="colour_picker">\n' +
    '            <field name="COLOUR">#3333ff</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '        <value name="RATIO">\n' +
    '          <shadow type="math_number">\n' +
    '            <field name="NUM">0.5</field>\n' +
    '          </shadow>\n' +
    '        </value>\n' +
    '      </block>\n' +
    '    </category>\n' +
    '    <sep></sep>\n' +
    '    <category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>\n' +
    '    <category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>\n' +
    '  </xml>';
  workspace: any;
  code: any;
  output: string;

  constructor() { }
  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {toolbox: this.toolbox});
  }

  generate_code() {
    const blocklyCode = Blockly.Python.workspaceToCode(this.workspace);

    // Prism.highlightAll();
    // console.log(blocklyCode);
    this.code =  Prism.highlight(blocklyCode, Prism.languages.python, 'python');
    // console.log(this.code);
  }

  run_python() {
    const blocklyCode = Blockly.Python.workspaceToCode(this.workspace);

    languagePluginLoader.then(() => {
      pyodide.runPython('output = \'\'\n' + blocklyCode);
      this.output = pyodide.globals.output;
    });

  }
}
