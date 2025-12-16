export type CalculatorTier = 'tier1' | 'tier2';

export interface StateConfig {
  name: string;
  slug: string; // e.g., 'texas'
  abbr: string; // e.g., 'TX'
  tier: CalculatorTier;
  citation?: string; // e.g., "Official Promulgated Rates 2024"
}

export const states: StateConfig[] = [
  { name: 'Alabama', slug: 'alabama', abbr: 'AL', tier: 'tier2' },
  { name: 'Alaska', slug: 'alaska', abbr: 'AK', tier: 'tier2' },
  { name: 'Arizona', slug: 'arizona', abbr: 'AZ', tier: 'tier2' },
  { name: 'Arkansas', slug: 'arkansas', abbr: 'AR', tier: 'tier2' },
  { name: 'California', slug: 'california', abbr: 'CA', tier: 'tier2', citation: 'Based on First American Title Insurance Company 2024 Schedule' },
  { name: 'Colorado', slug: 'colorado', abbr: 'CO', tier: 'tier2' },
  { name: 'Connecticut', slug: 'connecticut', abbr: 'CT', tier: 'tier2' },
  { name: 'Delaware', slug: 'delaware', abbr: 'DE', tier: 'tier2' },
  { name: 'Florida', slug: 'florida', abbr: 'FL', tier: 'tier1', citation: 'Florida Promulgated Rates (Rule 69O-186.003)' },
  { name: 'Georgia', slug: 'georgia', abbr: 'GA', tier: 'tier2' },
  { name: 'Hawaii', slug: 'hawaii', abbr: 'HI', tier: 'tier2' },
  { name: 'Idaho', slug: 'idaho', abbr: 'ID', tier: 'tier2' },
  { name: 'Illinois', slug: 'illinois', abbr: 'IL', tier: 'tier2' },
  { name: 'Indiana', slug: 'indiana', abbr: 'IN', tier: 'tier2' },
  { name: 'Iowa', slug: 'iowa', abbr: 'IA', tier: 'tier2' },
  { name: 'Kansas', slug: 'kansas', abbr: 'KS', tier: 'tier2' },
  { name: 'Kentucky', slug: 'kentucky', abbr: 'KY', tier: 'tier2' },
  { name: 'Louisiana', slug: 'louisiana', abbr: 'LA', tier: 'tier2' },
  { name: 'Maine', slug: 'maine', abbr: 'ME', tier: 'tier2' },
  { name: 'Maryland', slug: 'maryland', abbr: 'MD', tier: 'tier2' },
  { name: 'Massachusetts', slug: 'massachusetts', abbr: 'MA', tier: 'tier2' },
  { name: 'Michigan', slug: 'michigan', abbr: 'MI', tier: 'tier2' },
  { name: 'Minnesota', slug: 'minnesota', abbr: 'MN', tier: 'tier2' },
  { name: 'Mississippi', slug: 'mississippi', abbr: 'MS', tier: 'tier2' },
  { name: 'Missouri', slug: 'missouri', abbr: 'MO', tier: 'tier2' },
  { name: 'Montana', slug: 'montana', abbr: 'MT', tier: 'tier2' },
  { name: 'Nebraska', slug: 'nebraska', abbr: 'NE', tier: 'tier2' },
  { name: 'Nevada', slug: 'nevada', abbr: 'NV', tier: 'tier2' },
  { name: 'New Hampshire', slug: 'new-hampshire', abbr: 'NH', tier: 'tier2' },
  { name: 'New Jersey', slug: 'new-jersey', abbr: 'NJ', tier: 'tier2' },
  { name: 'New Mexico', slug: 'new-mexico', abbr: 'NM', tier: 'tier1', citation: 'New Mexico Promulgated Rates' },
  { name: 'New York', slug: 'new-york', abbr: 'NY', tier: 'tier1', citation: 'TIRSA Rate Manual 7th Revision (Oct 2024)' },
  { name: 'North Carolina', slug: 'north-carolina', abbr: 'NC', tier: 'tier2' },
  { name: 'North Dakota', slug: 'north-dakota', abbr: 'ND', tier: 'tier2' },
  { name: 'Ohio', slug: 'ohio', abbr: 'OH', tier: 'tier2' },
  { name: 'Oklahoma', slug: 'oklahoma', abbr: 'OK', tier: 'tier2' },
  { name: 'Oregon', slug: 'oregon', abbr: 'OR', tier: 'tier2' },
  { name: 'Pennsylvania', slug: 'pennsylvania', abbr: 'PA', tier: 'tier1', citation: 'TIRBOP Manual of Rates (Aug 2024)' },
  { name: 'Rhode Island', slug: 'rhode-island', abbr: 'RI', tier: 'tier2' },
  { name: 'South Carolina', slug: 'south-carolina', abbr: 'SC', tier: 'tier2' },
  { name: 'South Dakota', slug: 'south-dakota', abbr: 'SD', tier: 'tier2' },
  { name: 'Tennessee', slug: 'tennessee', abbr: 'TN', tier: 'tier2' },
  { name: 'Texas', slug: 'texas', abbr: 'TX', tier: 'tier1', citation: 'Texas Title Insurance Basic Premium Rates (2019/2024)' },
  { name: 'Utah', slug: 'utah', abbr: 'UT', tier: 'tier2' },
  { name: 'Vermont', slug: 'vermont', abbr: 'VT', tier: 'tier2' },
  { name: 'Virginia', slug: 'virginia', abbr: 'VA', tier: 'tier2' },
  { name: 'Washington', slug: 'washington', abbr: 'WA', tier: 'tier2' },
  { name: 'West Virginia', slug: 'west-virginia', abbr: 'WV', tier: 'tier2' },
  { name: 'Wisconsin', slug: 'wisconsin', abbr: 'WI', tier: 'tier2' },
  { name: 'Wyoming', slug: 'wyoming', abbr: 'WY', tier: 'tier2' },
];
