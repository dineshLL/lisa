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
    var branchParams = Blockly.lisa.statementToCode(block, 'PARAMS');
    // TODO: Assemble JavaScript into code variable.
    var params = branchParams.split('$$');
    var space = block.workspace;
    if(params.length > 2) {
        for(var i = 0; i < params.length - 3; i++) {
            params[i] = params[i] + ', ';
        }
        branchParams = params.join();

    } else {
        branchParams = params.join();
    }
// removing the starting indentation and last comma
    branchParams = branchParams.substring(2, branchParams.lastIndexOf(','));


    var code = '$$CONSTRUCTOR_NAME$$(' +branchParams+ ') {}\n';
    return code;
};
