/**
 * Created by Dinesh Liyanage on 9/10/2016.
 */
'use strict';

goog.provide('Blockly.Blocks.test');

goog.require('Blockly.Blocks');

Blockly.Blocks['class-container'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('class')
            .appendField(new Blockly.FieldTextInput('Parent'), 'className');
        this.appendStatementInput('contents')
            .setCheck(['variable-container', 'method-container', 'class-container'])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setColour(230);
        this.setTooltip('This is a class container');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['variable-container'] = {
    init: function() {
        this.appendStatementInput('variables')
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([['private', 'private'], ['public', 'public'], ['protected', 'protected'], ['default', 'default']]), 'accessModifier');
        this.setInputsInline(false);
        this.setPreviousStatement(true, ['class-container', 'variable-container', 'method-container']);
        this.setNextStatement(true, ['class-container', 'variable-container', 'method-container']);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};