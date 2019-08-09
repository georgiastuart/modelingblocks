import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {blocklyToolbox} from './blocklyToolbox';
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
  workspace: any;
  code: any;
  output: string;
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

  // highlight_code() {
  //   Prism.highlightElement(this.generatedCode.nativeElement);
  // }

  run_python() {
    const blocklyCode = Blockly.Python.workspaceToCode(this.workspace);

    languagePluginLoader.then(() => {
      pyodide.loadPackage('numpy').then(() => {
        pyodide.runPython('import numpy as np\n\noutput = \'\'\n' + blocklyCode);
        this.output = pyodide.globals.output;
      });
    });

  }
}
