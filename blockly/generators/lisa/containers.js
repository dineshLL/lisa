/**
 * Created by Dinesh Liyanage on 9/10/2016.
 */
'use strict';

goog.provide('Blockly.lisa.containers');
goog.require('Blockly.lisa');


/**
 * Code generator stub for class-container block
 * @param block
 * @returns {string}
 */
Blockly.lisa['class-container'] = function(block) {

    var text_class_name = block.getFieldValue('class_name');
    var statements_class_body = Blockly.lisa.statementToCode(block, 'class_body');
    var code = 'class '+ text_class_name +' {\n '+ statements_class_body +'\n}\n';

    // TODO: Assemble JavaScript into code variable.
    var code = 'class '+ text_class_name +' {\n'+ statements_class_body +'\n}';
    return code;
};


/**
 * Code generator stub for variable-container
 * @param block
 * @returns {string}
 */
Blockly.lisa['variable-container'] = function(block) {

    var dropdown_accessmodifire = block.getFieldValue('access-modifier');
    var statements_variables = Blockly.lisa.statementToCode(block, 'variables');
    var code = dropdown_accessmodifire +':\n' + statements_variables;

    return code;
};


/**
 * Code generator stub for method-container
 * @param block
 * @returns {string}
 */
Blockly.lisa['method-container'] = function(block) {

  var dropdown_access_modifier = block.getFieldValue('access-modifier');
  var statements_inputs = Blockly.lisa.statementToCode(block, 'inputs');
  var code = dropdown_access_modifier +':\n' + statements_inputs;

  return code;
};

