Ext.onReady(function () {

    var tpl = Ext.create('Ext.Template', [
        'Hello {firstName} {lastName}!',
        ' Nice to meet you!'
    ]);

    var formPanel = Ext.create('Ext.form.FormPanel', {
        itemId: 'formPanel', //item id for panel
        frame: true, //panel has frame
        layout: 'anchor', //layour for the panel's items
        defaultType: 'textfield',
        defaults: {
            anchor: '-10',
            labelWidth: 65
        },

        items: [
            {
                fieldLabel: 'First name',
                name: 'firstName'
            },
            {
                fieldLabel: 'Last name',
                name: 'lastName'
            }
        ],
        buttons: [
            {
                text : 'Submit',
                handler : function(){
                    var formPanel = this.up('#formPanel'),
                        vals = formPanel.getValues(),
                        greeting = tpl.apply(vals);

                    Ext.Msg.alert('Hello!', greeting);

//                    var msg = this.text;
//                    Ext.Msg.alert('Hello!', msg);

                }
            }
        ]
    });

    Ext.create('Ext.window.Window', {
        height : 125,
        width : 200,
        closable : true,
        title : 'Input needed.',
        border : false,
        layout : 'fit',
        items : formPanel
    }).show();

});

