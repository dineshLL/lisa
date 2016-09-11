/**
 * Created by Dinesh Liyanage on 9/10/2016.
 */
'use strict';

goog.provide('Blockly.Blocks.test');

goog.require('Blockly.Blocks');

Blockly.Blocks['test_block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("class")
            .appendField(new Blockly.FieldTextInput("MyClass"), "className");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};