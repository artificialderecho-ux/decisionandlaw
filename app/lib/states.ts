export interface State {
  name: string;
  slug: string;
  abbreviation: string;
  capital: string;
  region: 'Northeast' | 'Southeast' | 'Midwest' | 'Southwest' | 'West';
  barAssociation: string;
  barUrl: string;
  legislatureUrl: string;
  aiLegalStatus: 'enacted' | 'active-legislation' | 'monitoring' | 'no-activity';
}

export const states: State[] = [
  // Northeast
  {
    name: 'Connecticut',
    slug: 'connecticut',
    abbreviation: 'CT',
    capital: 'Hartford',
    region: 'Northeast',
    barAssociation: 'Connecticut Bar Association',
    barUrl: 'https://www.ctbar.org',
    legislatureUrl: 'https://www.cga.ct.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Maine',
    slug: 'maine',
    abbreviation: 'ME',
    capital: 'Augusta',
    region: 'Northeast',
    barAssociation: 'Maine State Bar Association',
    barUrl: 'https://www.mainestatebar.org',
    legislatureUrl: 'https://www.mainelegislature.org',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    capital: 'Boston',
    region: 'Northeast',
    barAssociation: 'Massachusetts Bar Association',
    barUrl: 'https://www.massbar.org',
    legislatureUrl: 'https://www.malegislature.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    abbreviation: 'NH',
    capital: 'Concord',
    region: 'Northeast',
    barAssociation: 'New Hampshire Bar Association',
    barUrl: 'https://www.nhbar.org',
    legislatureUrl: 'https://www.gencourt.state.nh.us',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    abbreviation: 'RI',
    capital: 'Providence',
    region: 'Northeast',
    barAssociation: 'Rhode Island Bar Association',
    barUrl: 'https://www.ribar.org',
    legislatureUrl: 'https://www.rilegislature.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    abbreviation: 'VT',
    capital: 'Montpelier',
    region: 'Northeast',
    barAssociation: 'Vermont Bar Association',
    barUrl: 'https://www.vtbar.org',
    legislatureUrl: 'https://www.leg.state.vt.us',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    capital: 'Trenton',
    region: 'Northeast',
    barAssociation: 'New Jersey State Bar Association',
    barUrl: 'https://www.njsba.org',
    legislatureUrl: 'https://www.njleg.state.nj.us',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    capital: 'Albany',
    region: 'Northeast',
    barAssociation: 'New York State Bar Association',
    barUrl: 'https://www.nysba.org',
    legislatureUrl: 'https://www.nysenate.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    abbreviation: 'PA',
    capital: 'Harrisburg',
    region: 'Northeast',
    barAssociation: 'Pennsylvania Bar Association',
    barUrl: 'https://www.pabar.org',
    legislatureUrl: 'https://www.legis.state.pa.us',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    abbreviation: 'MD',
    capital: 'Annapolis',
    region: 'Northeast',
    barAssociation: 'Maryland State Bar Association',
    barUrl: 'https://www.msba.org',
    legislatureUrl: 'https://mgaleg.maryland.gov',
    aiLegalStatus: 'enacted'
  },

  // Southeast
  {
    name: 'Alabama',
    slug: 'alabama',
    abbreviation: 'AL',
    capital: 'Montgomery',
    region: 'Southeast',
    barAssociation: 'Alabama State Bar',
    barUrl: 'https://www.alabar.org',
    legislatureUrl: 'https://www.legislature.state.al.us',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    abbreviation: 'AR',
    capital: 'Little Rock',
    region: 'Southeast',
    barAssociation: 'Arkansas Bar Association',
    barUrl: 'https://www.arkbar.com',
    legislatureUrl: 'https://www.arkleg.state.ar.us',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    capital: 'Tallahassee',
    region: 'Southeast',
    barAssociation: 'The Florida Bar',
    barUrl: 'https://www.floridabar.org',
    legislatureUrl: 'https://www.flsenate.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    abbreviation: 'GA',
    capital: 'Atlanta',
    region: 'Southeast',
    barAssociation: 'State Bar of Georgia',
    barUrl: 'https://www.gabar.org',
    legislatureUrl: 'https://www.legis.ga.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    abbreviation: 'KY',
    capital: 'Frankfort',
    region: 'Southeast',
    barAssociation: 'Kentucky Bar Association',
    barUrl: 'https://www.kybar.org',
    legislatureUrl: 'https://legislature.ky.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    abbreviation: 'LA',
    capital: 'Baton Rouge',
    region: 'Southeast',
    barAssociation: 'Louisiana State Bar Association',
    barUrl: 'https://www.lsba.org',
    legislatureUrl: 'https://legis.la.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    abbreviation: 'MS',
    capital: 'Jackson',
    region: 'Southeast',
    barAssociation: 'Mississippi Bar',
    barUrl: 'https://www.msbar.org',
    legislatureUrl: 'https://www.leg.ms.gov',
    aiLegalStatus: 'no-activity'
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    capital: 'Raleigh',
    region: 'Southeast',
    barAssociation: 'North Carolina Bar Association',
    barUrl: 'https://www.ncbar.org',
    legislatureUrl: 'https://www.ncleg.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    abbreviation: 'SC',
    capital: 'Columbia',
    region: 'Southeast',
    barAssociation: 'South Carolina Bar',
    barUrl: 'https://www.scbar.org',
    legislatureUrl: 'https://www.scstatehouse.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    abbreviation: 'TN',
    capital: 'Nashville',
    region: 'Southeast',
    barAssociation: 'Tennessee Bar Association',
    barUrl: 'https://www.tba.org',
    legislatureUrl: 'https://www.capitol.tn.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    abbreviation: 'VA',
    capital: 'Richmond',
    region: 'Southeast',
    barAssociation: 'Virginia State Bar',
    barUrl: 'https://www.vsb.org',
    legislatureUrl: 'https://://lis.virginia.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    abbreviation: 'WV',
    capital: 'Charleston',
    region: 'Southeast',
    barAssociation: 'West Virginia State Bar',
    barUrl: 'https://www.wvbar.org',
    legislatureUrl: 'https://www.wvlegislature.gov',
    aiLegalStatus: 'no-activity'
  },

  // Midwest
  {
    name: 'Illinois',
    slug: 'illinois',
    abbreviation: 'IL',
    capital: 'Springfield',
    region: 'Midwest',
    barAssociation: 'Illinois State Bar Association',
    barUrl: 'https://www.isba.org',
    legislatureUrl: 'https://www.ilga.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    abbreviation: 'IN',
    capital: 'Indianapolis',
    region: 'Midwest',
    barAssociation: 'Indiana State Bar Association',
    barUrl: 'https://www.inbar.org',
    legislatureUrl: 'https://iga.in.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    abbreviation: 'MI',
    capital: 'Lansing',
    region: 'Midwest',
    barAssociation: 'State Bar of Michigan',
    barUrl: 'https://www.michbar.org',
    legislatureUrl: 'https://www.legislature.mi.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    abbreviation: 'OH',
    capital: 'Columbus',
    region: 'Midwest',
    barAssociation: 'Ohio State Bar Association',
    barUrl: 'https://www.ohiobar.org',
    legislatureUrl: 'https://www.legislature.ohio.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    abbreviation: 'WI',
    capital: 'Madison',
    region: 'Midwest',
    barAssociation: 'State Bar of Wisconsin',
    barUrl: 'https://www.wisbar.org',
    legislatureUrl: 'https://docs.legis.wisconsin.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    abbreviation: 'IA',
    capital: 'Des Moines',
    region: 'Midwest',
    barAssociation: 'Iowa State Bar Association',
    barUrl: 'https://www.iowabar.org',
    legislatureUrl: 'https://www.legis.iowa.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    abbreviation: 'KS',
    capital: 'Topeka',
    region: 'Midwest',
    barAssociation: 'Kansas Bar Association',
    barUrl: 'https://www.ksbar.org',
    legislatureUrl: 'https://www.kslegislature.org',
    aiLegalStatus: 'no-activity'
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    abbreviation: 'MN',
    capital: 'Saint Paul',
    region: 'Midwest',
    barAssociation: 'Minnesota State Bar Association',
    barUrl: 'https://www.mnbar.org',
    legislatureUrl: 'https://www.revisor.mn.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    abbreviation: 'MO',
    capital: 'Jefferson City',
    region: 'Midwest',
    barAssociation: 'The Missouri Bar',
    barUrl: 'https://www.mobar.org',
    legislatureUrl: 'https://www.house.mo.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    abbreviation: 'NE',
    capital: 'Lincoln',
    region: 'Midwest',
    barAssociation: 'Nebraska State Bar Association',
    barUrl: 'https://www.nebar.org',
    legislatureUrl: 'https://nebraskalegislature.gov',
    aiLegalStatus: 'no-activity'
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    abbreviation: 'ND',
    capital: 'Bismarck',
    region: 'Midwest',
    barAssociation: 'State Bar Association of North Dakota',
    barUrl: 'https://www.sband.org',
    legislatureUrl: 'https://www.legis.nd.gov',
    aiLegalStatus: 'no-activity'
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    abbreviation: 'SD',
    capital: 'Pierre',
    region: 'Midwest',
    barAssociation: 'State Bar of South Dakota',
    barUrl: 'https://www.sdbar.org',
    legislatureUrl: 'https://sdlegislature.gov',
    aiLegalStatus: 'no-activity'
  },

  // Southwest
  {
    name: 'Arizona',
    slug: 'arizona',
    abbreviation: 'AZ',
    capital: 'Phoenix',
    region: 'Southwest',
    barAssociation: 'State Bar of Arizona',
    barUrl: 'https://www.azbar.org',
    legislatureUrl: 'https://www.azleg.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    abbreviation: 'NM',
    capital: 'Santa Fe',
    region: 'Southwest',
    barAssociation: 'State Bar of New Mexico',
    barUrl: 'https://www.sbnm.org',
    legislatureUrl: 'https://www.nmlegis.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    abbreviation: 'OK',
    capital: 'Oklahoma City',
    region: 'Southwest',
    barAssociation: 'Oklahoma Bar Association',
    barUrl: 'https://www.okbar.org',
    legislatureUrl: 'https://www.oklegislature.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Texas',
    slug: 'texas',
    abbreviation: 'TX',
    capital: 'Austin',
    region: 'Southwest',
    barAssociation: 'State Bar of Texas',
    barUrl: 'https://www.texasbar.com',
    legislatureUrl: 'https://capitol.texas.gov',
    aiLegalStatus: 'enacted'
  },

  // West
  {
    name: 'Alaska',
    slug: 'alaska',
    abbreviation: 'AK',
    capital: 'Juneau',
    region: 'West',
    barAssociation: 'Alaska Bar Association',
    barUrl: 'https://www.alaskabar.org',
    legislatureUrl: 'https://www.akleg.gov',
    aiLegalStatus: 'no-activity'
  },
  {
    name: 'California',
    slug: 'california',
    abbreviation: 'CA',
    capital: 'Sacramento',
    region: 'West',
    barAssociation: 'State Bar of California',
    barUrl: 'https://www.calbar.ca.gov',
    legislatureUrl: 'https://leginfo.legislature.ca.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    abbreviation: 'CO',
    capital: 'Denver',
    region: 'West',
    barAssociation: 'Colorado Bar Association',
    barUrl: 'https://www.cobar.org',
    legislatureUrl: 'https://leg.colorado.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    abbreviation: 'HI',
    capital: 'Honolulu',
    region: 'West',
    barAssociation: 'Hawaii State Bar Association',
    barUrl: 'https://www.hsba.org',
    legislatureUrl: 'https://www.capitol.hawaii.gov',
    aiLegalStatus: 'monitoring'
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    abbreviation: 'ID',
    capital: 'Boise',
    region: 'West',
    barAssociation: 'Idaho State Bar',
    barUrl: 'https://www.isb.idaho.gov',
    legislatureUrl: 'https://legislature.idaho.gov',
    aiLegalStatus: 'no-activity'
  },
  {
    name: 'Montana',
    slug: 'montana',
    abbreviation: 'MT',
    capital: 'Helena',
    region: 'West',
    barAssociation: 'State Bar of Montana',
    barUrl: 'https://www.montanabar.org',
    legislatureUrl: 'https://leg.mt.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    abbreviation: 'NV',
    capital: 'Carson City',
    region: 'West',
    barAssociation: 'State Bar of Nevada',
    barUrl: 'https://www.nvbar.org',
    legislatureUrl: 'https://www.leg.state.nv.us',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    abbreviation: 'OR',
    capital: 'Salem',
    region: 'West',
    barAssociation: 'Oregon State Bar',
    barUrl: 'https://www.osbar.org',
    legislatureUrl: 'https://www.oregonlegislature.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Utah',
    slug: 'utah',
    abbreviation: 'UT',
    capital: 'Salt Lake City',
    region: 'West',
    barAssociation: 'Utah State Bar',
    barUrl: 'https://www.utahbar.org',
    legislatureUrl: 'https://le.utah.gov',
    aiLegalStatus: 'enacted'
  },
  {
    name: 'Washington',
    slug: 'washington',
    abbreviation: 'WA',
    capital: 'Olympia',
    region: 'West',
    barAssociation: 'Washington State Bar Association',
    barUrl: 'https://www.wsba.org',
    legislatureUrl: 'https://app.leg.wa.gov',
    aiLegalStatus: 'active-legislation'
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    abbreviation: 'WY',
    capital: 'Cheyenne',
    region: 'West',
    barAssociation: 'Wyoming State Bar',
    barUrl: 'https://www.wyobar.org',
    legislatureUrl: 'https://www.wyoleg.gov',
    aiLegalStatus: 'no-activity'
  }
];

// Utility functions
export function getStateBySlug(slug: string): State | undefined {
  return states.find(state => state.slug === slug);
}

export function getStatesByStatus(status: State['aiLegalStatus']): State[] {
  return states.filter(state => state.aiLegalStatus === status);
}

export function getStatesByRegion(region: State['region']): State[] {
  return states.filter(state => state.region === region);
}

export function getAllStates(): State[] {
  return states;
}

export function getStateByAbbreviation(abbreviation: string): State | undefined {
  return states.find(state => state.abbreviation === abbreviation);
}
