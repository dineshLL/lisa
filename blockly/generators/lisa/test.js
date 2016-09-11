/**
 * Created by Dinesh Liyanage on 9/10/2016.
 */
'use strict';

goog.provide('Blockly.lisa.test');

goog.require('Blockly.lisa');
/*
Blockly.lisa['test_block'] = function(block) {
    // var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
    // TODO: Assemble JavaScript into code variable.
    var code = 'class ';
    return code;
};*/

Blockly.lisa['test_block'] = function(block) {
    var text_classname = block.getFieldValue('className');
    var branch = Blockly.lisa.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'class '+ text_classname +' {\n '+ branch +'\n}\n';
    return code;
};