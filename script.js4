/* =========================================
   NOOR AL-QURAN
   Main Website JavaScript

   Features:
   - Arabic, English and French
   - Arabic as the default language
   - Remembers the visitor's language
   - Automatic RTL/LTR switching
   - Dynamic translation dictionary
   - 56-track audio library
   - Audio search
   - Previous and next controls
   - Automatic next-track playback
   - Collapsible audio library
   - Image gallery lightbox
   - Keyboard accessibility
   - Future WhatsApp and contact links
========================================= */

"use strict";


/* =========================================
   WEBSITE CONFIGURATION
========================================= */

const TOTAL_AUDIO = 56;


/*
   Audio files must be stored as:

   audio/1.mp3
   audio/2.mp3
   audio/3.mp3
   ...
   audio/56.mp3
*/

const AUDIO_FOLDER = "audio";


/*
   Add the official links here when your
   friend provides them.

   Examples:

   whatsappCatalogue:
   "https://wa.me/c/XXXXXXXXXXXX"

   authorContact:
   "https://t.me/username"
*/

const EXTERNAL_LINKS = {
    whatsappCatalogue: "",
    authorContact: ""
};


/* =========================================
   GLOBAL STATE
========================================= */

const languageConfig = window.LANGUAGE_CONFIG || {
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

const translations = window.TRANSLATIONS || {};

let currentLanguage = languageConfig.defaultLanguage;

let selectedTrackNumber = null;

let isAudioLibraryExpanded = true;

let lightboxCurrentIndex = 0;

let previouslyFocusedElement = null;


/* =========================================
   DOM ELEMENTS
========================================= */

const documentElement = document.documentElement;

const languageButtons =
    document.querySelectorAll(".language-button");

const mainAudio =
    document.getElementById("mainAudio");

const currentTrack =
    document.getElementById("currentTrack");

const audioContainer =
    document.getElementById("audioContainer");

const audioSearch =
    document.getElementById("audioSearch");

const audioNoResults =
    document.getElementById("audioNoResults");

const previousTrackButton =
    document.getElementById("previousTrackButton");

const nextTrackButton =
    document.getElementById("nextTrackButton");

const audioLibraryToggle =
    document.getElementById("audioLibraryToggle");

const audioLibraryPanel =
    document.getElementById("audioLibraryPanel");

const currentYear =
    document.getElementById("currentYear");

const whatsappButton =
    document.getElementById("whatsappButton");

const contactButton =
    document.getElementById("contactButton");

const galleryButtons =
    Array.from(
        document.querySelectorAll(".gallery-button")
    );

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const closeLightboxButton =
    document.getElementById("closeLightbox");

const previousImageButton =
    document.getElementById("previousImageButton");

const nextImageButton =
    document.getElementById("nextImageButton");


/* =========================================
   LIVE ANNOUNCEMENT REGION
========================================= */

const liveRegion = document.createElement("div");

liveRegion.className = "visually-hidden";

liveRegion.setAttribute("aria-live", "polite");

liveRegion.setAttribute("aria-atomic", "true");

document.body.appendChild(liveRegion);


/* =========================================
   TRANSLATION UTILITIES
========================================= */

/*
   Find a translation using a dotted key.

   Example:

   getTranslation("hero.title")
*/

function getTranslation(
    key,
    replacements = {},
    language = currentLanguage
) {
    const languageDictionary =
        translations[language] ||
        translations[languageConfig.defaultLanguage] ||
        {};

    const defaultDictionary =
        translations[languageConfig.defaultLanguage] ||
        {};

    const keys = key.split(".");

    let translatedValue = languageDictionary;

    for (const currentKey of keys) {
        if (
            translatedValue &&
            Object.prototype.hasOwnProperty.call(
                translatedValue,
                currentKey
            )
        ) {
            translatedValue =
                translatedValue[currentKey];
        } else {
            translatedValue = undefined;
            break;
        }
    }

    /*
       Fall back to Arabic when a translation
       is missing from English or French.
    */

    if (typeof translatedValue !== "string") {
        translatedValue = defaultDictionary;

        for (const currentKey of keys) {
            if (
                translatedValue &&
                Object.prototype.hasOwnProperty.call(
                    translatedValue,
                    currentKey
                )
            ) {
                translatedValue =
                    translatedValue[currentKey];
            } else {
                translatedValue = key;
                break;
            }
        }
    }

    if (typeof translatedValue !== "string") {
        translatedValue = key;
    }

    /*
       Replace values such as:

       {number}
       {current}
       {total}
    */

    Object.entries(replacements).forEach(
        ([replacementKey, replacementValue]) => {
            translatedValue =
                translatedValue.replaceAll(
                    `{${replacementKey}}`,
                    String(replacementValue)
                );
        }
    );

    return translatedValue;
}


/*
   Format numbers according to the selected
   language.
*/

function formatNumber(number) {
    const languageInformation =
        languageConfig.languages[currentLanguage];

    const locale =
        languageInformation?.locale ||
        currentLanguage;

    try {
        return new Intl.NumberFormat(locale).format(number);
    } catch (error) {
        return String(number);
    }
}


/*
   Announce a message to screen-reader users.
*/

function announce(message) {
    liveRegion.textContent = "";

    window.setTimeout(() => {
        liveRegion.textContent = message;
    }, 50);
}


/* =========================================
   SAVED LANGUAGE
========================================= */

function getSavedLanguage() {
    try {
        const savedLanguage =
            localStorage.getItem(
                languageConfig.storageKey
            );

        if (
            savedLanguage &&
            languageConfig.supportedLanguages.includes(
                savedLanguage
            )
        ) {
            return savedLanguage;
        }
    } catch (error) {
        console.warn(
            "The saved language could not be read.",
            error
        );
    }

    /*
       Arabic is always used on the first visit.
    */

    return languageConfig.defaultLanguage;
}


function saveLanguage(language) {
    try {
        localStorage.setItem(
            languageConfig.storageKey,
            language
        );
    } catch (error) {
        console.warn(
            "The selected language could not be saved.",
            error
        );
    }
}


/* =========================================
   APPLY STATIC TRANSLATIONS
========================================= */

function translateTextContent() {
    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {
            const translationKey =
                element.dataset.i18n;

            element.textContent =
                getTranslation(translationKey);
        });
}


