"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RocketIcon, FileText, Star } from "lucide-react";
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
          営業が苦手な
          <span className="text-red-500">{"フリーランス"}</span>
          の
          <br />
          案件獲得を
          <span className="text-red-500">{"AI×仲間"}</span>
          の力で
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          営業代行とAIアシスタントで、あなたの副業を成功に導きます
        </p>

        <p className="text-lg mb-12 text-blue-600 font-medium">
          月額980円から始められる｜7日間の無料トライアル付き
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform transition-transform duration-300 group-hover:scale-110" />
            <span className="relative flex items-center">
              <RocketIcon className="mr-2" />
              7日間無料で試す
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/80 backdrop-blur-sm border-2 border-blue-900 text-blue-900 hover:bg-blue-900/10 px-8 py-6 text-lg dark:border-white dark:text-white group"
          >
            <FileText className="mr-2 group-hover:animate-bounce" />
            資料をダウンロード
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-gray-600">案件獲得率85%以上</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-gray-600">平均獲得単価8万円</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-gray-600">利用者満足度95%</span>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}