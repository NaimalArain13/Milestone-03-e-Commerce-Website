import NotFound from "./components/notFound";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div><NotFound /></div>
        
    
    );
  }