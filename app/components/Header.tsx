"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RocketIcon, FileText } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Header() {
  return (
    <AuroraBackground className="pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-blue-900 dark:text-white">
          副業初心者の
          <span className="text-red-500">{"案件獲得"}</span>
          を
          <br />
          AIと仲間の力で
          <span className="text-red-500">サポート</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300">
          営業が苦手でも大丈夫｜3ヶ月以内の案件獲得率80%以上｜月額980円から
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
          >
            <RocketIcon className="mr-2" />
            7日間無料で試す
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/80 backdrop-blur-sm border-2 border-blue-900 text-blue-900 hover:bg-blue-900/10 px-8 py-6 text-lg dark:border-white dark:text-white"
          >
            <FileText className="mr-2" />
            資料をダウンロード
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}