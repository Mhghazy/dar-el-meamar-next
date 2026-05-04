import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/Tools/ScrollToTopButton';
import ScrollToTop from '@/components/Tools/ScrollToTop';
import SocialContact from '@/components/SocialContact/SocialContact';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <SocialContact position="left" />
        <div className="pt-32">
          {children}
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
