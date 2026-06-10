import type { CampsiteConfig } from "../types";

/**
 * Stellplätze Bichlhof — Wohnmobil-/Camperstellplatz am Bauernhof in Leogang (Salzburger Land).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Region-Aufnahmen (Bikepark, Ski, Wandern …) stammen
 * von der eigenen Region-Seite des Platzes und sind nur in der Aktivitäten-/Galerie-Sektion mit
 * region-ehrlichen Captions verwendet. Eigene Platzfotos tragen Hero, Pillars & Camping.
 */
const IMG = "/campsites/camperstellplatz-leogang";

const bichlhof: CampsiteConfig = {
  name: "Stellplätze Bichlhof",
  shortName: "Bichlhof",
  slug: "camperstellplatz-leogang",
  ort: "Leogang",
  region: "Salzburger Land",
  brandKind: "Stellplatz am Bauernhof",
  regionLong: "Region Saalfelden Leogang · Salzburger Land · Österreich",

  theme: "schiefer",
  heroVariant: "left",

  claim: "Wohnmobil-Camping auf der Sonnenseite Leogangs",
  claimEmphasis: "auf der Sonnenseite",
  intro:
    "Mitten in den Bergen, auf der Sonnenseite des Tales: Der Bichlhof ist ein Wohnmobilstellplatz am Bauernhof in Leogang – mit Panoramablick auf die Steinberge, kurzen Wegen ins Ortszentrum und Ruhe ab der ersten Minute.",

  logo: { src: `${IMG}/logo-90629b9a47.png`, alt: "Stellplätze Bichlhof Logo" },

  statement: {
    text: "Steig direkt vor deinem Camper in die Ski – und am Abend leuchten die Steinberge im Alpenglühen.",
    emphasis: "direkt vor deinem Camper",
  },

  pillars: [
    {
      title: "Auf der Sonnenseite",
      text: "Ebene Stellplätze auf der Sonnenseite des Tales – mit Strom- und Wasseranschluss und freiem Blick auf die Leoganger Steinberge.",
      image: { src: `${IMG}/amenity-b54185ee8f.webp`, alt: "Wohnmobile auf dem Stellplatz Bichlhof mit Blick auf die Steinberge" },
    },
    {
      title: "Camping am Bauernhof",
      text: "Übernachten mitten am Hof: frische Milchprodukte und Bio-Eier aus eigener Erzeugung, Tiere im Stall und viel freie Natur ringsum.",
      image: { src: `${IMG}/amenity-d7f35ff7ff.webp`, alt: "Der Bauernhof Bichlhof im Winter vor den Leoganger Steinbergen" },
    },
    {
      title: "Ski-in / Ski-out",
      text: "Im Winter steigst du direkt am Familienlift in die Ski – der „Schantei-Lift“ läuft am Platz vorbei, einmal pro Woche sogar als Nacht-Skilauf.",
      image: { src: `${IMG}/amenity-76584c56c1.webp`, alt: "Winterblick vom Stellplatz Bichlhof über das verschneite Leogang" },
    },
  ],

  usps: [
    "Ski-in / Ski-out am Platz",
    "Strom & Wasser am Stellplatz",
    "Gratis Gästekarte inklusive",
    "Ortszentrum fußläufig in rund 10 Minuten",
    "Hofeigene Milch & Bio-Eier",
  ],

  trust: {
    heading: "Was den Bichlhof besonders macht",
    headingEmphasis: "besonders",
    intro:
      "Ein kleiner, persönlich geführter Stellplatz am Bauernhof: sonnige Lage, Ski-in/Ski-out im Winter, Wander- und Bikewege im Sommer – und für Kinder Trampolin, Rutsche und Tiere im Stall.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-e03d33f19e.webp`, alt: "Herbstpanorama vom Stellplatz Bichlhof auf Leogang und die Steinberge" },
  },

  breather: {
    image: { src: `${IMG}/amenity-09fde6482b.webp`, alt: "Abendstimmung mit Alpenglühen über den Steinbergen am Stellplatz Bichlhof" },
    line: "Abende, an denen die Steinberge glühen.",
  },

  camping: {
    heading: "Dein Platz am Bichlhof",
    intro:
      "Vom ebenen Stellplatz bis zur Ver- und Entsorgung: Strom und Trinkwasser an jedem Platz, Sanitär mit Dusche, Waschmaschine und ein Kühlschrank mit frischen Hofprodukten.",
    features: [
      {
        title: "Ver- & Entsorgung am Platz",
        text: "Frischwasser, Grauwasser- und Chemie-WC-Entsorgung direkt am Platz – dazu Strom- und Wasseranschluss für jeden Stellplatz.",
        image: { src: `${IMG}/hero-4c54551b8a.webp`, alt: "Ver- und Entsorgungsstation am Stellplatz Bichlhof vor den Steinbergen" },
      },
      {
        title: "Sonnenplätze mit Weitblick",
        text: "Ebene, befestigte Stellplätze auf der Sonnenseite – morgens Bergblick, tagsüber Sonne und ringsum freie Natur ohne Durchzugsverkehr.",
        image: { src: `${IMG}/amenity-cac138b2cf.webp`, alt: "Wohnmobile auf dem sonnigen Stellplatz Bichlhof in Leogang" },
      },
      {
        title: "Wintercamping inklusive",
        text: "Auch im Winter geöffnet: warmes Bad mit Dusche, Bushaltestelle ums Eck und der Familienlift gleich nebenan – Ski-in/Ski-out vom Camper.",
        image: { src: `${IMG}/amenity-3ed1f81165.webp`, alt: "Verschneiter Stellplatz Bichlhof in Leogang mit Blick auf die Steinberge" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Dein Revier: Saalfelden Leogang",
    intro:
      "Vom Stellplatz direkt los: Bikepark und Wanderwege im Sommer, einer der größten Skicircus Europas im Winter – und jede Menge dazwischen.",
    items: [
      {
        title: "Bikepark Leogang",
        text: "17 Lines und Trails mit 90 km Gesamtlänge – vom flowigen Einstieg bis zur Downhill-Strecke ins Tal.",
        image: { src: `${IMG}/activity-dc90cf5707.webp`, alt: "Mountainbikerin im Bikepark Leogang vor den Steinbergen" },
      },
      {
        title: "Wandern & Gipfel",
        text: "Wanderrouten in allen Längen direkt ab dem Camper – hinauf zu Almhütten, Berggasthöfen und Gipfeln mit Weitblick.",
        image: { src: `${IMG}/activity-7e589778b3.webp`, alt: "Wanderer am Riemannhaus in den Leoganger Steinbergen" },
      },
      {
        title: "Sommerrodeln am Asitz",
        text: "Mit der Klangrodelbahn den Erlebnisberg Asitz hinunter – Sommerspaß für Groß und Klein.",
        image: { src: `${IMG}/amenity-2c63f8aa41.webp`, alt: "Klangrodelbahn am Erlebnisberg Asitz in Leogang" },
      },
      {
        title: "Baden in der Region",
        text: "Abkühlung im Leoganger Freibad oder ein Sprung in einen der klaren Seen rundum.",
        image: { src: `${IMG}/amenity-513027ae6a.webp`, alt: "Sprung in den Ritzensee bei Saalfelden" },
      },
      {
        title: "Skicircus Saalbach",
        text: "Vom Ort mit dem Bus zur Talstation: 270 Pistenkilometer und 70 Liftanlagen – eines der größten Skigebiete Europas.",
        image: { src: `${IMG}/amenity-88c4a455c4.webp`, alt: "Skifahrer im Skicircus Saalbach-Hinterglemm-Leogang-Fieberbrunn" },
      },
      {
        title: "Winterwandern & Rodeln",
        text: "Romantische Winterwanderwege, Schneeschuh-Touren und Rodelbahnen – die Asitz-Rodelbahn führt 4 km ins Tal.",
        image: { src: `${IMG}/activity-498647100e.webp`, alt: "Familie beim Winterwandern und Rodeln in Leogang" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Leogang",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauern Autobahn A10 bis Abfahrt Pfarrwerfen, dann über die B311 nach Saalfelden und weiter nach Leogang.",
      },
      {
        title: "Bahn & Bus",
        text: "Bahnhof Leogang-Steinberge an der Salzburg–Tiroler Bahn; vor Ort fährst du mit Bus und Bahn im ganzen Land Salzburg gratis.",
      },
      {
        title: "Im Ort",
        text: "Das Ortszentrum mit Geschäften, Bars und Restaurants erreichst du vom Platz fußläufig in rund 10 Minuten.",
      },
    ],
  },

  galerie: {
    heading: "Leogang in Bildern",
    headingEmphasis: "Bildern",
    intro:
      "Vom verschneiten Tal bis zu langen Sommertagen – ein paar Eindrücke aus Leogang und der Region rund um den Bichlhof.",
    tag: "Sommer & Winter",
    images: [
      { src: `${IMG}/activity-7c6455db0a.webp`, alt: "Verschneites Saalfelden-Leogang aus der Vogelperspektive" },
      { src: `${IMG}/amenity-d585aa1721.webp`, alt: "Skicircus über Leogang aus der Luft" },
      { src: `${IMG}/amenity-54cddd2787.webp`, alt: "Familien-Radtour im Tal vor den Steinbergen" },
      { src: `${IMG}/amenity-ad07763ac0.webp`, alt: "Verschneite Winterlandschaft rund um Leogang" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "deinen Stellplatz",
    intro:
      "Sag uns deinen Wunschzeitraum – Familie Zehentner meldet sich persönlich und reserviert deinen Platz am Bichlhof.",
    pricesArePlaceholder: false,
    priceNote:
      "Preis je nach Belegung zwischen € 65 und € 100 pro Nacht · An- und Abreise in der Sommer-Hauptsaison nur Mittwoch und Samstag · ggf. zzgl. Ortstaxe.",
    highlight: {
      title: "Gästekarte gratis",
      text: "Als Gast am Bichlhof bekommst du die Saalfelden Leogang Card mit vielen Gratis- und Vergünstigungen geschenkt.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 65 },
    ],
  },

  kontakt: {
    coords: { lat: 47.434893, lng: 12.761533 },
    tel: "+43 660 2968587",
    telHref: "tel:+436602968587",
    mail: "info@camperstellplatz-leogang.com",
    adresse: "Madreit 2 · 5771 Leogang · Salzburg",
  },

  languages: ["DE"],

  nav: [
    { label: "Stellplatz", href: "#camping", children: [
      { label: "Ausstattung", href: "#camping" },
      { label: "Lage", href: "#anreise" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default bichlhof;