function translatePlaceholders() {
    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach((element) => {
            const translationKey =
                element.dataset.i18nPlaceholder;

            element.setAttribute(
                "placeholder",
                getTranslation(translationKey)
            );
        });
}


function translateAlternativeText() {
    document
        .querySelectorAll("[data-i18n-alt]")
        .forEach((element) => {
            const translationKey =
                element.dataset.i18nAlt;

            element.setAttribute(
                "alt",
                getTranslation(translationKey)
            );
        });
}


function translateAriaLabels() {
    document
        .querySelectorAll(
            "[data-i18n-aria-label]"
        )
        .forEach((element) => {
            const translationKey =
                element.dataset.i18nAriaLabel;

            element.setAttribute(
                "aria-label",
                getTranslation(translationKey)
            );
        });
}


function translateMetadata() {
    document.title =
        getTranslation("meta.title");

    const descriptionElement =
        document.querySelector(
            'meta[name="description"]'
        );

    const openGraphTitle =
        document.querySelector(
            'meta[property="og:title"]'
        );

    const openGraphDescription =
        document.querySelector(
            'meta[property="og:description"]'
        );

    if (descriptionElement) {
        descriptionElement.setAttribute(
            "content",
            getTranslation("meta.description")
        );
    }

    if (openGraphTitle) {
        openGraphTitle.setAttribute(
            "content",
            getTranslation("meta.title")
        );
    }

    if (openGraphDescription) {
        openGraphDescription.setAttribute(
            "content",
            getTranslation("meta.description")
        );
    }
}


/* =========================================
   LANGUAGE BUTTONS
========================================= */

function updateLanguageButtons() {
    languageButtons.forEach((button) => {
        const buttonLanguage =
            button.dataset.language;

        const isCurrentLanguage =
            buttonLanguage === currentLanguage;

        /*
           Hide the active language.

           Arabic:
           French + English visible

           English:
           Arabic + French visible

           French:
           Arabic + English visible
        */

        button.hidden = isCurrentLanguage;

        button.setAttribute(
            "aria-pressed",
            String(isCurrentLanguage)
        );
    });
}


/* =========================================
   APPLY LANGUAGE
========================================= */

