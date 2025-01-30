"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, LineChart, Play, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-blue-600" />,
    title: "無料会員登録",
    period: "Day 1",
    description: "プロフィール入力とスキル診断を実施"
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-600" />,
    title: "案件マッチング",
    period: "Week 1",
    description: "AIが最適な案件を提案、営業方法をアドバイス"
  },
  {
    icon: <Play className="w-8 h-8 text-blue-600" />,
    title: "営業活動開始",
    period: "Week 2",
    description: "AI営業アシスタントや営業代行で効率的に進める"
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "案件獲得",
    period: "Month 1-3",
    description: "80%以上が3ヶ月以内に案件獲得に成功"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          利用の流れ
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 text-center h-full relative bg-gray-50 border-none hover:shadow-lg transition-all">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-600"></div>
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{step.period}</p>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">主な機能</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-gray-50 text-blue-800 rounded-full font-medium hover:shadow-md transition-shadow">AI案件マッチング</span>
            <span className="px-6 py-3 bg-gray-50 text-blue-800 rounded-full font-medium hover:shadow-md transition-shadow">営業代行</span>
            <span className="px-6 py-3 bg-gray-50 text-blue-800 rounded-full font-medium hover:shadow-md transition-shadow">AI営業アシスタント</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}