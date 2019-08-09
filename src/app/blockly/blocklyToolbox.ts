export const blocklyToolbox = '<xml xmlns="https://developers.google.com/blockly/xml" id="blocklyToolbox" style="display: none">\n' +
  '  <category name="Logic" colour="#5b80a5">\n' +
  '    <block type="controls_if"/>\n' +
  '    <block type="logic_compare">\n' +
  '      <field name="OP">EQ</field>\n' +
  '    </block>\n' +
  '    <block type="logic_operation">\n' +
  '      <field name="OP">AND</field>\n' +
  '    </block>\n' +
  '    <block type="logic_negate"/>\n' +
  '    <block type="logic_boolean">\n' +
  '      <field name="BOOL">TRUE</field>\n' +
  '    </block>\n' +
  '    <block type="logic_null"/>\n' +
  '    <block type="logic_ternary"/>\n' +
  '  </category>\n' +
  '  <category name="Loops" colour="#5ba55b">\n' +
  '    <block type="controls_repeat_ext">\n' +
  '      <value name="TIMES">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="controls_whileUntil">\n' +
  '      <field name="MODE">WHILE</field>\n' +
  '    </block>\n' +
  '    <block type="controls_for">\n' +
  '      <field name="VAR" id="=165#|m76=}2=CQr4!23">i</field>\n' +
  '      <value name="FROM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="TO">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="BY">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="controls_forEach">\n' +
  '      <field name="VAR" id="d2#/nB;tWAc/y9TV1,^:">j</field>\n' +
  '    </block>\n' +
  '    <block type="controls_flow_statements">\n' +
  '      <field name="FLOW">BREAK</field>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Math" colour="#5b67a5">\n' +
  '    <block type="math_round">\n' +
  '      <field name="OP">ROUND</field>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">3.1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_number">\n' +
  '      <field name="NUM">0</field>\n' +
  '    </block>\n' +
  '    <block type="math_single">\n' +
  '      <field name="OP">ROOT</field>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">9</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_trig">\n' +
  '      <field name="OP">SIN</field>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">45</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_constant">\n' +
  '      <field name="CONSTANT">PI</field>\n' +
  '    </block>\n' +
  '    <block type="math_number_property">\n' +
  '      <mutation divisor_input="false"/>\n' +
  '      <field name="PROPERTY">EVEN</field>\n' +
  '      <value name="NUMBER_TO_CHECK">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_arithmetic">\n' +
  '      <field name="OP">ADD</field>\n' +
  '      <value name="A">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="B">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_on_list">\n' +
  '      <mutation op="SUM"/>\n' +
  '      <field name="OP">SUM</field>\n' +
  '    </block>\n' +
  '    <block type="math_modulo">\n' +
  '      <value name="DIVIDEND">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">64</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="DIVISOR">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_constrain">\n' +
  '      <value name="VALUE">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">50</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="LOW">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="HIGH">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_random_int">\n' +
  '      <value name="FROM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="TO">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_random_float"/>\n' +
  '  </category>\n' +
  '  <category name="Text" colour="#5ba58c">\n' +
  '    <block type="text_charAt">\n' +
  '      <mutation at="true"/>\n' +
  '      <field name="WHERE">FROM_START</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="t3i:#lc(N|[EQN_y3QB8">text</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text">\n' +
  '      <field name="TEXT"/>\n' +
  '    </block>\n' +
  '    <block type="text_append">\n' +
  '      <field name="VAR" id="HR9SSY.!YW3^l^{c2**P">item</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT"/>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_length">\n' +
  '      <value name="VALUE">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_isEmpty">\n' +
  '      <value name="VALUE">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT"/>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_indexOf">\n' +
  '      <field name="END">FIRST</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="t3i:#lc(N|[EQN_y3QB8">text</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '      <value name="FIND">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_join">\n' +
  '      <mutation items="2"/>\n' +
  '    </block>\n' +
  '    <block type="text_getSubstring">\n' +
  '      <mutation at1="true" at2="true"/>\n' +
  '      <field name="WHERE1">FROM_START</field>\n' +
  '      <field name="WHERE2">FROM_START</field>\n' +
  '      <value name="STRING">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="t3i:#lc(N|[EQN_y3QB8">text</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_changeCase">\n' +
  '      <field name="CASE">UPPERCASE</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_trim">\n' +
  '      <field name="MODE">BOTH</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_print">\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_prompt_ext">\n' +
  '      <mutation type="TEXT"/>\n' +
  '      <field name="TYPE">TEXT</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Lists" colour="#745ba5">\n' +
  '    <block type="lists_indexOf">\n' +
  '      <field name="END">FIRST</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="!uxO_,t?-F8Zrk-?BQ]R">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_create_with">\n' +
  '      <mutation items="0"/>\n' +
  '    </block>\n' +
  '    <block type="lists_repeat">\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">5</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_length"/>\n' +
  '    <block type="lists_isEmpty"/>\n' +
  '    <block type="lists_create_with">\n' +
  '      <mutation items="3"/>\n' +
  '    </block>\n' +
  '    <block type="lists_getIndex">\n' +
  '      <mutation statement="false" at="true"/>\n' +
  '      <field name="MODE">GET</field>\n' +
  '      <field name="WHERE">FROM_START</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="!uxO_,t?-F8Zrk-?BQ]R">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_setIndex">\n' +
  '      <mutation at="true"/>\n' +
  '      <field name="MODE">SET</field>\n' +
  '      <field name="WHERE">FROM_START</field>\n' +
  '      <value name="LIST">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="!uxO_,t?-F8Zrk-?BQ]R">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_getSublist">\n' +
  '      <mutation at1="true" at2="true"/>\n' +
  '      <field name="WHERE1">FROM_START</field>\n' +
  '      <field name="WHERE2">FROM_START</field>\n' +
  '      <value name="LIST">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="!uxO_,t?-F8Zrk-?BQ]R">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_split">\n' +
  '      <mutation mode="SPLIT"/>\n' +
  '      <field name="MODE">SPLIT</field>\n' +
  '      <value name="DELIM">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">,</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_sort">\n' +
  '      <field name="TYPE">NUMERIC</field>\n' +
  '      <field name="DIRECTION">1</field>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Colour" colour="#a5745b">\n' +
  '    <block type="colour_picker">\n' +
  '      <field name="COLOUR">#ff0000</field>\n' +
  '    </block>\n' +
  '    <block type="colour_random"/>\n' +
  '    <block type="colour_rgb">\n' +
  '      <value name="RED">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="GREEN">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">50</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="BLUE">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="colour_blend">\n' +
  '      <value name="COLOUR1">\n' +
  '        <shadow type="colour_picker">\n' +
  '          <field name="COLOUR">#ff0000</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="COLOUR2">\n' +
  '        <shadow type="colour_picker">\n' +
  '          <field name="COLOUR">#3333ff</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="RATIO">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0.5</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Numpy">\n' +
  '    <block type="linspace">\n' +
  '      <value name="START">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="STOP">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Random" colour="#5b67a5">\n' +
  '    <block type="rand"/>\n' +
  '    <block type="randint">\n' +
  '      <value name="LOW">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="HIGH">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="randn">\n' +
  '      <value name="MEAN">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="STD">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <sep/>\n' +
  '  <category name="Variables" colour="#a55b80" custom="VARIABLE"/>\n' +
  '  <category name="Functions" colour="#995ba5" custom="PROCEDURE"/>\n' +
  '</xml>';
