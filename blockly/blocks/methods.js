/**
 * Created by JNiroshan on 9/19/2016.
 */


goog.provide('Blockly.lisa.methods');
goog.require('Blockly.lisa');

var tooltip_method = 'Method';

/**
 * Method block definition
 * @type {{init: Blockly.Blocks.method.init}}
 */
Blockly.Blocks['method'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck("parameter")
            .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["String", "String"], ["float", "float"], ["double", "double"], ["char", "char"]]), "RETURN_TYPE")
            .appendField(new Blockly.FieldTextInput("method"), "METHOD_NAME");
        this.setPreviousStatement(true, "method");
        this.setNextStatement(true, "method");
        this.setColour(120);
        this.setTooltip(tooltip_method);
        this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
    }
};