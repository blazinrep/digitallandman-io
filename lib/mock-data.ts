import { County, Profile } from './supabase';

export const mockCounties: County[] = [
  {
    id: '1',
    name: 'Travis',
    slug: 'travis',
    state_code: 'TX',
  },
  {
    id: '2',
    name: 'Williamson',
    slug: 'williamson',
    state_code: 'TX',
  },
  {
    id: '3',
    name: 'Hays',
    slug: 'hays',
    state_code: 'TX',
  },
  {
    id: '4',
    name: 'Bexar',
    slug: 'bexar',
    state_code: 'TX',
  },
  {
    id: '5',
    name: 'Dallas',
    slug: 'dallas',
    state_code: 'TX',
  },
];

export const mockProfiles: Profile[] = [
  {
    id: 'p1',
    business_name: 'Texas Land & Ranch Co.',
    business_type: 'Real Estate Brokerage',
    verification_status: 'Verified',
  },
  {
    id: 'p2',
    business_name: 'Lone Star Property Services',
    business_type: 'Land Surveying',
    verification_status: 'Verified',
  },
  {
    id: 'p3',
    business_name: 'Hill Country Land Experts',
    business_type: 'Real Estate Brokerage',
    verification_status: 'Verified',
  },
];

export const mockProfileServiceAreas = [
  { profile_id: 'p1', county_id: '1' },
  { profile_id: 'p1', county_id: '2' },
  { profile_id: 'p2', county_id: '3' },
  { profile_id: 'p3', county_id: '4' },
  { profile_id: 'p3', county_id: '5' },
];
