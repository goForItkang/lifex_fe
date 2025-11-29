import React from "react";

const WhyMentorX = () => {
    return (
        <div className="bg-white rounded-xl p-6 w-[80%] mt-5  mx-auto">
            <h3 className="text-lg font-bold pb-4">MentorX AI와 함께해야 하는 이유</h3>

            <div className="space-y-5">
                <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <div>
                        <p className="font-semibold">AI 기반 분석</p>
                        <p className="text-sm text-gray-600 text-left">AI가 당신의 강점과 약점을 정밀하게 분석합니다.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <span className="material-symbols-outlined">rate_review</span>
                    </div>
                    <div>
                        <p className="font-semibold">맞춤형 피드백</p>
                        <p className="text-sm text-gray-600 text-left">개선이 필요한 부분에 대한 구체적인 피드백을 제공합니다.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <div>
                        <p className="font-semibold">효율적인 역량 개발</p>
                        <p className="text-sm text-gray-600 text-left">최적의 학습 경로를 통해 시간을 절약하고 실력을 키웁니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMentorX;
