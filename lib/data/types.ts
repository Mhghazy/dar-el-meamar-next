/** Dashboard / CMS gallery row (Supabase-shaped). Distinct from public-site `GalleryImage` in config/galleryData. */
export interface DashboardGalleryRecord {
  id: string;
  title: string;
  url: string;
  category?: string;
  created_at: string;
  updated_at?: string;
}

export interface DashboardUploadImageParams {
  file: File;
  title: string;
  category?: string;
}
