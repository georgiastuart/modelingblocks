import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {blocklyToolbox} from './blocklyToolbox';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-python';
declare var Blockly: any;
declare var languagePluginLoader: Promise<any>;
declare var pyodide: any;

export let fileNameList: string[] = ['select a file...'];
export let fileList: string[] = [];

const files: string[][] = [['select a file...', null]];

Blockly.Blocks.fileselect = {
  init() {
    this.appendDummyInput()
      .appendField('file')
      .appendField(new Blockly.FieldDropdown(
        this.generateOptions()), 'FILE');
    this.setOutput(true, 'String');
    this.setColour(290);
    this.setTooltip('References an uploaded file.');
    this.setHelpUrl('');
  },
  generateOptions() {
    const options: string[][] = [];
    fileNameList.forEach( (name) => {
      options.push([name, name.toUpperCase()]);
    });
    return options;
  }
};

Blockly.Python.fileselect = (block) => {
  const dropdownName = block.getFieldValue('FILE').toLowerCase();
  console.log(dropdownName);
  const fileContent = files.find((element) => {
    return element[0].toLowerCase() === dropdownName;
  });

  const code = '\"\"\"' + fileContent[1] + '\"\"\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})
export class BlocklyComponent implements OnInit {
  workspace: any;
  code: any;
  output: string;
  csvFiles: string[] = [];
  // @ViewChild('generatedCode', {static: false}) generatedCode: ElementRef;

  constructor() { }
  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {toolbox: blocklyToolbox});
  }

  generate_code() {
    const blocklyCode = Blockly.Python.workspaceToCode(this.workspace);

    // Prism.highlightAll();
    console.log(blocklyCode);
    this.code =  Prism.highlight(blocklyCode, Prism.languages.python, 'python');
    console.log(this.code);
  }

  run_python() {
    const blocklyCode = Blockly.Python.workspaceToCode(this.workspace);

    languagePluginLoader.then(() => {
      pyodide.loadPackage('numpy').then(() => {
        pyodide.runPython('import numpy as np\n\noutput = \'\'\n' + blocklyCode);
        this.output = pyodide.globals.output;
      });
    });
  }

  // https://nehalist.io/uploading-files-in-angular2/
  upload_file(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      fileNameList.push(file.name);
      reader.readAsText(file);
      reader.onload = (e) => {
        // console.log(reader.result);
        files.push([file.name, reader.result as string]);
        console.log(files[1][1]);
        console.log(files[1][0]);
      };
      this.workspace.updateToolbox(blocklyToolbox);
      // const fileBlocks = this.workspace.getBlocksByType('fileselect');
    }
  }
}
