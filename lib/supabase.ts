import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.NEXT_PUBLIC_NEON_DATABASE_URL;

export const db = databaseUrl ? neon(databaseUrl) : null;

// Database types (update these based on your actual schema)
export interface County {
  id: string;
  name: string;
  slug: string;
  state_code: string;
}

export interface Profile {
  id: string;
  business_name: string;
  business_type: string;
  verification_status: 'Verified' | 'Pending' | 'Rejected';
}

export interface ProfileServiceArea {
  profile_id: string;
  county_id: string;
}

export interface ProfileWithServiceArea extends Profile {
  counties: County[];
}
