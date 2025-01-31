import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ファーストディール - AIとプロがあなたの営業を完全サポート',
  description: '副業初心者の営業をAIとプロが完全サポート。営業が苦手でも、最初の案件を確実に獲得できるプラットフォーム。85%以上が3ヶ月以内に案件獲得に成功！',
  keywords: [
    '副業',
    '営業支援',
    'AI営業アシスタント',
    '営業代行',
    '案件獲得',
    'フリーランス',
    '営業が苦手',
    '初心者向け',
    'プロフェッショナル',
    'ビジネスマッチング'
  ],
  authors: [{ name: 'First Deal Team' }],
  openGraph: {
    title: 'ファーストディール - AIとプロがあなたの営業を完全サポート',
    description: '副業初心者の営業をAIとプロが完全サポート。営業が苦手でも、最初の案件を確実に獲得できるプラットフォーム。85%以上が3ヶ月以内に案件獲得に成功！',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ファーストディール - AIとプロがあなたの営業を完全サポート'
      }
    ],
    siteName: 'ファーストディール'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ファーストディール - AIとプロがあなたの営業を完全サポート',
    description: '副業初心者の営業をAIとプロが完全サポート。営業が苦手でも、最初の案件を確実に獲得できるプラットフォーム。',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4F46E5',
  category: 'business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
