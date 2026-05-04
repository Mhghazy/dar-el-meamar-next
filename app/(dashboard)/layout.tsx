export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      {/* Dashboard sidebar / header goes here */}
      <main>{children}</main>
    </div>
  );
}
