"use client";

import { Pricing } from "@/components/blocks/pricing";

const pricingPlans = [
  {
    name: "ライト",
    price: "980",
    yearlyPrice: "784",
    period: "per month",
    features: [
      "AI案件マッチング",
      "営業テンプレート",
      "コミュニティ機能",
      "基本的なAIサポート",
      "メールサポート",
      "平日9-17時対応",
    ],
    description: "副業を始めたばかりの方に最適なプラン",
    buttonText: "7日間無料で試す",
    href: "/trial",
    isPopular: false,
  },
  {
    name: "スタンダード",
    price: "3,980",
    yearlyPrice: "3,184",
    period: "per month",
    features: [
      "ライトプランの全機能",
      "AI営業アシスタント",
      "提案書自動生成",
      "ポートフォリオ作成支援",
      "優先サポート",
      "24時間365日対応",
      "営業トレーニング（一部）",
    ],
    description: "本格的に副業で稼ぎたい方向け",
    buttonText: "今すぐ始める",
    href: "/signup",
    isPopular: true,
  },
  {
    name: "プレミアム",
    price: "7,980",
    yearlyPrice: "6,384",
    period: "per month",
    features: [
      "スタンダードの全機能",
      "営業代行マッチング（無制限）",
      "案件獲得保証",
      "専任サポート担当者",
      "営業トレーニング（全て）",
      "優先案件紹介",
      "メンターマッチング",
      "スキルアップ支援",
    ],
    description: "確実に案件を獲得したい方向け",
    buttonText: "無料相談する",
    href: "/contact",
    isPopular: false,
  },
];

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 flex justify-center items-center w-full">
      <div className="w-full max-w-7xl mx-auto">
        <Pricing 
          plans={pricingPlans}
          title="料金プラン"
          description="あなたの目的に合わせて最適なプランをお選びください
すべてのプランに7日間の無料トライアル付き"
          className="text-gray-700"
        />
      </div>
    </section>
  );
}