function applyLanguage(
    language,
    savePreference = true
) {
    if (
        !languageConfig.supportedLanguages.includes(
            language
        )
    ) {
        language =
            languageConfig.defaultLanguage;
    }

    currentLanguage = language;

    const languageInformation =
        languageConfig.languages[language];

    documentElement.lang = language;

    documentElement.dir =
        languageInformation.direction;

    document.body.dataset.language =
        language;

    translateTextContent();

    translatePlaceholders();

    translateAlternativeText();

    translateAriaLabels();

    translateMetadata();

    updateLanguageButtons();

    /*
       Rebuild generated audio cards so their
       titles change to the selected language.
    */

    createAudioLibrary();

    updateCurrentTrackText();

    updateAudioNavigation();

    updateAudioLibraryToggle();

    updateGalleryAccessibility();

    if (
        lightbox &&
        !lightbox.hidden
    ) {
        updateLightboxImage();
    }

    if (savePreference) {
        saveLanguage(language);
    }
}


/* =========================================
   LANGUAGE EVENTS
========================================= */

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedLanguage =
            button.dataset.language;

        applyLanguage(
            selectedLanguage,
            true
        );
    });
});


/* =========================================
   AUDIO LIBRARY CREATION
========================================= */

function createAudioLibrary() {
    if (!audioContainer) {
        return;
    }

    const currentSearchValue =
        audioSearch?.value || "";

    audioContainer.replaceChildren();

    const fragment =
        document.createDocumentFragment();

    for (
        let trackNumber = 1;
        trackNumber <= TOTAL_AUDIO;
        trackNumber += 1
    ) {
        const card =
            createAudioCard(trackNumber);

        fragment.appendChild(card);
    }

    audioContainer.appendChild(fragment);

    updateAudioCardStates();

    filterAudioLibrary(currentSearchValue);
}


function createAudioCard(trackNumber) {
    const card =
        document.createElement("article");

    card.className = "audio-card";

    card.dataset.trackNumber =
        String(trackNumber);


    const button =
        document.createElement("button");

    button.type = "button";

    button.className = "audio-card-button";


    const playIcon =
        document.createElement("span");

    playIcon.className = "audio-play-icon";

    playIcon.setAttribute(
        "aria-hidden",
        "true"
    );

    playIcon.textContent = "▶";


    const content =
        document.createElement("span");

    content.className =
        "audio-card-content";


    const trackOrder =
        document.createElement("span");

    trackOrder.className =
        "audio-track-number";

    trackOrder.textContent =
        `#${String(trackNumber).padStart(2, "0")}`;


    const title =
        document.createElement("span");

    title.className =
        "audio-card-title";

    title.textContent =
        getTranslation(
            "audio.recordingNumber",
            {
                number:
                    formatNumber(trackNumber)
            }
        );


    const subtitle =
        document.createElement("span");

    subtitle.className =
        "audio-card-subtitle";

    subtitle.textContent =
        getTranslation(
            "audio.officialRecording"
        );


    content.append(
        trackOrder,
        title,
        subtitle
    );

    button.append(
        playIcon,
        content
    );

    button.setAttribute(
        "aria-label",
        getTranslation(
            "audio.playTrack",
            {
                number:
                    formatNumber(trackNumber)
            }
        )
    );

    button.addEventListener("click", () => {
        handleAudioCardClick(trackNumber);
    });

    card.appendChild(button);

    return card;
}


/* =========================================
   AUDIO SELECTION AND PLAYBACK
========================================= */

function handleAudioCardClick(trackNumber) {
    if (!mainAudio) {
        return;
    }

    const sameTrack =
        selectedTrackNumber === trackNumber;

    if (sameTrack && !mainAudio.paused) {
        mainAudio.pause();
        return;
    }

    if (sameTrack) {
        playMainAudio();
        return;
    }

    selectTrack(trackNumber, true);
}


function selectTrack(
    trackNumber,
    autoplay = false
) {
    if (
        !mainAudio ||
        trackNumber < 1 ||
        trackNumber > TOTAL_AUDIO
    ) {
        return;
    }

    selectedTrackNumber =
        trackNumber;

    mainAudio.src =
        `${AUDIO_FOLDER}/${trackNumber}.mp3`;

    mainAudio.load();

    updateCurrentTrackText();

    updateAudioNavigation();

    updateAudioCardStates();

    if (autoplay) {
        playMainAudio();
    }
}


