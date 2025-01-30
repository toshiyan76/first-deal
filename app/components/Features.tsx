"use client";

import { FeatureSteps } from "@/components/blocks/feature-section";

const features = [
  {
    step: "AIによる案件マッチング",
    content: "プロフィールやスキル、希望条件に基づいて、最適な案件をAIが提案します",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "営業代行マッチング",
    content: "営業が得意なメンバーが、苦手なメンバーの営業活動を代行・支援します",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "AI営業アシスタント",
    content: "営業メールや提案書の作成、商談のサポートまでAIが支援します",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <FeatureSteps
        features={features}
        title="ファーストディールの3つの特徴"
        autoPlayInterval={4000}
        className="bg-gray-50"
      />
    </section>
  );
}