/**
 * Created by JNiroshan on 9/19/2016.
 */


goog.provide('Blockly.lisa.constructors');
goog.require('Blockly.lisa');

var tooltip_constructor = 'Constructor for the class';

/**
 * Constructor block definition
 * @type {{init: Blockly.Blocks.constructor.init}}
 */
Blockly.Blocks['constructor'] = {
    init: function() {
        this.appendStatementInput("PARAMS")
            .setCheck("parameter")
            .appendField("constructor");
        this.setPreviousStatement(true, ["variable-container", "method-container"]);
        this.setNextStatement(true, ["variable-container", "method-container"]);
        this.setColour(330);
        this.setTooltip(tooltip_constructor);
        this.setHelpUrl('https://github.com/dineshLL/lisa/wiki');
    }
};