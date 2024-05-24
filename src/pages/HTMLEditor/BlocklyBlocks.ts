import * as Blockly from 'blockly/core'
import "blockly/python";


Blockly.Blocks['text-block'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Text")
            .appendField(new Blockly.FieldTextInput(""), "text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#40A578");
        this.setTooltip("Enter any required text");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['document-type'] = {
    init: function () {
        this.appendDummyInput().appendField("Document Type").appendField(new Blockly.FieldDropdown([
            ["HTML5", "HTML5"],
            ["XHTML", "XHTML"]
        ]), "direction")
        this.setNextStatement(true, null);

        this.setColour("#0230ff");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['html'] = {
    init: function () {
        this.appendDummyInput().appendField("HTML Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');

        this.setColour("#0230ff");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};



Blockly.Blocks['meta'] = {
    init: function () {
        this.appendDummyInput().appendField("Meta Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');

        this.setColour("#0230ff");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['style'] = {
    init: function () {
        this.appendDummyInput().appendField("Style Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');

        this.setColour("#0230ff");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['script'] = {
    init: function () {
        this.appendDummyInput().appendField("Script Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');

        this.setColour("#0230ff");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['body'] = {
    init: function () {
        this.appendDummyInput().appendField("Body Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');

        this.setColour("#0230ff");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['title'] = {
    init: function () {
        this.appendDummyInput().appendField("Title Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#D2649A");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['header'] = {
    init: function () {
        this.appendDummyInput().appendField("Header Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');

        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['footer'] = {
    init: function () {
        this.appendDummyInput().appendField("Footer Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['section'] = {
    init: function () {
        this.appendDummyInput().appendField("Section Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['article'] = {
    init: function () {
        this.appendDummyInput().appendField("Article Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aside'] = {
    init: function () {
        this.appendDummyInput().appendField("Aside Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['nav'] = {
    init: function () {
        this.appendDummyInput().appendField("Nav Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['main'] = {
    init: function () {
        this.appendDummyInput().appendField("Main Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#f77f00");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['h1'] = {
    init: function () {
        this.appendDummyInput().appendField("H1 Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#06d6a0");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['h2'] = {
    init: function () {
        this.appendDummyInput().appendField("H2 Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#06d6a0");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['h3'] = {
    init: function () {
        this.appendDummyInput().appendField("H3 Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#06d6a0");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['h4'] = {
    init: function () {
        this.appendDummyInput().appendField("H4 Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#06d6a0");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['h5'] = {
    init: function () {
        this.appendDummyInput().appendField("H5 Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#06d6a0");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['h6'] = {
    init: function () {
        this.appendDummyInput().appendField("H6 Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#06d6a0");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};



Blockly.Blocks['div'] = {
    init: function () {
        this.appendDummyInput().appendField("Div Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#ffd60a");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['p'] = {
    init: function () {
        this.appendDummyInput().appendField("Paragraph Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#ffd60a");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['pre'] = {
    init: function () {
        this.appendDummyInput().appendField("Pre Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#ffd60a");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['code'] = {
    init: function () {
        this.appendDummyInput().appendField("Code Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#ffd60a");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['form'] = {
    init: function () {
        this.appendDummyInput().appendField("Form Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#d81159");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['table'] = {
    init: function () {
        this.appendDummyInput().appendField("Table Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#FF007F");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['input'] = {
    init: function () {
        this.appendDummyInput().appendField("Input Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ffa69e");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['button'] = {
    init: function () {
        this.appendDummyInput().appendField("Button Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#735d78");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['a'] = {
    init: function () {
        this.appendDummyInput().appendField("Hyperlink Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour("#735d78");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['img'] = {
    init: function () {
        this.appendDummyInput().appendField("Image Tag");
        this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("src")
        .appendField(new Blockly.FieldTextInput(""), "src");
        this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("alt")
        .appendField(new Blockly.FieldTextInput(""), "alt");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#218380");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['audio'] = {
    init: function () {
        this.appendDummyInput().appendField("Audio Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#218380");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['video'] = {
    init: function () {
        this.appendDummyInput().appendField("Video Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#218380");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['iframe'] = {
    init: function () {
        this.appendDummyInput().appendField("Iframe Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#04052e");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['embed'] = {
    init: function () {
        this.appendDummyInput().appendField("Embed Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#04052e");
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['br'] = {
    init: function () {
        this.appendDummyInput().appendField("Break Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330, 100, 100);
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['hr'] = {
    init: function () {
        this.appendDummyInput().appendField("Horizontal Rule Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330, 100, 100);
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['mark'] = {
    init: function () {
        this.appendDummyInput().appendField("Mark Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendStatementInput('DO').appendField('');
        this.setColour(330, 100, 100);
        this.setTooltip("This defines the type of the document");
        this.setHelpUrl("");
    }
};