function playMainAudio() {
    if (
        !mainAudio ||
        selectedTrackNumber === null
    ) {
        return;
    }

    const playPromise =
        mainAudio.play();

    if (
        playPromise &&
        typeof playPromise.catch === "function"
    ) {
        playPromise.catch((error) => {
            /*
               Browsers may reject playback when
               it was not initiated directly by
               the visitor.
            */

            if (
                error.name !== "AbortError" &&
                error.name !== "NotAllowedError"
            ) {
                console.warn(
                    "Audio playback failed.",
                    error
                );
            }

            updateAudioCardStates();
        });
    }
}


/* =========================================
   AUDIO PLAYER TEXT
========================================= */

function updateCurrentTrackText() {
    if (!currentTrack) {
        return;
    }

    if (selectedTrackNumber === null) {
        currentTrack.textContent =
            getTranslation(
                "audio.noTrackSelected"
            );

        return;
    }

    currentTrack.textContent =
        getTranslation(
            "audio.recordingNumber",
            {
                number:
                    formatNumber(
                        selectedTrackNumber
                    )
            }
        );
}


/* =========================================
   AUDIO CARD STATES
========================================= */

function updateAudioCardStates() {
    const audioCards =
        document.querySelectorAll(
            ".audio-card"
        );

    const isPlaying =
        mainAudio &&
        !mainAudio.paused &&
        !mainAudio.ended;

    audioCards.forEach((card) => {
        const trackNumber =
            Number(
                card.dataset.trackNumber
            );

        const isSelected =
            trackNumber ===
            selectedTrackNumber;

        const cardIsPlaying =
            isSelected && isPlaying;

        card.classList.toggle(
            "is-active",
            isSelected
        );

        card.classList.toggle(
            "playing",
            cardIsPlaying
        );

        const button =
            card.querySelector(
                ".audio-card-button"
            );

        const icon =
            card.querySelector(
                ".audio-play-icon"
            );

        if (icon) {
            icon.textContent =
                cardIsPlaying
                    ? "❚❚"
                    : "▶";
        }

        if (button) {
            const ariaKey =
                cardIsPlaying
                    ? "audio.pauseTrack"
                    : "audio.playTrack";

            button.setAttribute(
                "aria-label",
                getTranslation(
                    ariaKey,
                    {
                        number:
                            formatNumber(
                                trackNumber
                            )
                    }
                )
            );
        }
    });
}


/* =========================================
   PREVIOUS AND NEXT AUDIO
========================================= */

function updateAudioNavigation() {
    if (
        !previousTrackButton ||
        !nextTrackButton
    ) {
        return;
    }

    if (selectedTrackNumber === null) {
        previousTrackButton.disabled = true;
        nextTrackButton.disabled = true;
        return;
    }

    previousTrackButton.disabled =
        selectedTrackNumber <= 1;

    nextTrackButton.disabled =
        selectedTrackNumber >= TOTAL_AUDIO;
}


function playPreviousTrack() {
    if (
        selectedTrackNumber === null ||
        selectedTrackNumber <= 1
    ) {
        return;
    }

    selectTrack(
        selectedTrackNumber - 1,
        true
    );
}


function playNextTrack() {
    if (selectedTrackNumber === null) {
        selectTrack(1, true);
        return;
    }

    if (
        selectedTrackNumber >= TOTAL_AUDIO
    ) {
        return;
    }

    selectTrack(
        selectedTrackNumber + 1,
        true
    );
}


if (previousTrackButton) {
    previousTrackButton.addEventListener(
        "click",
        playPreviousTrack
    );
}


if (nextTrackButton) {
    nextTrackButton.addEventListener(
        "click",
        playNextTrack
    );
}


/* =========================================
   MAIN AUDIO EVENTS
========================================= */

if (mainAudio) {
    mainAudio.addEventListener(
        "play",
        () => {
            updateAudioCardStates();
        }
    );

    mainAudio.addEventListener(
        "pause",
        () => {
            updateAudioCardStates();
        }
    );

    mainAudio.addEventListener(
        "ended",
        () => {
            updateAudioCardStates();

            /*
               Automatically play the next track.
            */

            if (
                selectedTrackNumber !== null &&
                selectedTrackNumber < TOTAL_AUDIO
            ) {
                playNextTrack();
            }
        }
    );

    mainAudio.addEventListener(
        "error",
        () => {
            if (
                selectedTrackNumber === null
            ) {
                return;
            }

            currentTrack.textContent =
                getTranslation(
                    "audio.unavailable"
                );

            updateAudioCardStates();

            announce(
                getTranslation(
                    "audio.unavailable"
                )
            );
        }
    );
}


