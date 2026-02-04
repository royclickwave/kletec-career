export interface Vacancy {
    id: string;
    title: string;
    tag: string;
    shortDescription: string;
    fullDescription: string;
    tasks: string[];
    requirements: string[];
    benefits: string[];
}

export const vacancies: Vacancy[] = [
    {
        id: 'paneelbouwer',
        title: 'Paneelbouwer',
        tag: 'Elektrotechniek',
        shortDescription: 'Wil jij verantwoordelijk zijn voor het opbouwen, bedraden en testen van besturingskasten voor onze machines?',
        fullDescription: 'Als Paneelbouwer bij Kletec ben je een onmisbare schakel in ons productieproces. Je werkt aan de "hersenen" van onze machines. Je bouwt besturingspanelen vanaf nul op, gebaseerd op technische schema\'s. Jouw oog voor detail zorgt ervoor dat elke kast veilig, geordend en foutloos wordt opgeleverd.',
        tasks: [
            'Het vanaf tekening opbouwen van besturingspanelen',
            'Bedraden en aansluiten van componenten',
            'Testen van de werking van de afgeronde panelen',
            'Samenwerken met de mechanical engineers voor optimale integratie',
            'Meedenken over procesverbeteringen in de panelenbouw'
        ],
        requirements: [
            'Een afgeronde MBO-opleiding richting elektrotechniek',
            'Ervaring met het lezen van elektrische schema\'s',
            'Nauwkeurige en gestructureerde werkwijze',
            'Passie voor techniek en zin om te leren'
        ],
        benefits: [
            'Een goed salaris passend bij jouw ervaring',
            'Uitzicht op een vast dienstverband',
            'Werken met de nieuwste componenten en technieken',
            'Een gezellig team en een informele werksfeer',
            'Mogelijkheden voor persoonlijke ontwikkeling en opleidingen'
        ]
    },
    {
        id: 'junior-inkoper',
        title: 'Junior Inkoper',
        tag: 'Inkoop',
        shortDescription: 'Heb jij affiniteit met machinebouw en werk je graag binnen een informele en groeiende organisatie?',
        fullDescription: 'Als Junior Inkoper bij Kletec krijg je de kans om het inkoopproces van A tot Z te leren kennen in een technische omgeving. Je ondersteunt bij de inkoop van onderdelen voor onze innovatieve machines en robots. Je schakelt tussen leveranciers, productie en engineering om te zorgen dat alles op tijd en tegen de juiste condities aanwezig is.',
        tasks: [
            'Ondersteunen bij het plaatsen en opvolgen van inkooporders',
            'Bewaken van levertijden en communiceren met leveranciers',
            'Administratieve verwerking van inkoopgegevens in het ERP-systeem',
            'Nadenken over voorraadoptimalisatie',
            'Samenwerken met de technische dienst over productspecificaties'
        ],
        requirements: [
            'Minimaal MBO+ werk- en denkniveau',
            'Affiniteit met (machinebouw) techniek',
            'Goede beheersing van de Nederlandse en Engelse taal',
            'Commercieel inzicht en goede communicatieve vaardigheden',
            'Leergierige instelling en proactieve werkhouding'
        ],
        benefits: [
            'Uitstekende groeimogelijkheden binnen de organisatie',
            'Begeleiding door ervaren professionals',
            'Een uitdagende functie in een internationaal opererend bedrijf',
            'Marktconform salaris en secundaire voorwaarden',
            'Vrijdagmiddagborrel en legendarische teamuitjes'
        ]
    },
    {
        id: 'machinebouwer',
        title: 'Machinebouwer',
        tag: 'Productie',
        shortDescription: 'Heb jij 2 rechterhanden en is sleutelen je hobby? Maak van je hobby je werk!',
        fullDescription: 'Als Machinebouwer (Assemblagemedewerker) ben je verantwoordelijk voor de volledige opbouw van onze machines. Van het frame tot de kleinste sensoren; jij zet het in elkaar. Je werkt nauw samen met collega\'s om complexe robotsystemen tot leven te wekken en klaar te maken voor verzending naar klanten wereldwijd.',
        tasks: [
            'Mechanische opbouw en assemblage van machines',
            'Monteren van pneumatische en hydraulische componenten',
            'Afstellen en finetunen van mechanische onderdelen',
            'Uitvoeren van kwaliteitscontroles tijdens de bouw',
            'Samenwerken in een team aan complete projecten'
        ],
        requirements: [
            'Gevoel voor techniek en technisch inzicht (ervaring of opleiding)',
            'Ervaring met gereedschappen en technische tekeningen',
            'Probleemoplossend vermogen',
            'Kwaliteitsbewuste en resultaatgerichte instelling',
            'Teamplayer'
        ],
        benefits: [
            'Direct resultaat zien van je werk: een werkende machine!',
            'Afwisselende projecten voor wereldwijde klanten',
            'Training on-the-job door ervaren leermeesters',
            'Modern gereedschap en een schone werkomgeving',
            'Goede pensioenregeling en reiskostenvergoeding'
        ]
    },
    {
        id: 'mechanical-engineer',
        title: 'Mechanical Engineer',
        tag: 'Engineering | HBO',
        shortDescription: 'Bij Kletec zoeken we een mechanical engineer die onze machines ontwikkelt.',
        fullDescription: 'Als Mechanical Engineer ben je het brein achter de fysieke vorm en functie van onze machines. Je ontwerpt nieuwe systemen en verbetert bestaande ontwerpen in 3D CAD software. Je houdt rekening met maakbaarheid, kosten en de nieuwste technologische ontwikkelingen in de robotica.',
        tasks: [
            'Ontwerpen van (deel)systemen en complete machines in 3D CAD',
            'Maken van detailtekeningen en stuklijsten (BOM)',
            'Berekenen van sterktes, aandrijvingen en bewegingen',
            'Begeleiden van de bouw van prototypes',
            'Innoveren: zoeken naar slimmere en snellere automatiseringsoplossingen'
        ],
        requirements: [
            'Afgeronde HBO-opleiding Werktuigbouwkunde of vergelijkbaar',
            'Ruime ervaring met 3D CAD (bijv. SolidWorks of Inventor)',
            'Creatief brein met een praktische insteek',
            'Kennis van materialen en productietechnieken',
            'Analytisch sterk en oog voor detail'
        ],
        benefits: [
            'Veel creatieve vrijheid en eigen verantwoordelijkheid',
            'Directe invloed op de innovatieve koers van Kletec',
            'Interne doorgroeimogelijkheden naar senior of lead posities',
            'Laptop van de zaak en flexibele werktijden',
            'Een sleutelrol in een groeiend hightech bedrijf'
        ]
    }
];
