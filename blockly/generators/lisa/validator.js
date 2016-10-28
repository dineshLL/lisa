/**
 * Created by Dinesh Liyanage on 10/28/2016.
 */
goog.provide('Blockly.lisa.validator');

var workspace;

Blockly.lisa.validator.init = function(pWorkspace) {
    if(!workspace) {
        workspace = pWorkspace;
    }
}

Blockly.lisa.validator.refresh = function () {
    var classes = workspace.getAllBlocks().filter(function (block) {
        return block.type == 'class-container';
    });

    var classDropDowns = workspace.getAllBlocks().filter(function (block) {
        return block.type == 'object-variable';
    })
    var classNameList = [];
    for(var i in classes) {
        classNameList.push(classes[i].getFieldValue('class_name'));
    }

    if(classDropDowns) {
        classDropDowns[0].inputList[0].fieldRow[1].menuGenerator_ = [];
        for(var i in classNameList) {
            classDropDowns[0].inputList[0].fieldRow[1].menuGenerator_.push([classNameList[i], classNameList[i]]);
        }

    }
};