/* =========================================
   AUDIO SEARCH
========================================= */

function filterAudioLibrary(searchValue = "") {
    const normalizedSearch =
        searchValue
            .trim()
            .toLocaleLowerCase();

    const cards =
        document.querySelectorAll(
            ".audio-card"
        );

    let visibleCards = 0;

    cards.forEach((card) => {
        const trackNumber =
            card.dataset.trackNumber || "";

        const searchableText =
            card.textContent
                .toLocaleLowerCase();

        const matchesSearch =
            normalizedSearch === "" ||
            trackNumber.includes(
                normalizedSearch
            ) ||
            searchableText.includes(
                normalizedSearch
            );

        card.hidden = !matchesSearch;

        if (matchesSearch) {
            visibleCards += 1;
        }
    });

    if (audioNoResults) {
        audioNoResults.hidden =
            visibleCards !== 0;
    }
}


if (audioSearch) {
    audioSearch.addEventListener(
        "input",
        (event) => {
            filterAudioLibrary(
                event.target.value
            );
        }
    );
}


/* =========================================
   COLLAPSIBLE AUDIO LIBRARY
========================================= */

function updateAudioLibraryToggle() {
    if (
        !audioLibraryToggle ||
        !audioLibraryPanel
    ) {
        return;
    }

    audioLibraryPanel.hidden =
        !isAudioLibraryExpanded;

    audioLibraryToggle.setAttribute(
        "aria-expanded",
        String(isAudioLibraryExpanded)
    );

    const toggleIcon =
        audioLibraryToggle.querySelector(
            ".toggle-icon"
        );

    const toggleText =
        audioLibraryToggle.querySelector(
            ".toggle-text"
        );

    if (toggleIcon) {
        toggleIcon.textContent =
            isAudioLibraryExpanded
                ? "−"
                : "+";
    }

    if (toggleText) {
        toggleText.textContent =
            getTranslation(
                isAudioLibraryExpanded
                    ? "audio.hideLibrary"
                    : "audio.showLibrary"
            );
    }
}


if (audioLibraryToggle) {
    audioLibraryToggle.addEventListener(
        "click",
        () => {
            isAudioLibraryExpanded =
                !isAudioLibraryExpanded;

            updateAudioLibraryToggle();

            announce(
                getTranslation(
                    isAudioLibraryExpanded
                        ? "audio.libraryExpanded"
                        : "audio.libraryCollapsed"
                )
            );
        }
    );
}


/* =========================================
   GALLERY ACCESSIBILITY
========================================= */

function updateGalleryAccessibility() {
    galleryButtons.forEach((button) => {
        const image =
            button.querySelector("img");

        const caption =
            button
                .closest(".gallery-item")
                ?.querySelector(
                    "figcaption"
                )
                ?.textContent
                ?.trim();

        const imageDescription =
            caption ||
            image?.alt ||
            getTranslation(
                "lightbox.title"
            );

        button.setAttribute(
            "aria-label",
            imageDescription
        );
    });
}


/* =========================================
   LIGHTBOX
========================================= */

function openLightbox(index) {
    if (
        !lightbox ||
        galleryButtons.length === 0
    ) {
        return;
    }

    lightboxCurrentIndex = index;

    previouslyFocusedElement =
        document.activeElement;

    updateLightboxImage();

    lightbox.hidden = false;

    document.body.classList.add(
        "lightbox-open"
    );

    closeLightboxButton?.focus();
}


function closeLightbox() {
    if (!lightbox) {
        return;
    }

    lightbox.hidden = true;

    document.body.classList.remove(
        "lightbox-open"
    );

    lightboxImage.removeAttribute("src");

    if (
        previouslyFocusedElement &&
        typeof previouslyFocusedElement.focus ===
            "function"
    ) {
        previouslyFocusedElement.focus();
    }
}


