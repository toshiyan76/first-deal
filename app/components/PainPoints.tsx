"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ClipboardList, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: "営業方法がわからない",
    description: "どこで、どのように営業すれば良いのか分からず、時間と労力を無駄にしてしまう"
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "本業があり時間が取れない",
    description: "本業があるため、営業活動に多くの時間を割くことができない"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "実績・人脈が不足している",
    description: "営業時に提示できる実績がなく、案件を紹介してくれる人脈もない"
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          こんなお悩みありませんか？
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow bg-white border-none">
                <div className="flex justify-center mb-4">
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