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

/**
 * parameter block
 *
 * @param block
 * @returns {string}
 */
Blockly.lisa['parameter'] = function(block) {
    var text_parameter = block.getFieldValue('parameter');
    var dropdown_data_types = block.getFieldValue('data_types');
    var text_initial_value = block.getFieldValue('initial_value');
    // TODO: Assemble JavaScript into code variable.
    if(text_initial_value != null || text_initial_value != '' || text_initial_value != ' '){
        var code = dropdown_data_types+' '+text_parameter+' = '+text_initial_value;
    }else {
        var code = dropdown_data_types+' '+text_parameter;
    }
    return code;
};