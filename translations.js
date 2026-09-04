/* =========================================
   NOOR AL-QURAN
   Translation Dictionary

   Supported languages:
   - Arabic:  ar
   - English: en
   - French:  fr

   Arabic is the default language.
========================================= */


/* =========================================
   LANGUAGE CONFIGURATION
========================================= */

window.LANGUAGE_CONFIG = {

    defaultLanguage: "ar",

    storageKey: "noorAlQuranLanguage",

    supportedLanguages: ["ar", "en", "fr"],

    languages: {

        ar: {
            code: "ar",
            name: "العربية",
            direction: "rtl",
            locale: "ar"
        },

        en: {
            code: "en",
            name: "English",
            direction: "ltr",
            locale: "en"
        },

        fr: {
            code: "fr",
            name: "Français",
            direction: "ltr",
            locale: "fr"
        }

    }

};



/* =========================================
   TRANSLATION DICTIONARY
========================================= */

window.TRANSLATIONS = {


    /* =====================================
       ARABIC
    ====================================== */

    ar: {

        meta: {

            title:
                "نور القرآن | محمد بن أحمد باه",

            description:
                "الموقع الرسمي للتعريف بكتاب نور القرآن للمؤلف محمد بن أحمد باه. استمع إلى التسجيلات الصوتية، واطّلع على صفحات مختارة، واحصل على نسختك."

        },


        site: {

            title:
                "نور القرآن"

        },


        language: {

            switcherLabel:
                "اختيار اللغة"

        },


        accessibility: {

            skipToContent:
                "انتقل إلى المحتوى الرئيسي",

            nextSection:
                "انتقل إلى القسم التالي"

           scrollToTop:
               "العودة إلى أعلى الصفحة",

           scrollToBottom:
               "الانتقال إلى أسفل الصفحة",

        },


        hero: {

            kicker:
                "الموقع الرسمي للتعريف بالكتاب",

            title:
                "نور القرآن",

            author:
                "تأليف محمد بن أحمد باه",

            description:
                "رحلة في التدبر والتأمل في كتاب الله، مع مكتبة صوتية كاملة وصفحات مختارة من الكتاب.",

            previewButton:
                "معاينة الكتاب",

            listenButton:
                "استمع إلى التسجيلات",

            purchaseButton:
                "احصل على نسختك",

            discover:
                "اكتشف الكتاب"

        },


        about: {

            eyebrow:
                "بين يدي القارئ",

            title:
                "عن الكتاب",

            lead:
                "نور القرآن كتاب يدعو القارئ إلى الاقتراب من معاني القرآن الكريم من خلال التدبر والتأمل.",

            paragraphOne:
                "يقدّم الكتاب محتواه بأسلوب يسعى إلى الجمع بين وضوح العبارة وعمق المعنى، مع المحافظة على قيمة الكتاب ومحتواه الكامل.",

            paragraphTwo:
                "يعرض هذا الموقع صفحات مختارة فقط، ويوفّر التسجيلات الصوتية الرسمية لمن يرغب في الاستماع إلى محتوى الكتاب.",

            quote:
                "دعوة إلى صحبة القرآن بالتدبر والفهم والعمل."

        },


        statistics: {

            sectionLabel:
                "معلومات عن الكتاب",

            audio:
                "تسجيلاً صوتياً",

            pages:
                "صفحة للمعاينة",

            languages:
                "لغات",

            officialValue:
                "رسمية",

            collection:
                "المكتبة الصوتية"

        },


        preview: {

            eyebrow:
                "صفحات مختارة",

            title:
                "معاينة الكتاب",

            description:
                "اطّلع على مجموعة محدودة من الصفحات للتعرّف على أسلوب الكتاب، مع المحافظة على محتوى النسخة الكاملة.",

            cover:
                "الغلاف الأمامي",

            introduction:
                "المقدمة",

            samplePage:
                "صفحة مختارة",

            authorNote:
                "كلمة المؤلف",

            backCover:
                "الغلاف الخلفي"

        },


        audio: {

            eyebrow:
                "استمع إلى الكتاب",

            title:
                "المكتبة الصوتية الكاملة",

            description:
                "استمع إلى التسجيلات الصوتية الرسمية لكتاب نور القرآن.",

            recordings:
                "تسجيلاً",

            completeValue:
                "كاملة",

            completeCollection:
                "المجموعة الصوتية",

            officialValue:
                "رسمية",

            officialRecordings:
                "التسجيلات",

            nowPlaying:
                "يتم الآن تشغيل",

            noTrackSelected:
                "لم يتم اختيار أي تسجيل",

            unsupported:
                "متصفحك لا يدعم تشغيل الملفات الصوتية.",

            previous:
                "السابق",

            next:
                "التالي",

           rewind10:
                "الرجوع 10 ثوانٍ",

           forward10:
                "التقديم 10 ثوانٍ",

           download:
                  "تنزيل",

           downloadCurrent:
                  "تنزيل هذا التسجيل",

           downloadAll:
                  "تنزيل المكتبة الصوتية كاملة",

           downloadTrack:
                  "تنزيل التسجيل رقم {number}",

           playbackMode:
                  "وضع التشغيل",

           playbackModeLabel:
                  "اختيار وضع التشغيل",

           playbackRepeat:
                  "تكرار التسجيل",

           playbackUp:
                  "تشغيل للأعلى",

           playbackDown:
                  "تشغيل للأسفل",

            playbackShuffle:
                "تشغيل عشوائي",

            searchLabel:
                "ابحث في التسجيلات",

            searchPlaceholder:
                "ابحث برقم التسجيل...",

            hideLibrary:
                "إخفاء قائمة التسجيلات",

            showLibrary:
                "إظهار قائمة التسجيلات",

            noResults:
                "لم يتم العثور على تسجيل مطابق.",

            recording:
                "التسجيل",

            recordingNumber:
                "التسجيل رقم {number}",

            officialRecording:
                "تسجيل صوتي رسمي",

            play:
                "تشغيل",

            pause:
                "إيقاف مؤقت",

            playTrack:
                "تشغيل التسجيل رقم {number}",

            pauseTrack:
                "إيقاف التسجيل رقم {number} مؤقتاً",

            loading:
                "جارٍ تحميل التسجيل...",

            unavailable:
                "هذا التسجيل غير متاح حالياً.",

            libraryExpanded:
                "تم إظهار قائمة التسجيلات.",

            libraryCollapsed:
                "تم إخفاء قائمة التسجيلات."

        },


        author: {

            eyebrow:
                "صاحب الكتاب",

            title:
                "عن المؤلف",

            name:
                "محمد بن أحمد باه",

            description:
                "مؤلف كتاب نور القرآن. يقدّم هذا الموقع تعريفاً بعمله، وصفحات مختارة من الكتاب، والتسجيلات الصوتية الرسمية المصاحبة له.",

            contactButton:
                "تواصل مع المؤلف"

        },


        purchase: {

            eyebrow:
                "اقتَنِ الكتاب",

            title:
                "احصل على نسختك",

            description:
                "للحصول على نسخة من كتاب نور القرآن، استخدم رابط كتالوج واتساب الرسمي عند إضافته.",

            whatsappButton:
                "كتالوج واتساب",

            listenButton:
                "استمع قبل الشراء",

            unavailableMessage:
                "سيتم إضافة رابط كتالوج واتساب قريباً."

        },


        telegram: {

            eyebrow:
                "انضم إلى المجتمع",

            title:
                "قناة نور القرآن على تيليجرام",

            description:
                "انضم إلى القناة الرسمية للحصول على التسجيلات والتحديثات المتعلقة بالكتاب.",

            joinButton:
                "انضم إلى القناة"

        },


        footer: {

            author:
                "تأليف محمد بن أحمد باه",

            navigationLabel:
                "روابط الموقع",

            about:
                "عن الكتاب",

            preview:
                "المعاينة",

            audio:
                "المكتبة الصوتية",

            purchase:
                "الحصول على الكتاب",

            telegram:
                "تيليجرام",

            rights:
                "جميع الحقوق محفوظة."

        },


        lightbox: {

            title:
                "معاينة صورة الصفحة",

            close:
                "إغلاق الصورة",

            previous:
                "الصورة السابقة",

            next:
                "الصورة التالية",

            imageNumber:
                "الصورة {current} من {total}"

        },


        images: {

            coverAlt:
                "الغلاف الأمامي لكتاب نور القرآن",

            introductionAlt:
                "صفحة مقدمة كتاب نور القرآن",

            sampleOneAlt:
                "صفحة مختارة رقم 1 من كتاب نور القرآن",

            sampleTwoAlt:
                "صفحة مختارة رقم 2 من كتاب نور القرآن",

            sampleThreeAlt:
                "صفحة مختارة رقم 3 من كتاب نور القرآن",

            sampleFourAlt:
                "صفحة مختارة رقم 4 من كتاب نور القرآن",

            sampleFiveAlt:
                "صفحة مختارة رقم 5 من كتاب نور القرآن",

            sampleSixAlt:
                "صفحة مختارة رقم 6 من كتاب نور القرآن",

            sampleSevenAlt:
                "صفحة مختارة رقم 7 من كتاب نور القرآن",

            sampleEightAlt:
                "صفحة مختارة رقم 8 من كتاب نور القرآن",

            sampleNineAlt:
                "صفحة مختارة رقم 9 من كتاب نور القرآن",

            sampleTenAlt:
                "صفحة مختارة رقم 10 من كتاب نور القرآن",

            authorNoteAlt:
                "كلمة المؤلف في نهاية كتاب نور القرآن",

            backCoverAlt:
                "الغلاف الخلفي لكتاب نور القرآن",

            audioCoverAlt:
                "غلاف كتاب نور القرآن"

        }

    },



    /* =====================================
       ENGLISH
    ====================================== */

    en: {

        meta: {

            title:
                "Noor Al-Quran | Muhammad bin Ahmad Bah",

            description:
                "The official presentation website for Noor Al-Quran by Muhammad bin Ahmad Bah. Listen to the complete audio collection, preview selected pages, and obtain your copy."

        },


        site: {

            title:
                "Noor Al-Quran"

        },


        language: {

            switcherLabel:
                "Choose a language"

        },


        accessibility: {

            skipToContent:
                "Skip to the main content",

            nextSection:
                "Go to the next section"

           scrollToTop:
                "Go to the top of the page",

           scrollToBottom:
                "Go to the bottom of the page",       
        },


        hero: {

            kicker:
                "Official Book Presentation Website",

            title:
                "Noor Al-Quran",

            author:
                "Written by Muhammad bin Ahmad Bah",

            description:
                "A journey of reflection and contemplation through the Book of Allah, accompanied by a complete audio library and selected pages from the book.",

            previewButton:
                "Preview the Book",

            listenButton:
                "Listen to the Recordings",

            purchaseButton:
                "Get Your Copy",

            discover:
                "Discover the Book"

        },


        about: {

            eyebrow:
                "For the Reader",

            title:
                "About the Book",

            lead:
                "Noor Al-Quran invites the reader to draw closer to the meanings of the Holy Qur'an through reflection and contemplation.",

            paragraphOne:
                "The book presents its content in a style that seeks to combine clarity of expression with depth of meaning, while preserving the value of the complete publication.",

            paragraphTwo:
                "This website displays only selected pages and provides the official audio recordings for those who wish to listen to the book's content.",

            quote:
                "An invitation to accompany the Qur'an through reflection, understanding, and action."

        },


        statistics: {

            sectionLabel:
                "Book information",

            audio:
                "Audio Recordings",

            pages:
                "Preview Pages",

            languages:
                "Languages",

            officialValue:
                "Official",

            collection:
                "Audio Library"

        },


        preview: {

            eyebrow:
                "Selected Pages",

            title:
                "Book Preview",

            description:
                "Explore a limited selection of pages to discover the style of the book while preserving the content of the complete edition.",

            cover:
                "Front Cover",

            introduction:
                "Introduction",

            samplePage:
                "Selected Page",

            authorNote:
                "Author's Note",

            backCover:
                "Back Cover"

        },


        audio: {

            eyebrow:
                "Listen to the Book",

            title:
                "Complete Audio Library",

            description:
                "Listen to the official audio recordings of Noor Al-Quran.",

            recordings:
                "Recordings",

            completeValue:
                "Complete",

            completeCollection:
                "Audio Collection",

            officialValue:
                "Official",

            officialRecordings:
                "Recordings",

            nowPlaying:
                "Now Playing",

            noTrackSelected:
                "No recording selected",

            unsupported:
                "Your browser does not support audio playback.",

            previous:
                "Previous",

            next:
                "Next",

           rewind10:
                "Go back 10 seconds",

           forward10:
                "Go forward 10 seconds",

           download:
                "Download",

           downloadCurrent:
                "Download this recording",

           downloadAll:
                "Download the full audio library",

           downloadTrack:
                "Download recording {number}",

           playbackMode:
                "Playback mode",

           playbackModeLabel:
                "Choose playback mode",

           playbackRepeat:
                "Repeat",

           playbackUp:
                "Play upwards",

           playbackDown:
                "Play downwards",

           playbackShuffle:
                "Shuffle",
           
            searchLabel:
                "Search the recordings",

            searchPlaceholder:
                "Search by recording number...",

            hideLibrary:
                "Hide Recording List",

            showLibrary:
                "Show Recording List",

            noResults:
                "No matching recording was found.",

            recording:
                "Recording",

            recordingNumber:
                "Recording {number}",

            officialRecording:
                "Official audio recording",

            play:
                "Play",

            pause:
                "Pause",

            playTrack:
                "Play recording {number}",

            pauseTrack:
                "Pause recording {number}",

            loading:
                "Loading recording...",

            unavailable:
                "This recording is currently unavailable.",

            libraryExpanded:
                "The recording list is now visible.",

            libraryCollapsed:
                "The recording list is now hidden."

        },


        author: {

            eyebrow:
                "The Author",

            title:
                "About the Author",

            name:
                "Muhammad bin Ahmad Bah",

            description:
                "Author of Noor Al-Quran. This website introduces his work and presents selected pages from the book together with its official audio recordings.",

            contactButton:
                "Contact the Author"

        },


        purchase: {

            eyebrow:
                "Obtain the Book",

            title:
                "Get Your Copy",

            description:
                "To obtain a copy of Noor Al-Quran, use the official WhatsApp catalogue link when it becomes available.",

            whatsappButton:
                "WhatsApp Catalogue",

            listenButton:
                "Listen Before Purchasing",

            unavailableMessage:
                "The WhatsApp catalogue link will be added soon."

        },


        telegram: {

            eyebrow:
                "Join the Community",

            title:
                "Noor Al-Quran Telegram Channel",

            description:
                "Join the official channel for recordings, updates, and information about the book.",

            joinButton:
                "Join the Channel"

        },


        footer: {

            author:
                "Written by Muhammad bin Ahmad Bah",

            navigationLabel:
                "Website links",

            about:
                "About the Book",

            preview:
                "Preview",

            audio:
                "Audio Library",

            purchase:
                "Get the Book",

            telegram:
                "Telegram",

            rights:
                "All rights reserved."

        },


        lightbox: {

            title:
                "Page Image Preview",

            close:
                "Close image",

            previous:
                "Previous image",

            next:
                "Next image",

            imageNumber:
                "Image {current} of {total}"

        },


        images: {

            coverAlt:
                "Front cover of Noor Al-Quran",

            introductionAlt:
                "Introduction page of Noor Al-Quran",

            sampleOneAlt:
                "Selected page 1 from Noor Al-Quran",

            sampleTwoAlt:
                "Selected page 2 from Noor Al-Quran",

            sampleThreeAlt:
                "Selected page 3 from Noor Al-Quran",

            sampleFourAlt:
                "Selected page 4 from Noor Al-Quran",

            sampleFiveAlt:
                "Selected page 5 from Noor Al-Quran",

            sampleSixAlt:
                "Selected page 6 from Noor Al-Quran",

            sampleSevenAlt:
                "Selected page 7 from Noor Al-Quran",

            sampleEightAlt:
                "Selected page 8 from Noor Al-Quran",

            sampleNineAlt:
                "Selected page 9 from Noor Al-Quran",

            sampleTenAlt:
                "Selected page 10 from Noor Al-Quran",

            authorNoteAlt:
                "The author's concluding note in Noor Al-Quran",

            backCoverAlt:
                "Back cover of Noor Al-Quran",

            audioCoverAlt:
                "Cover of Noor Al-Quran"

        }

    },



    /* =====================================
       FRENCH
    ====================================== */

    fr: {

        meta: {

            title:
                "Noor Al-Quran | Muhammad bin Ahmad Bah",

            description:
                "Le site officiel de présentation du livre Noor Al-Quran de Muhammad bin Ahmad Bah. Écoutez la collection audio complète, découvrez des pages sélectionnées et obtenez votre exemplaire."

        },


        site: {

            title:
                "Noor Al-Quran"

        },


        language: {

            switcherLabel:
                "Choisir une langue"

        },


        accessibility: {

            skipToContent:
                "Aller au contenu principal",

            nextSection:
                "Aller à la section suivante"

           scrollToTop:
                "Aller en haut de la page",

           scrollToBottom:
                "Aller en bas de la page",
        },


        hero: {

            kicker:
                "Site officiel de présentation du livre",

            title:
                "Noor Al-Quran",

            author:
                "Écrit par Muhammad bin Ahmad Bah",

            description:
                "Un voyage de réflexion et de méditation à travers le Livre d'Allah, accompagné d'une bibliothèque audio complète et de pages sélectionnées du livre.",

            previewButton:
                "Découvrir le livre",

            listenButton:
                "Écouter les enregistrements",

            purchaseButton:
                "Obtenir votre exemplaire",

            discover:
                "Découvrir le livre"

        },


        about: {

            eyebrow:
                "Pour le lecteur",

            title:
                "À propos du livre",

            lead:
                "Noor Al-Quran invite le lecteur à se rapprocher des significations du Saint Coran par la réflexion et la méditation.",

            paragraphOne:
                "Le livre présente son contenu dans un style qui cherche à associer la clarté de l'expression à la profondeur du sens, tout en préservant la valeur de l'édition complète.",

            paragraphTwo:
                "Ce site présente uniquement des pages sélectionnées et met à disposition les enregistrements audio officiels pour les personnes souhaitant écouter le contenu du livre.",

            quote:
                "Une invitation à accompagner le Coran par la réflexion, la compréhension et l'action."

        },


        statistics: {

            sectionLabel:
                "Informations sur le livre",

            audio:
                "Enregistrements audio",

            pages:
                "Pages d'aperçu",

            languages:
                "Langues",

            officialValue:
                "Officielle",

            collection:
                "Bibliothèque audio"

        },


        preview: {

            eyebrow:
                "Pages sélectionnées",

            title:
                "Aperçu du livre",

            description:
                "Découvrez une sélection limitée de pages afin de connaître le style du livre tout en préservant le contenu de l'édition complète.",

            cover:
                "Couverture avant",

            introduction:
                "Introduction",

            samplePage:
                "Page sélectionnée",

            authorNote:
                "Note de l'auteur",

            backCover:
                "Quatrième de couverture"

        },


        audio: {

            eyebrow:
                "Écouter le livre",

            title:
                "Bibliothèque audio complète",

            description:
                "Écoutez les enregistrements audio officiels de Noor Al-Quran.",

            recordings:
                "Enregistrements",

            completeValue:
                "Complète",

            completeCollection:
                "Collection audio",

            officialValue:
                "Officiels",

            officialRecordings:
                "Enregistrements",

            nowPlaying:
                "Lecture en cours",

            noTrackSelected:
                "Aucun enregistrement sélectionné",

            unsupported:
                "Votre navigateur ne prend pas en charge la lecture audio.",

            previous:
                "Précédent",

            next:
                "Suivant",

           rewind10:
                "Reculer de 10 secondes",

           forward10:
                "Avancer de 10 secondes",

           download:
                "Télécharger",

           downloadCurrent:
                "Télécharger cet enregistrement",

           downloadAll:
                "Télécharger toute la bibliothèque audio",

           downloadTrack:
                "Télécharger l’enregistrement {number}",

           playbackMode:
                "Mode de lecture",

           playbackModeLabel:
                "Choisir le mode de lecture",

           playbackRepeat:
                "Répéter",

           playbackUp:
                "Lire vers le haut",

            searchLabel:
                "Rechercher dans les enregistrements",

           playbackDown:
                "Lire vers le bas",

           playbackShuffle:
                "Lecture aléatoire",

            searchPlaceholder:
                "Rechercher par numéro d'enregistrement...",

            hideLibrary:
                "Masquer la liste des enregistrements",

            showLibrary:
                "Afficher la liste des enregistrements",

            noResults:
                "Aucun enregistrement correspondant n'a été trouvé.",

            recording:
                "Enregistrement",

            recordingNumber:
                "Enregistrement {number}",

            officialRecording:
                "Enregistrement audio officiel",

            play:
                "Lire",

            pause:
                "Pause",

            playTrack:
                "Lire l'enregistrement {number}",

            pauseTrack:
                "Mettre l'enregistrement {number} en pause",

            loading:
                "Chargement de l'enregistrement...",

            unavailable:
                "Cet enregistrement est actuellement indisponible.",

            libraryExpanded:
                "La liste des enregistrements est maintenant visible.",

            libraryCollapsed:
                "La liste des enregistrements est maintenant masquée."

        },


        author: {

            eyebrow:
                "L'auteur",

            title:
                "À propos de l'auteur",

            name:
                "Muhammad bin Ahmad Bah",

            description:
                "Auteur de Noor Al-Quran. Ce site présente son travail, des pages sélectionnées du livre ainsi que les enregistrements audio officiels qui l'accompagnent.",

            contactButton:
                "Contacter l'auteur"

        },


        purchase: {

            eyebrow:
                "Obtenir le livre",

            title:
                "Obtenez votre exemplaire",

            description:
                "Pour obtenir un exemplaire de Noor Al-Quran, utilisez le lien officiel du catalogue WhatsApp lorsqu'il sera disponible.",

            whatsappButton:
                "Catalogue WhatsApp",

            listenButton:
                "Écouter avant l'achat",

            unavailableMessage:
                "Le lien du catalogue WhatsApp sera bientôt ajouté."

        },


        telegram: {

            eyebrow:
                "Rejoindre la communauté",

            title:
                "Chaîne Telegram de Noor Al-Quran",

            description:
                "Rejoignez la chaîne officielle pour recevoir les enregistrements, les mises à jour et les informations concernant le livre.",

            joinButton:
                "Rejoindre la chaîne"

        },


        footer: {

            author:
                "Écrit par Muhammad bin Ahmad Bah",

            navigationLabel:
                "Liens du site",

            about:
                "À propos du livre",

            preview:
                "Aperçu",

            audio:
                "Bibliothèque audio",

            purchase:
                "Obtenir le livre",

            telegram:
                "Telegram",

            rights:
                "Tous droits réservés."

        },


        lightbox: {

            title:
                "Aperçu de l'image de la page",

            close:
                "Fermer l'image",

            previous:
                "Image précédente",

            next:
                "Image suivante",

            imageNumber:
                "Image {current} sur {total}"

        },


        images: {

            coverAlt:
                "Couverture avant de Noor Al-Quran",

            introductionAlt:
                "Page d'introduction de Noor Al-Quran",

            sampleOneAlt:
                "Page sélectionnée numéro 1 de Noor Al-Quran",

            sampleTwoAlt:
                "Page sélectionnée numéro 2 de Noor Al-Quran",

            sampleThreeAlt:
                "Page sélectionnée numéro 3 de Noor Al-Quran",

            sampleFourAlt:
                "Page sélectionnée numéro 4 de Noor Al-Quran",

            sampleFiveAlt:
                "Page sélectionnée numéro 5 de Noor Al-Quran",

            sampleSixAlt:
                "Page sélectionnée numéro 6 de Noor Al-Quran",

            sampleSevenAlt:
                "Page sélectionnée numéro 7 de Noor Al-Quran",

            sampleEightAlt:
                "Page sélectionnée numéro 8 de Noor Al-Quran",

            sampleNineAlt:
                "Page sélectionnée numéro 9 de Noor Al-Quran",

            sampleTenAlt:
                "Page sélectionnée numéro 10 de Noor Al-Quran",

            authorNoteAlt:
                "Note finale de l'auteur dans Noor Al-Quran",

            backCoverAlt:
                "Quatrième de couverture de Noor Al-Quran",

            audioCoverAlt:
                "Couverture de Noor Al-Quran"

        }

    }

};
