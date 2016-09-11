/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */

'use strict';

/*goog.provide('Blockly.lisa.variables');
goog.require('Blockly.lisa');*/

Blockly.lisa['variable'] = function(block) {
    var dropdown_variabletype = block.getFieldValue('variableType');
    var text_varname = block.getFieldValue('varName');
    var value_initvalue = Blockly.lisa.valueToCode(block, 'initValue', Blockly.lisa.ORDER_ATOMIC);
    // TODO: Assemble lisa into code variable.
    var code = '\t' + dropdown_variabletype + ' ' +text_varname + ' = 0;\n';
    return code;
};