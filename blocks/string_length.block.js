/**
 * Created by Dinesh Liyanage on 8/29/2016.
 */
Blockly.Blocks['string_length'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('this is custom');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
};

Blockly.Blocks['block_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("this is the dummy test");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip('');
        this.setNextStatement(true);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['class_container'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("class");
        this.appendStatementInput("private")
            .setCheck("number_input");
        this.setInputsInline(false);
        this.setColour(230);
        this.setTooltip('');

        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['number_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("50");
        this.setPreviousStatement(true, "AB");
        this.setColour(260);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
