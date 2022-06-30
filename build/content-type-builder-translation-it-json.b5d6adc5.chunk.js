"use strict";(self.webpackChunkfeedback=self.webpackChunkfeedback||[]).push([[1023],{35816:e=>{e.exports=JSON.parse(`{"attribute.boolean":"Booleano","attribute.boolean.description":"S\xEC o no, 1 o 0, vero o falso","attribute.component":"Componente","attribute.component.description":"Gruppo di campi che puoi ripetere o riutilizzare","attribute.date":"Data","attribute.date.description":"Un selettore di date con ore, minuti e secondi","attribute.datetime":"Data e Ora","attribute.dynamiczone":"Zona dinamica","attribute.dynamiczone.description":"Scegli un componente dinamicamente durante la modifica del contenuto ","attribute.email":"Email","attribute.email.description":"Un campo Email con validazione del formato","attribute.enumeration":"Enumerazione","attribute.enumeration.description":"Scegli il valore da una lista precompilata","attribute.json":"JSON","attribute.json.description":"Dati in formato JSON","attribute.media":"Media","attribute.media.description":"File come immagini, video, ecc.","attribute.null":" ","attribute.number":"Numero","attribute.number.description":"Numeri (interi, float, decimali)","attribute.password":"Password","attribute.password.description":"Campo Password crittografato","attribute.relation":"Relazione","attribute.relation.description":"Per collegare una Collezione","attribute.richtext":"Testo formattato","attribute.richtext.description":"Un editor di testo con comandi per la formattazione","attribute.text":"Testo","attribute.text.description":"Testo semplice come titolo o descrizione","attribute.time":"Orario","attribute.timestamp":"Timestamp","attribute.uid":"UID","attribute.uid.description":"Identificatore univoco","button.attributes.add.another":"Aggiungi altro campo","button.component.add":"Aggiungi componente","button.component.create":"Crea nuovo componente","button.model.create":"Crea nuova Collezione","button.single-types.create":"Crea nuova Entit\xE0 singola","component.repeatable":"(ripetibile)","components.componentSelect.no-component-available":"Hai gi\xE0 aggiunto tutti i componenti","components.componentSelect.no-component-available.with-search":"Nessun componente con questa chiave di ricerca","components.componentSelect.value-component":"{number} componenti selezionati (digita per cercare un componente)","components.componentSelect.value-components":"{number} componenti selezionati","configurations":"configurazioni","contentType.collectionName.description":"Utile quando il nome della Collezione differisce dal nome della tabella del DB","contentType.collectionName.label":"Nome della Collezione","contentType.displayName.label":"Nome visualizzato","contentType.draftAndPublish.description":"Scrivi una bozza dell'elemento prima di pubblicarlo","contentType.draftAndPublish.label":"Sistema Bozza/pubblicato","contentType.kind.change.warning":"Hai cambiato il genere di questo Tipo di Contenuto. Le API verranno ripristinate (route, controller e services verranno sovrascritti).","error.attributeName.reserved-name":"Questo nome non pu\xF2 essere utilizzato nel tuo Tipo di Contenuto perch\xE9 potrebbe danneggiare altre funzionalit\xE0","error.contentTypeName.reserved-name":"Questo nome non pu\xF2 essere utilizzato nel tuo progetto perch\xE9 potrebbe danneggiare altre funzionalit\xE0","error.validation.enum-duplicate":"Valori duplicati non ammessi","error.validation.minSupMax":"Non pu\xF2 essere maggiore","error.validation.regex":"Regex non valida","error.validation.relation.targetAttribute-taken":"Questo nome gi\xE0 esiste nella destinazione","form.attribute.component.option.add":"Aggiungi componente","form.attribute.component.option.create":"Crea nuovo componente","form.attribute.component.option.create.description":"I componenti sono condivisi tra Tipi e componenti, sono disponibili e accessibili da ovunque.","form.attribute.component.option.repeatable":"Componente ripetibile","form.attribute.component.option.repeatable.description":"Utile per istanze multiple (liste) come ingredienti, meta tag, ecc...","form.attribute.component.option.reuse-existing":"Usa componente esistente","form.attribute.component.option.reuse-existing.description":"Riutilizza un componente gi\xE0 creato per mantenere i dati consistenti tra i vari Tipi di Contenuto","form.attribute.component.option.single":"Componente singolo","form.attribute.component.option.single.description":"Utile per raggruppare campi correlati come quelli di un indirizzo","form.attribute.item.customColumnName":"Nome della colonna personalizzato","form.attribute.item.customColumnName.description":"Utile per rinominare le colonne del database e mantenere consistente il formato delle risposte API","form.attribute.item.defineRelation.fieldName":"Nome del campo","form.attribute.item.enumeration.graphql":"Override del nome GraphQL","form.attribute.item.enumeration.graphql.description":"Consente di ignorare l'impostazione predefinita del nome generato per GraphQL","form.attribute.item.enumeration.placeholder":"Es:\\nmattina\\nmezzogiorno\\nsera","form.attribute.item.enumeration.rules":"Valori (un valore per riga)","form.attribute.item.maximum":"Valore massimo","form.attribute.item.maximumLength":"Lunghezza massima","form.attribute.item.minimum":"Valore minimo","form.attribute.item.minimumLength":"Lunghezza minima","form.attribute.item.number.type":"Formato del numero","form.attribute.item.number.type.biginteger":"intero grande (es: 123456789)","form.attribute.item.number.type.decimal":"decimale (es: 2.22)","form.attribute.item.number.type.float":"float (es: 3.33333333)","form.attribute.item.number.type.integer":"intero (es: 10)","form.attribute.item.privateField":"Campo privato","form.attribute.item.privateField.description":"Questo campo non sar\xE0 presente nelle risposte API","form.attribute.item.requiredField":"Campo obbligatorio","form.attribute.item.requiredField.description":"Non sarai in grado di creare una voce se questo campo \xE8 vuoto","form.attribute.item.text.regex":"Schema RegExp","form.attribute.item.text.regex.description":"Il testo di una Espressione Regolare","form.attribute.item.uniqueField":"Campo univoco","form.attribute.item.uniqueField.description":"Non sarai in grado di creare una voce, se c'\xE8 una voce esistente con valore identico","form.attribute.media.allowed-types":"Seleziona i tipi di media permessi","form.attribute.media.allowed-types.option-files":"File","form.attribute.media.allowed-types.option-images":"Immagini","form.attribute.media.allowed-types.option-videos":"Video","form.attribute.media.option.multiple":"Media multipli","form.attribute.media.option.multiple.description":"Utile per slider, caroselli o download multipli","form.attribute.media.option.single":"Media singolo","form.attribute.media.option.single.description":"Utile per avatar, foto profilo o copertina","form.attribute.settings.default":"Valore di Default","form.attribute.text.option.long-text":"Testo lungo","form.attribute.text.option.long-text.description":"Utile per descrizioni o biografie. La ricerca esatta \xE8 disabilitata.","form.attribute.text.option.short-text":"Testo breve","form.attribute.text.option.short-text.description":"Utile per titoli, nomi, link (URL). Potrai eseguire una ricerca esatta sul campo.","form.button.add-components-to-dynamiczone":"Aggiungi componenti alla zona","form.button.add-field":"Aggiungi altro campo","form.button.add-first-field-to-created-component":"Aggiungi un primo campo al componente","form.button.add.field.to.collectionType":"Aggiungi un altro campo a questa Collezione","form.button.add.field.to.component":"Aggiungi un altro campo a questo componente","form.button.add.field.to.contentType":"Aggiungi un altro campo a questo Tipo di Contenuto","form.button.add.field.to.singleType":"Aggiungi un altro campo a questa Entit\xE0 singola","form.button.cancel":"Annulla","form.button.collection-type.description":"Utile per istanze multiple come articoli, prodotti, commenti, ecc...","form.button.configure-component":"Configura componente","form.button.configure-view":"Configura vista","form.button.select-component":"Seleziona un componente","form.button.single-type.description":"Indicato per entit\xE0 uniche come home page, chi siamo, ecc...","form.contentType.divider.draft-publish":"Draft/Publish","from":"da","modalForm.attribute.form.base.name.description":"Spazi non ammessi per il nome dell'attributo","modalForm.attribute.form.base.name.placeholder":"Es: Slug, URL SEO, URL Canonico","modalForm.attribute.target-field":"Campo collegato","modalForm.attributes.select-component":"Seleziona un componente","modalForm.attributes.select-components":"Seleziona i componenti","modalForm.component.header-create":"Crea un componente","modalForm.components.create-component.category.label":"Seleziona una categoria o inserisci un nome per crearne una nuova","modalForm.components.icon.label":"Icona","modalForm.editCategory.base.name.description":"Spazi non ammessi per il nome della categoria","modalForm.header-edit":"Modifica {name}","modalForm.header.categories":"Categorie","modalForm.singleType.header-create":"Crea una Entit\xE0 singola","modalForm.sub-header.addComponentToDynamicZone":"Aggiungi nuovo componente alla zona dinamica","modalForm.sub-header.attribute.create":"Aggiungi nuovo campo {type}","modalForm.sub-header.attribute.create.step":"Aggiungi nuovo componente ({step}/2)","modalForm.sub-header.attribute.edit":"Modifica {name}","modalForm.sub-header.chooseAttribute.collectionType":"Seleziona un campo per la tua Collezione","modalForm.sub-header.chooseAttribute.component":"Seleziona un campo per il tuo componente","modalForm.sub-header.chooseAttribute.singleType":"Seleziona un campo per la tua Entit\xE0 singola","modelPage.attribute.relation-polymorphic":"Relazione (polimorfica)","modelPage.attribute.relationWith":"Relazione con","notification.info.autoreaload-disable":"La funzionalit\xE0 autoReload \xE8 richiesta per usare questo plugin. Avvia il tuo server con \`strapi develop\`","notification.info.creating.notSaved":"Per favore, salva il tuo lavoro prima di creare nuovi Tipi di Contenuto o componenti","plugin.description.long":"Modella la struttura dei dati delle tue API. Crea nuovi campi e relazioni in maniera visuale. I file vengono automaticamente creati e aggiornati nel tuo progetto.","plugin.description.short":"Modella la struttura dei dati delle tue API.","popUpForm.navContainer.advanced":"Impostazioni avanzate","popUpForm.navContainer.base":"Impostazioni di base","popUpWarning.bodyMessage.cancel-modifications":"Sei sicuro di voler annullare le tue modifiche?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Sei sicuro di voler annullare le tue modifiche? Alcuni componenti sono stati creati o modificati...","popUpWarning.bodyMessage.category.delete":"Sei sicuro di voler eliminare questa categoria? Verranno cancellati anche tutti i suoi componenti.","popUpWarning.bodyMessage.component.delete":"Sei sicuro di voler eliminare questo componente?","popUpWarning.bodyMessage.contentType.delete":"Sei sicuro di voler eliminare questa Collezione?","popUpWarning.draft-publish.button.confirm":"S\xEC, disabilita","popUpWarning.draft-publish.message":"Se disabiliti il sistema Bozza/pubblicato, le tue bozze verranno eliminate.","popUpWarning.draft-publish.second-message":"Sei sicuro di volerlo disabilitare?","prompt.unsaved":"Sei sicuro di voler uscire? Tutte le modifiche verranno perdute.","relation.attributeName.placeholder":"Es: autore, categoria, tag","relation.manyToMany":"ha e appartiene a molti","relation.manyToOne":"ha molti","relation.manyWay":"ha molti","relation.oneToMany":"appartiene a molti","relation.oneToOne":"ha e appartiene a un","relation.oneWay":"ha un"}`)}}]);
