export default {
  common: {
    errorBoundary: {
      sessionModalTitle: 'Errore',
      sessionModalMessage: 'Spiacenti, qualcosa è andato storto.',
      toastError: 'ERRORE',
      toastMessage: 'Spiacenti, qualcosa è andato storto.',
    },
    blockingErrorPage: {
      title: 'Spiacenti, qualcosa è andato storto.',
      description: 'A causa di un errore del sistema non è possibile completare la procedura.',
      buttonLabel: "Contatta l'assistenza",
    },
    footer: {
      legalInfoText: `<0>PagoPA S.p.A.</0> - Società per azioni con socio unico - Capitale sociale di euro 1,000,000 interamente versato - Sede legale in Roma, Piazza Colonna 370, <2/> CAP 00187 - N. di iscrizione a Registro Imprese di Roma, CF e P.IVA 15376371009`,
      privacyPolicyLink: 'Privacy Policy ',
      termsAndConditionLink: 'Termini e condizioni d’uso del sito ',
      informationSecurityLink: 'Sicurezza delle informazioni ',
      assistanceLink: 'Assistenza ',
      preLoginLinks: {
        aboutUs: {
          links: {
            aboutUs: 'PagoPA S.p.A.',
            media: 'Media',
            workwithud: 'Lavora con noi',
          },
        },
        resources: {
          title: 'Risorse',
          links: {
            privacyPolicy: 'Privacy Policy',
            certifications: 'Certificazioni',
            informationsecurity: 'Sicurezza delle informazioni',
            protectionofpersonaldata: 'Diritto alla protezione dei dati personali',
            cookie: 'Preferenze Cookie',
            termsandconditions: 'Termini e Condizioni',
            transparentcompany: 'Società trasparente',
            disclosurePolicy: 'Responsible Disclosure Policy',
            Model321: 'Modello 321',
          },
        },
        followUs: {
          title: 'Seguici su',
        },
      },
      postLoginLinks: {
        privacyPolicy: 'Privacy policy',
        protectionofpersonaldata: 'Diritto alla protezione dei dati personali',
        termsandconditions: 'Termini e Condizioni',
      },
    },
    header: {
      exitButton: 'Esci',
    },
    filterModal: {
      title: 'Filtra per ',
      button: 'Filtra',
    },
    sessionModal: {
      closeButton: 'Annulla',
      confirmButton: 'Riprova',
    },
    unloadEventHandler: {
      title: 'Vuoi davvero uscire?',
      message: 'Se esci, le modifiche apportate andranno perse.',
      confirmLabel: 'Esci',
    },
    roles: {
      admin: {
        shortLabel: 'Ref. Amministrativo',
        longLabel: 'Amministratore',
        description: 'Ha tutti i permessi e gestisce gli utenti',
      },
      limited: {
        shortLabel: 'Ref. Operativo',
        longLabel: 'Operatore',
        description: "Gestisce l'integrazione tecnologica e/o l'operatività dei servizi",
      },
    },
    backComponent: {
      label: 'Indietro',
    },
  },
};
