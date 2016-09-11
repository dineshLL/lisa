/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */
'use strict';

goog.provide('Blockly.lisa.variables');
goog.require('Blockly.lisa');

Blockly.Blocks['variable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("myVariable"), "varName")
            .appendField("variable of type")
            .appendField(new Blockly.FieldDropdown([["int", "int"], ["flot", "flot"], ["double", "double"]]), "variableType")
            .appendField("initialized to");
        this.appendValueInput("initValue")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
