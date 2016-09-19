/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */

'use strict';

// Why below providers have commented?
/*goog.provide('Blockly.lisa.variables');
goog.require('Blockly.lisa');*/

/**
 * Code generation stub for variable block
 * @param block
 * @returns {string}
 */
Blockly.lisa['variable'] = function(block) {
    var dropdown_variabletype = block.getFieldValue('variableType');
    var text_varname = block.getFieldValue('varName');
    var value_initvalue = Blockly.lisa.valueToCode(block, 'initValue', Blockly.lisa.ORDER_ATOMIC);
    // TODO: Assemble lisa into code variable.
    var code = '\t' + dropdown_variabletype + ' ' +text_varname + '=0;\n';
    return code;
};


/**
 * Code generation stub for parameter block
 * @param block
 * @returns {string}
 */
Blockly.lisa['parameter'] = function(block) {
  var text_parameter_name = block.getFieldValue('parameter-name');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name + ' ' + text_parameter_name + '$$'; //adding $$ to use it as a delimiter
  return code;
};