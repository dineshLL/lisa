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
        this.setPreviousStatement(true, ['variable']);
        this.setNextStatement(true, ['variable']);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * parameter block
 *
 * @type {{init: Blockly.Blocks.parameter.init}}
 */
Blockly.Blocks['parameter'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("parameter-name"), "parameter")
            .appendField("of type");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["double", "double"], ["char", "char"], ["String", "String"], ["real", "real"]]), "data_types");
        this.appendDummyInput()
            .appendField("initialized to")
            .appendField(new Blockly.FieldTextInput("0"), "initial_value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

