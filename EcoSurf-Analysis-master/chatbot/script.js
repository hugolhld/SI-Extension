let botui = new BotUI('my-botui-app');
let answerNumber = 0

botui.message
    .bot(
      {
        content : 'Bonjour! L’heure est venu de visionner votre bilan ecoSurf de la semaine. Êtes-vous prêt ?',
        loading : true,
        delay: 1000
    })
    .then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Commençons.',
        value: 'yes'
      }, {
        text: 'Pas maintenant.',
        value: 'no'
      }]
    })
}).then(function (res) {
    if(res.value == 'yes') {
        botui.message.bot(
        { 
            content : 'Cette semaine, votre machine a émit […]  grammes de CO2 et consommé […] cl d’eau. Nous avons remarqué que vous visitiez beaucoup […]. C’est un site Ecofriendly. Cependant, vous regardez beaucoup de vidéos, avez-vous pensez à favoriser les podcasts ?', 
            loading : true,
            delay : 1000
        }).then(function() {
            return botui.action.button({
                delay: 1000,
                action: [{
                  text: 'Je veux en savoir plus.',
                  value: 'yes'
                }, {
                  text: 'Passons à la suite.',
                  value: 'no'
                }] 
            })
        }).then(function (res) {
            if(res.value == 'yes') {
                botui.message.bot(
                {
                    content : 'La moyenne dans les pays membres de l’OCDE, pour un ordinateur de bureau fabriqué avant 2010, est d’environ 846 grammes par semaine soit 44 kilogrammes de CO2 émit par an.',
                    loading : true,
                    delay : 1000
                }).then(function(){
                    return botui.action.button({
                        delay: 1000,
                        action: [{
                            text: 'Passons à la suite.'
                        }]
                    }).then(function(){
                        botui.message.bot(
                        {
                            content : 'Comme vous le savez cette semaine vous avez consommé […] g de CO2 mais si vous le voulez nous pouvons vous aider à mieux faire.',
                            loading : true,
                            delay : 1000
                        })
                    }).then(function(){
                        return botui.action.button({
                            delay: 1000,
                            action: [{
                              text: 'Fixer des objectifs.',
                              value: 'yes'
                            }, {
                              text: 'Pas maintenant.',
                              value: 'no'
                            }] 
                        }).then(function(){
                            if(res.value == 'yes'){
                                botui.message.bot(
                                {
                                    content : 'Nous pouvons vous notifier pour que vous reduisiez votre temps passer sur les sites qui ne sont pas EcoFriendly (quelques minutes suffisent) ou vous pouvez rembourser votre empreinte écologique grace à un système de donation.',
                                    loading : true,
                                    delay : 1000
                                }).then(function(){
                                    return botui.action.button({
                                        delay: 1000,
                                        action : [{
                                            text: 'Réduire mon temps sur les sites EcoUnfriendly.',
                                            value: 'yes'
                                        }, {
                                            text: 'Qu’est ce que le système de donation ?',
                                            value: 'what'
                                        }, {
                                            text: 'Finalement, laisse tomber.',
                                            value: 'no'
                                        }]
                                    })
                                }).then(function(res){
                                    if(res.value == 'yes'){
                                        botui.message.bot({
                                            content : 'Nous vous notifierons cette semaine pour vous aider à réduire votre consommation. Commençons par deux minutes par jour si cela vous vas.',
                                            loading : true,
                                            delay : 1000 
                                        }).then(function(){
                                            return botui.action.button({
                                                delay: 1000,
                                                action : [{
                                                    text: 'Daccord.',
                                                    value: 'yes'
                                                }, {
                                                    text: 'Finalement, laisse tomber.',
                                                    value: 'no'
                                                }]
                                            })
                                        }).then(function(res){
                                            if(res.value == 'yes'){
                                                botui.message.bot({
                                                    content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                                    loading : true,
                                                    delay : 1000 
                                                }).then(function(){
                                                    botui.message.bot({
                                                        content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                        loading : true,
                                                        delay : 1000 
                                                    })
                                                })
                                            }else{
                                                botui.message.bot({
                                                    content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                    loading : true,
                                                    delay : 1000 
                                                })
                                            }
                                        })
                                    }else if(res.value == 'what'){
                                        botui.message.bot({
                                            content : 'Nous vous proposons de choisir une valeur en gramme ou en kilogramme qui servira de palier. A chaque fois que vous consommerez l’équivalent de cette valeur  nous vous proposerons d’équilibrer votre émission à l’aide d’une donation à l’association CO2 solidaire.',
                                            loading : true,
                                            delay : 1000 
                                        }).then(function(){
                                            return botui.action.button({
                                                delay: 1000,
                                                action : [{
                                                    text: 'Déterminer un palier.',
                                                    value: 'yes'
                                                }, {
                                                    text: 'C’est quoi CO2 solidaire ?',
                                                    value: 'what'
                                                }, {
                                                    text: 'Pas cette semaine.',
                                                    value: 'no'
                                                }]
                                            })
                                        }).then(function(res){
                                            if(res.value == 'yes'){
                                                botui.action.select({
                                                    action: {
                                                        placeholder : "Selectionner un palier", 
                                                        searchselect : true, // Default: true, false for standart dropdown
                                                        label : 'text', // dropdown label variable
                                                        options :[
                                                                    {value: "250 g de CO2", text : "250 g de CO2" },
                                                                    {value: "500 g de CO2", text : "500 g de CO2" },
                                                                    {value: "1 kilogramme", text : "1 kilogramme"}
                                                                ],
                                                        button: {
                                                            icon: 'check',
                                                            label: 'OK'
                                                        }
                                                    }
                                                }).then(function () { 
                                                    botui.message.bot(
                                                    {
                                                        content :'Quel somme voulez vous donner à chaque fois que ce palier est atteint ?',
                                                        loading : true,
                                                        delay : 1000
                                                    })
                                                }).then(function () { 
                                                    return botui.action.button({
                                                        delay: 1000,
                                                        action : [{
                                                            text: '50 centimes',
                                                            value: 'yes'
                                                        }, {
                                                            text: '1 euros',
                                                            value: 'no'
                                                        }, {
                                                            text: '2 euros',
                                                            value: 'no'
                                                        }, {
                                                            text: '5 euros',
                                                            value: 'no'
                                                        }, {
                                                            text: '10 euros',
                                                            value: 'no'
                                                        }]
                                                    })
                                                }).then(function () { 
                                                    botui.message.bot(
                                                    {
                                                        content :'Merci de votre implication ! Vous pouvez, à n’importe quel moment, changer vos choix de palier ou de somme donnée dans la section « Réglages > Objectifs ».',
                                                        loading : true,
                                                        delay : 1000
                                                    })
                                                }).then(function(){
                                                    botui.message.bot({
                                                        content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                        loading : true,
                                                        delay : 2000 
                                                    })
                                                })  
                                            }else if(res.value == 'what'){
                                                botui.message.bot({
                                                    content : 'CO₂Solidaire est la première initiative historique française de compensation carbone. L’objectif est de proposer des crédits carbone à haute qualité sociale en circuit court.Notre plate-forme vous permettra d’accumuler les petites donations.',
                                                    loading : true,
                                                    delay : 1000 
                                                }).then(function(){
                                                    return botui.action.button({
                                                        delay: 1000,
                                                        action : [{
                                                            text: 'Déterminer un palier.',
                                                            value: 'yes'
                                                        }, {
                                                            text: 'Pas cette semaine.',
                                                            value: 'no'
                                                        }]
                                                    })
                                                }).then(function(res){
                                                    if(res.value == 'yes'){
                                                        botui.action.select({
                                                            action: {
                                                                placeholder : "Selectionner un palier", 
                                                                searchselect : true, // Default: true, false for standart dropdown
                                                                label : 'text', // dropdown label variable
                                                                options :[
                                                                            {value: "250 g de CO2", text : "250 g de CO2" },
                                                                            {value: "500 g de CO2", text : "500 g de CO2" },
                                                                            {value: "1 kilogramme", text : "1 kilogramme"}
                                                                        ],
                                                                button: {
                                                                    icon: 'check',
                                                                    label: 'OK'
                                                                }
                                                            }
                                                        }).then(function () { 
                                                            botui.message.bot(
                                                            {
                                                                content :'Quel somme voulez vous donner à chaque fois que ce palier est atteint ?',
                                                                loading : true,
                                                                delay : 1000
                                                            })
                                                        }).then(function () { 
                                                            return botui.action.button({
                                                                delay: 1000,
                                                                action : [{
                                                                    text: '50 centimes',
                                                                    value: 'yes'
                                                                }, {
                                                                    text: '1 euros',
                                                                    value: 'no'
                                                                }, {
                                                                    text: '2 euros',
                                                                    value: 'no'
                                                                }, {
                                                                    text: '5 euros',
                                                                    value: 'no'
                                                                }, {
                                                                    text: '10 euros',
                                                                    value: 'no'
                                                                }]
                                                            })
                                                        }).then(function () { 
                                                            botui.message.bot(
                                                            {
                                                                content :'Merci de votre implication ! Vous pouvez, à n’importe quel moment, changer vos choix de palier ou de somme donnée dans la section « Réglages > Objectifs ».',
                                                                loading : true,
                                                                delay : 1000
                                                            })
                                                        }).then(function(){
                                                            botui.message.bot({
                                                                content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                                loading : true,
                                                                delay : 2000 
                                                            })
                                                        }) 
                                                    }else{
                                                        botui.message.bot({
                                                            content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                                            loading : true,
                                                            delay : 1000 
                                                        }).then(function(){
                                                            botui.message.bot({
                                                                content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                                loading : true,
                                                                delay : 1000 
                                                            })
                                                        })  
                                                    }
                                                })
                                            }else{
                                                botui.message.bot({
                                                    content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                                    loading : true,
                                                    delay : 1000 
                                                }).then(function(){
                                                    botui.message.bot({
                                                        content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                        loading : true,
                                                        delay : 1000 
                                                    })
                                                })
                                            }
                                        })
                                    }else{
                                        botui.message.bot({
                                            content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                            loading : true,
                                            delay : 1000 
                                        }).then(function(){
                                            botui.message.bot({
                                                content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                loading : true,
                                                delay : 1000 
                                            })
                                        }) 
                                    }
                                })
                             }else{ //END
                                botui.message.bot(
                                {
                                    content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ».A la semaine prochaine !',
                                    loading : true,
                                    delay : 1000
                                })
                            }
                        })
                    })
                })
            } else {
                botui.message.bot(
                {
                    content : 'Comme vous le savez cette semaine vous avez consommé […] g de CO2 mais si vous le voulez nous pouvons vous aider à mieux faire.',
                    loading : true,
                    delay : 1000
                }).then(function(){
                    return botui.action.button({
                        delay: 1000,
                        action: [{
                          text: 'Fixer des objectifs.',
                          value: 'yes'
                        }, {
                          text: 'Pas maintenant.',
                          value: 'no'
                        }] 
                    }).then(function(res){
                        if(res.value == 'yes'){
                            botui.message.bot(
                            {
                                content : 'Nous pouvons vous notifier pour que vous reduisiez votre temps passer sur les sites qui ne sont pas EcoFriendly (quelques minutes suffisent) ou vous pouvez rembourser votre empreinte écologique grace à un système de donation.',
                                loading : true,
                                delay : 1000
                            }).then(function(){
                                return botui.action.button({
                                    delay: 1000,
                                    action : [{
                                        text: 'Réduire mon temps sur les sites EcoUnfriendly.',
                                        value: 'yes'
                                    }, {
                                        text: 'Qu’est ce que le système de donation ?',
                                        value: 'what'
                                    }, {
                                        text: 'Finalement, laisse tomber.',
                                        value: 'no'
                                    }]
                                })
                            }).then(function(res){
                                if(res.value == 'yes'){
                                    botui.message.bot({
                                        content : 'Nous vous notifierons cette semaine pour vous aider à réduire votre consommation. Commençons par deux minutes par jour si cela vous vas.',
                                        loading : true,
                                        delay : 1000 
                                    }).then(function(){
                                        return botui.action.button({
                                            delay: 1000,
                                            action : [{
                                                text: 'Daccord.',
                                                value: 'yes'
                                            }, {
                                                text: 'Finalement, laisse tomber.',
                                                value: 'no'
                                            }]
                                        })
                                    }).then(function(res){
                                        if(res.value == 'yes'){
                                            botui.message.bot({
                                                content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                                loading : true,
                                                delay : 1000 
                                            }).then(function(){
                                                botui.message.bot({
                                                    content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                    loading : true,
                                                    delay : 1000 
                                                })
                                            })
                                        }else{
                                            botui.message.bot({
                                                content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                loading : true,
                                                delay : 1000 
                                            })
                                        }
                                    })
                                }else if(res.value == 'what'){
                                    botui.message.bot({
                                        content : 'Nous vous proposons de choisir une valeur en gramme ou en kilogramme qui servira de palier. A chaque fois que vous consommerez l’équivalent de cette valeur  nous vous proposerons d’équilibrer votre émission à l’aide d’une donation à l’association CO2 solidaire.',
                                        loading : true,
                                        delay : 1000 
                                    }).then(function(){
                                        return botui.action.button({
                                            delay: 1000,
                                            action : [{
                                                text: 'Déterminer un palier.',
                                                value: 'yes'
                                            }, {
                                                text: 'C’est quoi CO2 solidaire ?',
                                                value: 'what'
                                            }, {
                                                text: 'Pas cette semaine.',
                                                value: 'no'
                                            }]
                                        })
                                    }).then(function(res){
                                        if(res.value == 'yes'){
                                            botui.action.select({
                                                action: {
                                                    placeholder : "Selectionner un palier", 
                                                    searchselect : true, // Default: true, false for standart dropdown
                                                    label : 'text', // dropdown label variable
                                                    options :[
                                                                {value: "250 g de CO2", text : "250 g de CO2" },
                                                                {value: "500 g de CO2", text : "500 g de CO2" },
                                                                {value: "1 kilogramme", text : "1 kilogramme"}
                                                            ],
                                                    button: {
                                                        icon: 'check',
                                                        label: 'OK'
                                                    }
                                                }
                                            }).then(function () { 
                                                botui.message.bot(
                                                {
                                                    content :'Quel somme voulez vous donner à chaque fois que ce palier est atteint ?',
                                                    loading : true,
                                                    delay : 1000
                                                })
                                            }).then(function () { 
                                                return botui.action.button({
                                                    delay: 1000,
                                                    action : [{
                                                        text: '50 centimes',
                                                        value: 'yes'
                                                    }, {
                                                        text: '1 euros',
                                                        value: 'no'
                                                    }, {
                                                        text: '2 euros',
                                                        value: 'no'
                                                    }, {
                                                        text: '5 euros',
                                                        value: 'no'
                                                    }, {
                                                        text: '10 euros',
                                                        value: 'no'
                                                    }]
                                                })
                                            }).then(function () { 
                                                botui.message.bot(
                                                {
                                                    content :'Merci de votre implication ! Vous pouvez, à n’importe quel moment, changer vos choix de palier ou de somme donnée dans la section « Réglages > Objectifs ».',
                                                    loading : true,
                                                    delay : 1000
                                                })
                                            }).then(function(){
                                                botui.message.bot({
                                                    content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                    loading : true,
                                                    delay : 2000 
                                                })
                                            })  
                                        }else if(res.value == 'what'){
                                            botui.message.bot({
                                                content : 'CO₂Solidaire est la première initiative historique française de compensation carbone. L’objectif est de proposer des crédits carbone à haute qualité sociale en circuit court.Notre plate-forme vous permettra d’accumuler les petites donations.',
                                                loading : true,
                                                delay : 1000 
                                            }).then(function(){
                                                return botui.action.button({
                                                    delay: 1000,
                                                    action : [{
                                                        text: 'Déterminer un palier.',
                                                        value: 'yes'
                                                    }, {
                                                        text: 'Pas cette semaine.',
                                                        value: 'no'
                                                    }]
                                                })
                                            }).then(function(res){
                                                if(res.value == 'yes'){
                                                    botui.action.select({
                                                        action: {
                                                            placeholder : "Selectionner un palier", 
                                                            searchselect : true, // Default: true, false for standart dropdown
                                                            label : 'text', // dropdown label variable
                                                            options :[
                                                                        {value: "250 g de CO2", text : "250 g de CO2" },
                                                                        {value: "500 g de CO2", text : "500 g de CO2" },
                                                                        {value: "1 kilogramme", text : "1 kilogramme"}
                                                                    ],
                                                            button: {
                                                                icon: 'check',
                                                                label: 'OK'
                                                            }
                                                        }
                                                    }).then(function () { 
                                                        botui.message.bot(
                                                        {
                                                            content :'Quel somme voulez vous donner à chaque fois que ce palier est atteint ?',
                                                            loading : true,
                                                            delay : 1000
                                                        })
                                                    }).then(function () { 
                                                        return botui.action.button({
                                                            delay: 1000,
                                                            action : [{
                                                                text: '50 centimes',
                                                                value: 'yes'
                                                            }, {
                                                                text: '1 euros',
                                                                value: 'no'
                                                            }, {
                                                                text: '2 euros',
                                                                value: 'no'
                                                            }, {
                                                                text: '5 euros',
                                                                value: 'no'
                                                            }, {
                                                                text: '10 euros',
                                                                value: 'no'
                                                            }]
                                                        })
                                                    }).then(function () { 
                                                        botui.message.bot(
                                                        {
                                                            content :'Merci de votre implication ! Vous pouvez, à n’importe quel moment, changer vos choix de palier ou de somme donnée dans la section « Réglages > Objectifs ».',
                                                            loading : true,
                                                            delay : 1000
                                                        })
                                                    }).then(function(){
                                                        botui.message.bot({
                                                            content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                            loading : true,
                                                            delay : 2000 
                                                        })
                                                    }) 
                                                }else{
                                                    botui.message.bot({
                                                        content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                                        loading : true,
                                                        delay : 1000 
                                                    }).then(function(){
                                                        botui.message.bot({
                                                            content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                            loading : true,
                                                            delay : 1000 
                                                        })
                                                    })  
                                                }
                                            })
                                        }else{
                                            botui.message.bot({
                                                content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                                loading : true,
                                                delay : 1000 
                                            }).then(function(){
                                                botui.message.bot({
                                                    content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                                    loading : true,
                                                    delay : 1000 
                                                })
                                            })
                                        }
                                    })
                                }else{
                                    botui.message.bot({
                                        content : 'Vous pouvez, à tout moment, enlever les notifications dans la section « Réglages / Objectifs »',
                                        loading : true,
                                        delay : 1000 
                                    }).then(function(){
                                        botui.message.bot({
                                            content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                            loading : true,
                                            delay : 1000 
                                        })
                                    }) 
                                }
                            })
                         }else{ //END
                            botui.message.bot(
                            {
                                content : 'Votre Bilan est fini ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                                loading : true,
                                delay : 1000
                            })
                        }
                    })
                })
            }
        })
    } else { // REPORT THE CHATBOT
        botui.message.bot(
        {
            content : 'Voulez-vous reporter votre bilan hebdomadaire à plus tard ?',
            loading : true,
            delay : 1000
        })
        .then(function() {
            return botui.action.button({
                delay: 1000,
                action: [{
                    text: 'Dans une heure.',
                    value: 'hour'
                }, {
                    text: 'Pas cette semaine.',
                    value: 'not this week'
                }, {
                    text: 'Choisir un horaire.',
                    value: 'schedules'
                }] 
            })
        }).then(function (res) {
            if(res.value == 'hour') {
                botui.message.bot(
                {
                    content : 'C’est noté ! Nous vous enverrons une notification dans une heure !',
                    loading : true,
                    delay : 1000
                })
            } else if(res.value == 'not this week'){ 
                botui.message.bot(
                {
                    content : 'Très bien ! Vous pourrez retrouver un résumé de votre bilan dans la section « Historique des bilans ». A la semaine prochaine !',
                    loading : true,
                    delay : 1000
                })
            } else{
                return botui.action.select({
                    action: {
                        placeholder : "Selectionner un jour", 
                        searchselect : true, // Default: true, false for standart dropdown
                        label : 'text', // dropdown label variable
                        options : [
                                        {value: "cette après-midi", text : "Cette après-midi" },
                                        {value: "demain", text : "Demain" },
                                        {value: "après demain", text : "Après-Demain" }
                                  ],
                        button: {
                          icon: 'check',
                          label: 'OK'
                        }
                    }
                }).then(function (res) { 
                    botui.message.bot(
                        {
                            content :`C’est noté ! Nous vous enverrons une notification ${res.value} !`,
                            loading : true,
                            delay : 1000
                        })
                })
            }
        })
    }
})
