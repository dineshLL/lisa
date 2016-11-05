/**
 * Description : This file is imported in HTML files.
 *               This is the main entry point for start generating the code blocks
 */


'use strict';
// Depending on the URL argument, render as LTR or RTL.
var rtl = (document.location.search == '?rtl');
var block = null;

function start() {
  Blockly.inject(document.getElementById('blocklyDiv'), 
      {
        path: '../', 
        toolbox: document.getElementById('toolbox')
      }
  );
  Blockly.addChangeListener(renderContent);
}

function renderContent() {
  var content = document.getElementById('code4C');
  if(content == 'Undefined' || content == 'undefined' || content == null){
    content = document.getElementById('code4Cplusplus');
    var code = Blockly.lisa.workspaceToCode();
    content.textContent = code;
  }else{
    var code = Blockly.cake.workspaceToCode();
    content.textContent = code;
  }
}

/**
 * Discard all blocks from the workspace.
 */
function discard() {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count < 2 || window.confirm("Remove all blocks?")) {
    Blockly.mainWorkspace.clear();
    window.location.hash = '';
  }
}