function updateLightboxImage() {
    if (
        !lightboxImage ||
        galleryButtons.length === 0
    ) {
        return;
    }

    const selectedButton =
        galleryButtons[
            lightboxCurrentIndex
        ];

    const selectedImage =
        selectedButton.querySelector("img");

    const selectedFigure =
        selectedButton.closest(
            ".gallery-item"
        );

    const selectedCaption =
        selectedFigure
            ?.querySelector("figcaption")
            ?.textContent
            ?.trim() || "";

    const imagePath =
        selectedButton.dataset.image ||
        selectedImage?.src ||
        "";

    lightboxImage.src = imagePath;

    lightboxImage.alt =
        selectedImage?.alt ||
        selectedCaption;

    const imagePosition =
        getTranslation(
            "lightbox.imageNumber",
            {
                current:
                    formatNumber(
                        lightboxCurrentIndex + 1
                    ),

                total:
                    formatNumber(
                        galleryButtons.length
                    )
            }
        );

    if (lightboxCaption) {
        lightboxCaption.textContent =
            selectedCaption
                ? `${selectedCaption} — ${imagePosition}`
                : imagePosition;
    }
}


function showPreviousImage() {
    lightboxCurrentIndex =
        (
            lightboxCurrentIndex -
            1 +
            galleryButtons.length
        ) %
        galleryButtons.length;

    updateLightboxImage();
}


function showNextImage() {
    lightboxCurrentIndex =
        (
            lightboxCurrentIndex +
            1
        ) %
        galleryButtons.length;

    updateLightboxImage();
}


galleryButtons.forEach(
    (button, index) => {
        button.addEventListener(
            "click",
            () => {
                openLightbox(index);
            }
        );
    }
);


closeLightboxButton?.addEventListener(
    "click",
    closeLightbox
);


previousImageButton?.addEventListener(
    "click",
    showPreviousImage
);


nextImageButton?.addEventListener(
    "click",
    showNextImage
);


lightbox?.addEventListener(
    "click",
    (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    }
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    (event) => {
        if (
            !lightbox ||
            lightbox.hidden
        ) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showPreviousImage();
        }

        if (event.key === "ArrowRight") {
            showNextImage();
        }
    }
);


/* =========================================
   FUTURE EXTERNAL LINKS
========================================= */

function configureExternalLink(
    element,
    link
) {
    if (!element) {
        return;
    }

    if (link && link !== "#") {
        element.href = link;

        element.removeAttribute(
            "aria-disabled"
        );

        element.removeAttribute(
            "data-placeholder-link"
        );

        element.target = "_blank";

        element.rel =
            "noopener noreferrer";

        return;
    }

    element.href = "#";

    element.setAttribute(
        "aria-disabled",
        "true"
    );

    element.dataset.placeholderLink =
        "true";
}


function configureExternalLinks() {
    configureExternalLink(
        whatsappButton,
        EXTERNAL_LINKS.whatsappCatalogue
    );

    configureExternalLink(
        contactButton,
        EXTERNAL_LINKS.authorContact
    );
}


whatsappButton?.addEventListener(
    "click",
    (event) => {
        if (
            whatsappButton.getAttribute(
                "aria-disabled"
            ) === "true"
        ) {
            event.preventDefault();

            const message =
                getTranslation(
                    "purchase.unavailableMessage"
                );

            announce(message);

            window.alert(message);
        }
    }
);


contactButton?.addEventListener(
    "click",
    (event) => {
        if (
            contactButton.getAttribute(
                "aria-disabled"
            ) === "true"
        ) {
            event.preventDefault();
        }
    }
);


/* =========================================
   SMOOTH INTERNAL NAVIGATION
========================================= */

document
    .querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    )
    .forEach((link) => {
        link.addEventListener(
            "click",
            (event) => {
                const targetSelector =
                    link.getAttribute("href");

                const targetElement =
                    document.querySelector(
                        targetSelector
                    );

                if (!targetElement) {
                    return;
                }

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth",

                    block: "start"
                });
            }
        );
    });


/* =========================================
   CURRENT YEAR
========================================= */

function updateCurrentYear() {
    if (currentYear) {
        currentYear.textContent =
            String(
                new Date().getFullYear()
            );
    }
}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

function initializeWebsite() {
    if (
        Object.keys(translations).length === 0
    ) {
        console.error(
            "The translation dictionary was not loaded. Make sure translations.js loads before script.js."
        );

        return;
    }

    const initialLanguage =
        getSavedLanguage();

    configureExternalLinks();

    updateCurrentYear();

    applyLanguage(
        initialLanguage,
        false
    );

    updateAudioLibraryToggle();

    updateGalleryAccessibility();
}


/*
   Both JavaScript files use `defer`, but this
   check also keeps the script safe if its
   loading position is changed later.
*/

if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );
} else {
    initializeWebsite();
}
