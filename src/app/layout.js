
import "./globals.css";

const siteName = "مركز الدكتور بشار المسالمة لطب الأسنان";

const siteDescription =
  "تعرف على مركز الدكتور بشار المسالمة لطب الأسنان، وخدمات العناية بصحة الفم والأسنان، وآراء المرضى، وطرق التواصل وحجز المواعيد.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/",
        },
      }
    : {}),

  title: `${siteName} | رعاية سنية تبدأ بثقة`,

  description: siteDescription,

  applicationName: siteName,

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ar",
    siteName,
    title: siteName,
    description: siteDescription,
    ...(siteUrl ? { url: siteUrl } : {}),
  },

  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
