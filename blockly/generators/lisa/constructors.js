/**
 * Created by JNiroshan on 9/19/2016.
 */

'use strict';

/**
 * Code generation stub for constructor block
 * @constructor block
 * @returns {string}
 */
Blockly.lisa['constructor'] = function(block) {
    var text_constructor_name = block.getFieldValue('constructor-name');
    var statements_name = Blockly.lisa.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'void'+' '+text_constructor_name + ' (' +statements_name + ' ){}\n';
    return code;
};