
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
    
      <main className="flex-grow">{children}</main>
    </div>
  );
}