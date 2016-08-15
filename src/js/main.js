$( document ).ready( function () {

    var values = [
        {
            "id"          : 1,
            "topic"       : "InnoZ",
            "description" : "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "tags"        : "magnis dis parturient",
            "type"        : "Brand"
        }, {
            "id"          : 2,
            "topic"       : "Youopia",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "tags"        : "congue",
            "type"        : "Brand"
        }, {
            "id"          : 3,
            "topic"       : "Browsetype",
            "description" : "In eleifend quam a odio.",
            "tags"        : "lacus morbi",
            "type"        : "Interest"
        }, {
            "id"          : 4,
            "topic"       : "Divavu",
            "description" : "Duis consequat dui nec nisi volutpat eleifend.",
            "tags"        : "pede",
            "type"        : "Interest"
        }, {
            "id"          : 5,
            "topic"       : "Skaboo",
            "description" : "Sed accumsan felis.",
            "tags"        : "ridiculus mus",
            "type"        : "Interest"
        }, {
            "id"          : 6,
            "topic"       : "Reallinks",
            "description" : "Ut tellus.",
            "tags"        : "leo maecenas pulvinar",
            "type"        : "Brand"
        }, {
            "id"          : 7,
            "topic"       : "Tambee",
            "description" : "Fusce consequat.",
            "tags"        : "non pretium",
            "type"        : "Brand"
        }, {
            "id"          : 8,
            "topic"       : "Twitterbridge",
            "description" : "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
            "tags"        : "sed vel",
            "type"        : "Interest"
        }, {
            "id"          : 9,
            "topic"       : "Wikido",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "tags"        : "nulla tempus vivamus",
            "type"        : "Interest"
        }, {
            "id"          : 10,
            "topic"       : "DabZ",
            "description" : "Etiam vel augue.",
            "tags"        : "a",
            "type"        : "Custom"
        } /*,{
            "id"          : 11,
            "topic"       : "Plambee",
            "description" : "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "tags"        : "vestibulum",
            "type"        : "Custom"
        }, {
            "id"          : 12,
            "topic"       : "Edgewire",
            "description" : "Duis consequat dui nec nisi volutpat eleifend.",
            "tags"        : "felis",
            "type"        : "Custom"
        }, {
            "id"          : 13,
            "topic"       : "Zoomcast",
            "description" : "Integer non velit.",
            "tags"        : "et magnis",
            "type"        : "Interest"
        }, {
            "id"          : 14,
            "topic"       : "Jazzy",
            "description" : "Vestibulum rutrum rutrum neque.",
            "tags"        : "rhoncus",
            "type"        : "Interest"
        }, {
            "id"          : 15,
            "topic"       : "Jaxbean",
            "description" : "Sed accumsan felis.",
            "tags"        : "viverra diam",
            "type"        : "Interest"
        }, {
            "id"          : 16,
            "topic"       : "Devify",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
            "tags"        : "rhoncus mauris",
            "type"        : "Interest"
        }, {
            "id"          : 17,
            "topic"       : "Skipfire",
            "description" : "Etiam faucibus cursus urna.",
            "tags"        : "nisl ut volutpat",
            "type"        : "Interest"
        }, {
            "id"          : 18,
            "topic"       : "Browsezoom",
            "description" : "Vivamus vestibulum sagittis sapien.",
            "tags"        : "cras in",
            "type"        : "Interest"
        }, {
            "id"          : 19,
            "topic"       : "Zooxo",
            "description" : "Pellentesque viverra pede ac diam.",
            "tags"        : "mattis nibh",
            "type"        : "Custom"
        }, {
            "id"          : 20,
            "topic"       : "Tazzy",
            "description" : "Pellentesque viverra pede ac diam.",
            "tags"        : "montes",
            "type"        : "Brand"
        }, {
            "id"          : 21,
            "topic"       : "Aivee",
            "description" : "Nam nulla.",
            "tags"        : "dui maecenas",
            "type"        : "Brand"
        }, {
            "id"          : 22,
            "topic"       : "Gigashots",
            "description" : "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "tags"        : "ipsum praesent",
            "type"        : "Custom"
        }, {
            "id"          : 23,
            "topic"       : "Jatri",
            "description" : "Phasellus in felis.",
            "tags"        : "non interdum in",
            "type"        : "Interest"
        }, {
            "id"          : 24,
            "topic"       : "Skyba",
            "description" : "Duis at velit eu est congue elementum.",
            "tags"        : "pede ac diam",
            "type"        : "Interest"
        }, {
            "id"          : 25,
            "topic"       : "Meeveo",
            "description" : "Ut tellus.",
            "tags"        : "in",
            "type"        : "Brand"
        }, {
            "id"          : 26,
            "topic"       : "Linkbridge",
            "description" : "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
            "tags"        : "ante nulla justo",
            "type"        : "Brand"
        }, {
            "id"          : 27,
            "topic"       : "Buzzshare",
            "description" : "Fusce consequat.",
            "tags"        : "neque",
            "type"        : "Interest"
        }, {
            "id"          : 28,
            "topic"       : "Yozio",
            "description" : "Proin at turpis a pede posuere nonummy.",
            "tags"        : "ultricies eu nibh",
            "type"        : "Custom"
        }, {
            "id"          : 29,
            "topic"       : "Trilia",
            "description" : "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "tags"        : "aliquet ultrices erat",
            "type"        : "Custom"
        }, {
            "id"          : 30,
            "topic"       : "Talane",
            "description" : "Sed sagittis.",
            "tags"        : "elit proin risus",
            "type"        : "Custom"
        }, {
            "id"          : 31,
            "topic"       : "Meevee",
            "description" : "Suspendisse potenti.",
            "tags"        : "felis",
            "type"        : "Custom"
        }, {
            "id"          : 32,
            "topic"       : "Zoovu",
            "description" : "Suspendisse ornare consequat lectus.",
            "tags"        : "curabitur convallis",
            "type"        : "Interest"
        }, {
            "id"          : 33,
            "topic"       : "JumpXS",
            "description" : "Suspendisse ornare consequat lectus.",
            "tags"        : "magna vestibulum",
            "type"        : "Brand"
        }, {
            "id"          : 34,
            "topic"       : "Meetz",
            "description" : "Aenean fermentum.",
            "tags"        : "morbi",
            "type"        : "Interest"
        }, {
            "id"          : 35,
            "topic"       : "JumpXS",
            "description" : "Ut at dolor quis odio consequat varius.",
            "tags"        : "lectus in",
            "type"        : "Interest"
        }, {
            "id"          : 36,
            "topic"       : "Yakijo",
            "description" : "Vestibulum sed magna at nunc commodo placerat.",
            "tags"        : "quis orci nullam",
            "type"        : "Custom"
        }, {
            "id"          : 37,
            "topic"       : "Gabcube",
            "description" : "Maecenas ut massa quis augue luctus tincidunt.",
            "tags"        : "odio",
            "type"        : "Interest"
        }, {
            "id"          : 38,
            "topic"       : "Jaxspan",
            "description" : "Nullam molestie nibh in lectus.",
            "tags"        : "integer pede",
            "type"        : "Custom"
        }, {
            "id"          : 39,
            "topic"       : "Bluejam",
            "description" : "Phasellus in felis.",
            "tags"        : "orci luctus",
            "type"        : "Custom"
        }, {
            "id"          : 40,
            "topic"       : "Oyoloo",
            "description" : "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "tags"        : "magna",
            "type"        : "Brand"
        }, {
            "id"          : 41,
            "topic"       : "Kayveo",
            "description" : "Suspendisse ornare consequat lectus.",
            "tags"        : "cras",
            "type"        : "Custom"
        }, {
            "id"          : 42,
            "topic"       : "Meevee",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
            "tags"        : "mi in porttitor",
            "type"        : "Custom"
        }, {
            "id"          : 43,
            "topic"       : "Divanoodle",
            "description" : "Donec ut dolor.",
            "tags"        : "massa quis augue",
            "type"        : "Custom"
        }, {
            "id"          : 44,
            "topic"       : "Jaxnation",
            "description" : "Donec semper sapien a libero.",
            "tags"        : "in hac habitasse",
            "type"        : "Brand"
        }, {
            "id"          : 45,
            "topic"       : "Zoonoodle",
            "description" : "Vestibulum rutrum rutrum neque.",
            "tags"        : "volutpat eleifend donec",
            "type"        : "Custom"
        }, {
            "id"          : 46,
            "topic"       : "Ntags",
            "description" : "Duis mattis egestas metus.",
            "tags"        : "fringilla rhoncus mauris",
            "type"        : "Brand"
        }, {
            "id"          : 47,
            "topic"       : "Skiba",
            "description" : "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "tags"        : "mi nulla ac",
            "type"        : "Custom"
        }, {
            "id"          : 48,
            "topic"       : "Quinu",
            "description" : "Integer tincidunt ante vel ipsum.",
            "tags"        : "mi nulla",
            "type"        : "Interest"
        }, {
            "id"          : 49,
            "topic"       : "Kanoodle",
            "description" : "Nunc rhoncus dui vel sem.",
            "tags"        : "mollis",
            "type"        : "Custom"
        }, {
            "id"          : 50,
            "topic"       : "Blogspan",
            "description" : "Donec quis orci eget orci vehicula condimentum.",
            "tags"        : "scelerisque mauris",
            "type"        : "Interest"
        }, {
            "id"          : 51,
            "topic"       : "Trilith",
            "description" : "Donec semper sapien a libero.",
            "tags"        : "tellus nulla",
            "type"        : "Custom"
        }, {
            "id"          : 52,
            "topic"       : "Gabcube",
            "description" : "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
            "tags"        : "dignissim vestibulum vestibulum",
            "type"        : "Brand"
        }, {
            "id"          : 53,
            "topic"       : "Demimbu",
            "description" : "Aenean fermentum.",
            "tags"        : "nec dui",
            "type"        : "Custom"
        }, {
            "id"          : 54,
            "topic"       : "Babbleopia",
            "description" : "Donec semper sapien a libero.",
            "tags"        : "odio condimentum id",
            "type"        : "Custom"
        }, {
            "id"          : 55,
            "topic"       : "Zoomdog",
            "description" : "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            "tags"        : "eu orci",
            "type"        : "Custom"
        }, {
            "id"          : 56,
            "topic"       : "Riffpath",
            "description" : "Integer non velit.",
            "tags"        : "semper",
            "type"        : "Custom"
        }, {
            "id"          : 57,
            "topic"       : "Jayo",
            "description" : "Etiam justo.",
            "tags"        : "maecenas tristique est",
            "type"        : "Interest"
        }, {
            "id"          : 58,
            "topic"       : "Kazu",
            "description" : "In congue.",
            "tags"        : "non sodales",
            "type"        : "Interest"
        }, {
            "id"          : 59,
            "topic"       : "Skiptube",
            "description" : "Integer non velit.",
            "tags"        : "nunc commodo",
            "type"        : "Interest"
        }, {
            "id"          : 60,
            "topic"       : "Livetube",
            "description" : "Aliquam erat volutpat.",
            "tags"        : "donec semper sapien",
            "type"        : "Custom"
        }, {
            "id"          : 61,
            "topic"       : "Jabberbean",
            "description" : "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "tags"        : "vestibulum ac est",
            "type"        : "Brand"
        }, {
            "id"          : 62,
            "topic"       : "Gabvine",
            "description" : "In eleifend quam a odio.",
            "tags"        : "vestibulum",
            "type"        : "Interest"
        }, {
            "id"          : 63,
            "topic"       : "Kwideo",
            "description" : "Fusce posuere felis sed lacus.",
            "tags"        : "imperdiet nullam orci",
            "type"        : "Brand"
        }, {
            "id"          : 64,
            "topic"       : "Abatz",
            "description" : "Aliquam quis turpis eget elit sodales scelerisque.",
            "tags"        : "justo morbi",
            "type"        : "Brand"
        }, {
            "id"          : 65,
            "topic"       : "Nlounge",
            "description" : "Vivamus vestibulum sagittis sapien.",
            "tags"        : "turpis eget",
            "type"        : "Custom"
        }, {
            "id"          : 66,
            "topic"       : "Babbleblab",
            "description" : "Donec posuere metus vitae ipsum.",
            "tags"        : "varius integer ac",
            "type"        : "Brand"
        }, {
            "id"          : 67,
            "topic"       : "Flipopia",
            "description" : "Praesent lectus.",
            "tags"        : "nullam sit",
            "type"        : "Custom"
        }, {
            "id"          : 68,
            "topic"       : "Skiba",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "tags"        : "imperdiet nullam",
            "type"        : "Interest"
        }, {
            "id"          : 69,
            "topic"       : "Aivee",
            "description" : "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "tags"        : "consequat varius integer",
            "type"        : "Custom"
        }, {
            "id"          : 70,
            "topic"       : "Voonte",
            "description" : "Cras in purus eu magna vulputate luctus.",
            "tags"        : "vel enim sit",
            "type"        : "Interest"
        }, {
            "id"          : 71,
            "topic"       : "Youtags",
            "description" : "Suspendisse accumsan tortor quis turpis.",
            "tags"        : "ac enim in",
            "type"        : "Brand"
        }, {
            "id"          : 72,
            "topic"       : "Skiptube",
            "description" : "In quis justo.",
            "tags"        : "neque aenean",
            "type"        : "Custom"
        }, {
            "id"          : 73,
            "topic"       : "Eabox",
            "description" : "Integer non velit.",
            "tags"        : "vestibulum ante",
            "type"        : "Interest"
        }, {
            "id"          : 74,
            "topic"       : "Blogtag",
            "description" : "Vivamus vestibulum sagittis sapien.",
            "tags"        : "lorem ipsum",
            "type"        : "Brand"
        }, {
            "id"          : 75,
            "topic"       : "Avamm",
            "description" : "Nulla suscipit ligula in lacus.",
            "tags"        : "nulla",
            "type"        : "Custom"
        }, {
            "id"          : 76,
            "topic"       : "Kwideo",
            "description" : "Nam dui.",
            "tags"        : "tortor",
            "type"        : "Interest"
        }, {
            "id"          : 77,
            "topic"       : "Quinu",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "tags"        : "morbi ut odio",
            "type"        : "Interest"
        }, {
            "id"          : 78,
            "topic"       : "Thoughtstorm",
            "description" : "Suspendisse ornare consequat lectus.",
            "tags"        : "vestibulum ante ipsum",
            "type"        : "Brand"
        }, {
            "id"          : 79,
            "topic"       : "Voomm",
            "description" : "Etiam justo.",
            "tags"        : "turpis sed ante",
            "type"        : "Brand"
        }, {
            "id"          : 80,
            "topic"       : "Kwideo",
            "description" : "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "tags"        : "nascetur ridiculus mus",
            "type"        : "Interest"
        }, {
            "id"          : 81,
            "topic"       : "Zoozzy",
            "description" : "Sed accumsan felis.",
            "tags"        : "vivamus vestibulum sagittis",
            "type"        : "Custom"
        }, {
            "id"          : 82,
            "topic"       : "Zoozzy",
            "description" : "Aenean lectus.",
            "tags"        : "justo sit",
            "type"        : "Interest"
        }, {
            "id"          : 83,
            "topic"       : "Tagtune",
            "description" : "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            "tags"        : "a nibh",
            "type"        : "Brand"
        }, {
            "id"          : 84,
            "topic"       : "Zoomzone",
            "description" : "Morbi vel lectus in quam fringilla rhoncus.",
            "tags"        : "dapibus augue",
            "type"        : "Custom"
        }, {
            "id"          : 85,
            "topic"       : "Oyoloo",
            "description" : "Ut at dolor quis odio consequat varius.",
            "tags"        : "tincidunt lacus",
            "type"        : "Custom"
        }, {
            "id"          : 86,
            "topic"       : "Dabshots",
            "description" : "Nam nulla.",
            "tags"        : "sit amet",
            "type"        : "Interest"
        }, {
            "id"          : 87,
            "topic"       : "Zazio",
            "description" : "Maecenas rhoncus aliquam lacus.",
            "tags"        : "diam",
            "type"        : "Custom"
        }, {
            "id"          : 88,
            "topic"       : "Jaxworks",
            "description" : "Nunc rhoncus dui vel sem.",
            "tags"        : "imperdiet sapien",
            "type"        : "Custom"
        }, {
            "id"          : 89,
            "topic"       : "Yadel",
            "description" : "Suspendisse potenti.",
            "tags"        : "lorem",
            "type"        : "Interest"
        }, {
            "id"          : 90,
            "topic"       : "Kare",
            "description" : "Duis aliquam convallis nunc.",
            "tags"        : "aliquet ultrices",
            "type"        : "Interest"
        }, {
            "id"          : 91,
            "topic"       : "Bubbletube",
            "description" : "Nam tristique tortor eu pede.",
            "tags"        : "nisl duis ac",
            "type"        : "Custom"
        }, {
            "id"          : 92,
            "topic"       : "Topdrive",
            "description" : "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
            "tags"        : "id",
            "type"        : "Brand"
        }, {
            "id"          : 93,
            "topic"       : "Thoughtsphere",
            "description" : "Nulla nisl.",
            "tags"        : "integer non",
            "type"        : "Custom"
        }, {
            "id"          : 94,
            "topic"       : "Brainbox",
            "description" : "Phasellus in felis.",
            "tags"        : "a",
            "type"        : "Brand"
        }, {
            "id"          : 95,
            "topic"       : "Centidel",
            "description" : "Curabitur in libero ut massa volutpat convallis.",
            "tags"        : "ultricies eu",
            "type"        : "Interest"
        }, {
            "id"          : 96,
            "topic"       : "Jaxbean",
            "description" : "Phasellus in felis.",
            "tags"        : "nullam porttitor",
            "type"        : "Brand"
        }, {
            "id"          : 97,
            "topic"       : "Fivechat",
            "description" : "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "tags"        : "cras",
            "type"        : "Custom"
        }, {
            "id"          : 98,
            "topic"       : "Yodel",
            "description" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "tags"        : "aliquam convallis nunc",
            "type"        : "Interest"
        }, {
            "id"          : 99,
            "topic"       : "Youspan",
            "description" : "Nam dui.",
            "tags"        : "morbi sem",
            "type"        : "Interest"
        }, {
            "id"          : 100,
            "topic"       : "Zoombeat",
            "description" : "Aenean lectus.",
            "tags"        : "pede justo",
            "type"        : "Custom"
        }*/
    ];
    var table  = $( '#dt' ).DataTable(
        {
            data         : values,
            searching    : true,
            lengthChange : false,
            select       : "single",
            columns      : [
                {
                    title : "Topic",
                    data  : "topic"
                },
                {
                    title : "Description",
                    data  : "description"
                },
                {
                    title : "Tags",
                    data  : "tags",
                    width : "350px"
                },
                {
                    title : "Type",
                    data  : "type"
                }

            ]
        } );


    function ViewModel( dataTable ) {
        var self = this;

        self.currentTopic = {
            name        : ko.observable(),
            description : ko.observable(),
            tags        : ko.observable(),
            type        : ko.observable()
        };

        self.newEnabled  = ko.observable( true );
        self.newTopic = function () {
            self.currentTopic.name(null);
            self.currentTopic.description(null);
            self.currentTopic.tags(null);
            self.currentTopic.type(null);
        };

        self.editEnabled = ko.observable( false );

        self.editTopic = function () {
            window.console && console.log( "editTopic() fired." );
        };

        self.removeEnabled = ko.observable( false );

        /*self.currentTopic = {
         name        : ko.observable(),
         description : ko.observable(),
         tags        : ko.observableArray(),
         type        : ko.observable()
         };*/



        self.saveEnabled = ko.computed(
            function () {
                return (
                self.currentTopic.name() != null &&
                self.currentTopic.description() != null &&
                self.currentTopic.tags() != null &&
                self.currentTopic.type() != null
                );
            }
        );

        self.addTopic = function () {
            var adder   = {
                topic       : self.currentTopic.name(),
                description : self.currentTopic.description(),
                tags        : self.currentTopic.tags(),
                type        : self.currentTopic.type
            };
            window.console && console.log( "save topic fired", adder );

            var rowNode = dataTable.row.add( adder ).draw().node();

        };

        self.removeTopic = function () {
            dataTable.row( ".selected" ).remove().draw( false );
            self.editEnabled( false );
            self.removeEnabled( false );
        };

        dataTable.on( "select", function ( e, dt, type, indexes ) {
            self.editEnabled( true );
            self.removeEnabled( true );
        } );

        dataTable.on( "deselect", function () {
            self.editEnabled( false );
            self.removeEnabled( false );
        } )

    };

    var viewModel = new ViewModel( table );

    ko.applyBindings( viewModel );

} );
