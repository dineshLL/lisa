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

    // TODO: Assemble JavaScript into code variable.
    var code = 'class '+ text_class_name +' {\n'+ statements_class_body +'}';

    var res = code.replace('$$CONSTRUCTOR_NAME$$', text_class_name);
    //res = res.replace('$$PARENT_CLASS_NAME$$', text_class_name);


    var myAry = [text_class_name];
    $.cookie('ClassNames', JSON.stringify(myAry));
    var storedAry = JSON.parse($.cookie('ClassNames'));

    //console.log(storedAry[0]);

    return res;
};

/**
 * Code generator stub for child-class-container block
 * @param block
 * @returns {string}
 */
Blockly.lisa['child-class-container'] = function(block) {

    var text_class_name = block.getFieldValue('class_name');
    var statements_class_body = Blockly.lisa.statementToCode(block, 'class_body');

    // TODO: Assemble JavaScript into code variable.
    var parentClassName = this.parentBlock_.getFieldValue('class_name');
    var code = '\n\nclass '+ text_class_name +': '+ parentClassName +' {\n'+ statements_class_body +'}';
    var res = code.replace('$$CONSTRUCTOR_NAME$$', text_class_name);
    return res;
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

