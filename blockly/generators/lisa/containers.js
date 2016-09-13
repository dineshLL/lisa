/**
 * Created by Dinesh Liyanage on 9/10/2016.
 */
'use strict';

goog.provide('Blockly.lisa.containers');

goog.require('Blockly.lisa');

Blockly.lisa['class-container'] = function(block) {
    var text_classname = block.getFieldValue('className');
    var branch = Blockly.lisa.statementToCode(block, 'contents');
    // TODO: Assemble JavaScript into code variable.
    var code = 'class '+ text_classname +' {\n '+ branch +'\n}\n';
    return code;
};

Blockly.lisa['variable-container'] = function(block) {
    var dropdown_accessmodifire = block.getFieldValue('accessModifier');
    var statements_variables = Blockly.lisa.statementToCode(block, 'variables');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_accessmodifire +':\n' + statements_variables;
    return code;
};