/**
 * Created by JNiroshan on 9/19/2016.
 */

'use strict';

/**
 * Code generation stub for method block
 * @method block
 * @returns {string}
 */
Blockly.lisa['method'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var text_methodName = block.getFieldValue('MethodA');
    var branch = Blockly.lisa.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable
    var params = branch.split('$$');
    console.log(params.length);
    console.log(params);
    if(params.length > 2) {
        for(var i = 0; i < params.length - 3; i++) {
            params[i] = params[i] + ', ';
        }
        branch = params.join();

    } else {
        branch = params.join();
    }
    // removing the starting indentation and last comma
    branch = branch.substring(2, branch.lastIndexOf(','));
    var code = dropdown_name+' '+ text_methodName + '('+branch+ ') {}\n';
    return code;
};