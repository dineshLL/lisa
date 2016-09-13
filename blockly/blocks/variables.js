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
        .appendField(new Blockly.FieldTextInput("parameter-name"), "parameter-name")
        .appendField("parameter")
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["double", "double"], ["char", "char"], ["string", "string"], ["real", "real"]]), "NAME");
    this.setPreviousStatement(true, "parameter");
    this.setNextStatement(true, "parameter");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/**
 * method block
 *
 * @type {{init: Blockly.Blocks.method.init}}
 */
Blockly.Blocks['method'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck("parameter")
        .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["String", "String"], ["float", "float"], ["double", "double"], ["char", "char"]]), "NAME")
        .appendField(new Blockly.FieldTextInput("MethodA"), "MethodA");
    this.setPreviousStatement(true, "method");
    this.setNextStatement(true, "method");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/**
 * constructor block
 *
 * @type {{init: Blockly.Blocks.constructor.init}}
 */
Blockly.Blocks['constructor'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck("parameter")
        .appendField("void")
        .appendField(new Blockly.FieldTextInput("_constructor"), "constructor-name");
    this.setPreviousStatement(true, ["variable-container", "method-container"]);
    this.setNextStatement(true, ["variable-container", "method-container"]);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
