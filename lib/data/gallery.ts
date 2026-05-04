import { DashboardGalleryRecord, DashboardUploadImageParams } from './types';

// Mock data for the gallery
const mockGalleryData: DashboardGalleryRecord[] = [
  {
    id: '1',
    title: 'Modern Villa',
    url: '/placeholder-1.jpg',
    category: 'Residential',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Office Complex',
    url: '/placeholder-2.jpg',
    category: 'Commercial',
    created_at: new Date().toISOString(),
  },
];

export async function getGalleryImages(): Promise<DashboardGalleryRecord[]> {
  // TODO: Replace with Supabase query
  // const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
  // if (error) throw error;
  // return data;

  return mockGalleryData;
}

export async function getGalleryImageById(
  id: string
): Promise<DashboardGalleryRecord | null> {
  // TODO: Replace with Supabase query
  // const { data, error } = await supabase.from('gallery').select('*').eq('id', id).single();
  // if (error) throw error;
  // return data;

  return mockGalleryData.find((img) => img.id === id) || null;
}

export async function uploadImage(
  params: DashboardUploadImageParams
): Promise<DashboardGalleryRecord> {
  // TODO: Replace with Supabase Storage upload
  // 1. Upload file to Supabase Storage
  // 2. Insert metadata into 'gallery' table
  // 3. Return the new DashboardGalleryRecord record

  void params;
  throw new Error('Not implemented — requires Supabase setup');
}

export async function deleteImage(id: string): Promise<void> {
  // TODO: Replace with Supabase deletion
  // 1. Get image metadata to find storage path
  // 2. Delete file from Supabase Storage
  // 3. Delete record from 'gallery' table

  void id;
  throw new Error('Not implemented — requires Supabase setup');
}
