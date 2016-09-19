/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */

'use strict';

goog.provide('Blockly.lisa.variables');
goog.require('Blockly.lisa');

var tooltip_variable = 'Variable';
var tooltip_param = 'Parameter that has been passed';



/**
 * Variable block definition
 * @type {{init: Blockly.Blocks.variable.init}}
 */
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
        this.setTooltip(tooltip_variable);
        this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
    }
};

/**
 * Parameter block definition
 * @type {{init: Blockly.Blocks.parameter.init}}
 */
Blockly.Blocks['parameter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["double", "double"], ["char", "char"], ["string", "string"], ["real", "real"]]), "NAME")
        .appendField("parameter as")
        .appendField(new Blockly.FieldTextInput("parameter-name"), "parameter-name");
    this.setPreviousStatement(true, "parameter");
    this.setNextStatement(true, "parameter");
    this.setColour(230);
    this.setTooltip(tooltip_param);
    this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
  }
};

Blockly.Blocks['boolean_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
    }
};

Blockly.Blocks['boolean_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
