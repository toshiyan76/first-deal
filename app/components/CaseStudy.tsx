"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, Building2, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    industry: "Webデザイナー",
    company: "Aさん（34歳）",
    size: "副業歴1ヶ月",
    before: {
      metrics: [
        { icon: <Clock className="w-5 h-5 text-red-600" />, text: "営業方法が分からない" },
        { icon: <Users className="w-5 h-5 text-red-600" />, text: "実績・ポートフォリオなし" },
        { icon: <TrendingUp className="w-5 h-5 text-red-600" />, text: "営業に苦手意識" },
      ]
    },
    after: {
      metrics: [
        { icon: <CheckCircle className="w-5 h-5 text-green-600" />, text: "月5万円の案件獲得" },
        { icon: <CheckCircle className="w-5 h-5 text-green-600" />, text: "営業代行で時間節約" },
        { icon: <CheckCircle className="w-5 h-5 text-green-600" />, text: "営業の不安解消" },
      ]
    },
    roi: "利用開始2週間で案件獲得",
    testimonial: "営業代行のおかげで、営業活動をせずに最初の案件を獲得できました。",
    image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop"
  },
  {
    industry: "プログラマー",
    company: "Bさん（28歳）",
    size: "副業歴2ヶ月",
    before: {
      metrics: [
        { icon: <Clock className="w-5 h-5 text-red-600" />, text: "営業に時間が取れない" },
        { icon: <Users className="w-5 h-5 text-red-600" />, text: "人脈がない" },
        { icon: <TrendingUp className="w-5 h-5 text-red-600" />, text: "提案書作成に不安" },
      ]
    },
    after: {
      metrics: [
        { icon: <CheckCircle className="w-5 h-5 text-green-600" />, text: "月10万円の案件獲得" },
        { icon: <CheckCircle className="w-5 h-5 text-green-600" />, text: "AIで効率的に営業" },
        { icon: <CheckCircle className="w-5 h-5 text-green-600" />, text: "複数の案件を獲得" },
      ]
    },
    roi: "月の副業収入10万円達成",
    testimonial: "AI営業アシスタントのおかげで、効率的に案件を獲得できるようになりました。",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">利用者の声</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ファーストディールを利用して、副業での案件獲得に成功した方々の事例をご紹介します。
            営業が苦手な方でも、AIと仲間の力で成果を上げています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <div className="absolute inset-0">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>
                  </div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <p className="text-blue-100">{study.size}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-red-600 flex items-center gap-2">
                        <Clock className="w-5 h-5" /> Before
                      </h4>
                      <ul className="space-y-3">
                        {study.before.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            {metric.icon}
                            <span className="text-gray-600">{metric.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> After
                      </h4>
                      <ul className="space-y-3">
                        {study.after.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            {metric.icon}
                            <span className="text-gray-600">{metric.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-600">{study.roi}</span>
                    </div>
                    <p className="text-gray-600 italic">{study.testimonial}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
          >
            <span>詳細な事例資料をダウンロード</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}