"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ClipboardList, Clock, Users, Ban, Brain, Target } from "lucide-react";

const painPoints = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: "営業方法がわからない",
    description: "どこで、どのように営業すれば良いのか分からず、時間と労力を無駄にしてしまう"
  },
  {
    icon: <Ban className="w-12 h-12 text-blue-600" />,
    title: "営業が苦手で不安",
    description: "営業への苦手意識が強く、商談や提案に自信が持てない"
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "本業があり時間が取れない",
    description: "本業があるため、営業活動に多くの時間を割くことができない"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "実績・人脈が不足",
    description: "営業時に提示できる実績がなく、案件を紹介してくれる人脈もない"
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: "提案資料作成に悩む",
    description: "効果的な提案資料の作り方が分からず、成約率が上がらない"
  },
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: "案件のミスマッチ",
    description: "自分のスキルや経験に合わない案件に時間を費やしてしまう"
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">こんな悩みありませんか？</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            副業を始めたばかりの方が直面する、よくある課題です。
            ファーストディールは、これらの悩みを解決します。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow bg-white border-none group">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}