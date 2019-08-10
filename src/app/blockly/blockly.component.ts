import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {blocklyToolbox} from './blocklyToolbox';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-python';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;
  fileSelectEvent: any;
  loadAsType: string;
  // @ViewChild('generatedCode', {static: false}) generatedCode: ElementRef;

  constructor(private modalService: NgbModal) { }
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
      pyodide.loadPackage(['numpy', 'pandas']).then(() => {
        pyodide.runPython('import numpy as np\nimport pandas as pd\nfrom io import StringIO\n\noutput = \'\'\n' + blocklyCode);
        this.output = pyodide.globals.output;
      });
    });
  }

  initialize_file(datatype: string, csvContent: any) {
    languagePluginLoader.then(() => {
      if (datatype === 'numpy') {
        pyodide.loadPackage(['numpy']).then(() => {
          pyodide.globals.csv_string = csvContent;
          pyodide.runPython('import numpy as np\nimport base64');
          pyodide.runPython('numpy_files = []');
          pyodide.runPython('buffer = base64.b64decode(csv_string)\nprint(buffer)\n');
          // pyodide.runPython('csv_string = """' + csvContent + '""")\n');
          pyodide.runPython('numpy_files.append(np.frombuffer(buffer))');
          pyodide.runPython('print(numpy_files[0])');
        });
      }
    });
  }

  select_file(event) {
    console.log(event);
    this.fileSelectEvent = event;
  }

  // https://nehalist.io/uploading-files-in-angular2/
  upload_file() {
    const reader = new FileReader();

    if (this.fileSelectEvent.target.files && this.fileSelectEvent.target.files.length > 0) {
      const file = this.fileSelectEvent.target.files[0];
      fileNameList.push(file.name);
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(reader.result);
        files.push([file.name, reader.result]);
        console.log(files[1][1]);
        console.log(files[1][0]);

        console.log('from files array ' + (files.length - 1) + ' ' + files[files.length - 1][1]);
        this.initialize_file(this.loadAsType, files[files.length - 1][1]);
        this.workspace.updateToolbox(blocklyToolbox);
      };

      // const fileBlocks = this.workspace.getBlocksByType('fileselect');
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
